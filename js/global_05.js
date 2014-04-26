(function(){
            console.log('from body');
/* NAV ONLY */ 
            var $bar = $('#nav li');           
            /* $('.subCat').hide(); */
            $bar.mouseover(function(){
                  $(this).css({'background-color': '#000000', 'cursor': 'pointer'}).find('a').css('color', '#FFFFFF');
            });
            $bar.mouseout(function(){
                  $(this).css({'background-color': '#FFFFFF', 'cursor': 'arrow'}).find('a').css('color', '#000000');
            });
            $bar.bind('click', function(){
                  /* $(this).css('background-color', '#EEB00D'); */
                  var link_ = $(this).find('a').attr('href');
                  window.location.assign (link_);
                  return false;
            });
/* END NAV */
            
}()); 