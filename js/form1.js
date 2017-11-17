/*// JavaScript File
$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/bechkalor@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
        dataType: "json"
    }).done(function(){
        $('form')[0].reset();
      
    });
}
   */
   $(function(){
    $('form input[type=submit]').click(function(e){
        if(!$('form')[0].checkValidity()){
             return;
        }
        e.preventDefault();
         $.ajax({
            url: "https://formspree.io/bechkalor@gmail.com",
            method: "POST",
            data: { 
               name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
                
            },
            dataType: "json"
        
        }).done(function(){
        $('form')[0].reset();
      
    });
        
    })
    
    
})