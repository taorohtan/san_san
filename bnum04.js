// ----------------タッチイベントが利用可能かの判別-------------------------var supportTouch = 'ontouchend' in document;// イベント名var E_TOUCHSTART = supportTouch ? 'touchstart' : 'mousedown';var E_TOUCHMOVE = supportTouch ? 'touchmove' : 'mousemove';var E_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';//=====================================================================function draw(id) {    var canvas = document.getElementById(id);    if (canvas == null)    	return false;		var context = canvas.getContext('2d');var mx;var my;var i;var j;var c;c=0;var num;//ten_key入力の値var mon;//入力された個数	mon=0;var pp=[];var ran=[];var kran=[];var kurai=[];var nkurai=[]var knum=[];var jjrnd;var k;var dam;var no;//---乱数の配列var bnum;//---n桁の数字（問題）var kotae;	kotae=0;var bmoji;var knum;var monjj;monjj=0;const pinp = new Audio('pinpon.mp3');const bu = new Audio("bubu.mp3");bgcolor();iniset();ten_key();//-----main()function main(){	bgcolor();	iniset();	ten_key();	ten_key_basyo();				kansj();			kazu();			pketa();			dai();				nyuryoku();	select();	fig();}//------main()//=====number ↓function iniset(){//-----桁枠表示	context.strokeStyle = "blue";	for (i=0; i<8; i++){	if (i<4) {		context.strokeRect(40+54*i,10,54,75);		} else {		context.strokeRect(40+54*i,10,54,100);		}	}		context.moveTo(40,60);		context.lineTo(472,60);		//context.strokeStyle=c;		context.stroke();context.fillStyle = 'rgba(255, 255, 255, 0.3)'context.fillRect(40,60,54,50/2);context.fillRect(40+4*54,60,54,50);context.fillStyle = 'rgba(0, 0, 255, 0.3)'context.fillRect(94,60,54,50/2);context.fillRect(94+4*54,60,54,50);context.fillStyle = 'rgba(255, 255, 0, 0.3)'context.fillRect(148,60,54,50/2);context.fillRect(148+4*54,60,54,50);context.fillStyle = 'rgba(255, 0, 0, 0.3)'context.fillRect(202,60,54,50/2);context.fillRect(202+4*54,60,54,50);		context.fillStyle = 'blue';		context.font = "20px Arial";		context.fillText("千",60,80);		context.fillText("百",114,80);		context.fillText("十",168,80);		context.fillText("一",222,80);		context.fillText("千",276,80);		context.fillText("百",330,80);		context.fillText("十",384,80);		context.fillText("一",438,80);		context.fillText("万",222,105);context.fillStyle = 'rgba(0, 255, 0, 0.3)'context.fillRect(40,85,216,25)context.strokeStyle = "blue";context.strokeRect(40, 85, 216,25);}function kazu(){	bnum=0;	for (i=0; i<4; i++){bnum=bnum+ran[i]*nkurai[i]}}function kansj(){	var dm=[];	var dmn=[];	for (i=0; i<=6; i++){dm[i]=""}		for (i=0; i<4; i++){		if (knum[i]==8){dm[0]="千万";dmn[0]=10000000;}		if (knum[i]==7){dm[1]="百万";dmn[1]=1000000;}		if (knum[i]==6){dm[2]="十万";dmn[2]=100000;}		if (knum[i]==5){dm[3]="一万";dmn[3]=10000;}		if (knum[i]==4){dm[4]="千";dmn[4]=1000;}		if (knum[i]==3){dm[5]="百";dmn[5]=100;}		if (knum[i]==2){dm[6]="十";dmn[6]=10;}			}	j=0;	for (i=0; i<=6; i++){		if (dm[i]!=""){kurai[j]=dm[i]; nkurai[j]=dmn[i];j=j+1}else{}	}}function pketa(){//------数字を位の配列に入れる		for (i=0; i<8; i++){kran[i]="";}		bmoji=String(bnum);		var cc=8;		for (i=bmoji.length; i>=0; i--){			kran[cc] = bmoji.substr( i, 1 );			cc=cc-1;		}}function wketa(){//-----位の枠の中に表示する		context.fillStyle = 'blue';		context.font = "30px Arial";		context.fillText(kran[0],60,50);		context.fillText(kran[1],114,50);		context.fillText(kran[2],168,50);		context.fillText(kran[3],222,50);		context.fillText(kran[4],276,50);		context.fillText(kran[5],330,50);		context.fillText(kran[6],384,50);		context.fillText(kran[7],438,50);		}function dai(){		context.fillStyle = 'blue';		context.font = "24px Arial";				context.fillText("（"+c+"）",5, 140);		for (i=0; i<4; i++) {			context.fillText(kurai[i],80, 140+i*26);			if (i==3){ context.fillText("　を　"+ran[i]+" こ　合わせた数は",140, 140+i*26);}			else{ context.fillText("　を　"+ran[i]+" こ,　",140, 140+i*26);}		}		context.fillText("です。",376, 140+4*26+6);		context.strokeRect(60,223,300,32);}//=====numberfunction random(){ran[0]=Math.floor(Math.random() * 9) + 1 ;k=1;while(k<=4){	jjrnd=0;	dam=Math.floor(Math.random() * 9) + 1 ;	for (i=0; i<k; i++){if (ran[i]==dam){jjrnd=1;}}	if (jjrnd==1) { } else {ran[i]=dam; k++;}	}//------	knum[0]=Math.floor(Math.random() * 7) + 2 ;k=1;while(k<=4){	jjrnd=0;	dam=Math.floor(Math.random() * 7) + 2 ;	for (i=0; i<k; i++){if (knum[i]==dam){jjrnd=1;}}	if (jjrnd==1) { } else {knum[i]=dam; k++;}	}}function pinbu (a,b){	var a;	var b;	if (a==0) {		pinp.volume = b;		pinp.play();		} else {		bu.volume = b;		bu.play();		}}//-----数値入力function nyuryoku(){		//var h;var t; var o;		if((mx>184 && mx<410) && (my>260 && my<320)){			pp[mon]=num;			//if (mon<3){mon++;}//---3桁まで入力			if (mon<bmoji.length){mon++;}//---文字数分まで入力		}}//-----数値入力表示function fig(){		var s1;		context.fillStyle = 'red';		context.font = "30px Arial";		for (s1=0; s1<mon; s1++){		context.fillText(pp[s1],98+s1*28,250);//175-----ansx+s1*13,ansy);//---13は字間		}}//-----　← M A N 押下時の処理function select(){	if((mx>184 && mx<500) && (my>260 && my<320)){			if(num==12){			kotae=0;			mon=0;			c=c+1;			bgcolor();			iniset();			ten_key();						random();			kansj();			kazu();						dai();					}				if(num==11){if(mon>0){mon=mon-1;}}		if(num==13){			//rline();			mon=mon-1;			kotae=0;				for (i=0; i<mon; i++){				kotae=kotae+pp[i]*(10**(mon-i))				}			if(bnum==kotae){				pinbu(0,0.5);				mon=mon+1;				context.fillStyle = 'red';				context.font = "96px Arial";				context.fillText("◯", 360,210);				wketa();			}else{mon=0;pinbu(1,0.5);}					//bgcolor();			iniset();			ten_key();			dai();			kazu();			//mon=0;			rline();		}		if(num==14){//-----次の問題			bgcolor();			iniset();			ten_key();			c=0;			mon=0;		}	}}//-----テンキー表示function ten_key(){		//bgcolor_btm();		context.fillStyle='#afeeee';		//fillRoundRect(context,　10,260, 23, 28, 5);		for(i=0; i<7; i++){			for(j=0; j<2; j++){				context.fillStyle='#afeeee'				fillRoundRect(context,　184+i*45,260+j*30, 43, 28, 5);				if (i<5){					context.fillStyle = 'blue';					context.font = "24px Arial";					if(j==0){context.fillText(i+1,194+4+i*45,24+260+j*28);}						else{if(i==4){context.fillText(i-4,194+4+i*45,24+260+j*28);}						else{context.fillText(i+6,194+4+i*45,24+260+j*28);}}					} else {}			}		}				context.fillStyle = 'blue';		context.font = "20px Arial";		context.fillText("←",194+5*45,24+260);		context.fillText("問",194+6*45,24+260);		context.fillText("答",194+5*45,24+260+28);		context.font = "14px Arial";		context.fillText("（1）",185+6*45,24+260+28);}//-----テンキー押下時の値取得function ten_key_basyo(){	rline();//点線丸囲いが描かれてしまうので入れておく		if((mx>184 && mx<229) && (my>260 && my<290)){num=1;}	if((mx>229 && mx<274) && (my>260 && my<290)){num=2;}	if((mx>274 && mx<319) && (my>260 && my<290)){num=3;}	if((mx>319 && mx<360) && (my>260 && my<290)){num=4;}	if((mx>360 && mx<405) && (my>260 && my<290)){num=5;}		if((mx>405 && mx<450) && (my>260 && my<290)){num=11;}	if((mx>450 && mx<495) && (my>260 && my<290)){num=12;}		if((mx>184 && mx<229) && (my>290 && my<320)){num=6;}	if((mx>229 && mx<274) && (my>290 && my<320)){num=7;}	if((mx>274 && mx<319) && (my>290 && my<320)){num=8;}	if((mx>319 && mx<360) && (my>290 && my<320)){num=9;}	if((mx>360 && mx<405) && (my>290 && my<320)){num=0;}		if((mx>405 && mx<450) && (my>290 && my<320)){num=13;}	if((mx>450 && mx<495) && (my>290 && my<320)){num=14;}}//-----実線にもどすfunction rline(){		context.beginPath();		context.setLineDash([]);		context.closePath();}function bgcolor(){	context.fillStyle='#ffffe0'//'rgba(0, 255, 0, 0.5)'	context.fillRect(0,0,500,320);}function bgcolor_bm(){	context.fillStyle='#ffffe0'//'rgba(0, 255, 0, 0.5)'	context.fillRect(290,40,230,180);}//------マル四角を描画するfunction-----//------https://qiita.com/PG0721/items/6fb9e9c02675be832402---よりfunction fillRoundRect(context, x, y, w, h, r) {    createRoundRectPath(context, x, y, w, h, r);    context.fill();}function createRoundRectPath(context, x, y, w, h, r) {    context.beginPath();    context.moveTo(x + r, y);    context.lineTo(x + w - r, y);    context.arc(x + w - r, y + r, r, Math.PI * (3/2), 0, false);    context.lineTo(x + w, y + h - r);    context.arc(x + w - r, y + h - r, r, 0, Math.PI * (1/2), false);    context.lineTo(x + r, y + h);           context.arc(x + r, y + h - r, r, Math.PI * (1/2), Math.PI, false);    context.lineTo(x, y + r);    context.arc(x + r, y + r, r, Math.PI, Math.PI * (3/2), false);    context.closePath();}//------マル四角を描画するfunctionここまで-----//----Canvas全体をクリアするfunctionfunction cls(){	context.clearRect(0,0,canvas.width,canvas.height);}//-----ここからマウスの位置を取得するcanvas.addEventListener(E_TOUCHSTART, onTouchStart);	function onTouchStart(e) {	canvas.addEventListener(E_TOUCHMOVE, onTouchMove);	canvas.addEventListener(E_TOUCHEND, onTouchEnd);}function onTouchMove(e) {	//cls();}function onTouchEnd(e) {	canvas.removeEventListener(E_TOUCHMOVE, onTouchMove);	canvas.removeEventListener(E_TOUCHEND, onTouchEnd);	mx=e.pageX;	my=e.pageY;		main();	console.log("x= "+mx+" : y= "+my)//------コンソールに座標を表示}// デフォルトのイベントを禁止	document.ontouchmove = function(evt){	evt.preventDefault();	}}//-------最終かっこ>>>function draw(id) { 