/*
PRIMER CODIGO (JQUERY SETUP CODECADEMY)
$(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');

  $menuButton.on('click', () => {
    $navDropdown.show();
  })

  $navDropdown.on('mouseleave', () => {
    $navDropdown.hide();
  })
})
*/

/*   SECOND PART
$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').show();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })

  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })

});
*/



$(document).ready(() => {

  $('.shoe-details').show();

  $('.more-details-button').on('click', event => {

  });

  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    $('.shoe-details').children().removeClass('disabled');
    $(event.currentTarget).siblings().removeClass('active')


  });



  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})
