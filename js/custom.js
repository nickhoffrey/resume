$(function(){
	$(".toggle-fullscreen").on("click", function(){

		if(location.hash == "#open"){
			$(".toggle-fullscreen").attr("href", "#close");
		}
		else {
			$(".toggle-fullscreen").attr("href", "#open");
		}

	});

	setInterval(
		function(){
			$(".toggle-fullscreen").removeClass("pulse");
			$(".toggle-fullscreen").addClass("pulse");
		},
		3000
	);


	$("a[data-toggle='tab']").on("shown.bs.tab", function (e) {

		$(".tab-pane").removeClass("fadeIn");
		$(".tab-pane").removeClass("animated");
		$("#" + $(e.target).attr("aria-controls")).addClass("fadeIn");
	});



});


hashChange();
$(window).on('hashchange',function(){ 
	hashChange();
});

function hashChange(){

	if(location.hash == "#open"){
		$("#intro").removeClass("col-md-12");
		$("#intro").addClass("col-md-3");
	}
	else if(location.hash == "#close") {
		$("#intro").removeClass("col-md-3");
		$("#intro").addClass("col-md-12");
	}
}

//Profile buttons
$('#rock-star').mouseover(function() {
	$('#img-circle-profile').attr('src','img/profile2.jpg');
});

$('#rock-star').mouseleave(function() {
	$('#img-circle-profile').attr('src','img/profile.jpg');
});

$('#submarine').mouseover(function() {
	$('#img-circle-profile').attr('src','img/profile3.jpg');
});

$('#submarine').mouseleave(function() {
	$('#img-circle-profile').attr('src','img/profile.jpg');
});

$('#techlead').mouseover(function() {
	$('#img-circle-profile').attr('src','img/profile4.jpg');
});

$('#techlead').mouseleave(function() {
	$('#img-circle-profile').attr('src','img/profile.jpg');
});
