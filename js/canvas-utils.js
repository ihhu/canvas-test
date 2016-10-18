!function(w,d,undefined){
	w.utils={}
	w.utils.captureMouse=function(ele){
		var mouse={x:0,y:0};
		ele.addEventListener("mousemove",function(e){
			var x,y;
			e=e||w.event;
			
			x=e.pageX||e.clientX+d.body.scrollLeft+d.documentElement.scrollLeft
			y=e.pageY||e.clientY+d.body.scrollTop+d.documentElement.scrollTop;
			
			mouse.x=x;
			mouse.y=y;
		},false);
		return mouse;
	}
	
	w.utils.captureTouch=function(ele){
		var touch={x:null,y:null,isPressed:false,event:null}
		
		var bodyScrollLeft=document.body.scrollLeft,
			bodyScrollTop=document.body.scrollTop,
			elementScrollTop=document.documentElement.scrollTop,
			elementScrollLeft=document.documentElement.scrollLeft,
			offsetLeft=element.offsetLeft,
			offsetTop=element.offsetTop;
			
		ele.addEventListener("touchstart",function(event){
			touch.isPressed=true;
			touch.event=event;
		},false);
		ele.addEventListener("touchend",function(event){
			touch.ispressed=false;
			touch.x=null;
			touch.y=null;
			touch.event=event;
		},false);
		ele.addEventListener("touchmove",function(event){
			var x,y,touchEvent=event.touches[0];
			
			if(touchEvent.pageX||touchEvent.pageY){
				x=touchEvent.pageX;
				y=touchEvent.pageY;
			}else{
				x=touchEvent.clientX+bodyScrollLeft+elementScrollLeft;
				y=touchEvent.clientY+bodyScrollTop+elementScrollLeft;
			}
			x-=offsetLeft;
			y-=offsetTop;
			
			touch.x=x;
			touch.y=y;
			touch.event=event;
			
		},false)
		
		return touch;
	}
	
	
	
	//动画
	w.requestAnimationFrame=w.requestAnimationFrame||w.webkitRequestAnimationFrame||w.mozRequestAnimationFrame||w.msRequestAnimationFrame||w.oRequestAnimationFrame||function(callback){return w.setTimeout(callback,1000/16)};
	//取消动画
	w.cancelAnimationFrame=w.cancelAnimationFrame||w.cancelRequestAnimationFrame||w.webkitCancelAnimationFrame||w.webkitCancelRequestAnimationFrame||w.mozCancelAnimationFrame||w.mozCancelRequestAnimationFrame||w.msCancelAnimationFrame||w.msCancelRequestAnimationFrame||w.oCancelAnimationFrame||w.oCancelRequestAnimationFrame||w.clearTimeout;
}(window,document)



