$(document).ready(function(){

	var liArr = $('li');
	var len = liArr.length;
	var deviceHeight = document.documentElement.clientHeight;
	//遮罩层
	$('.main .contain .mask').css({
		'position': 'fixed',
		'left':0,
		'top':'2.75rem',
		'backgroundColor': 'rgba(200, 200, 200, 0.335)',
		'height': deviceHeight,
		'display':'none'
	})	

	//点击按钮切换
	$('button').on('click',function(){	
		targetClick();
	})
	//侧栏出现后点击链接后让侧栏隐藏
	$('a').on('click',function(){	
		targetClick();
	})
	////侧栏出现后点击内容区后让侧栏隐藏
	$('.contain').on('click',function(){
		if($('.nav').hasClass('change_o') ){
			targetClick();
		}
	})
	
	var targetClick = function(){
		// 切换侧栏之前判断当前状态
		if( $('.nav').hasClass('change_L') ){
			$('.nav').removeClass('change_L');
			$('.nav').addClass('change_o');
			// 侧栏出现后让内容区头部跟着右移
			$('.main .header').css({
				left:'50%',
				transition: 'all 1s ease'
			})
			//遮罩层展示出来
			$('.main .contain .mask').css('display','block');
			//同时内容区禁止滑动
			document.body.style.overflow = 'hidden';
			//侧栏列表依次出场
			for( var i = 0;i<len;i++ ){
				liArr[i].style.transform = 'translate(0)';
				liArr[i].style.transitionDelay = '0.2s';
				liArr[i].style.transitionDuration = (len-i) * 0.15 + 's';
			}
		}else  if( $('.nav').hasClass('change_o') ){
			// 侧栏隐藏，内容区才能够滑动
			document.body.style.overflow = 'visible';
			// 内容区头部回到左上角
			$('.main .header').css({
				left: 0,
				transition: 'all 1s ease'
			})

			$('.nav').addClass('change_L');
			$('.nav').removeClass('change_o');

			//遮罩层
			$('.main .contain .mask').css('display', 'none');
			//侧栏列表延迟退场
			for( var i = 0;i<len;i++ ){
				liArr[i].style.transform = 'translate(-100%)';
				liArr[i].style.transitionDelay = '';
				liArr[i].style.transitionDuration = (len-i)  * 0.15 + 's';

			}
		}

	}
})