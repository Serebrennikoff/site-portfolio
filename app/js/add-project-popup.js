// Объявление модуля
var myModule = (function () {

  // Инициализирует наш модуль
  function init () {
    _setUpListners();
  };

  // Прослушивает события 
  function _setUpListners () {
    $('#add-new-project').on('click', _showModal);  
  };

  // Работает с модальным окном
  function _showModal (e) {
    e.preventDefault();
    $('#add-project-popup').bPopup({
      speed: 500,
      transition: 'slideDown',
    });
  };

  // Возвращаем объект (публичные методы) 
  return {
    init: init
  };

})();

// Вызов модуля
myModule.init();