$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") 
    {
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      // The 50 is for offset due to the header. Fix that if necessary.
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top-50
        }, 
        800, 
        function()
        {
          window.location.hash = hash;
        }
      );
    } 
  });





  $("#introButton").on('click',function(event)
  {

    document.getElementById("introLink").click(); 
  });

  $("#sampleButton").on('click',function(event)
  {

    document.getElementById("sampleLink").click(); 
  });

  $("#contactButton").on('click',function(event)
  {

    document.getElementById("contactLink").click(); 
  });

  $("#aboutButton").on('click',function(event)
  {

    document.getElementById("aboutLink").click(); 
  });


  $(".circle").hover(function()
  {
    $(this).toggleClass('hovered');
  });

$(window).scroll(function (event)
{
    scrollPosition();
});

  scrollPosition()

});

function scrollPosition()
{
    var scroll = $(window).scrollTop();
    if(scroll<=600)
    {
      $("#introButton").addClass("filled");
    }
    else
    {
      console.log(scroll);
      $("#introButton").removeClass("filled");
    }

    if(scroll>600 && scroll<=1600)
    {
      $("#aboutButton").addClass("filled");
    }
    else
    {
      $("#aboutButton").removeClass("filled");
    }

    if(scroll>1600 && scroll<=2600)
    {
      $("#sampleButton").addClass("filled");
    }
    else
    {
      $("#sampleButton").removeClass("filled");
    }

    if(scroll>2600)
    {
      $("#contactButton").addClass("filled");
    }
    else
    {
      $("#contactButton").removeClass("filled");
    }
}

