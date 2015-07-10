
console.log("extension loaded");

// hideThemAll();

// $(document).ready( function() {

// 	hideThemAll();

// });

$(window).load(function() {

	hideThemAll();

});



// $(window).onLoad( function() {

// 	console.log("window load loaded");

// 	hideThemAll();

// 	return 0;

// });


function hideThemAll() { 

	console.log("hideThemAll executing");

	// while(true) {

	try {

		$("#commenting").css("display", "none");

	} catch (e) { }
	
	try {

		$(".comments-view").hide();

	} catch (e) { }

	try {

		$("#disqus_thread").hide();

	} catch(e) { }

	try {

		$("#showComments").hide();

	} catch(e) { }


	// $("#comments-view").hide();

	// $(".comments-marginalia").hide();

	

	// $(".comment").hide();

	// $("#comment").hide();

	// }
	

}