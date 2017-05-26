$(function () {
   var pictrue=$('.pictrue');
   $(window).on('scroll',function () {
      // console.log($(this).scrollTop())
      if($(this).scrollTop()>=pictrue.position().top-400){
        $('.pictrue li').css({opacity:1})
      }
   })

    
})
// $(function () {
   // var block=$('.foot-t');
   // var block2=$('.foot-t2');
   // //先判断
   // if($('.foot-li').innerWidth()<=770){
   //    block.detach();
   //    $('.foot-li').prepend(block2);
   // }else{
   //    $('.foot-li').prepend(block);
   //    block2.detach();
   // }
   //窗口尺寸改变时判断
   // $(window).resize(function () {
   //    if($('.foot-li').innerWidth()<=770){
   //       block.detach();
   //       $('.foot-li').prepend(block2);
   //       //窗口尺寸改变时，xiala事件已加载完成，需要再写一次
   //       $('.xiala').css({disply:none});
   //       $('.foot-t2 li').not($('.xiala')).click(function () {
   //          // alert(1);
   //          $(this).find($('.xiala')).toggle();
   //          $(this).find(mark).toggleClass('mark2')
   //       })
   //    }else{
   //       $('.foot-li').prepend(block);
   //       block2.detach();
   //    }
   // })
//下拉  ???????????not()
//    $(function(){
//       var mark=$('.foot-t2 span');
//       $('.xiala').hide();
//       $('.foot-t2 li').not($('.xiala')).click(function () {
//          $(this).find($('.xiala')).toggle();
//          $(this).find(mark).toggleClass('mark2')
//       })
//    })
   //搜索
   $(function(){
      var sousuo=$('.header li:nth-last-child(2)');
      var seach=$('.seach');
      var hd=$('.header');
      var mask=$('.mask');
      sousuo.on('click',sousuo.find('a'),function(){
         hd.addClass('se');
         mask.css({display:'block'});
         $('.header li:not(:first):not(:last)').addClass('scale');
         $('.header li:last').find('a').addClass('close');
      })
     var close=$('.header li:last').find('a');
         close.click(function(){
            hd.removeClass('se');
            mask.css({display:'none'});
            $('.header li:not(:first):not(:last)').removeClass('scale');
            $('.header li:last').find('a').removeClass('close');
     })


   })
//配合css的事件
$(function () {
   var dts=$('.foot-t dt');
      dts.click(function () {
      $(this).toggleClass('XX');
      $(this).next('div').toggleClass('bao');
})
})
//banner  按钮
$(function () {
   function anniu() {
      var LL=$('.LL');
      var RR=$('.RR');
      var cw=$('.box').width();
      // console.log(cw);
      var w=cw*0.2;
      // var ch=$('.box').height();
      LL.hide();RR.hide();
      //mouseover事件
      $('.banner').on('mousemove',function (e) {
         if(e.pageX<=w){
            LL.show();
            // console.log(e.pageX);
         }else{
            LL.hide();
         }
         if(e.pageX>=cw-w){
            RR.show();
            // console.log(e.pageX);
         }else{
            RR.hide();

         }
   })
      $('.banner').on('mouseout',function () {
         LL.hide();RR.hide();
      })
   }
anniu();
   $(window).resize(function () {
      anniu();
   })
})
//小屏搜索栏
$(function () {
   var btn=$('.towul p');
   var span1=btn.find('.sl');
   var span2=btn.find('.xl');
   var brad=$('.brad');
   btn.on('click',function () {
      span1.toggleClass('cha');
      span2.toggleClass('cha2');
      brad.slideToggle();
      brad.find('li').toggleClass('br');
      brad.find('ul').removeClass('go');
      brad2.removeClass('brad2');
   })
   var li=$('.brad li').last();
   var brad2=$('.brad2');
   li.click(function () {
      brad.find('ul').addClass('go');
      brad2.toggleClass('brad2');
   })
})

// 小屏右侧搜索
$(function(){
   var btns=$('.thebtn');
   btns.click(function(){
      btns.find('div').toggleClass('home')
   })
})
//banner轮播
$(function () {
   $(document).on('mousedown',false);
   var items=$('.box a');
   var state={current:0,next:null};
   var L=$('.LL');
   var R=$('.RR');
   var lis=$('.point li');
   var xian=$('.xian');
   function move(){
      items.removeClass('zo zi yi yo');
      // console.log(xian.eq(2));
      xian.css({width:0});
      xian.removeClass('show');
      state.next=(state.current+1)>2?0:state.current+1;
      items.eq(state.current).addClass('zo');
      items.eq(state.next).addClass('yi');
      xian.eq(state.next).animate({width:'100%'});
      state.current=state.next;

   }
   // setInterval(prev,2000);
   function prev(){
      items.removeClass('zo zi yi yo');
      state.next=(state.current-1)<0?2:state.current-1;
      items.eq(state.current).addClass('yo');
      items.eq(state.next).addClass('zi');
      state.current=state.next;
      xian.css({width:0});
      xian.eq(state.next).animate({width:'100%'});
   }
   L.click(function () {
      prev();
      flag=false;
   })
   R.click(function () {
     move();
      flag=false;
   })
   //控制次数的时间函数
   function howgo(num,fn) {
      var control=0;
      var t=setInterval(function(){
         fn();
         control++;
         if(control==num){
            clearInterval(t);
            return;
         }
      },800);
   }
   lis.on('click',function () {
      flag=false;
      var i=$(this).index();
      var num=Math.abs(i-state.current);
      if(i-state.current>0){
         howgo(num,move)
      }else if(i-state.current<0){
         howgo(num,prev)
      }
   })
   //开始
   var flag=true;
  var show=$('.point .show');
   show.animate({width:'100%'});
   var autoMove=setInterval(function () {
      // console.log(flag);
      if(!flag){
         clearInterval(autoMove);
         return;
      }
      move();
   },2000)
})
// $(function () {
//    function test (a){
//       return a++;
//    }
//    var a=10;
//    var b=test(a)
//    console.log(a)
//    console.log(b)
//
//
// })

