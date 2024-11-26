/*---------------
iOSの場合は，マウスイベントをタッチイベントに変更すること

mousedown --> touchstart
mousemove --> touchmove
mouseup   --> touchend or touchevent

----------------*/

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
	context.moveTo(180,100);
	context.lineTo(180,200);
	context.stroke();
	context.strokeRect(180,185,15,15);

	
	context.strokeStyle='rgba(255, 0, 0, 0.5)'
	context.beginPath();
	context.moveTo(180, 100);//120);
	context.lineTo(80, 200);
	context.lineTo(220, 200);
	context.closePath();
	context.fillStyle='rgba(255, 0, 0, 0.5)'
	context.fill();
	
				context.beginPath();
				context.arc(310, 150, 139, Math.PI * 159 / 180, Math.PI*201/180, false);
				//context.lineWidth = 5;
				//context.strokeStyle = "#4169e1";
				context.strokeStyle = 'rgba(0, 0, 0, 0.5)';;
				context.stroke();
				
				context.beginPath();
				context.arc(150, 18, 196, Math.PI * 69 / 180, Math.PI*111/180, false);
				context.stroke();
				context.fillStyle = "blue";
				context.font = "14px Arial";
				context.fillText("底辺", 145, 230);
				context.fillText("高", 145, 150);
				context.fillText("さ", 145, 170);

		context.fillStyle = "blue";
		context.font = "18px Arial";
		context.fillText("三角形の面積＝底辺 × 高さ ÷ ２", 30, 260);
		
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
	mx=e.pageX-10-10;
	my=e.pageY-90-50;
	//mx=e.screenX;
	//my=e.screenY;
	if (mx<40) {mx=40;}
	
	context.strokeStyle='rgba(0, 0, 255, 0.5)'
		context.beginPath();
		context.moveTo(0,100);
		context.lineTo(480,100);
		context.moveTo(0,200);
		context.lineTo(480,200);
		context.moveTo(mx,100);
		context.lineTo(mx,200);
		context.stroke();
		context.strokeRect(mx,185,15,15);
		
				context.beginPath();
				context.arc(-(180-mx)+310, 150, 139, Math.PI * 159 / 180, Math.PI*201/180, false);
				//context.lineWidth = 5;
				//context.strokeStyle = "#4169e1";
				context.strokeStyle = 'rgba(0, 0, 0, 0.5)';;
				context.stroke();
		
	context.strokeStyle='rgba(0, 255, 0, 0.5)'
	context.beginPath();
	context.moveTo(mx, 100);
	context.lineTo(80, 200);
	context.lineTo(220, 200);
	context.closePath();
	context.fillStyle='rgba(0, 255, 0, 0.5)'
	context.fill();
	
				context.fillStyle = "blue";
				context.font = "14px Arial";

				context.fillText("高", 110-(145-mx), 150);
				context.fillText("さ", 110-(145-mx), 170);
				context.stroke();

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
