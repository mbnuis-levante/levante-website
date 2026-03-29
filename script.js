document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('thankyou').classList.remove('hidden');
  this.classList.add('hidden');
});
