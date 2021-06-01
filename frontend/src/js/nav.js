var myNav = document.getElementById('mynav');
  window.onscroll = function () { 
  if (document.body.scrollTop > 100 ) {
  myNav.classList.remove("sticky-header");
  myNav.classList.add("sticky-headerscroll");
  } 
  else { 
  myNav.classList.remove("sticky-headerscroll");
  myNav.classList.add("sticky-header");
  }
};