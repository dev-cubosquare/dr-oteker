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

    var gallery = $('.the-gallery');

    // check if gallery exists
    if(gallery.length){

      // add click event to all gallery items
      gallery.find('.gallery-item').click(function(){
        var img = $(this).find('img');
        var src = img.attr('src');
        var alt = img.attr('alt');
        var title = img.attr('title');

        $('#single-image-modal').remove();

        // create modal
        var modal = $('<div />').attr('id', 'single-image-modal').addClass('modal').css('display', 'none');
        var modalContent = $('<div />').addClass('modal-content');
        var modalImage = $('<img />').attr('src', src).attr('alt', alt).attr('title', title);
        var modalClose = $('<i />').addClass('fa fa-multiply close').click(function(){
          modal.fadeOut(200, function(){
            modal.remove();
        });

        });

        // append elements to modal
        modalContent.append(modalImage);
        modalContent.append(modalClose);
        modal.append(modalContent);

        // append modal to body
        $('body').append(modal);

        // fade in modal
        modal.fadeIn(200);

    });
  }


});