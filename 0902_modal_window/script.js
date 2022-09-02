$(document).ready(function(){

$('.btn').click(function() {

    var mtitle = $(this).attr('data-title');
    var mcont = $(this).attr('data-font');

    $( '#modaltitle' ).text( mtitle );
    $( '#modalbody' ).text( mcont );

    // $("#modal").show();
    // .btn을 클릭하면 #modal를 보여줘라

    $( '#modal' ).slideDown(800,'linear');

    // $( "#modal" ).fadeIn( 1000, 'linear' );
 
})

$('#modalclose').click(function() {

    // $("#modal").hide();
    // #modalclose을 클릭하면 #modal를 숨겨라

    // $( '#modal' ).slideUp(800 ,'swing');

    // $("#modal").animate(
    //     {
    //        left:"100%",

    //     }, 1000);

    // $( "#modal" ).fadeOut( 1000, 'swing' );

    $('#modal').slideUp({},800,function(){
		$( "#modal" ).fadeOut(1000, 'swing');
	});
 
})

});