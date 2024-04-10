window.onload = function()
{    
  

  if (annyang) {
      // basic commands
      var commands = {
        
        'About': function() {
          window.location.href = '#about';
        },
        'go back up': function() {
          window.location.href = '#';
        },
        'start Shopping': function() {
          routeToProductPage()
        },

        // login commands
        'login': function() {
          var Element = document.getElementById('loginButton');

          // Create a new mouse click event
          var clickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          });

          // Dispatch the click event on the <li> element
          Element.dispatchEvent(clickEvent);

        },
        'Increase (text) size':function(){
          increaseFontSize();
        },
        'Decrease (text) size':function(){
          decreaseFontSize();
        },
        'Change (font) style':function(){
          changeFontStyle();
        }

      };


      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
    }

}