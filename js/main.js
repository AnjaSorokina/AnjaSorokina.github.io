document.addEventListener('DOMContentLoaded', function(){
  let burger=document.querySelector('.header__navigation-mini-wrapper'),
      menu=document.querySelector('.menu'),
      menuLink=document.querySelectorAll('.menu__link'),
      menuCloseBtn=document.querySelector('.menu__close-btn'),
      navBtn=document.querySelector('.header__search-btn'),
      searchContainer=document.querySelector('.search-container'),
      searchBtnPath=document.querySelector('.search-path'),
      searchBtnRect=document.querySelector('.search-rect'),
      searchContainerBtnClose=document.querySelector('.search-container__btn-close'),
      catalogBtn=document.querySelectorAll('.catalog__btn'),
      catalogBlock=document.querySelectorAll('.catalog__info-block'),
      submenuBtn=document.querySelectorAll('.submenu__button'),
      dropdownList=document.querySelectorAll('.dropdown-list'),
      contacts=document.querySelector('.contacts'),
      contactsBtn=document.querySelector('.contacts__btn');

  //  slider
  let heroSwiper = new Swiper('.hero-swiper', {
    slidesPerView: 1,
    loop: true,
    a11y: {
    paginationBulletMessage: 'Слайд номер {{index}}',
    },
    autoplay: {
      delay: 2000,
    },
    speed: 2000,
  });

  let gallerySwiper = new Swiper('.gallery-swiper', {
    loop: false,
    pagination: {
      el: '.gallery-swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    a11y: {
    paginationBulletMessage: 'Слайд номер {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    },
    navigation: true,
    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 38,
      },
      // when window width is >= 320px
      321: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }
  });

  let eventsSwiper = new Swiper('.events-swiper', {
    a11y: {
    paginationBulletMessage: 'Слайд номер {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    },

    navigation: true,
    navigation: {
      nextEl: '.events__swiper-button-next',
      prevEl: '.events__swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      671: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27,
      },
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
      }
    }
  });

  let projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: false,
    spaceBetween: 50,
    a11y: {
    paginationBulletMessage: 'Слайд номер {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    },
    navigation: true,
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      671: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }
  });

  // menu
  burger.addEventListener('click', function(){
    menu.classList.add('menu__is-active');
    document.body.classList.add('stop-scroll')
  });

  menuCloseBtn.addEventListener('click', function(){
    menu.classList.remove('menu__is-active');
    document.body.classList.remove('stop-scroll')
  });

  menuLink.forEach(function(el){
    el.addEventListener('click', function(){
      menu.classList.remove('menu__is-active');
      document.body.classList.remove('stop-scroll')
    });
  })

  //search
  navBtn.addEventListener('click', function(){
    searchContainer.classList.add('search-container--active');
    navBtn.style.visibility="hidden";
    searchBtnPath.classList.add('search-path--active');
    searchBtnRect.classList.add('search-rect--active');
  });

  searchContainerBtnClose.addEventListener('click', function(){
    searchContainer.classList.remove('search-container--active');
    navBtn.style.visibility="visible";
  });

  // accordion
  const accordion = new Accordion('.accordion-container', {
    // showMultiple: true,
    // collapse: true,
    openOnInit: [0],
  });

  // tabs
  catalogBtn.forEach(function(element) {
    element.addEventListener('click', function(e){
      const step = e.currentTarget.dataset.step;

      catalogBtn.forEach(function(btn){
        btn.classList.remove('catalog__btn--active');
      });
      e.currentTarget.classList.add('catalog__btn--active');

      catalogBlock.forEach(function(element){
        element.classList.remove('catalog__info-block--active')
      });

      document.querySelector(`[data-target="${step}"]`).classList.add('catalog__info-block--active');
    });
  });

  // submenu
  submenuBtn.forEach(function(element) {
    element.addEventListener('click', function(e){
      const btn = e.currentTarget;
      let step=btn.dataset.submenu_btn;
      if (btn.classList.contains('submenu__button--active')) {
        btn.classList.remove('submenu__button--active');
        document.querySelector(`[data-dropdown_list="${step}"]`).classList.remove('dropdown-list--active');
      }
      else {
        submenuBtn.forEach(function(btn){
          btn.classList.remove('submenu__button--active');
        });
        e.currentTarget.classList.add('submenu__button--active');

        dropdownList.forEach(function(element){
          element.classList.remove('dropdown-list--active');
        });
        document.querySelector(`[data-dropdown_list="${step}"]`).classList.add('dropdown-list--active');
      }
    });
  });

  //scrollbar
  new SimpleBar(document.querySelector('.dropdown-list__wrapper'));

  // select
  const galerySelect = document.querySelector('.js-choice');
  const choices = new Choices(galerySelect, {
  searchEnabled: false,
  shouldSort: false,
  position: 'bottom',
  itemSelectText: '',
  // renderSelectedChoices: "auto",
  });

  tippy('.marker', {
    theme: 'marker__prompt',
    maxWidth: 264,
  });

  //contacts section
  function contactsSection() {
    if (contacts.offsetWidth<=320) {
      contactsBtn.textContent='Заказать';
    }
    else {
      contactsBtn.textContent='Заказать обратный звонок';
    }
  }
  contactsSection();

  // phoneMask
  var telSelector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(telSelector);

  // form
  const validation = new JustValidate('.contacts__form');

  validation
    .addField('.input-name', [
      {
        rule: 'customRegexp',
        value: /^[а-яА-ЯёЁa-zA-Z]+$/,
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа',
      },
      {
        rule: 'maxLength',
        value: 25,
        errorMessage: 'Поле должно содержать не более 25 символов',
      },
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
      },
    ])

    .addField('.input-tel', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели телефон',
      },
      {
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Недопустимый формат',
      },
    ])

  // scroll
  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
        });
    });
  });

  (() => {
    const MOBILE_WIDTH = 768;

    function getWindowWidth () {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function scrollToContent (link, isMobile) {
      if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
        return;
      }

      const href = link.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
    }

    document.querySelectorAll('.js-scroll-link-mobile').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          scrollToContent(this, true);
      });
    });
  })();

  //map
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75846806898367,37.60108849999989],
        zoom: 15,
        controls: ['geolocationControl', 'zoomControl']
    },
    {
      geolocationControlFloat: 'none',
      geolocationControlPosition: {
        bottom: '310px',
        right: '18px'
      },
      zoomControlSize: 'small',
      zoomControlPosition: {
        bottom: '370px',
        right: '18px'
      }
    }
    );

    if (window.matchMedia("(max-width: 576px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    }

    myMap.behaviors.disable("scrollZoom");

    myMap.events.add("sizechange", function (e) {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        if (Object.keys(myMap.controls._controlKeys).length) {
          myMap.controls.remove('zoomControl');
          myMap.controls.remove('geolocationControl');
        }
      } else {
        if (!Object.keys(myMap.controls._controlKeys).length) {
          myMap.controls.add('zoomControl');
          myMap.controls.add('geolocationControl');
        }
      }
    });

    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/card-point.svg',
      iconImageSize: [20, 20],
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }
});
