(function (){
    const VERSION = "1.1.0915";
    const SAVE_DIR = "/save";
    const STORY_DIR = "/story";
    var floorsLine = [];

    var GameStatus = {
        RUN: 0, STOP: 1, BREAK: 2, CONTINUE: 3, GOTO: 4
    }
    var gameStatus = GameStatus.RUN;

    var IfStatus = {
        CONDITION_NOT_MET: 0, CONDITION_MET: 1
    }

    var enterDown = false;
    var SC = null;

    var vApp = new Vue({
        el: '#app',
        data: {
            screenTextLineMax: 150,
            screenTexts: [],
            input: '',
            buttons: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                0,
                '\u232B',
                '\u23CE'
            ]
        },
        // computed: {
        //     inputText:{
        //         get(){
        //             var text = this.input;
        //             this.input = '';
        //             console.log(text, '????')
        //             this.appebdTextToScreen(text);
        //             return text;
        //         }
        //     }
        // },
        methods: {
            buttonClick({target: {innerText: text}}){
                if(text == '\u232B'){
                    if(text.length > 0){
                        this.input = this.input.substr(0, this.input.length - 1);
                    }
                }else if(text == '\u23CE'){
                    enterDown = true;
                }else{
                    this.input += text;
                }
            },
            appebdTextToScreen(text){
                this.screenTexts.push(...text.split(/\n/g));
                if(this.screenTexts.length > this.screenTextLineMax){
                    this.screenTexts.splice(0, this.screenTexts.length - this.screenTextLineMax);
                }
            },
            appebdTextToScreenlastLine(text){
                var lines = text.split(/\n/g)
                this.screenTexts[this.screenTexts.length - 1] += lines[0];
                this.screenTexts.push(...lines.slice(1));
                if(this.screenTexts.length > this.screenTextLineMax){
                    this.screenTexts.splice(0, this.screenTexts.length - this.screenTextLineMax);
                }
            },
            inputText(){
                var text = this.input;
                this.input = '';
                this.appebdTextToScreen(text);
                return text;
            }
        },
        updated(){
            consoleScreen.scrollTop = consoleScreen.scrollHeight;
        }
    });


    async function main(){
        var storyTitle = {name: '   test title   '};//JsonConvert.DeserializeObject<Story>(File.ReadAllText(Directory.GetCurrentDirectory() + STORY_DIR + @"\story.json"));
        var option = [
            {text: "開始遊戲"},
            {text: "繼續遊戲"},
            {text: "人物介紹"},
            {text: "關於"},
            {text: "結束"},
        ];
        exit:while (true)
        {
            switch (await select("     " + storyTitle.name + "               ", option))
            {
                case 1:
                    let globalVariable = testglobalVariable;//JsonConvert.DeserializeObject<Variable[]>(File.ReadAllText(Directory.GetCurrentDirectory() + STORY_DIR + @"\globalVariable.json"));
                    await load(storyTitle.startFrom, globalVariable);
                    break;
                case 2:
                    // var saveFile = LoadSave();
                    // if (saveFile != null)
                    // {
                    //     floorsLine.AddRange(saveFile.floorsLine);
                    //     Load(saveFile.stoeyName, saveFile.globalVariable);
                    // }
                    break;
                case 3:
                    // Character();
                    break;
                case 4:
                    // About();
                    break;
                default:
                    break exit;
            }
        }
		vApp.appebdTextToScreen('已經停止運行，請重新整理或關閉網頁');
    }

    function load(nextStoryName, globalVariable){
        SC = globalVariable;

        gameStatus = GameStatus.RUN;
        let f = async function(resolve, reject){
            if(gameStatus != GameStatus.STOP){
                let commands = testStory;
                nextStoryName = await runStory(commands, nextStoryName, 0);

                if (!nextStoryName)
                {
                    gameStatus = GameStatus.STOP;
                }
                else if(gameStatus == GameStatus.GOTO)
                {
                    gameStatus = GameStatus.RUN;
                }
                setTimeout(() => f(resolve, reject));
            }else resolve();
        }
        return new Promise(f);
    }

    async function runStory(commands, storyName, floor){
        var ifStatus = IfStatus.CONDITION_NOT_MET;

        try
        {
            if(floor >= floorsLine.length) floorsLine.push({ line: 0 });
            for (; floorsLine[floor].line < commands.length; floorsLine[floor].line++)
            {
                var command = commands[floorsLine[floor].line];
                if (command.show != undefined)
                {
                    await show(command.show, storyName);
                    if (gameStatus == GameStatus.STOP) return "";
                }
                else if (command.sleep != undefined)
                {
                    await wait(parseInt(command.sleep) * 1000);
                }
                else if (command.select != undefined)
                {
                    if(floor == floorsLine.length - 1)
                        floorsLine[floor].selecteOptionItem = await select(command.select.title, command.select.option, true) - 1;
                    let result = await runStory(
                        command.select.option[floorsLine[floor].selecteOptionItem].then, 
                        storyName, 
                        floor + 1
                    );
                    floorsLine[floor].selecteOptionItem = null;
                    if (
                        gameStatus == GameStatus.STOP ||
                        gameStatus == GameStatus.BREAK ||
                        gameStatus == GameStatus.CONTINUE ||
                        gameStatus == GameStatus.GOTO
                    )
                    {
                        return result;
                    }
                }
                else if (command.exec != undefined)
                {
                    eval(command.exec);
                }
                else if (command.goto != undefined)
                {
                    gameStatus = GameStatus.GOTO;
                    return command.goto;
                }
                else if (command.continue != undefined)
                {
                    gameStatus = GameStatus.CONTINUE;
                    return null;
                }
                else if (command.break != undefined)
                {
                    gameStatus = GameStatus.BREAK;
                    return null;
                }
                else if (command.if != undefined)
                {
                    if (floor < floorsLine.length - 1 || eval(command.if))
                    {
                        ifStatus = IfStatus.CONDITION_MET;
                        let result = await runStory(command.then, storyName, floor + 1);
                        if (
                            gameStatus == GameStatus.STOP ||
                            gameStatus == GameStatus.BREAK ||
                            gameStatus == GameStatus.CONTINUE ||
                            gameStatus == GameStatus.GOTO
                        )
                        {
                            return result;
                        }
                    }
                    else
                    {
                        ifStatus = IfStatus.CONDITION_NOT_MET;
                    }
                }
                else if (command.elseif != undefined)
                {
                    if (floor < floorsLine.length - 1 || ifStatus == IfStatus.CONDITION_NOT_MET && eval(command.elseif))
                    {
                        ifStatus = IfStatus.CONDITION_MET;
                        var result = await runStory(command.then, storyName, floor + 1);
                        if (
                            gameStatus == GameStatus.STOP ||
                            gameStatus == GameStatus.BREAK ||
                            gameStatus == GameStatus.CONTINUE ||
                            gameStatus == GameStatus.GOTO
                        )
                        {
                            return result;
                        }
                    }
                }
                else if (command.else != undefined)
                {
                    if (ifStatus == IfStatus.CONDITION_NOT_MET)
                    {
                        var result = await runStory(command.else, storyName, floor + 1);
                        if (
                            gameStatus == GameStatus.STOP || 
                            gameStatus == GameStatus.BREAK || 
                            gameStatus == GameStatus.CONTINUE || 
                            gameStatus == GameStatus.GOTO
                        )
                        {
                            return result;
                        }
                    }
                }
                else if (command.while != undefined)
                {
                    let f = async function(resolve, reject) {
                        if (floor < floorsLine.length - 1 || eval(command.while))
                        {
                            var result = await runStory(command.then, storyName, floor + 1);
                            if (gameStatus == GameStatus.BREAK)
                            {
                                gameStatus = GameStatus.RUN;
                                resolve();
                            }
                            else if (gameStatus == GameStatus.STOP || gameStatus == GameStatus.GOTO)
                            {
                                resolve(result);
                            }
                            else if (gameStatus == GameStatus.CONTINUE)
                            {
                                gameStatus = GameStatus.RUN;
                            }else setTimeout(() => f(resolve, reject));
                        }
                        else
                        {
                            resolve();
                        }
                    }
                    let result = await new Promise(f);
                    if (gameStatus == GameStatus.STOP || gameStatus == GameStatus.GOTO)
                        return result;
                }
            }
            return null;
        }
        finally
        {
            floorsLine.splice(floor, 1);
        }
    }

    async function show(text, storyName)
    {
        var f = async function(){
            var f2 = async (resolve, reject) => {
                let selected = -2
                if (enterDown){
                    enterDown = false;
                    let text = vApp.inputText();
                    selected = isNaN(text) || text == '' ? -1 : parseInt(text);
                }
                if (selected == 0)
                {
                    let option = [
                        {text: "返回"},
                        {text: "存檔"},
                        {text: "回主選單"},
                    ];
                    while (true)
                    {
                        selected = await select("    選項      ", option);
                        if(selected == 1){
                            resolve();
                            break;
                        }else if (selected == 2){ 
                            // Save(storyName);
                            resolve();
                            break;
                        }else if (selected == 3){
                            gameStatus = GameStatus.STOP;
                            resolve();
                            break;
                        }
                    }
                }else if(selected == -1) resolve(true);
                else setTimeout(()=>f2(resolve, reject));
            }
            return new Promise(f2);
        }
        while(gameStatus == GameStatus.RUN){
            vApp.appebdTextToScreen(eval(text));
            vApp.appebdTextToScreen("                         按0選項:");
            if(await f()) break;
        }
    }

    async function wait(time)
    {   
        vApp.appebdTextToScreen('');
        var f = function(resolve, reject){
            if(time > 0){
                setTimeout(() => f(resolve, reject), 1000);
                time -= 1000;
                vApp.appebdTextToScreenlastLine('.');
            }else{
                vApp.appebdTextToScreen('');
                resolve();
            }
        }
        return new Promise(f);
    }

    async function select(title, option, useJsOption = false){
        vApp.appebdTextToScreen(useJsOption ? eval(title) : title);
        vApp.appebdTextToScreen('-'.repeat(title.length));
        for (let i = 0 ; i < option.length ; i++){
            vApp.appebdTextToScreen(`${i + 1}. ${useJsOption ? eval(option[i].text) : option[i].text}`);
        }
        vApp.appebdTextToScreen('-'.repeat(title.length));

        var f = function(resolve, reject){
            selection  = -1;

            // Console.Write(">");
            if(enterDown){
                enterDown = false;
                let text = vApp.inputText();
                selection = isNaN(text) || text == '' ? -1 : parseInt(text);
            }
            if(selection < 1 || selection > option.length)
                setTimeout(()=>f(resolve, reject));
            else resolve(selection);
        }
        return new Promise(f);
    }

    setTimeout(main);
})()

var testglobalVariable = {
    momey: 5,
    肥宅重: 106
}
var testStory = [
	{
		"show": "'有一天，主角在放學回家的路上'"
	},
	{
		"show": "'主角：「這是什麼？」'"
	},
	{
		"show": "'主角在地上發現了十元'"
	},
	{
		"show": "'主角：「哦！哦！哦！是十塊錢！」'"
	},
	{
		"select": {
			"title": "'     該怎麼做？        '",
			"option": [
				{
					"text": "'撿起來！'",
					"then": [
						{
							"exec": "SC.momey += 10"
						},
						{
							"show": "'主角：「朝爽Der～撿到十塊錢哩～....雷！」'"
						}
					]
				},
				{
					"text": "'還要彎下去，好累ㄛ'",
					"then": [
						{
							"show": "'主角：「這點小錢本大爺才不削拿」'"
						},
						{
							"show": "'其實是太胖了，灣不太下去'"
						},
						{
							"sleep": 3
						},
						{
							"show": "'主角：「啊！被撿走了」'"
						},
						{
							"show": "'主角：「可惡！還是想撿...」'"
						}
					]
				},
			]
		}
	},
	{
		"show": "'主角現在身上還有' + SC.momey + '元'"
	},
	{
		"show": "'接著，肥宅...痾不對！是主角，繼續往家的方向走'"
	},
	{
		"show": "'...'"
	},
	{
		"show": "'..'"
	},
	{
		"show": "'.'"
	},
	{
		"show": "'主角：「走了這麼遠了，口好渴喔」'"
	},
	{
		"show": "'...其實只走了一百多公尺'"
	},
	{
		"show": "'主角：「嘿！嘿！嘿！有台販賣機ㄟ」'"
	},
	{
		"exec": "SC.沒買 = true"
	},
	{
		"while": "SC.沒買",
		"then":[
			{
				"select": {
					"title": "'              該怎麼做？              '",
					"option": [
						{
							"text": "'買！買！買！我想喝快樂水！'",
							"then": [
								{
									"exec": "SC.沒買 = false"
								},
								{
									"show": "'主角：「太棒了！快給我快樂水！」'"
								},
								{
									"if": "SC.momey >= 29",
									"then": [
										{
											"show": "'主角：「寶特瓶裝的要29元」'"
										},
										{
											"show": "'主角：「身上有'+ SC.momey +'元，夠！買！」'"
										},
										{
											"show": "'-投幣-'"
										},
										{
											"show": "'-快樂水掉下來-'"
										},
										{
											"show": "'-拿起-'"
										},
										{
											"show": "'-大喝一口-'"
										},
										{
											"show": "'主角：「哈～努力過後就是應該要喝快樂水啦！」'"
										},
										{
											"show": "'主角：「爽！！！」'"
										},
										{
											"exec": "SC.momey -= 29"
										},
									]
								},
								{
									"elseif": "SC.momey >= 15",
									"then": [
										{
											"show": "'主角：「寶特瓶裝的要29元」'"
										},
										{
											"show": "'主角：「身上有'+ SC.momey +'元...」'"
										},
										{
											"show": "'主角：「ㄇㄉ！只夠買鋁罐裝的...」'"
										},
										{
											"show": "'主角：「快樂水就是應該要喝瓶裝的才過癮啊！！！」'"
										},
										{
											"show": "'主角：「...」'"
										},
										{
											"show": "'主角：「...叫太大聲了，旁邊的人都在看了」'"
										},
										{
											"show": "'-投幣-'"
										},
										{
											"show": "'-快樂水掉下來-'"
										},
										{
											"show": "'-拿起-'"
										},
										{
											"show": "'-大喝一口-'"
										},
										{
											"show": "'主角：「哈～努力過後就是應該要喝快樂水啦！」'"
										},
										{
											"show": "'主角：「爽！」'"
										},
										{
											"exec": "SC.momey -= 15"
										},
									]
								},
								{
									"else": [
										{
											"show": "'主角：「身上只有'+ SC.momey +'元...」'"
										},
										{
											"show": "'主角：「尬拎良啦！這樣是要怎麼買快樂水啦！」'"
										},
										{
											"show": "'主角：「這樣豈不是要去喝尿了嗎？！！！」'"
										},
										{
											"show": "'主角：「吼！氣！氣！氣！氣！氣！」'"
										},
										{
											"show": "'主角：「...」'"
										},
										{
											"show": "'主角：「算了！狗才喝快樂水，喝尿去吧！」'"
										},
										{
											"show": "'主角：「...」'"
										},
										{
											"show": "'主角：「不對！！狗才喝尿啦！」'"
										},
										{
											"show": "'主角：「淦！」'"
										},
										{
											"show": "'主角：「...」'"
										},
									]
								}
							]
						},
						{
							"text": "'...離販賣機還有點距離，懶得走過去'",
							"then": [
								{
									"show": "'主角：「走得越久，快樂水就會越好喝」'"
								},
								{
									"show": "'主角：「現在的快樂水一定還不夠讓我快樂！」'"
								},
								{
									"show": "'...'"
								},
								{
									"show": "'..'"
								},
								{
									"show": "'.'"
								},
								{
									"show": "'主角：「可是我還是想喝快樂水...」'"
								}
							]
						},
					]
				}
			}
		]
	},
	{
		"show": "'主角現在身上還有' + SC.momey + '元'"
	},
	{
		"show": "'主角繼續往家的方向前進'"
	},
	{
		"show": "'主角走了一段距離後經過了商店街'"
	},
	{
		"show": "'這時，主角發現自己喜歡的班花 小美'"
	},
	{
		"show": "'主角：「哇～是小美ㄟ，什麼時候看到，都一樣是那麼的好看，那麼的正！」'"
	},
	{
		"show": "'主角：「嘿！嘿！嘿！嘿！嘿！嘿！」'"
	},
	{
		"show": "'主角一副噁宅樣子，滴著口水，望著小美的方向看去'"
	},
	{
		"show": "'主角：「嗯？」'"
	},
	{
		"show": "'...'"
	},
	{
		"show": "'這時，主角發現自己喜歡的小美正在被一位男子搭話'"
	},
	{
		"show": "'男子：「美女～我看妳好像很有空，要不要一起去個好玩的地方啊？」'"
	},
	{
		"show": "'小美一臉很困擾的表情'"
	},
	{
		"show": "'小美：「...謝謝，不用，我並不有空，我在等人」'"
	},
	{
		"show": "'男子：「別這麼說嘛～一起去啦～」'"
	},
	{
		"show": "'小美：「...」'"
	},
	{
		"show": "'主角：「那個男人是誰？在幹嘛？跟小美是什麼關西？」'"
	},
	{
		"show": "'主角：「那男的一頭像刺蝟的金髮，穿著吊嘎，手上還有刺青」'"
	},
	{
		"show": "'主角：「難道說.....」'"
	},
	{
		"show": "'主角：「小美正在被騷擾！」'"
	},
	{
		"show": "'是的，她正在被騷擾'"
	},
	{
		"show": "'主角：「...可是看小美的表情，跟平常跟我講話時是同一個表情啊」'"
	},
	{
		"show": "'主角：「真的是在被騷擾嗎？」'"
	},
	{
		"show": "'主角：「...」'"
	},
	{
		"show": "'主角：「算了！那男的一看就不是什麼好東西！」'"
	},
	{
		"show": "'主角：「趕快想點辦法幫助小美吧！」'"
	},
	{
		"while": "true",
		"then": [
			{
				"select": {
					"title": "'       該怎麼做？       '",
					"option": [
						{
							"text": "'衝上前，胖揍他一頓'",
							"then": [
								{
									"show": "'主角：「好！揍他！給他一頓粗飽！」'"
								},
								{
									"show": "'主角：「...」'"
								},
								{
									"show": "'主角：「不對，他看起來好像很屌」'"
								},
								{
									"show": "'主角：「搞不好吃粗飽的就會是我」'"
								},
								{
									"show": "'主角：「...」'"
								},
							]
						},
						{
							"text": "'拿東西丟砸他，把他砸跑'",
							"then": [
								{
									"show": "'主角：「比起近戰，我還是比較適合遠攻」'"
								},
								{
									"goto": ""
								}
							]
						}
					]
				}
			}
		]
	}
]