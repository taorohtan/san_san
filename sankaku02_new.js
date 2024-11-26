// ----------------タッチイベントが利用可能かの判別-------------------------
var supportTouch = 'ontouchend' in document;

// イベント名

var E_TOUCHSTART = supportTouch ? 'touchstart' : 'mousedown';
var E_TOUCHMOVE = supportTouch ? 'touchmove' : 'mousemove';
var E_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';

//====================================================


function draw(id) {
    var canvas = document.getElementById(id);
    if (canvas == null)
    	return false;
    	var context = canvas.getContext('2d');
    // 描画

	bgcolor();
	zahyo();
	
var mx;
var my;

	
function bgcolor(){
	context.fillStyle='#ffffe0'//'rgba(0, 255, 0, 0.5)'
	//context.fillRect(0,0,320,500);
	context.fillRect(0,0,480,320);
}


function zahyo(){
	var i;
	var j;
		
	bgcolor();
	context.strokeStyle='rgba(0, 0, 255, 0.25)'

	for(i=0; i<330; i=i+10){
		context.beginPath();
		context.moveTo(0,i);
		context.lineTo(480,i);
		context.stroke();
	}
	
	for(i=0; i<490; i=i+10){
		context.beginPath();
		context.moveTo(i,0);
		context.lineTo(i,320);
		context.stroke();
	}
	
	context.strokeStyle='rgba(0, 0, 255, 0.5)'
	context.moveTo(160,80);
	context.lineTo(160,250);
	context.moveTo(160,80);
	context.lineTo(50, 250);
	context.lineTo(250, 250);
	context.stroke();
	context.strokeRect(160,235,15,15);

	
	context.strokeStyle='rgba(255, 0, 0, 0.5)'
	context.beginPath();
	context.moveTo(160, 80);
	context.lineTo(50, 250);
	context.lineTo(160,180);
	context.lineTo(250, 250);
	context.closePath();
	context.fillStyle='rgba(255, 0, 0, 0.5)'
	context.fill();

}

//----Canvas全体をクリアするfunction
function cls(){
	context.clearRect(0,0,canvas.width,canvas.height);
}


//-----ここからマウスの位置を取得する

canvas.addEventListener(E_TOUCHSTART, onTouchStart);
	
	
function onTouchStart(e) {
	canvas.addEventListener(E_TOUCHMOVE, onTouchMove);
	canvas.addEventListener(E_TOUCHEND, onTouchEnd);
}



function onTouchMove(e) {
	
	cls();
	//menseki();
	zahyo();

	
	//context.translate(-100,-80);//menseki()での平行移動を戻す
	//mx=e.pageX-110;
	//my=e.pageY-150;
	mx=e.pageX-10//-10;
	my=e.pageY-90//-50;

	if(my<250) {
	
		if(my<110) {my=110}
		if(my==180){
				context.fillStyle = "blue";
				context.font = "18px Arial";
				context.fillText("この図形の面積＝底辺 × 高さ ÷ ２", 25, 270);
				context.font = "14px Arial";
				context.fillText("底辺", 160,my+20);
				context.fillText("高", 130, my-50);
				context.fillText("さ", 130, my-35);
				
				context.beginPath();
				context.arc(150, -10-(252-my), 280, Math.PI * 69 / 180, Math.PI*111/180, false);
				//context.lineWidth = 5;
				context.strokeStyle = "#4169e1";
				context.stroke();
				context.beginPath();
				context.arc(290, 130, 140, Math.PI * 159 / 180, Math.PI*201/180, false);
				//context.lineWidth = 5;
				//context.strokeStyle = "#4169e1";
				context.strokeStyle = "black";
				context.stroke();


		}
		if(my<175){
			context.fillStyle = "blue";
			context.font = "18px Arial";
			context.fillText("この図形の面積＝対角線 × 対角線 ÷ ２", 5, 270);
			context.font = "14px Arial";
			context.fillText("対角線", 160,my+20);
			var tt=115;
			context.fillText("対", 130, tt);
			context.fillText("角", 130, tt+15);
			context.fillText("線", 130, tt+30);
				context.beginPath();
				context.arc(150, -10-(252-my), 280, Math.PI * 69 / 180, Math.PI*111/180, false);
				//context.lineWidth = 5;
				context.strokeStyle = "#4169e1";
				context.stroke();
				context.beginPath();
				context.arc(290, 130, 140, Math.PI * 159 / 180, Math.PI*201/180, false);
				//context.lineWidth = 5;
				//context.strokeStyle = "#4169e1";
				context.strokeStyle = "black";
				context.stroke();


		}

	context.beginPath();
	context.moveTo(160, 80);
	context.lineTo(50, my);
	context.lineTo(160,180);
	context.lineTo(250, my);
	context.closePath();
	context.fillStyle='rgba(0, 255, 0, 0.5)'
	context.fill();
	



		context.strokeStyle='rgba(0, 0, 255, 0.5)'
		context.beginPath();
		context.moveTo(50,my);
		context.lineTo(250,my);
		context.stroke();
		context.strokeRect(160,my-15,15,15);
		context.beginPath();
		context.moveTo(50,80);
		context.lineTo(50,250);
		context.moveTo(250,80);
		context.lineTo(250,250);
		context.stroke();

	}
}

function onTouchEnd(e) {
	canvas.removeEventListener(E_TOUCHMOVE, onTouchMove);
	canvas.removeEventListener(E_TOUCHEND, onTouchEnd);
}	

//----ここまで
// デフォルトのイベントを禁止
document.ontouchmove = function(evt){
evt.preventDefault();
}
}
