window.onload = function()
{    
    if (annyang) {
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        
        'About': function() {
          window.location.href = '#about';
        },
        'go back up': function() {
          window.location.href = '#';
        },

        'set quantity to *num': function() {
          

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