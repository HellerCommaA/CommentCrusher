$(document).ready( function() {

	hideThemAll();

});

$(window).load(function() {

	hideThemAll();

});


function hideThemAll() {

	// facebook iframe
	if( $(".comments-embed") ) { $(".comments-embed").hide(); }

	// generic comments -- may be buggy, not very specific.
	if( $("#comments-container") ) { $("#comments-container").hide(); }

	// washington post
	if( $(".echo-apps-conversations-allPostsContainer") ) { $(".echo-apps-conversations-allPostsContainer").hide() }

	if( $("#commenting") ) { $("#commenting").css("display", "none"); }

	if( $(".comments-view") ) { $(".comments-view").hide(); }

	if( $("#disqus_thread") ) { $("#disqus_thread").hide(); }

	if( $("#showComments") ) { $("#showComments").hide(); }

	if( $(".commentlist-wrap") ) { $(".commentlist-wrap").css("display", "none"); }

	if( $("#js_discussion-region") ) { $("#js_discussion-region").hide(); }

	if( $(".fyre") || $("#fyre")) { $(".fyre").css("display", "none"); $("#fyre").css("display", "none"); }

}
