/**
 * Reading Time Counter
 * readtimecount.js
 * v1.0.0
 */

window.onload = function () {
  rtCounter();
};

function rtCounter() {
  var theArea = document.getElementById("readtimearea");
  var str = theArea.innerHTML;
  // remove some special characters
  str = str.replace(/[\u007F-\u00FE]/g, "");
  // let us make a duplication first
  var str1 = str;
  var str2 = str;
  // to count Eng: remove non-eng characters in the string
  str1 = str1.replace(/[^!-~\d\s]+/gi, "");
  // to count non-Eng: remove eng characters in the string
  str2 = str2.replace(/[!-~\d\s]+/gi, "");
  var matches1 = str1.match(/[\u00ff-\uffff]|\S+/g);
  var matches2 = str2.match(/[\u00ff-\uffff]|\S+/g);
  count1 = matches1 ? matches1.length : 0;
  count2 = matches2 ? matches2.length : 0;
  // return the total word count
  // trying to reduce wrong countings conservatively
  // assuming 15% in non-Eng writing are not characters
  // need to be improved later
  var cleanCount = (count1 + count2 - count2 * 0.15).toFixed(0);
  // images counting
  var imgCount = theArea.getElementsByTagName("img");
  // set reading speed
  let engSpeed = 235;
  let charSpeed = 275;
  // caculate read-time
  var readtimeCalc =
    count1 / engSpeed + count2 / charSpeed + imgCount.length * 0.35;
  // write read-time
  document.getElementById("readtime").innerHTML = readtimeCalc.toFixed(2);
  // write counting results
  // you may customize how it writes, if you use it
  document.getElementById("hybridCount").innerHTML =
    "( around " + cleanCount + " words and " + imgCount.length + " images )";
}
