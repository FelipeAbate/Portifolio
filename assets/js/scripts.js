src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">

 $(document).ready(function(){

    $('#link').on('change', function () {
         var url = $(this).val(); 
         if (url) { 
             window.open(url, '_blank');
          }
          return false;
        });
     });
