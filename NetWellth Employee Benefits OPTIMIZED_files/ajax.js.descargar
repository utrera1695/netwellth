// import Config from '../config';

function onloadCallback() {
    var recaptchas = document.querySelectorAll('div[class=g-recaptcha]');
    grecaptcha.render('html_element', {
        'sitekey': '6LcIXYsUAAAAAP8IiM41yaAUTTq9gf19T8JrgH8_'
    });

}
$(document).ready(function () {
    $("#contact_us").submit(function(e) {
        e.preventDefault(); 
         var selectedOptions = [];
            $.each($("input[name='radio_btn']:checked"), function(){            
                selectedOptions.push($(this).val());
            });
        var email = $('#email_info').val();
        var message = $('#message_info').val();
        if (email == "" || message == "") {
            alert("Please Fill All Fields");
        }
        else if (grecaptcha.getResponse().length == 0) {

            alert('Please click the reCAPTCHA checkbox');

            return false;
        }
        else {
            var formData = 'selectedOptions=' + selectedOptions + 'email=' + email + 'message=' + message;
            var data = {
                "selectedOptions": selectedOptions,
                'email' : email,
                'message' : message
              };
            console.log(formData);

            $.ajax({
                type: "POST",
                dataType: "json",
                url: 'mail/contact_me.php',
                data: data,
                success: function (data) {
                    console.log(data)
                    if(data.success)
                        alert("Mail Sent Successfully!!!");
                }
            });
        }
    });
    

    $("#banner-sub").on("click", function(){
        var email = $('#email_sub').val();
        $("#InputEmail").val(email);
        
        if(email !=""){

            var data = {
              'email' : email,
            };

            $.ajax({
                type: "POST",
                dataType: "json",
                url: 'mail/wellth_letter_mail.php',
                data: data,
                success: function (data) {
                    console.log(data)
                    
                    
                }
            });
        }
    
    });

    $("#wellth_letter").submit(function(e) {
        e.preventDefault();
        var email = $('#email_sub').val();
        if (email =="") {
            $('#alert').show();
        }
        else {
            var data = {
                'email' : email,
              };
             console.log(data);
           /*     
            $.ajax({
                type: "POST",
                dataType: "json",
                url: 'insert_mail.php',
                data: data,
                success: function (data) {
                    if(data.success)
                     $('#alert_popup').show();
                }
            });
            $.getScript('config.json', function(json_data)
            {
                var obj = JSON.parse(json_data);
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: obj.BASE_API_URL+'/non-auth/lead/new',
                    data:  $.extend({}, data, {company: obj.company, status_type: 'lead'}),
                    success: function (data) {
                        if(data && data._id)
                            $('#alert_popup').show();
                    }
                });
            });

            */
             $.ajax({
                type: "POST",
                dataType: "json",
                url: 'mail/wellth_letter_mail.php',
                data: data,
                success: function (data) {
                    console.log(data)
                $('#wellthModal').modal('show');             
                }
            });
            e.preventDefault();
        }
    });

    $(".btn_close").click(function(e) {
       $("#alert").hide();
       $("#alert_popup").hide();
    });
});