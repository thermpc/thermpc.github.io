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
    $("#titleLink").addClass("unselected");
    $("#aboutLink").addClass("unselected");
    $("#faqLink").addClass("unselected");
    $("#problemsLink").addClass("unselected");
    $("#scheduleLink").addClass("unselected");
    $("#footerLink").addClass("unselected");

    //var middle = $(window).height()/2;
    

    var titleHeight = document.getElementById("title").getBoundingClientRect().bottom;
    var aboutHeight = document.getElementById("about").getBoundingClientRect().bottom;
    var faqHeight = document.getElementById("faq").getBoundingClientRect().bottom;
    var problemsHeight = document.getElementById("problems").getBoundingClientRect().bottom;
    var scheduleHeight = document.getElementById("schedule").getBoundingClientRect().bottom;
    var footerHeight = document.getElementById("footer").getBoundingClientRect().top;

    var middle = screen.height/2;

    if(titleHeight >= middle)
    {
      $("#titleLink").removeClass("unselected");
    }
    
    else if(aboutHeight >= middle)
    {
      $("#aboutLink").removeClass("unselected");
    }
    
    else if(faqHeight >= middle)
    {
      $("#faqLink").removeClass("unselected");
    }
    
    else if(problemsHeight >= middle)
    {
      $("#problemsLink").removeClass("unselected");
    }
    
    else if(footerHeight < screen.height)
    {
      $("#footerLink").removeClass("unselected");
    }
    
    else
    {
      $("#scheduleLink").removeClass("unselected");
    }


}

