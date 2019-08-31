window.addEventListener('load', function() {
  var buttons = document.getElementsByClassName('testButton');
  for (var i = 0; i < buttons.length; ++i) {
    var button = buttons[i];
    button.addEventListener('click', function() {
      button_index = this.id.substring(3);
      iframe_id = 'if' + button_index;
      the_frame = document.getElementById(iframe_id);
      the_frame.src = this.getAttribute('desturl');
    });
  }
});
