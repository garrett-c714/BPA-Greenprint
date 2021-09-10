var x = 1;
var z = 1;
var ha = 1;
var ta = 1;
var ins = 1;
var p = 1;
var o = 1;
function toGif() {
      document.getElementById("leaf-foot").src='../assets/images/social_images/background_leaf.gif';
    }
function toImg() {
      document.getElementById("leaf-foot").src='../assets/images/social_images/leaf.png';
    }
function arrow() {
  if (x%2 == 1) {
    document.getElementById("button-epa").innerHTML='&#9660; EPA';
    x+=1;
  } else if (x%2 == 0){
    document.getElementById("button-epa").innerHTML='&#9658; EPA';
    x+=1;
  } else {
    console.log("this shouldn't happen")
  }
};
function arrowZ() {
  if (z%2 == 1) {
    document.getElementById('button-zone').innerHTML='&#9660; Zoning';
    z+=1;
  } else if (z%2 == 0){
    document.getElementById('button-zone').innerHTML='&#9658; Zoning';
    z+=1;
  } else {
    console.log("this shouldn't happen")
  }
};
function arrowHA() {
  if (ha%2 == 1) {
    document.getElementById('button-ha').innerHTML='&#9660; Home Associations';
    ha+=1;
  } else if (ha%2 == 0){
    document.getElementById('button-ha').innerHTML='&#9658; Home Associations';
    ha+=1;
  } else {
    console.log("this shouldn't happen")
  }
};
function arrowTA() {
  if (ta%2 == 1) {
    document.getElementById('button-ta').innerHTML='&#9660; Technology/Appliances';
    ta+=1;
  } else if (ta%2 == 0){
    document.getElementById('button-ta').innerHTML='&#9658; Technology/Appliances';
    ta+=1;
  } else {
    console.log("this shouldn't happen")
  }
};
function arrowI() {
  if (ins%2 == 1) {
    document.getElementById('button-i').innerHTML='&#9660; Insurance';
    ins+=1;
  } else if (ins%2 == 0){
    document.getElementById('button-i').innerHTML='&#9658; Insurance';
    ins+=1;
  } else {
    console.log("this shouldn't happen")
  }
};
function arrowP() {
  if (p%2 == 1) {
    document.getElementById('button-p').innerHTML='&#9660; Permits';
    p+=1;
  } else if (p%2 == 0){
    document.getElementById('button-p').innerHTML='&#9658; Permits';
    p+=1;
  } else {
    console.log("this shouldn't happen")
  }
};
function arrowO() {
  if (o%2 == 1) {
    document.getElementById('button-o').innerHTML='&#9660; Other';
    o+=1;
  } else if (o%2 == 0){
    document.getElementById('button-o').innerHTML='&#9658; Other';
    o+=1;
  } else {
    console.log("this shouldn't happen")
  }
};
