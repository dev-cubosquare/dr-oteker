jQuery(function($){
    var dismissible = $('.dismissible');

    if(dismissible.length){
      dismissible.each(function(){
        var close = $('<i />').addClass('fa fa-multiply close').click(function(){
          $(this).parent().fadeOut();
        });
        $(this).append(close);
      });
    }


});