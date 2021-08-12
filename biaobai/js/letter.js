
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Dear&nbsp;&nbsp;Baby", 
				"亲爱的宝贝：<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先和你道个歉，对不起，亲爱的，我骗了你，还是给你买了一个玩偶，我觉得第一次过一个七夕，还没有在一起，又没有礼物，别人都有你没有，心里还是有点不舒服的，虽然我不知道这个你喜不喜欢，我看了好多，有熊，有别的，想买来着但是觉得有点太普通了，就买了这个鸭子，我不在你可以骑它，嘿嘿嘿。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我觉得在每个女生的生活里，必须要有一个大玩偶，这个也不知道你喜不喜欢，不喜欢老公以后给补上。[亲亲]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为我的女朋友，别人有的，我的宝贝也得有，过去没有的老公给补上，从一岁到22岁，一定都给补上，以另一种方式参与进你以前的生活吧。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实我也看过其他的各种礼物，比如口红，化妆品，包包，衣服等等，但是我犹豫了好久，本来呢想买化妆品然后那天视频你告诉我你买了，我又想买口红，可是我不知道哪个色号适合我的宝贝，包包和衣服怕我的眼光和宝贝不一样，所以出此下策，才买了这个玩偶，希望宝贝能够喜欢。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是请不要伤心呀，宝贝，口红的色号我在慢慢的了解，会不让你知道的了解，然后给你惊喜，包包和衣服老公也正在了解，在以后的日子里，你会陆续收到我自己给你挑选的礼物，不会再请求你的意见了，更为重要的是，我会憋住不告诉你，每次买东西都情不自禁的和你说了，这可不太行，以后我会坚持住的，嘿嘿。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们在一起的第一个七夕，由于我要实训上课再加上疫情还要考研复习，都让我没有办法和你在一起，等过了这一年，我们天天在一起，每天都是七夕！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宝贝，我还是要和你说对不起的，因为少了一束鲜花，本来我想美团呀买的但是送不到，这个七夕你就少了一束鲜花以后补给你，嘿嘿，爱你哟，我的宝贝。[亲亲]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个你一个我，一颗心不松手；不转身在一起一辈子，这就是我想要的爱情 希望以后和你的生活温柔 有趣 不必太激烈 三餐 四季 不必太匆忙 毕竟我有一生的时间和你在一起。[玫瑰]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;七夕快乐，我的宝贝。每天我都会很爱你。<br><br><p style='float:right; display:block; width:80px;'>你的老公</p>"],
			typeSpeed: 50,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
