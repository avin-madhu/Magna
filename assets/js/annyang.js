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
        'start shopping': function(){
          routeToProductPage()
        },
        'login': function(){
          var element = document.getElementById("loginButton");
          var clickEvent = new MouseEvent('click');
          element.dispatchEvent(clickEvent);
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