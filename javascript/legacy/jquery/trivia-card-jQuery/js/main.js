$(document).ready(() =>{
 $('.hint-box').on('click', ()=>{
   $('.hint').slideToggle(400);
 });

  $('.wrong-answer-one').on('click', ()=>{
    $('.wrong-answer-one').fadeOut('slow');
    $('.frown').show();
  });


  $('.wrong-answer-two').on('click', ()=>{
    $('.wrong-answer-two').fadeOut('slow');
    $('.frown').show();
  });


  $('.wrong-answer-three').on('click', ()=>{
    $('.wrong-answer-three').fadeOut('slow');
    $('.frown').show();
  });


  //6,7,8
  $('.correct-answer').on('click', ()=>{
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-answer-one').fadeOut('slow');
    $('.wrong-answer-two').fadeOut('slow');
    $('.wrong-answer-three').fadeOut('slow');
  });



});
