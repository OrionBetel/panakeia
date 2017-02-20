document.querySelector('.header__nav').addEventListener('click', function(e) {
  if (e.target.classList.contains('nav__item')) {
    document.querySelector( '.' + e.target.hash.slice(1) )
      .scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelector('.header__burger').addEventListener('click', function() {
  document.querySelector('.header__nav').style.right = 0;
});

document.querySelector('.nav__close').addEventListener('click', function() {
  document.querySelector('.header__nav').style.right = '-50%';
});