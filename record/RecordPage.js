var languageTypes={
    JAVA:{
        languageName:"Java",
        languageIcon:"java.png"
    },
    JAVA_SCRIPT:{
        languageName:"JavaScript",
        languageIcon:"JavaScript.png"
    },
    C:{
        languageName:"C",
        languageIcon:"C.png"
    },
    CPP:{
        languageName:"C++",
        languageIcon:"C++.png"
    },
    C_SHARP:{
        languageName:"C#",
        languageIcon:"CSharp.png"
    },
    ASHELL:{
        languageName:"AShell",
        languageIcon:"AShell.png"
    },
    KOTLIN:{
        languageName:"Kotlin",
        languageIcon:"Kotlin.png"
    },
    PHP:{
        languageName:"php",
        languageIcon:"php.png"
    }
}
var workItems=[
    {
        workImg:"https://raw.githubusercontent.com/jack850628/AShell/master/AShell_icon.ico",
        workTitle:"AShell",
        workContext:"AShell腳本語言",
        workHypeLink:"https://github.com/jack850628/AShell",
        introduceImage:"https://raw.githubusercontent.com/jack850628/AShell/master/AShell_icon.ico",
        createDate:"2016-01-14",
        languageType:languageTypes.JAVA
    },{
        workImg:"https://raw.githubusercontent.com/jack850628/AShell/master/AShell_icon.ico",
        workTitle:"AShell_ComLine",
        workContext:"AShell腳本語言Android版",
        workHypeLink:"https://github.com/jack850628/AShell_ComLine",
        introduceImage:"https://raw.githubusercontent.com/jack850628/AShell/master/AShell_icon.ico",
        createDate:"2015-05-05",
        languageType:languageTypes.JAVA
    },
    
    {
        workImg:"https://raw.githubusercontent.com/jack850628/FloatWindow/master/app/src/main/res/drawable/icom.png",
        workTitle:"FloatWindow",
        workContext:"Android上的浮動視窗小工具",
        workHypeLink:"https://github.com/jack850628/FloatWindow",
        introduceImage:"https://raw.githubusercontent.com/jack850628/FloatWindow/master/Demonstration.png",
        createDate:"2017-08-21",
        languageType:languageTypes.JAVA
    },
    {
        workImg:"https://raw.githubusercontent.com/jack850628/webGobang/master/demo.PNG",
        workTitle:"webGobang",
        workContext:"網頁五子棋",
        workHypeLink:"https://github.com/jack850628/webGobang",
        introduceImage:"https://raw.githubusercontent.com/jack850628/webGobang/master/demo.PNG",
        createDate:"2017-08-09",
        languageType:languageTypes.JAVA_SCRIPT
    },
    {
        workImg:"https://raw.githubusercontent.com/jack850628/FileDownloadServer/master/demo.PNG",
        workTitle:"File Download Server",
        workContext:"簡易型檔案下載伺服器 ",
        workHypeLink:"https://github.com/jack850628/FileDownloadServer",
        introduceImage:"https://raw.githubusercontent.com/jack850628/FileDownloadServer/master/demo.PNG",
        createDate:"2017-05-15",
        languageType:languageTypes.C_SHARP
    },
    {
        workImg:"HousePricMap.PNG",
        workTitle:"House Pric Map",
        workContext:"線上房屋實價登錄查詢地圖",
        workHypeLink:"http://lcm-ap.duckdns.org/house",
        introduceImage:"HousePricMap.PNG",
        createDate:"2017-04-22",
        languageType:languageTypes.C_SHARP
    },
    {
        workImg:"https://raw.githubusercontent.com/jack850628/WebPageYouTubeLinkPlayer/master/demo.jpg",
        workTitle:"Web Page YouTube Link Player",
        workContext:"抓取網頁上的YouTube連結並自動依序播放 ",
        workHypeLink:"https://github.com/jack850628/WebPageYouTubeLinkPlayer",
        introduceImage:"https://raw.githubusercontent.com/jack850628/WebPageYouTubeLinkPlayer/master/demo.jpg",
        createDate:"2017-04-19",
        languageType:languageTypes.C_SHARP
    },
    {
        workImg:"https://raw.githubusercontent.com/jack850628/KanColle_Auto_Expedition_Script/master/demo1.png",
        workTitle:"KanColle Auto Expedition Script",
        workContext:"艦隊收藏自動遠征腳本",
        workHypeLink:"https://github.com/jack850628/KanColle_Auto_Expedition_Script",
        introduceImage:"https://raw.githubusercontent.com/jack850628/KanColle_Auto_Expedition_Script/master/demo1.png",
        createDate:"2015-12-09",
        languageType:languageTypes.ASHELL
    }
];
var workList=document.querySelector("#work_list");
var closeButton=document.querySelector("#close");
var introducePage=document.querySelector("#introduce_page");
introducePage.introduceImage=document.querySelector("#introduce_page #introduce_img");
introducePage.titleIcon=document.querySelector("#introduce_page .introduce_title .title_icon img");
introducePage.titleText=document.querySelector("#introduce_page .introduce_title .title_text h1");
introducePage.titleLanguage=document.querySelector("#introduce_page .introduce_title .title_text img");
introducePage.createDate=document.querySelector("#introduce_page .introduce_title .title_text span");
introducePage.introduceContent=document.querySelector("#introduce_page .introduce_content");

closeButton.onclick=(evn)=>{
    introducePage.style.opacity=0;
    setTimeout(()=>{
        introducePage.style.display="none";
    },300);
};

for(let item of workItems){
    let li=document.createElement("li");
    li.onclick=(e)=>{
        if(e.target.tagName.toUpperCase()!=="A"){
            introducePage.introduceImage.style.backgroundImage=`url(${item.introduceImage})`;
            introducePage.titleIcon.src=item.workImg;
            introducePage.titleText.innerText=item.workTitle;
            introducePage.titleLanguage.src=item.languageType.languageIcon;
            introducePage.titleLanguage.alt=item.languageType.languageName;
            introducePage.createDate.innerText=item.createDate;
            introducePage.introduceContent.innerHTML=item.workContext;
            introducePage.style.display="block";
            setTimeout(()=>{
                introducePage.style.opacity=1;
            },300);
        }
    };

    let madListIcom=document.createElement("div");
    madListIcom.classList.add("mad-list-icon");

    let workImg=document.createElement("span");
    workImg.style.backgroundImage=`url(${item.workImg})`;
    workImg.classList.add("mad-icon-40");
    madListIcom.appendChild(workImg);

    li.appendChild(madListIcom);

    let madListText=document.createElement("div");
    madListText.classList.add("mad-list-text");

    let contextTitleHypeLink=document.createElement("a");
    contextTitleHypeLink.href=item.workHypeLink;
    contextTitleHypeLink.target="_block";
    contextTitleHypeLink.text=item.workTitle;
    madListText.appendChild(contextTitleHypeLink);

    let languageIcon=document.createElement("img");
    languageIcon.src=item.languageType.languageIcon;
    languageIcon.width="40";
    languageIcon.alt=item.languageType.languageName;
    languageIcon.classList.add("language_img");
    madListText.appendChild(languageIcon);

    madListText.appendChild(document.createElement("br"));

    let contentText=document.createElement("p");
    contentText.textContent=item.workContext;
    madListText.appendChild(contentText);

    li.appendChild(madListText);
    workList.appendChild(li);

    li=document.createElement("li");
    li.classList.add("interval");
    workList.appendChild(li);
}