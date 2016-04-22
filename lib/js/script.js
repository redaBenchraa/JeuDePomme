	var check = 0;
      $(function () {
        $('button').bind('click', function (event) {
			if($('input[name="nom"]').val().length  > 0){
		          /*$.ajax({
		            type: 'POST',
		            url: 'p.php',
		            data: $('form').serialize().concat('&ch=').concat(check),
		            success: function () {
		   				$(".s").css('display', 'block');
		   				var res = $('form').serialize().split('&');
		   				$(".ss").append("Merci " + res[0].split('=')[1] + " " + res[1].split('=')[1] );
		   				myClick();
		            }
		          });*/
        				$(".s").css('display', 'block');
		   				var res = $('form').serialize().split('&');
		   				$(".ss").append("Hello "+res[0].split('=')[1]+" ,please Wait for the admin <br>to start the game ");
		   				window.setInterval(function(){
		   					myClick();
		   				},2000)
		}
        });
      });


    function myClick() {
    	/*$.ajax({
		            type: 'POST',
		            url: 'p.php',
		            data: $('form').serialize().concat('&ch=').concat(check),
		            success: function () {
		   				if() window.location("");
		            }
		          });*/
	}
