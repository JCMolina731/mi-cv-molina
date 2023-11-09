const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const maquina1 = document.getElementById('maquina-escribir1')
const maquinaEscribir1 = (text = '',tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let escribir = setInterval(function(){
      etiqueta.innerHTML += arrayCaracteres[cont]
      cont++
      if (cont === arrayCaracteres.length) {
        clearInterval(escribir)
      }
    }, tiempo)
  }

  maquinaEscribir1("Soy Jean Molina.",300, maquina1)


  // const btnOpen = document.querySelector('.btn--open')
// const btnClose = document.querySelector('.btn--close')
const menu = document.querySelector('.header__menu')

// btnOpen.addEventListener('click', function () {
//   menu.classList.toggle('show--menu')
// })

// btnClose.addEventListener('click', function () {
//   menu.classList.remove('show--menu')
// })

const headerNav = document.querySelector('.header__nav')

// Delegación de eventos
headerNav.addEventListener('click', function (e) {
  if (e.target.closest('.btn--open')) {
    menu.classList.toggle('show--menu')
  }

  if (e.target.closest('.btn--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.closest('.list__link')) {
    menu.classList.remove('show--menu')

    const links = document.querySelectorAll('.list__link')

    for (const link of links) {
      link.classList.remove('active')
    }

    e.target.classList.add('active')
  }
})

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') {
  menu.classList.remove('show--menu')
}
})

// BOM
const html = document.documentElement


const SR = ScrollReveal()

SR.reveal('.hero__img', {
  duration: 1000,
  origin: 'left',
  distance: '300px',
  // reset: true,
})

SR.reveal('.hero__content', {
    duration: 1000,
    origin: 'right',
    distance: '300px',
    // reset: true,
})

SR.reveal('.section__title', {
  duration: 1200,
  origin: 'left',
  distance: '300px',
  // reset: true,
})

SR.reveal('.about__text', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',
  // reset: true,
})

SR.reveal('.portfolio__item:nth-child(even)', {
  duration: 1200,
  origin: 'left',
  distance: '300px',
  // reset: true,
})

SR.reveal('.portfolio__item:nth-child(odd)', {
  duration: 1200,
  origin: 'right',
  distance: '300px',
  // reset: true,
})