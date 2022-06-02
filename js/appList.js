const LINK_TYPE = {
    WEB: '網頁連結',
    GOOGLE_PLAY: 'Google Play',
    APP_STORE: 'App Store',
}
const appList = [
    {
        name: 'FloatWindow 浮動視窗',
        subStr: 'Android上的浮動小工具',
        icon: './floatwindow/icon.png',
        introduce: `不管正在使用任何APP，都可以使用"浮動視窗"查看網頁、便條紙等其他小工具。

你可以
- 玩遊戲時查看攻略
- 看影片或直播時將螢幕關閉也可以繼續撥放`,
        images: [
            'https://play-lh.googleusercontent.com/9-cHTvVYNvDrNXP6XqViAvoLDdMXmsU3G_tJojn_uYthHGmaC8FjdejtQyD-VloWcPE=w526-h296-rw',
            'https://play-lh.googleusercontent.com/PfBLA0uQuw1WH0bgXQNdQF3HamaRzHzn8TZ70Tgo5P2vBdIOZMUfwkL0-bxHZIzbxqw=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/domDJtJuPX-zrd1vs6ZAYNeqTZ9Wzxe8YLLYNyjWXfIvxx2oXGy6zWaaVXSa1kEiP-g=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/kuGo8FVZvdrcOR8n_HvOlatWXvLCYFRCH-K3bU0JZ8ASfFOugGMKPd4evnz67ObnlUE=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/LsfCxd3vUyzgrXj9W4AhzpGwsBesAQGTjnGGVTDGRlumyK3av3wiIGN0t9PA9oSTXRY=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/O9DWDQt0AWJ4wonWad8_-kzjeZ1FfKmQr9wyvqFCSaSy5q-91QnUBDgcRyRWZNSOTsU=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/NDnsVWiPoY_dWRjQssVwK3lXmm2Eb2zt_W5rudWEkza1HDYwQn4udn8A59dFx3JW2A=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/EAzEHsrGp3GAsTwAPcZKutGW2MBY9Lge34kDeV6NK0iRQmNkjuUIn2SPcKdzVIbJgWuA=w2560-h1440-rw'
        ],
        links: [
            {
                type: LINK_TYPE.WEB,
                link: 'https://fwi.jack.origthatone.com/',
            },
            {
                type: LINK_TYPE.GOOGLE_PLAY,
                link: 'https://play.google.com/store/apps/details?id=com.jack850628.floatwindow',
            },
            {
                type: LINK_TYPE.WEB,
                name: 'Github',
                link: 'https://github.com/jack850628/FloatWindow',
            }
        ]
    },
    {
        name: '拉近來打出去',
        subStr: '體驗韓總驚險刺激的辛酸奮鬥過程！',
        icon: './拉進來打出去/icon.jpg',
        introduce: `拉進來打出去，體驗韓總驚險刺激的辛酸奮鬥過程！

非常抱歉沒有在遊戲裡加入說明道具影響到各位發大財ㄑ(_ _)ゝ，因此在下次更新之前就先把道具說明放在這裡
正面道具:
中天新聞:
第一關:+1000粉絲
第二關:+1000粉絲
第三關:+1000或20萬粉絲
第四關:+20萬粉絲
又老又窮:+1000粉絲
塞子:+100粉絲與+1命

負面道具:
為什麼愛說謊:
第二關:-1000粉絲
第三關:-20萬粉絲
不懂自經區:-1000粉絲
陳其邁委員:-1000粉絲
護唇膏:-1000粉絲
蚊子:-100粉絲與-1命
一位韓粉:+100與一擊必殺`,
        images: [
            'https://play-lh.googleusercontent.com/RX3QySgNHaO2kGeSX73UEj_2cnWTiVnJjirxkfF-aiSxbZuo97s6OjIltIf5D_mX3g=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/fLUqtAk4wp-l6LPJiHm0Fuqybbb6hv6M8vcpPsVdrjnEjQlZcB_DSNGBK1Zqg0itP3k=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/MB9TZaeSdPETntLMT-iFDZtwiay-k28dfbAiw2-fLqif26aYqqOB80-xkLstXBY-VA=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/WITzaaxkJcOdu6ElUhDP_aUL03sQOb12Y5I3eM-MhpVGZCJolsdrGfNI0GSC4xMYrbFG=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/65wFL40lewWJOkI9iLtWkFmpasDyVCiq0tcQBvLe-6PB51PL35Tc9HGfNDcTJ51k0Q=w2560-h1440-rw'
        ],
        links: [
            {
                type: LINK_TYPE.GOOGLE_PLAY,
                link: 'https://play.google.com/store/apps/details?id=com.jack850628.LaJinLaiDaChuQu',
            },
            {
                type: LINK_TYPE.APP_STORE,
                link: 'https://apps.apple.com/us/app/%E6%8B%89%E9%80%B2%E4%BE%86%E6%89%93%E5%87%BA%E5%8E%BB%E4%B9%8B%E7%99%BC%E5%A4%A7%E8%B2%A1/id1473152716',
            }
        ]
    },
    {
        name: '拉近來打出去2',
        subStr: '這是一款非常發財的遊戲,快來體驗發大財的感覺吧',
        icon: './拉進來打出去/icon2.jpg',
        introduce: `這是一款非常發財的遊戲,快來體驗發大財的感覺吧
故事前言:
(墅)樹民發財俠為了成為發財國總統征服宇宙努力打拼打敗一切困難
遊戲充滿了冒險刺激的發財感,有時會遇到一些神祕魔王阻礙發財之路...`,
        images: [
            'https://play-lh.googleusercontent.com/RSscls9kIJDyIOEfwnUbz8Dza6aYU-L0hv7ReNlSgftuoGTIcPb4eAm9PCEpLrwvbWk=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/JEDILE-Z8L4_yaW68B-IjJqckVuj9tJm58oF_vcbOEoESEuHOtUaw0Qol2joNHYsXHA=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/fLDK0PXUTW9hpTkp7GQIEZslHnMWBtgCkOY_rCQwmDKV3URjbfQlFcNSap_x5tskLQs=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/Igl8OcsYrdpQ6HgO9o91ZE0udmeNlcIm3TS-PnBm6X8FEmYMgZl0LGzLnFF7HO8EyA=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/tfNpmEXRz0r5y6fLvIrl-VyJ5pZh2sSb8bO6X58veahb9gVo38fdlAeZNbE2OH-FKEs=w2560-h1440-rw'
        ],
        links: [
            {
                type: LINK_TYPE.GOOGLE_PLAY,
                link: 'https://play.google.com/store/apps/details?id=com.jack850628.LaJinLaiDaChuQu2',
            },
            {
                type: LINK_TYPE.APP_STORE,
                link: 'https://apps.apple.com/us/app/%E6%8B%89%E9%80%B2%E4%BE%86%E6%89%93%E5%87%BA%E5%8E%BB2/id1486549749',
            }
        ]
    },
    {
        name: '你484想發大財',
        subStr: '跟著市長的腳步，體驗發大財的感覺',
        icon: './你484想發大財/icon.jpg',
        introduce: `你想體驗發大財的感覺嗎?那就下載來玩玩吧！
點擊市長的施政，你就可以發大財，$$爽爽賺！！`,
        images: [
            'https://play-lh.googleusercontent.com/UU62VzYbS3OnwN8cQwEr2tHZsKlXEfHtfYW0rnLMjTQNUwrZIhBNIyM5-15m_Wfjqw=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/zi3uO2UC2Wee45mW4BJ_PV9rO9Elwssi34SYoLavvgG6lIAX5yfgdf7NqPP2cr9Nk1A=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/WsKvVI8fWuVSM6hBIzMh_EGLZLIbz8E4QxekjoE4rUGvp-W8jeMiaWcC9wOiN2BfcBIc=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/tCz9mDLLJ5tR0hka03abAkkGqJySyMHuFvkafKo170i6G0K_eu_ErqfOsmjZwQWajNU=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/8v7y8o6rIQMbUQdA_uuWHVfnQcV5TTQn1pgu2Nr-TgYwoj5nIHn6OVCnCRttvhO_EA=w2560-h1440-rw'
        ],
        links: [
            {
                type: LINK_TYPE.GOOGLE_PLAY,
                link: 'https://play.google.com/store/apps/details?id=com.Company.jack8',
            }
        ]
    },
    {
        name: '透視箱 Perspective Box',
        subStr: '幫助您快速找到收納在家中的物品',
        icon: './PerspectiveBox/icon.png',
        introduce: `可以將箱子裡的物品拍照上傳至APP

接著為箱子生成QRcode然後貼在箱子外側

這樣子以後想知道箱子裡面有什麼，只需要掃描箱子上的QRcode就可以知道了

想找東西時，可以透過APP裡的搜尋功能，找到東西是放在哪個箱子裡`,
        images: [
            'https://play-lh.googleusercontent.com/pBqoAHrONL7rFQCdlDp-RMsSeQA4ILlzTOuIwoO3DnMVkopLhmRwZLKQaS-gH8cTj5Y=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/uOWL7x1dRT3wRJj-AIRY4Y5egBifIWil08llLPDT-cj_0Oh18OV3Dw78WX3PBxCKBhQ=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/HO985-vjmYC4_g_24PUoh7wf9Fj8k3oUDOtDlGH_rkS0dfYzuyxw7vJpj-JybaSZRMI=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/dVfrkpEwQk7tZ-aQrlDQa_8N89WAVk6n7alk03spqmwBonCNoJU4bEBX0ykAocLuCzk=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/N-yH6XfbVGPgGR07pNNYqcxK5II3m1eInzn6Mo53N-k13--AQP0nSrZ04x8gWfxJY60=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/7tUo52yv3Qu8pK1ZK6Z-8S7RohiMq3T_PnTadq_cLth0ry7RfP2SWwXVJFJ539gTBw=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/6syjneG0JU-js_kKqxyu6VZx_bjG5fn5dsBlN5iwo8s3Huvs8FTks9WaPlnDjwMQ_qY=w2560-h1440-rw'
        ],
        links: [
            {
                type: LINK_TYPE.GOOGLE_PLAY,
                link: 'https://play.google.com/store/apps/details?id=com.jack850628.perspective_box',
            },
            {
                type: LINK_TYPE.APP_STORE,
                link: 'https://apps.apple.com/us/app/perspective-box/id1528307727',
            }
        ]
    },
    {
        name: '敲眼球 Whack a Eyeball',
        subStr: '敲一敲眼球，紓解一下壓力',
        icon: './Whack_a_Eyeball/icon.png',
        introduce: `敲一敲眼球，紓解一下壓力。`,
        images: [
            'https://play-lh.googleusercontent.com/WlZnr2LDQdsCboXiYdfjYyZNSHo_1X4M8ZCf6vVo9r_XAQrN4mjvkE5C1yQch8DQfg=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/IKVSy3fKAO1a28sKxICrJJ5T2Z1bQYE7fYbHjwvXwfMiWPym8PJEMZBRNJZwvFr3YKg=w2560-h1440-rw',
            'https://play-lh.googleusercontent.com/wTFk_rtyxLa3OQnCyFa4PP2rpHbdchKdNTbvB0V0J75f7gpQxCn-q6vmmVfrPoaqbA8b=w2560-h1440-rw'
        ],
        links: [
            {
                type: LINK_TYPE.GOOGLE_PLAY,
                link: 'https://play.google.com/store/apps/details?id=com.jack850628.WhackAEye',
            },
            {
                type: LINK_TYPE.APP_STORE,
                link: 'https://apps.apple.com/us/app/whack-a-eyeball/id1489678996',
            }
        ]
    },
    {
        name: 'Story Console 故事編輯器',
        subStr: 'Console風格的文字冒險遊戲的編輯器',
        icon: '',
        introduce: `手上有故事腳本，但不會做遊戲嗎？可以來試試Story Console 故事編輯器！
可以讓您使滑鼠拖拉拼圖的形式，製作出簡單的文字冒險遊戲，並且分享給其他人遊玩。`,
        images: [
            'https://truth.bahamut.com.tw/s01/202012/8e6534d70f9d683179125ad4477383fb.PNG',
            'https://truth.bahamut.com.tw/s01/202012/d0d925e735df8bc69cb85b5188104526.PNG',
            'https://truth.bahamut.com.tw/s01/202012/739a82d8d7d430effe8f644d4eda547d.PNG'
        ],
        links: [
            {
                type: LINK_TYPE.WEB,
                link: 'https://jack850628.github.io/StoryConsoleEditor/',
            },
            {
                type: LINK_TYPE.WEB,
                name: '範例遊戲',
                link: 'https://jack850628.github.io/StoryConsoleEditor/StoryConsole/',
            },
            {
                type: LINK_TYPE.WEB,
                name: 'Github',
                link: 'https://github.com/jack850628/StoryConsoleEditor',
            }
        ]
    },
    {
        name: 'youtube繼續播放 youtube continue play',
        subStr: '當出現"影片已暫停，要繼續觀賞嗎？"時忽略它繼續播放',
        icon: '',
        introduce: `當出現"影片已暫停，要繼續觀賞嗎？"時忽略它繼續播放

注意！當Youtube頁面不可見時(視窗最小化又或是切去其他分頁了)瀏覽器的多媒體背景播放控制器將會不能暫停播放`,
        images: [],
        links: [
            {
                type: LINK_TYPE.WEB,
                name: '下載連結',
                link: 'https://greasyfork.org/zh-TW/scripts/398142-youtube-continue-play',
            },
            {
                type: LINK_TYPE.WEB,
                name: 'Github',
                link: 'https://github.com/jack850628/youtube-continue-play',
            }
        ]
    },
    {
        name: '大濕之音 wet elephant sound',
        subStr: '臭臭語音大集合',
        icon: 'https://raw.githubusercontent.com/jack850628/wet-elephant-sound/main/images/%E5%85%86%E5%85%83192.png',
        introduce: `當大濕在沉迷於L4D2、時數還沒告急、懶癌發作然後不開台，想念她那臭臭的聲音嗎？
來這邊就對了！

這裡有非常齊全的大濕語音以及組合，在沒有聽到大濕的聲音造成精神不濟時，點一下按鈕，保證你臭一臭神清氣爽！

另外還附有『嘎抓』『桑尤姆』『皮卡屁』語音ㄛ～`,
        images: [],
        links: [
            {
                type: LINK_TYPE.WEB,
                name: '',
                link: 'https://jack850628.github.io/wet-elephant-sound/',
            },
            {
                type: LINK_TYPE.WEB,
                name: 'Github',
                link: 'https://github.com/jack850628/wet-elephant-sound',
            }
        ]
    },
    {
        name: '跳躍吧！元元！ wet elephant jump',
        subStr: '按下空白鍵，讓元元越過野獸先輩們吧！',
        icon: 'https://raw.githubusercontent.com/jack850628/wet-elephant-sound/main/images/%E5%85%86%E5%85%83192.png',
        introduce: `不斷向前進的元元，遇上了擋在他前進道路上的野獸先輩，請您大力的按下您的空白鍵，幫助元元越過那些唐突惡臭的野獸先輩們吧！`,
        images: [],
        links: [
            {
                type: LINK_TYPE.WEB,
                link: 'https://jack850628.github.io/wet-elephant-jump/',
            },
            {
                type: LINK_TYPE.WEB,
                name: 'Github',
                link: 'https://github.com/jack850628/wet-elephant-jump',
            }
        ]
    },
    {
        name: '建元轉蛋機',
        subStr: '皮卡屁與仙界大濕轉蛋機',
        icon: 'https://raw.githubusercontent.com/jack850628/wet-elephant-sound/main/images/%E5%85%86%E5%85%83192.png',
        introduce: `具有線上自訂卡池服務，可以讓大家建立卡池，也可以共同編輯同一個卡池。`,
        images: [],
        links: [
            {
                type: LINK_TYPE.WEB,
                link: 'https://jack850628.github.io/pikapi-and-dasi-gashapon-machine/',
            },
            {
                type: LINK_TYPE.WEB,
                name: 'Github',
                link: 'https://github.com/jack850628/pikapi-and-dasi-gashapon-machine',
            },
            {
                type: LINK_TYPE.WEB,
                name: '伺服器端Github',
                link: 'https://github.com/jack850628/pikapi-and-dasi-gashapon-machine-server',
            }
        ]
    },
    {
        name: '習下元上',
        subStr: '在 https://popxi.click/ 中來個 習下元上',
        icon: 'https://raw.githubusercontent.com/jack850628/wet-elephant-sound/main/images/%E5%85%86%E5%85%83192.png',
        introduce: `在您的瀏覽器中安裝tampermonkey，然後再安裝此腳本，讓習近平下去，然後讓我們的兆元(仙界大濕)上來吧！`,
        images: [
            'https://greasyfork.s3.us-east-2.amazonaws.com/pzoethtnt067ecdkhxwv6nsxo0oh',
            'https://greasyfork.s3.us-east-2.amazonaws.com/t9ty7rbxm5l6tnglgcanhv00829a',

        ],
        links: [
            {
                type: LINK_TYPE.WEB,
                link: 'https://greasyfork.org/zh-TW/scripts/431309-%E7%BF%92%E4%B8%8B%E5%85%83%E4%B8%8A',
            },
            {
                type: LINK_TYPE.WEB,
                name: 'Github',
                link: 'https://github.com/jack850628/xi-down-yuan-up',
            }
        ]
    },
    {
        name: 'AShell',
        subStr: 'AShell腳本語言',
        icon: 'https://raw.githubusercontent.com/jack850628/AShell/master/AShell_LOGO3.png',
        introduce: `這是我在大一時，自學java語言時做的腳本語言，在製作這門的過程中，我也深深的幫助到我學java語言的語法與特性。
        
不過因為這是我還在菜的時候做的東西，所以現在回去看裡頭的原始碼寫還挺亂的，除非哪天我心血來潮，否則因該是不會再去更新AShell了。`,
        images: [
            'https://raw.githubusercontent.com/jack850628/AShell/master/image2.PNG',

        ],
        links: [
            {
                type: LINK_TYPE.WEB,
                name: '語法說明',
                link: 'https://blog.xuite.net/supmart/blog/429774559',
            },
            {
                type: LINK_TYPE.WEB,
                name: 'Github',
                link: 'https://github.com/jack850628/AShell',
            }
        ]
    },
    {
        name: '環保煙火',
        subStr: '用Unity做的環保煙火',
        icon: '',
        introduce: `2019年12月底時，隨手用Unity做網頁煙火
        
可以用
<iframe src="https://jack850628.github.io/Firework/" frameborder="0" style="height: 100px; width: 100%;"></iframe>
把它嵌入在其他的網頁上。`,
        images: [],
        links: [
            {
                type: LINK_TYPE.WEB,
                link: 'https://jack850628.github.io/Firework/',
            }
        ]
    },
    {
        name: '彈力球',
        subStr: '用Javascript做的看起來像是螢幕保護程式的網頁',
        icon: '',
        introduce: `用Javascript做的看起來像是螢幕保護程式的網頁`,
        images: [],
        links: [
            {
                type: LINK_TYPE.WEB,
                link: 'https://jack850628.github.io/elastic_ball/elastic_ball.html',
            }
        ]
    }
]