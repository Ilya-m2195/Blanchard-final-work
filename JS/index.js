document.addEventListener('DOMContentLoaded', function () {


  /* burger-menu*/

  let burger = document.querySelector('.header__burger-btn');
  let header = document.querySelector('.header');
  let navItem = document.querySelectorAll('.header-nav__item');

  burger.addEventListener('click', function () {
    header.classList.toggle('open');
    document.body.classList.toggle('stop-scroll');
  });

  navItem.forEach(function (element) {
    element.addEventListener('click', function () {
      header.classList.remove('open');
      document.body.classList.remove('stop-scroll');
    });
  });

/* search */

const searchBlock = document.querySelector('.header__search');
const headerOpenBtn = document.querySelector('.header__search-open-btn');
const close = document.querySelector('.header__search-close');

headerOpenBtn.addEventListener('click', function() {
  searchBlock.classList.add('header__search--active');
  headerOpenBtn.classList.add('header__search-open-btn--active');
});

close.addEventListener('click', function() {
  searchBlock.classList.remove('header__search--active');
  headerOpenBtn.classList.remove('header__search-open-btn--active');
});

  /* header navigation links */

  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 250,
    framesCount = 25;

  anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      let coordY = document.querySelector(item.getAttribute('#href')).getBoundingClientRect().top + window.pageYOffset;

      let scroller = setInterval(function () {
        let scrollBy = coordY / framesCount;

        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {

          window.scrollBy(0, scrollBy);
        } else {

          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    });
  });

  /* menu */

  const menu = document.querySelector('.menu');
  const button = document.querySelectorAll('.menu__btn');
  const item = document.querySelectorAll('.menu__item');

  menu.addEventListener('mouseenter', function () {
    menu.classList.add('menu--active');
  });

  menu.addEventListener('mouseleave', function () {
    menu.classList.remove('menu--active');
  });

  button.forEach(btnElement => {
    btnElement.addEventListener('click', function (event) {
      item.forEach(itemElement => {
        if (itemElement.querySelector('.menu__btn') !== btnElement) {
          itemElement.classList.remove('menu__item_is-open');
        };

      });
      event._isClick = true;
      btnElement.parentElement.classList.toggle('menu__item_is-open');
    });
  });

  document.body.addEventListener('click', function (event) {
    if (event._isClick === true ||
      event.target.classList.contains('menu__btn') === true ||
      event.target.classList.contains('drop-menu') === true) {
      return;
    };

    let item = document.querySelectorAll('.menu__item');
    item.forEach(itemElement => {
      itemElement.classList.remove('menu__item_is-open');
    });
  });

  /* menu skroll */

  Array.prototype.forEach.call(
    document.querySelectorAll('.drop-menu'),
    (el) => new SimpleBar(el)
  );

  /* hero swipper */

  new Swiper('.hero__swiper', {

    autoplay: {
      delay: 4000,
    },
    speed: 1000,
  
    loop: {
      boolean: true,
    },
  });

  /* galary selector */

  const element = document.querySelector('.galary__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',

  });

  /* galary modal window*/

  /*window-1*/
  document.getElementById('modal-1').addEventListener('click', function () {
    document.getElementById('window-1').classList.add('open');
  });

  document.getElementById('close-1').addEventListener('click', function () {
    document.getElementById('window-1').classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('window-1').classList.remove('open');
    };
  });

  /*window-2*/
  document.getElementById('modal-2').addEventListener('click', function () {
    document.getElementById('window-2').classList.add('open');
  });

  document.getElementById('close-2').addEventListener('click', function () {
    document.getElementById('window-2').classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('window-2').classList.remove('open');
    };
  });

  /*window-3*/
  document.getElementById('modal-3').addEventListener('click', function () {
    document.getElementById('window-3').classList.add('open');
  });

  document.getElementById('close-3').addEventListener('click', function () {
    document.getElementById('window-3').classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('window-3').classList.remove('open');
    };
  });

  /*window-4*/
  document.getElementById('modal-4').addEventListener('click', function () {
    document.getElementById('window-4').classList.add('open');
  });

  document.getElementById('close-4').addEventListener('click', function () {
    document.getElementById('window-4').classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('window-4').classList.remove('open');
    };
  });

  /*window-5*/
  document.getElementById('modal-5').addEventListener('click', function () {
    document.getElementById('window-5').classList.add('open');
  });

  document.getElementById('close-5').addEventListener('click', function () {
    document.getElementById('window-5').classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('window-5').classList.remove('open');
    };
  });

  /*window-6*/
  document.getElementById('modal-6').addEventListener('click', function () {
    document.getElementById('window-6').classList.add('open');
  });

  document.getElementById('close-6').addEventListener('click', function () {
    document.getElementById('window-6').classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('window-6').classList.remove('open');
    };
  });

  /* events slider */

  const swiperEvents = new Swiper('.events__swiper-container', {

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      501: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerGroup: 2,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 41,
        slidesPerGroup: 2,
      },
      1015: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },
      1750: {
        slidesPerView: 3,
        spaceBetween: 55,
        slidesPerGroup: 3,
      }
    },

    navigation: {
      nextEl: '.events__swiper-button_next',
      prevEl: '.events__swiper-button_prev',
    },

    pagination: {
      el: '.events__swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
  });

  /* galary-slider */

  const swiperGalary = new Swiper('.swiper-container', {

    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      321: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 3,
      },
      976: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1030: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: false,
    },
  });

  /* catalog accordion */

  new Accordion('.accordion-container');

  /* catalog block */

  const tabsBtn = document.querySelectorAll(".artists-accordion__item-link");
  const tabsItems = document.querySelectorAll(".catalog__block-person");

  tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-pav");
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function (item) {
        item.classList.remove('artists-accordion__item-link_active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('catalog__block_active')
      });

      currentBtn.classList.add('artists-accordion__item-link_active');
      currentTab.classList.add('catalog__block_active');
    });
  });

  /* progects */

  const swiperProjects = new Swiper('.projects__swiper-container', {
    slidesPerView: 3,
    spaceBetween: 55,
    slidesPerGroup: 3,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 45,
        slidesPerGroup: 2,
      },
      938: {
        slidesPerView: 2,
        spaceBetween: 45,
        slidesPerGroup: 2,
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      1850: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },


    navigation: {
      nextEl: '.projects__swiper-button_next',
      prevEl: '.projects__swiper-button_prev',
    },
    loop: false,
  });

  /* tooltip*/

  tippy('#tooltip1', {
    content: '*здесь будет текст для уточнения*',
    duration: [450, 150],
    trigger: "click",
    hideOnClick: true,

  });

  tippy('#tooltip2', {
    content: '*здесь будет текст для уточнения2*',
    duration: [450, 150],
    trigger: "click",
    hideOnClick: true,
  });

  tippy('#tooltip3', {
    content: '*здесь будет текст для уточнения3*',
    duration: [450, 150],
    trigger: "click",
    hideOnClick: true,
  });

  /* form */

  const form = document.querySelector('.form');
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);

  new window.JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 25,
      },
      tel: {
        required: true,
        function: () => {
          const phone = telSelector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      }
    },
    colorWrong: '#D11616',
    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 'Введите 2 и более символов',
        maxLength: 'Запрещено вводить более 25 символов',
        name: 'sdcass',
      },
      tel: {
        required: 'Вы не ввели телефон',
        function: 'Недопустимый формат'
      }
    },
  });

  /*map */

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.758468, 37.601088],
      controls: [],
      zoom: 12,
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts/map-point.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",
        float: 'none',
        position: {
          top: '255px',
          right: '0px'
        },
        smooth: true,
      }
    });

    var geolocationControl = new ymaps.control.GeolocationControl({
      options: {
        float: 'none',
        position: {
          top: '340px',
          right: '0px'
        },
      }
    });

    myMap.controls.add(geolocationControl);
    myMap.controls.add(zoomControl);
    myMap.geoObjects.add(myPlacemark);
  }
});
















