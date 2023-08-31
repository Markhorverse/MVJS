var Markhorverse = {
    // Function to initialize the library
    init: function() {
      // Get all elements with the class 'markhorverse-hide'
      var elements = document.querySelectorAll('.mvjs-hide');
      
      // Attach a click event listener to each element
      elements.forEach(function(element) {
        element.addEventListener('click', function() {
          // Hide the clicked element
          element.style.display = 'none';
        });
  
        // Add a CSS rule to change the cursor to pointer on hover
        element.style.cursor = 'pointer';
      });
    }
  };
  
  // Initialize the library when the document is ready
  document.addEventListener('DOMContentLoaded', function() {
    Markhorverse.init();
  });
  