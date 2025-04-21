var $holder = $(".holder");
var $list = $holder.find("ul.list");
var $clonedList = $list.clone();

var listWidth = $list.find("li").length * 200;
var endPos = $holder.width() - listWidth;

$list.add($clonedList).css({
	"width" : listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($holder);

//TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: false});
var time = 5;

infinite.fromTo($list, time, {left:0}, {left: -listWidth, ease: Linear.easeNone}, 0);
infinite.fromTo($clonedList, time, {left:listWidth}, {left:0, ease: Linear.easeNone}, 0);
infinite.set($list, {left: listWidth});
infinite.to($clonedList, time, {left: -listWidth, ease: Linear.easeNone}, time);
infinite.to($list, time, {left: 0, ease: Linear.easeNone}, time);

//Pause/Play
				
$holder.on("mouseenter", function(){
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});

//Show/Hide overflow
$("#ov").on("click", function(){
	$holder.removeClass("hide-overflow");
});

$("#oh").on("click", function(){
	$holder.addClass("hide-overflow");
});
