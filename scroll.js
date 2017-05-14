$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") 
    {
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
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
    if(scroll<=800)
    {
      $("#introButton").addClass("filled");
    }
    else
    {
      console.log(scroll);
      $("#introButton").removeClass("filled");
    }

    if(scroll>800 && scroll<=1600)
    {
      $("#aboutButton").addClass("filled");
    }
    else
    {
      $("#aboutButton").removeClass("filled");
    }

    if(scroll>1600 && scroll<=2400)
    {
      $("#sampleButton").addClass("filled");
    }
    else
    {
      $("#sampleButton").removeClass("filled");
    }

    if(scroll>2400)
    {
      $("#contactButton").addClass("filled");
    }
    else
    {
      $("#contactButton").removeClass("filled");
    }
}

