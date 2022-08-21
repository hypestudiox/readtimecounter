/**
 * Reading Time Counter
 * https://github.com/hypestudiox/readtimecounter
 * v1.0.3
 */

window.onload = function () {
  rtCounter();
};

function rtCounter() {
  var theArea = document.getElementById("readtimearea");
  var str = theArea.innerHTML;
  // remove some special characters
  str = str.replace(/[\u007F-\u00FE]/g, "");
  var str1 = str;
  var str2 = str;
  // to count Eng: remove non-eng characters in the string
  str1 = str1.replace(/[^!-~\d\s]+/gi, "");
  // to count non-Eng: remove eng characters in the string
  str2 = str2.replace(/[!-~\d\s]+/gi, "");
  var matched1 = str1.match(/[\u00ff-\uffff]|\S+/g);
  var matched2 = str2.match(/[\u00ff-\uffff]|\S+/g);
  count1 = matched1 ? matched1.length : 0;
  count2 = matched2 ? matched2.length : 0;
  // return the total word count
  // trying to reduce wrong countings conservatively
  // assuming 15% in non-Eng writing are not characters
  // need to be improved
  var cleanCount = (count1 + count2 - count2 * 0.15).toFixed(0);
  // images counting
  var imgCount = theArea.getElementsByTagName("img");
  // set reading speed (words per minute)
  let engSpeed = 235;
  let charSpeed = 280;
  // set how long does it take (seconds) to read an image
  let imgSpeed = 22;
  // caculate read-time
  var readtimeCalc =
    count1 / engSpeed + count2 / charSpeed + imgCount.length * imgSpeed / 60;
  // write read-time
  document.getElementById("readtime").innerHTML = readtimeCalc.toFixed(1);
  // write counting results
  // you may customize how it writes, if you use it
  document.getElementById("hybridCount").innerHTML =
    "( around " + cleanCount + " words and " + imgCount.length + " images )";
}
