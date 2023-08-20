const swiper = new Swiper('.swiper', {

    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });
 
    var showMoreButton = document.querySelector('.show-more-button');
    var hiddenCards = document.querySelectorAll('.card.hidden');

    showMoreButton.addEventListener('click', function () {
        hiddenCards.forEach(function (card) {
            card.classList.remove('hidden');
        });
        showMoreButton.style.display = 'none';
    });

