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
		
	context.beginPath();
	//context.translate(0,10);//---平行移動
	context.closePath();
	
	bgcolor();
   zahyo();
   sankaku();
	
	
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
	
	
	context.strokeStyle='rgba(0, 255, 0, 0.5)'
	context.beginPath();
	context.translate(0,-10);//---平行移動
	context.moveTo(180, 30);//120);
	context.lineTo(80, 30);
	context.lineTo(80, 130);
	context.lineTo(220, 130);
	context.closePath();
	context.fillStyle='rgba(0, 255, 0, 0.5)'
	context.fill();
	
		context.strokeStyle='rgba(0, 255, 0, 0.5)'
		context.beginPath();
		context.moveTo(180,200);
		context.lineTo(40,200);
		context.lineTo(80,300);
		context.lineTo(220,300);
		context.closePath();
		context.fillStyle='rgba(0, 255, 0, 0.5)'
		context.fill();
	context.translate(0, 10);//---平行移動

}

function sankaku(){
		context.strokeStyle='rgba(255, 0, 0, 0.5)'
		context.translate(0,-10);//---平行移動
		context.beginPath();
		context.moveTo(80, 30);//120);
		context.lineTo(40, 30);
		context.lineTo(80, 130);
		context.lineTo(80, 30);
		context.closePath();
		context.fillStyle='rgba(0, 255, 0, 0.5)'
		context.fill();
		context.translate(0,10);//---平行移動
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
	
	my=e.pageY-90-50;
	if(my<150){
	cls();
	zahyo();
	sankaku();
	}
}

function onTouchMove(e) {
	
	//cls();
	//zahyo();

	mx=e.pageX-10-10;
	my=e.pageY-90-50;

if (my < 60) {

	cls();
	zahyo();
	if(mx>180){mx=180;}
	if(mx<40){mx=40;}
	
		context.strokeStyle='rgba(255, 0, 0, 0.5)'
		context.beginPath();
		context.translate(0,-10);//---平行移動
		context.moveTo(40+mx, 30);//120);
		context.lineTo(mx, 30);
		context.lineTo(40+mx, 130);
		context.lineTo(40+mx, 30);
		context.closePath();
		context.fillStyle='rgba(0, 255, 0, 0.5)'
		context.fill();
		context.translate(0,10);//---平行移動

	}

	
	if(my>160){
	cls();
	zahyo();
	sankaku();
	if(mx<150){mx=150;}
		context.strokeStyle='rgba(255, 0, 0, 0.5)'
		context.beginPath();
		context.translate(0,-10);//---平行移動
		context.moveTo(0,200);
		context.lineTo(480,200);
		context.moveTo(0,300);
		context.lineTo(480,300);
		context.stroke();
		
		context.moveTo(mx,200);
		context.lineTo(mx-140,200);
		context.lineTo(80,300);
		context.lineTo(220,300);
		context.closePath();
		context.fillStyle='rgba(255, 0, 0, 0.5)'
		context.fill();

				context.translate(0,10);//---平行移動
}
/*if(mx>=180 && (my<60 || my>160)){*/
if((mx>=180 && my<60) || (mx>=140 && my>160)){
			context.strokeStyle='rgba(0, 0, 255, 0.5)'
			context.beginPath();
			context.translate(0,-10);//---平行移動
			context.moveTo(80,30);
			context.lineTo(80,130);
			context.stroke();
			context.strokeRect(80,120,10,10);

				context.beginPath();
				context.arc(210, 80, 139, Math.PI * 159 / 180, Math.PI*201/180, false);
				context.strokeStyle = 'rgba(0, 0, 0, 0.5)';;
				context.stroke();
				
				context.beginPath();
				context.arc(150, -52, 196, Math.PI * 69 / 180, Math.PI*111/180, false);
				context.stroke();
				context.fillStyle = "blue";
				context.font = "14px Arial";
				context.fillText("底辺", 145, 155);
				context.fillText("高", 45, 80);
				context.fillText("さ", 45, 100);

			context.fillStyle = "blue";
			context.font = "16px Arial";
			context.fillText("平行四辺形の面積＝底辺 × 高さ", 40, 180);
			
				context.beginPath();
				context.arc(150, 118, 196, Math.PI * 69 / 180, Math.PI*111/180, false);
				context.stroke();
				context.fillStyle = "blue";
				context.font = "14px Arial";
				context.fillText("底辺", 145, 320);
				context.fillText("高", -(35-mx), 250);
				context.fillText("さ", -(35-mx), 270);
				
				context.beginPath();
				context.arc(-(80-mx)+210, 250, 139, Math.PI * 159 / 180, Math.PI*201/180, false);
				context.strokeStyle = 'rgba(0, 0, 255, 0.5)';;
				context.moveTo(mx,200);
				context.lineTo(mx,300);
				context.stroke();
				context.strokeRect(mx,285,15,15);
				
				context.translate(0,10);//---平行移動
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
