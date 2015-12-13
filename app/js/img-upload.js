$(document).ready(function() {
   $('#my-file').on('change', function() {
      realVal = $(this).val();
      lastIndex = realVal.lastIndexOf('\\') + 1;
      if(lastIndex !== -1) {
         realVal = realVal.substr(lastIndex);
         $(this).prev('#project-img-mask').find('.img-upload-input').val(realVal);
      }
   });
});