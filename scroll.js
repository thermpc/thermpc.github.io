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
});

function toggleMenu() 
{
  var menuBox = document.getElementById('menu');    
  if(menuBox.style.display == "block") {
    menuBox.style.display = "none";
  }
  else
  { 
    menuBox.style.display = "block";
  }
}
