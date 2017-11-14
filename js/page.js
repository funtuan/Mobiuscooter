var oldcheck = $('#selonehome');
oldcheck.attr('selected','yes');

var sec = -1;
var audio = document.createElement("audio");
audio.src = "assets/sound/car-sudden-braking1.mp3";
$("#redtext").hide();

console.log("ok");
$('.dot').click(function() { 
	turn_turn_sign_flag = false;
	sec = -1;
	$("#redtext").hide();
	go($(this).attr('go'));
	console.log($(this).attr('data-balloon'));
	oldcheck.removeAttr('selected');
	$(this).attr('selected','yes');
	oldcheck = $(this);
		
});


console.log("whidth:"+document.body.offsetWidth);
console.log("Height:"+document.body.offsetHeight);
var riwhere = 0;
var gowhere = 0;
var headv = $('#headtext');
var downv = $('#downtext');
var btv = $('#bttext');

var okarry = [0,0,0,0];
function backsec(n){
	console.log("sec!");
	sec = n;
	$("#redtext").show();
	timer();
	function timer(){
		$('#sec').html(sec);
		if(sec >0)setTimeout(timer,1000);
		if(sec == 0){
			btv.html('');
			turn_turn_sign_flag = false;
			$("#redtext").hide();
			if((okarry[1] == 1 && riwhere == 0)||(okarry[3] == 1 && riwhere == 1)){
				turn_flag=2;
				gowhere = 0;
				oldcheck.removeAttr('selected');
				$("#selone3").attr('selected','yes');
				oldcheck = $("#selone3");
				go("3");
			}else{
				turn_flag=3;
				gowhere = 1;
				oldcheck.removeAttr('selected');
				$("#selone3").attr('selected','yes');
				oldcheck = $("#selone3");
				go("3");
			}
		}
		sec--;
	}
	
}

function oneright(){
	headv.html("此路口需要右轉");
	downv.html("<br>請操控你的機車...");
	downv.css("top","385");
	btv.html('<div id="startbt2" class="object button" style="left: 382px; top: 450px;"><div id="background"></div><div id="text">右轉</div><div id="hitbox"></div></div>');
	$('#startbt2').click(function() { 
		turn_flag = 1;
		headv.html("");
		downv.html("");
		btv.html('');
		
		setTimeout(function(){
			oldcheck.removeAttr('selected');
			$("#selone2").attr('selected','yes');
			oldcheck = $("#selone2");
			go("2");
		},3000);
		
	});
	$('.button').mouseenter(function() { 
		if($(this).attr('deactivated') != "yes")$(this).attr('hover','yes');
	});
	$('.button').mouseleave(function() { 
		$(this).removeAttr('hover');
	});
}

function runlu(r){
	headv.html("可...可惡");
	riwhere = r;
	if(riwhere == 0){
		turn_turn_sign_flag = true;
		downv.html("騎到路口才看見有二段式左轉標誌<br>這時候要直接左轉還是改待轉呢？");
	}
	if(riwhere == 1)downv.html("騎到路口才發現沒有二段式左轉標誌<br>要直接左轉還是待轉呢？");
	downv.css("top","385");
	var bta = "";
	var btb = "";
	if((okarry[0] == 1 && riwhere == 0)||(okarry[2] == 1 && riwhere == 1))bta = 'deactivated="yes"';
	if((okarry[1] == 1 && riwhere == 0)||(okarry[3] == 1 && riwhere == 1))btb = 'deactivated="yes"';
	btv.html('<div id="startbt5" '+bta+' class="object button" style="left: 275px; top: 450px;"><div id="background"></div><div id="text">直接左轉</div><div id="hitbox"></div></div><div id="startbt6" '+btb+' class="object button" style="left: 495px; top: 450px;"><div id="background"></div><div id="text">待轉</div><div id="hitbox"></div></div>');
	backsec(3);
	$('.button').click(function() { 
		sec = -1;
		$("#redtext").hide();
		turn_turn_sign_flag = false;
		if($(this).attr('id') == "startbt5"){
			turn_flag=2;
			gowhere = 0;
			oldcheck.removeAttr('selected');
			$("#selone3").attr('selected','yes');
			oldcheck = $("#selone3");
			go("3");
		}
		if($(this).attr('id') == "startbt6"){
			turn_flag=3;
			gowhere = 1;
			oldcheck.removeAttr('selected');
			$("#selone3").attr('selected','yes');
			oldcheck = $("#selone3");
			go("3");
		}
	});
	$('.button').mouseenter(function() { 
		if($(this).attr('deactivated') != "yes")$(this).attr('hover','yes');
	});
	$('.button').mouseleave(function() { 
		$(this).removeAttr('hover');
	});
}
var goalbn = 0;
function go(n){
	goalbn = n;
	switch(n)
	{
		case "-1":
			bgCover("https://thumbs.gfycat.com/PowerlessCharmingGrackle-size_restricted.gif");
			headv.html("");
			downv.html("二段式左轉<br>搞不清楚篇")
			downv.css("top","385");
			btv.html('<div id="startbtst"  class="object button" style="left: 382px; top: 450px;"><div id="background"></div><div id="text">開始</div><div id="hitbox"></div></div>');
			
			$('#startbtst').click(function() { 
				oldcheck.removeAttr('selected');
				$("#selone0").attr('selected','yes');
				oldcheck = $("#selone0");
				go("0");
			});
		break;
		case "0":
			bgCover("https://i.imgur.com/u5rTNmP.png");
			headv.html("<b>前提概要</b><br>你是一位生活在台灣的通勤族");
			downv.html("因為租不起離公司近的房子也買不起停車位<br>每天都要騎著機車上下班通勤")
			downv.css("top","385");
			btv.html('<div id="startbt0"  class="object button" style="left: 382px; top: 450px;"><div id="background"></div><div id="text">終於下班</div><div id="hitbox"></div></div>');
			
			$('#startbt0').click(function() { 
				oldcheck.removeAttr('selected');
				$("#selone1").attr('selected','yes');
				oldcheck = $("#selone1");
				go("1");
			});
		break;
		case "1":
			bgCover(-1);
			headv.html("");
			downv.html("");
			btv.html('');
			resetF();
			setTimeout(function(){
				if(goalbn == 1){
					headv.html("今天也是一個沒領加班費，卻工作到10點的夜晚呢<br>正在回家的路途中");
					downv.html("下一個路口，你必須<b>右轉</b><br>將你的機車開往...");
					downv.css("top","385");
					btv.html('<div id="startbt1" class="object button" style="left: 382px; top: 450px;"><div id="background"></div><div id="text">靠右</div><div id="hitbox"></div></div>');
					$('#startbt1').click(function() { 
						like(0);
						headv.html("");
						downv.html("");
						btv.html('');
						setTimeout(oneright,500);
					});
					$('.button').mouseenter(function() { 
						if($(this).attr('deactivated') != "yes")$(this).attr('hover','yes');
					});
					$('.button').mouseleave(function() { 
						$(this).removeAttr('hover');
					});
				}
			},2000);
		break;
		case "2":
			bgCover(-1);
			headv.html("");
			downv.html("");
			btv.html('');
			resetF();
			setTimeout(function(){
				if(goalbn == 2){
				headv.html("終於，再一個<b>左轉</b><br>就能抵達溫暖的家了");
				downv.html("下一個路口，你必須<b>左轉</b><br>選擇將你的機車開往...")
				downv.css("top","385");
				var bta = "";
				var btb = "";
				if(okarry[0] == 1 && okarry[1] == 1)bta = 'deactivated="yes"';
				if(okarry[2] == 1 && okarry[3] == 1)btb = 'deactivated="yes"';
				btv.html('<div id="startbt3" '+bta+' class="object button" style="left: 275px; top: 450px;"><div id="background"></div><div id="text">靠左</div><div id="hitbox"></div></div><div id="startbt4" '+btb+' class="object button" style="left: 495px; top: 450px;"><div id="background"></div><div id="text">靠右</div><div id="hitbox"></div></div>');
				$('.button').click(function() { 
					if($(this).attr('id') == "startbt3"){
						like(1);
						headv.html("");
						downv.html("");
						btv.html('');
						setTimeout(function(){runlu(0)},500);
					}
					if($(this).attr('id') == "startbt4"){
						like(0);
						headv.html("");
						downv.html("");
						btv.html('');
						setTimeout(function(){runlu(1)},500);
					}
				});
				$('.button').mouseenter(function() { 
					if($(this).attr('deactivated') != "yes")$(this).attr('hover','yes');
				});
				$('.button').mouseleave(function() { 
					$(this).removeAttr('hover');
				});
				}
			},2000);
		break;
		case "3":
			bgCover(-1);
			headv.html("");
			downv.html("");
			btv.html('');
				if(riwhere == 0 && gowhere == 0){
					okarry[0] = 1;
					setTimeout(function(){
						if(goalbn == 3){
						downv.html("旁邊的草叢突然出現一位警察…<br>恭喜你收到了一張「未依規定二段式左轉」的600元罰單");
						bgCover("https://i.imgur.com/bJ2Tko7.png");
						tmd();
						}
					},3500);
				}
				if(riwhere == 0 && gowhere == 1){
					okarry[1] = 1;
					setTimeout(function(){
						if(goalbn == 3){
						audio.play();
						downv.html("你急忙的右轉切到外車道，來進行待轉<br>卻不小心被後面的機車撞上….");
						bgCover("https://i.imgur.com/mTmkgDz.png");
						tmd();
						}
					},2300);
				}
				if(riwhere == 1 && gowhere == 0){
					okarry[2] = 1;
					setTimeout(function(){
						if(goalbn == 3){
						audio.play();
						downv.html("已經到路口，你急忙的左轉切換到內車道<br>卻不小心被後面的汽車撞上….");
						bgCover("https://i.imgur.com/buLaG3Z.png");
						tmd();
						}
					},2300);
				}
				if(riwhere == 1 && gowhere == 1){
					okarry[3] = 1;
					setTimeout(function(){
						if(goalbn == 3){
						downv.html("未設置兩段式左轉路口，逕行待轉<br>屬於違規行為，有開單案例");
						bgCover("https://i.imgur.com/bJ2Tko7.png");
						tmd();
						}
					},3500);
				}
				function tmd(){
					headv.html("結果：失敗<br>繼續嘗試其他的可能性吧");
					downv.css("top","385");
					if(okarry[0] == 1 && okarry[1] == 1 && okarry[2] == 1 && okarry[3] == 1){
						btv.html('<div id="startbt7" class="object button" style="left: 382px; top: 450px;"><div id="background"></div><div id="text">看結局</div><div id="hitbox"></div></div>');
						$('#startbt7').click(function() { 
							oldcheck.removeAttr('selected');
							$("#selone4").attr('selected','yes');
							oldcheck = $("#selone4");
							go("4");
						});
					}else{
						btv.html('<div id="startbtbk" class="object button" style="left: 382px; top: 280px;"><div id="background"></div><div id="text">繼續挑戰</div><div id="hitbox"></div></div>');
						$('#startbtbk').click(function() { 
							oldcheck.removeAttr('selected');
							$("#selone2").attr('selected','yes');
							oldcheck = $("#selone2");
							bgCover(-1);
							go("2");
						});
					}
					$('.button').mouseenter(function() { 
						if($(this).attr('deactivated') != "yes")$(this).attr('hover','yes');
					});
					$('.button').mouseleave(function() { 
						$(this).removeAttr('hover');
					});
				}
		break;
		case "4":
			okarry = [0,0,0,0];
			bgCover("https://i.imgur.com/UgoXnXC.png");
			headv.html("<br><b>二段式的結局</b>");
			downv.html("長年來<br>二段式左轉存在許多問題<br>影響我們每一個人的生活<br><br>很多人都曉得<br>待轉大富翁新聞<br>但鮮少人去真正瞭解<br>這議題本身背後的含意<br><br>我們希望<br>能藉由互動式遊戲<br>讓大家能獨立思考理性分析<br>增加知識藉此減少社會衝突<br><br><br>");
			downv.css("top","80");
			btv.html('<div id="startbtmake" class="object button" style="left: 275px; top: 450px;"><div id="background"></div><div id="text">關於作者</div><div id="hitbox"></div></div><div id="startbtmore" class="object button" style="left: 495px; top: 450px;"><div id="background"></div><div id="text">了解更多</div><div id="hitbox"></div></div>');
			$('#startbtmake').click(function() { 
				headv.html("<br><b>作者們</b>");
				downv.html('<a href="mailto:hank85627@gmail.com" target="_blank">本丸</a><br>企劃<br><br><a href="mailto:eeee2222345@gmail.com" target="_blank">陶淵明</a><br>資深工程師<br><br><a href="mailto:jadeliu.me@gmail.com" target="_blank">Jade Liu</a><br>遊戲企劃、美術<br><br>');
				downv.css("top","160");
			
			});
			$('#startbtmore').click(function() { 
				headv.html("<br><b>更多資訊</b>");
				downv.html('謝絕贊助<br>請多多關心這個社會<br>有很多值得你在意的事<br><br><br>分享請註明來源<br>不可用於商業用途');
				downv.css("top","160");
			
			});
		break;
	}
	$('.button').mouseenter(function() { 
		if($(this).attr('deactivated') != "yes")$(this).attr('hover','yes');
	});
	$('.button').mouseleave(function() { 
		$(this).removeAttr('hover');
	});
}
setTimeout(function(){go("-1");},15);