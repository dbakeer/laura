// Custom JS

jQuery(function(){

    /////////////////////////
    /////// FOUNDATION //////
    /////////////////////////
    jQuery(document).foundation();



    /////////////////////////
    //// FLICKITY SLIDER ////
    /////////////////////////
    var options = {
      contain:true,
      initialIndex:1,
      prevNextButtons:false,
      cellAlign:'center',
      friction:.35,
      dragThreshold:10,
      adaptiveHeight:true
    }

    jQuery('.product-carousel').flickity(options);

});
