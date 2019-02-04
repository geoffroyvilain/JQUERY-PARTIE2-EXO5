$(function(){
  //QUAND LE CHAMP DE LA SOURIS A LE FOCUS ON EXECUTE
  $('#lastName, #firstName').focus(function(){
    $(this).css('border', '1px solid green');
  });
  //QUAND LE CHAMP DE LA SOURIS N EST PLUS FOCUS
  $('#lastName, #firstName').blur(function(){
    $(this).css('border', '1px solid red');
  });
});
/*
$(function(){
  $('#lastname').mousseenter(function(){
    $('#lastname').css('border', '1px solid green');;
    $('#lastname').mousseleave(function(){
      $('#lastname').css('border', '1px solid red'});;
  });
});
});
*/
