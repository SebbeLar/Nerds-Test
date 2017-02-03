const keyDiv = document.querySelector('.key');

keyDiv.addEventListener('click', function() {
  if(document.body.offsetWidth < 601) {
    window.alert(keyDiv.innerHTML);
  }
});
