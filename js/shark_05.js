(function(){
            console.log('from body');
/* NAV ONLY */ 
            var $bar = $('#nav li');           
            /* $('.subCat').hide(); */
            $bar.mouseover(function(){
                  $(this).css({'background-color': '#FFC322', 'cursor': 'pointer'}).find('a').css('color', '#000000');
            });
            $bar.mouseout(function(){
                  $(this).css({'background-color': '#333333', 'cursor': 'arrow'}).find('a').css('color', '#ABABAB');
            });
            $bar.bind('click', function(){
                  /* $(this).css('background-color', '#'); */
                  var link_ = $(this).find('a').attr('href');
                  window.location.assign (link_);
                  return false;
            });
/* SHARK NAV */
            
            var $sn = $('#sharkNav li');
            
            $sn.mouseover(function(){
                  $(this).css({'cursor': 'pointer'}).find('a').css('color', '#FFC322');
            });
            $sn.mouseout(function(){
                  $(this).css({'cursor': 'pointer'}).find('a').css('color', '#ABABAB');
            });
            $sn.bind('click', function(){
                  /* $(this).css('background-color', '#'); */
                  var sLink_ = $(this).find('a').attr('href');
                  window.location.assign (sLink_);
                  return false;
            });
             
            
}()); 
