var _checkerboard=document.querySelectorAll(".box");//抓棋盤格子
var who=document.querySelector("#who");  		//現在輪到的標示
var win_alert=document.querySelector("#win_alert"); 	//Win提示
var win_type=document.querySelector("#win_type");  //誰獲勝
var checkerboard_Length=Math.sqrt(_checkerboard.length);
var win_line_length=5
var checker_count=0;
var checkerboard=[];						//棋盤陣列
var check_types=["X","O"];					//棋子類型
var check_type=0;						//當前棋子類型指標
var check=[
	[[-1,0],[1,0]]
	,[[0,-1],[0,1]]
	,[[-1,-1],[1,1]]
	,[[1,-1],[-1,1]]
];
for(let i=0;i<checkerboard_Length;i++)
	checkerboard.push([]);
var point_y=-1;							
_checkerboard.forEach((box,point_x)=>{          //棋盤初始化
  if(point_x%checkerboard_Length==0)
    point_y++;
  let _point_y=point_y;
  checkerboard[_point_y][point_x%checkerboard_Length]={div:box,obj:null};
  box.onclick=(event)=>{					//放入點擊監聽器
    if(win_type.innerText!=""||checkerboard[_point_y][point_x%checkerboard_Length].obj!=null)  //當有勝負或著已放入棋子
		return;										//跳出
    push_checker(check_types[check_type],point_x%checkerboard_Length,_point_y);			//放棋子
    who.innerText=check_types[check_type=(check_type+1)%2];			//棋子轉換
    who.className=check_types[check_type];
  };
});
/**---------------------------------------------class------------------------------------------**/
function checker(type,x,y){					//棋子類別
  this.group={
    Horizontal:null
    ,Straight:null
    ,LeftOblique:null
    ,ReftOblique:null
  };
  this.type=type;
  this.x=x;
  this.y=y;
  let _c,index=0;
  for(let group_type in this.group){
	let x,y;
	if(0<=(x=this.x+check[index][0][0])&&x<checkerboard[0].length&&0<=(y=this.y+check[index][0][1])&&y<checkerboard.length
		&&(_c=checkerboard[y][x].obj)!=null&&_c.type===this.type){      //檢查左邊是否同類型
		_c.group[group_type].push(this);
		this.group[group_type]= _c.group[group_type];
	}
	if(0<=(x=this.x+check[index][1][0])&&x<checkerboard[0].length&&0<=(y=this.y+check[index][1][1])&&y<checkerboard.length
		&&(_c=checkerboard[y][x].obj)!=null&&_c.type===this.type){  //檢查右邊是否同類型
		if(this.group[group_type]==null){
			_c.group[group_type].push(this);
			this.group[group_type]= _c.group[group_type];
		}else{
			for(let item of _c.group[group_type]){
				this.group[group_type].push(item);
				item.group[group_type]=this.group[group_type];
			}
		}
	}
	if(this.group[group_type]==null)				//如果左右沒有同類型棋子
		this.group[group_type]=[this];
	index++;
  }
 }
/**-------------------------------------------------class end-------------------------------------------------------**/

function push_checker(type,x,y){				//將棋子放入棋盤
  let che=new checker(type,x,y);				//初始化棋子
  checker_count++;
  checkerboard[y][x].obj=che;
  checkerboard[y][x].div.querySelector(".checker").innerText=type;
  checkerboard[y][x].div.className+=" "+type;
  for(let group in che.group){				//檢查是否連線
    if(che.group[group].length>=win_line_length){			//哪種連線方式已完成
	  for(let box of che.group[group])
	    checkerboard[box.y][box.x].div.querySelector(".box .line").className+=" "+group;
      win_type.innerText=type+" Win";			//顯示誰獲勝
      win_alert.style.display = "block";		//顯示獲勝畫面
      return;
    }
  }
  if(checker_count==_checkerboard.length){
	win_type.innerText="平手";			//顯示誰獲勝
    win_alert.style.display = "block";		//顯示獲勝畫面
  }
}
