 $("#login-button").click(function(event){
	if($('input[name="nom"]').val().length  > 0){
	 event.preventDefault();
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');}
});