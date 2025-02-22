/* в этот файл добавляет скрипты*/
let toggleButton = document.querySelector('.header__toggle');
let headerNavigation = document.querySelector('.navigation');

toggleButton.addEventListener('click', (evt) => {
  evt.preventDefault;
  toggleButton.classList.toggle('header__toggle--opened');
  headerNavigation.classList.toggle('navigation--opened');
});
