$(document).ready( function() {

	hideThemAll();

});

$(window).load(function() {

	hideThemAll();

});


function hideThemAll() {

	// washington post
	if ( $(".echo-apps-conversations-allPostsContainer") ) { $(".echo-apps-conversations-allPostsContainer").hide() }

	if( $("#commenting") ) { $("#commenting").css("display", "none"); }

	if( $(".comments-view") ) { $(".comments-view").hide(); }

	if( $("#disqus_thread") ) { $("#disqus_thread").hide(); }

	if( $("#showComments") ) { $("#showComments").hide(); }

	if( $(".commentlist-wrap") ) { $(".commentlist-wrap").css("display", "none"); }

	if( $("#js_discussion-region") ) { $("#js_discussion-region").hide(); }

	if( $(".fyre") ) { $(".fyre").hide(); }

}
