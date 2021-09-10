var m = 1;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "50px";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
function toGif() {
  document.getElementById("leaf-foot").src='../assets/images/social_images/background_leaf.gif';
}
function toImg() {
  document.getElementById("leaf-foot").src='../assets/images/social_images/leaf.png';
}
//Mobile Nav
function mobileNav() {
  if (m%2==1) {
  document.getElementById('m-nav-hover').style.display='block';
  m+=1;
} else {
  document.getElementById('m-nav-hover').style.display='none';
  m+=1;
}
}
