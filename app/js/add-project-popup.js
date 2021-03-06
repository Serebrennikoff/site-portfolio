// Объявление модуля
var myModule = (function () {

  // Инициализирует наш модуль
  function init () {
    _setUpListners();
  };

  // Прослушивает события 
  function _setUpListners () {
    $('#add-new-project').on('click', _showModal);  
    $(document).mouseup(_resetFormOnPopupClose);
  };

  // Работает с модальным окном
  function _showModal (e) {
    e.preventDefault();
    $('#add-project-popup').bPopup({
      speed: 500,
      transition: 'slideDown',
    });
  };
  // Сброс формы попапа при клике за пределами
  function _resetFormOnPopupClose (e) {
    var popup = $("#add-project-popup");
    if (!popup.is(e.target)
    && popup.has(e.target).length === 0) {
      $('#form input, textarea').not('#submit, #reset, #my-file')
      .each(function(indx, element){
        if($(element).val() !== ""){
          $(element).val("")
        } else if($(element).hasClass("empty-input")) {
          $(element).removeClass("empty-input").tooltipster('hide');
        }
      });
    }
  };

  // Возвращаем объект (публичные методы) 
  return {
    init: init
  };

})();

// Вызов модуля
myModule.init();