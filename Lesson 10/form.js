$(document).ready(
    function(){
        $('#age').blur(
        function(){
            if (isNaN($(this).val()) || $(this).val() < 1
								|| $(this).val() > 100) {
                        age.value = "Only number from 1 to 100";
                        age.focus();

						} else {

							this.classList.remove("error");
                            home.focus();
						}
        });
   
        $('#Age').blur(
					function() {

						  if (isNaN($(this).val()) || $(this).val() < 1
								|| $(this).val() > 100) {
                        age.value = "Only number from 1 to 100";
                        age.focus();

						} else {

							this.classList.remove("error");
                            home.focus();
						}

					});
        
        $('#sendGEt').bind(
					'click',
					function() {
						$.ajax({
							type : "GET",

							contentType : 'application/json',
							url : 'http://localhost:3000/formGet?Name='
									+ $('#fname').val() + '&LastName='
									+ $('#lname').val() + '&age='
									+ $('#age').val() + '&address='
									+ $('#home').val(),
							success : function(data) {
								console.log('success');
								console.log(JSON.stringify(data));
							}

						})
					});
        $('#sendPost').bind('click', function() {
				$.ajax({
					type : "POST",
					data : JSON.stringify({
						lName : $('#lName').val(),
						fName : $('#fName').val(),
						age : $('#Age').val(),
						address : $('#Home').val()
					}),
					contentType : 'application/json',
					url : 'http://localhost:3000/userPost',
					success : function(data) {
						console.log('success');
						console.log(JSON.stringify(data));
					}

				})
			});
    });