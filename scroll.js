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
    if(scroll>=0.6*screen.height)
    {
      $("#titleLink").addClass("unselected");
    }
    else
    {
      console.log(scroll);
      $("#titleLink").removeClass("unselected");
    }

    if(scroll<0.6*screen.height || scroll>=1.6*screen.height)
    {
      $("#aboutLink").addClass("unselected");
    }
    else
    {
      $("#aboutLink").removeClass("unselected");
    }

    if(scroll<1.6*screen.height || scroll>=2.6*screen.height)
    {
      $("#faqLink").addClass("unselected");
    }
    else
    {
      $("#faqLink").removeClass("unselected");
    }

    if(scroll<2.6*screen.height || scroll>=3.6*screen.height)
    {
      $("#problemsLink").addClass("unselected");
    }
    else
    {
      $("#problemsLink").removeClass("unselected");
    }

    if(scroll<3.6*screen.height || scroll>=3.8*screen.height)
    {
      $("#scheduleLink").addClass("unselected");
    }
    else
    {
      $("#scheduleLink").removeClass("unselected");
    }

    if(scroll<3.8*screen.height)
    {
      $("#footerLink").addClass("unselected");
    }
    else
    {
      $("#footerLink").removeClass("unselected");
    }


}

