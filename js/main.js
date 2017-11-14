var main_canvas="main_canvas";
var canvas = document.getElementById(main_canvas);
$(()=>{
	console.log('Etao go!');
	if (canvas.getContext){
		//$('#'+main_canvas).css('background-color','#000');
		init();
		//window.requestAnimationFrame(draw);
	} 
	else {
		alert("請使用支援http5的瀏覽器");
	}
	
	
	var object=$('.object')[0];
	var outDIV = document.createElement( 'div' );
	var img = document.createElement( 'img' );
	outDIV.className = 'bg';
	object.appendChild(outDIV);
	outDIV.appendChild(img);
	$('.bg').css({
		'position':'absolute',
		'top':'0',
		'left':'0',
		'width':'100%',
		'height':'100%',
		'display':'none',
		'background-color':'FFF'
	});
	
	$('.bg>img').css({
		'position':'absolute',
		'top':'0',
		'bottom':'0',
		'left':'0',
		'right':'0',
		'margin':'auto',
		'max-height': '100%',
		'max-width': '100%',
		'min-height': '0%',
		'min-width': '0%',
		'vertical-align': 'middle'
	});
});


var main_person = new Image();
var main_person_turn=0;
var main_person_H=0;
var like_left=false;
var like_left_meter=55;

var road = new Image();
var road_x=0;
var road_y=0;

var turn_turn_sign = new Image();
var turn_turn_sign_flag = false;

var turn_flag=0;

/*
turn_flag=0 不動作
turn_flag=1 右轉
turn_flag=2 左轉
turn_flag=3 待轉
turn_turn_sign_flag=true 顯示待轉符號
*/
//like(turn)----     turn->1 靠向左邊，0靠向右邊
function resetF(){ //重設定
	turn_turn_sign_flag=false;
	turn_flag=0
	like_left_meter=55;
	main_person_turn=0;
	road_x=0;
	road_y=0;
	like_flag=false;
	main_person_H=0;
}

function bgCover(url){//有網址顯示網址圖片，用-1則消失
	if(url===-1)
		$('.bg').css({
			'display':'none'
		})
	else{ 
		$('.bg').css({
			'display':'block'
		});
		$('.bg>img').attr('src',url);
	}
}

function init() {
	road.src = 'icon/road.svg';
	main_person.src = 'icon/main.svg';
	turn_turn_sign.src = 'icon/sign.png';
	window.requestAnimationFrame(draw);
	start();
}
var y=0;
function draw(){
	var ctx = canvas.getContext('2d');

	ctx.globalCompositeOperation = 'destination-over';
	ctx.clearRect(0,0, canvas.width, canvas.height);// clear canvas
	
	
	ctx.translate(canvas.width/2+like_left_meter, canvas.height-main_person_H);
	ctx.rotate(main_person_turn/180*Math.PI);
        //ctx.fillStyle = "rgb(200,0,0)";
        //ctx.fillRect (0, 0, 10, 10);
	ctx.drawImage(main_person, -30, -50,70,110);
	ctx.rotate(-main_person_turn/180*Math.PI);
	ctx.translate(-canvas.width/2-like_left_meter, -canvas.height+main_person_H);
	
	ctx.rotate(0);
	ctx.translate(0, 0);
	ctx.drawImage(road,road_x-canvas.width,road_y-canvas.width*3+canvas.height,canvas.width*3,canvas.width*3);
	if(turn_turn_sign_flag)
		ctx.drawImage(turn_turn_sign,canvas.width-320,10,80,80);
	
	ctx.beginPath();
	//ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.closePath();
	ctx.stroke();

	window.requestAnimationFrame(draw);
}


var like_flag=false;
function like(turn){//1左邊，0右邊
	if(turn==0)
		like_left=false;
	else
		like_left=true;
	like_flag=true;
}


function start(){
	if(main_person_H<300){
		main_person_H+=2;
	}
	
	if(like_left){
		if(like_left_meter>55)
			like_left_meter--;
		else if(!like_flag)like_left=false;
	}
	else{
		if(like_left_meter<120)
			like_left_meter++;
		else if(!like_flag)like_left=true;
	}
	
	if(turn_flag==0)
		road_y=(road_y+5)%(canvas.height-10);
	if(turn_flag==1){
		if(road_y<canvas.width*1+canvas.height/4-30){
			road_y+=5;
		}
		if(road_y>canvas.width*1+canvas.height/4-130){
			if(main_person_turn<90)
				main_person_turn+=2;
			if(road_x>-canvas.width*5/6)
				road_x-=5;
		}
	}
	else if(turn_flag==2){
		if(road_y<canvas.width*1+canvas.height/2-20){
			road_y+=5;
		}
		if(road_y>canvas.width*1+canvas.height/2-20-200){
			if(main_person_turn>-90)
				main_person_turn--;
			if(road_x<canvas.width*5/6)
				road_x+=5;
		}
	}
	else if(turn_flag==3){
		if(road_y<canvas.width*1+canvas.height/4-30){
			road_y+=5;
		}
		if(road_y>=canvas.width*1+canvas.height/4-330){
			if(main_person_turn<45)
				main_person_turn+=1;
			if(like_left_meter<200){
				like_left=false;
				like_left_meter+=2;
			}
			else turn_flag=4;
		}
	}
	else if(turn_flag==4){
		if(road_y<canvas.width*1+canvas.height/2){
			road_y+=5;
		}
		if(road_y>=canvas.width*1+canvas.height/2-330){
			if(main_person_turn>-90){
				main_person_turn-=2;
				console.log(main_person_turn);
			}
		}
	}
	setTimeout(start,10);
}
/*
var x=0;
var y=0;
var radius=0;
function draw() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(x, y,radius, 0, Math.PI * 2, true);
    ctx.closePath();
	ctx.stroke();
	x=(x+1)%200;
	y=(y+1)%200;
	window.requestAnimationFrame(draw);
}*/