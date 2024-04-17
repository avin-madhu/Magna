window.onload = function()
{    
    if (annyang) {
      
// ========================================================================================================================
        //  HOME PAGE
//=========================================================================================================================
      
      var commands = {
        'About': function() {
          window.location.href = '#about';
        },
        'contact': function() {
          window.location.href = '#contact';
        },
        'team': function() {
          window.location.href = '#team';
        },
        'services': function() {
          window.location.href = '#services';
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
        },


// =========================================================================================================================
        // product page
//==========================================================================================================================
        '(go) back (to home)': function(){
          if (window.location.pathname == '/inner-page.html'){
            window.location.href = "index.html"
          }
        },
        'turn off text reading': function()
          {
               alert("text reading turned off")
               turnon = false
          },
          'back to product page': function(){
            let page2 = document.getElementById("productDescripton-section")
            let page1 = document.getElementById("product-page-real")
            page2.style.display = 'none'
            page1.style.display = 'block'  
          }

      };


      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
    }

}