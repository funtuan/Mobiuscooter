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
	backsec(6);
	$('.button').click(function() { 
		if($(this).attr('deactivated') != "yes"){
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
			bgCover("https://i.imgur.com/psOsFEp.gif");
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
					if($(this).attr('deactivated') != "yes")if($(this).attr('id') == "startbt3"){
						like(1);
						headv.html("");
						downv.html("");
						btv.html('');
						setTimeout(function(){runlu(0)},500);
					}
					if($(this).attr('deactivated') != "yes")if($(this).attr('id') == "startbt4"){
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
			headv.html("<br><b>到底該如何左轉</b>");
			downv.html("<br>兩段式左轉的問題存在已久<br>近年來更是不少廢除的聲浪<br>但廢除與否仍有正反兩方支持<br><br>支持廢除者認為：<br>機車的車速可以跟上汽車，且當年參考日本所設立的兩段式待轉，在日本只有50cc以下的車型需要遵守，一般重型機車並不需要執行待轉。<br>除了動線混亂外，小條的馬路待轉區容易造成事故，且車流量大時更易堵塞。<br><br>反對廢除者認為：<br>日本的機車數量少於台灣甚多，且考慮到駕駛人素質問題，及可能隨時衝出來的人、車、其他動物，讓機車待轉不與汽車爭道才是安全的作法，預防勝於治療。<br><br>");
			downv.css("top","80");
			btv.html('<div id="startbtpage"  class="object button" style="left: 382px; top: 450px;"><div id="background"></div><div id="text">繼續</div><div id="hitbox"></div></div>');
			$('#startbtpage').click(function() { 
				headv.html("<br><b>到底該如何左轉-2</b>");
				downv.html("<br><br>2017年5月「公共政策網路參與平臺」出現「機車應解除強制二段式左轉」的提案，並吸引5397人附議通過。交通部回應表示，多數地方政府認為不應廢除，但可「因地制宜」進行評估。<br><br>那到底廢除或不廢除哪個比較好呢？現在也沒有一個正確解答。<br>最主要原因在南北、城鄉的用路習慣及車流量存在差異。<br><br>想更加了解差異點的原因在哪？<br><br>請分享我們的遊戲<br>達到一定數量即可解鎖十字路口沙盒模式");
				btv.html('<div id="startbtmake" class="object button" style="left: 275px; top: 450px;"><div id="background"></div><div id="text">關於作者</div><div id="hitbox"></div></div><div id="startbtmore" class="object button" style="left: 495px; top: 450px;"><div id="background"></div><div id="text">FB分享</div><div id="hitbox"></div></div>');
				$('#startbtmake').click(function() { 
					headv.html("<br><b>作者們</b>");
					downv.html('<a href="mailto:hank85627@gmail.com" target="_blank">本丸</a><br>企劃<br><br><a href="mailto:eeee2222345@gmail.com" target="_blank">陶淵明</a><br>資深工程師<br><br><a href="mailto:jadeliu.me@gmail.com" target="_blank">Jade Liu</a><br>遊戲企劃、美術<br><br>感謝大家的試玩<br>做這個遊戲是憑著一股熱血<br>希望可以有更多人可以關心社會議題');
					downv.css("top","100");
				
				});
				$('#startbtmore').click(function() { 
					window.open('http://www.facebook.com/share.php?u=https://funtuan.github.io/Mobiuscooter/' );
				
				});
				$('.button').mouseenter(function() { 
					if($(this).attr('deactivated') != "yes")$(this).attr('hover','yes');
				});
				$('.button').mouseleave(function() { 
					$(this).removeAttr('hover');
				});
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
$(window).load(function(){
	setTimeout(function(){go("-1");},100);
}