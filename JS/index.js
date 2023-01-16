// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library
// $ => object include all  Jquery methods
//("#demo") // Jquery Selector
//hide() => Effect
//(4000) => duration => 4s

/*
Jquery Effects

$("#demo").hide(5000);
$("#demo").show(1000);
$("#demo").toggle(1000);


$("#demo").slideDown(1000);
$("#demo").slideUp(1000);
$("#demo").slideToggle(1000);

$("#demo").fadeOut(3000);
$("#demo").fadeIn(3000);
$("#demo").fadeToggle(3000);
$("#demo").fadeTo(2000 , 0.5 );

callback();

//chaining 
$("#demo").slideUp(1000).slideDown(1000).hide(1000);

 $("#demo").animate( {width:'100%'} , 2000);
   $("#demo").stop();
*/



/*
Jquery HTML
.text()//setters & getters
.html()//setters & getters
.val();//Input 
.attr();//html attribute => src , href , id .attr("src" ,"asas");
.css("color");//css property font-size , marign , padding

.addClass();
.removeClass();
.toggleClass();

.after();
.before();

.append();
.prepend();

.remove();
.empty();
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing

$("#demo").next()
$("#demo").prev()
$("#demo").prevAll()
$("#demo").nextAll()

$("#demo").nextUntil()
$("#demo").prevUntil()
$("#demo").siblings()



$("#demo").parent()
$("#demo").parents()
$("#demo").parentsUntil()

$("#demo").children()
$("#demo").find("span")
$("span").eq(5)
*/
let about = $("#about").offset().top;

$(window).scroll(function()
{
  let wScroll = $(window).scrollTop();
  

  if(wScroll > about-50)
  {
    $("#main-nav").css("backgroundColor","rgba(0,0,0,0.7)",500);
    $("#btnUP").fadeIn(500);
  }
  else
  {
    $("#main-nav").css("backgroundColor","transparent",500);
    $("#btnUP").fadeOut(500);
  }
}
)
$("#btnUP").click(function()
{
  $("html,body").animate({scrollTop :0} , 1000)
});
  

$("a[href^='#']").click(function()
{
  let aHref = $(this).attr("href");
  let sectionOffset= $(aHref).offset().top;
  $("html,body").animate({scrollTop :sectionOffset} , 1000)

}
)
let widthColorBare = $("#colorBare").innerWidth();
$("#clickBare").click(function()
{
  if($("#slideBare").css("left")=="0px")
   {
    $("#slideBare").animate({left:`-${widthColorBare}`} , 1000);
   }
   else
   {
    $("#slideBare").animate({left:'0px'} , 1000);
   }
})

for (let i = 0; i < $(".colorItems").length; i++) {

  let red =Math.round(Math.random()*255);
  let green =Math.round(Math.random()*255);
  let blue =Math.round(Math.random()*255);

  $(".colorItems").eq(i).css("backgroundColor" ,`rgb(${red},${green},${blue})`);
  
}

$(".colorItems").click(function()
{
  let color1= $(this).css("backgroundColor");
  $(".change").css("color", color1);
}
)

$(document).ready(function()
{
  $("#loadingScreen").fadeOut(1000,function()
  {
    $("body").css("overflow","auto");
  }
  );
}
)