// Объявление модуля
var myModule = (function () {

  // Инициализирует наш модуль
  function init () {
    _setUpListners();
  };

  // Прослушивает события 
  function _setUpListners () {
    $('#submit').on('click', _validate);
    $('#form input, textarea').not('#submit, #reset, #my-file')
    .keypress(_removeClass);
    $('#reset').on('click', _resetForm);
    $('#my-file').change(_removeErrorOnFileSelect);
  };

  // Валидация
  function _validate (e) {
    e.preventDefault();
    $('#form input, textarea').not('#submit, #reset, #my-file')
    .each(function(indx, element){
      if($(element).val() == ""){
        $(element).addClass('empty-input').tooltipster({
          animation: 'grow',
          trigger: 'custom',
          position: 'left',
          autoClose: false,
        }).tooltipster('show');
        $('#email, #captcha').tooltipster({
          animation: 'grow',
          trigger: 'custom',
          position: 'right',
          autoClose: false,
        })
      }
    });
  };
  // Сброс формы
  function _resetForm (e) {
    e.preventDefault();
    $('#form input, textarea').not('#submit, #reset, #my-file')
    .each(function(indx, element){
      if($(element).val() !== ""){
        $(element).val("")
      } else if($(element).hasClass("empty-input")) {
        $(element).removeClass("empty-input").tooltipster('hide');
      }
    });
  };

  function _removeErrorOnFileSelect (e) {
    var fileInput = $('#input-mask');
    if($(fileInput).val !== "" && $(fileInput).hasClass("empty-input")) {
      $(fileInput).removeClass("empty-input").tooltipster('hide');
    }
  };


  // Сброс ошибки при вводе
  function _removeClass (e) {
    if($(this).hasClass("empty-input")){
      $(this).removeClass("empty-input").tooltipster('hide');
    }
  };

  // Возвращаем объект (публичные методы) 
  return {
    init: init
  };

})();

// Вызов модуля
myModule.init();