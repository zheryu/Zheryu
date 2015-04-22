$(document).ready(function() {
	$("#nav-toggle").click(function(){
		if ($(".sidebar-container").hasClass("sidebar-active")){
			$(".sidebar-container").removeClass("sidebar-active");
			$("#sidebar-button").removeClass("button-active");
			$(".page-wrapper").removeClass("wrapper-active");
			setTimeout(function(){
				$("body").removeClass("no-scroll");
			},300);
		}else{
			$(".sidebar-container").addClass("sidebar-active");
			$("#sidebar-button").addClass("button-active");
			$(".page-wrapper").addClass("wrapper-active");
			setTimeout(function(){
				$("body").addClass("no-scroll");
			},300);
		}		
	});
	
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here
	$("#carousel-next").click(function(){
		leftMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
		if(leftMargin > -3840){
			leftMargin = Math.max(leftMargin - 960, -3840);
			$('#carousel').css('margin-left', leftMargin + "px");
		}
	});
  //Implement the "slide to right" when the user clicks on #carousel-prev here
	$("#carousel-prev").click(function(){
		leftMargin = parseInt($("#carousel").css("margin-left").replace("px", ""));
		if(leftMargin < 0){
			leftMargin = Math.min(leftMargin + 960, 0);
			$("#carousel").css('margin-left', leftMargin + "px");
		}
	});


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here
	$("a").click(function(){
		$("body").removeClass("no-scroll");
		$('html, body').animate({scrollTop: $( $.attr(this, 'href')).offset().top}, 300);
		setTimeout(function(){
			$(".sidebar-container").removeClass("sidebar-active");
			$("#sidebar-button").removeClass("button-active");
			$(".page-wrapper").removeClass("wrapper-active");
		}, 300);
	});
});