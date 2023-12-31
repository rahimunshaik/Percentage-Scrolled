var scrolledBar = document.getElementById("scrolled");

// This function will return the maximum of the following
function getDocHeight() {
  var D = document;
  return Math.max(D.body.scrollHeight, D.body.offsetHeight, D.body.clientHeight);
}

var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

window.onresize = function (e) {
  docHeight = getDocHeight();
  windowHeight = window.innerHeight;
};

function setScrolled() {
  var scrolled = Math.floor((window.scrollY / (docHeight - windowHeight)) * 100);
  scrolled = Math.min(scrolled, 100); // Limit the value to a maximum of 100
  scrolledBar.innerText = scrolled;
}

window.addEventListener("scroll", setScrolled);
