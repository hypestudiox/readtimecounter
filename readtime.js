/**
 * Reading Time Counter
 * https://github.com/hypestudiox/readtimecounter
 * v2.2.0
 */
document.addEventListener("DOMContentLoaded", function () {
  // Settings
  let engSpeed = 235; // words per minute
  let charSpeed = 280; // characters per minute
  let imgSpeed = 15; // seconds per image
  // Helper functions
  function countEnglishWords(text) {
    // Removes punctuations but considers hyphens between words, then split by spaces
    let words = text
      .replace(/[^\w\s-]|_/g, "")
      .replace(/\s+/g, " ")
      .split(" ");
    return words.filter(Boolean).length; // Filter out any empty strings
  }
  function countNonEnglishCharacters(text) {
    // Regular expression that matches CKJ characters, excludes numbers and punctuations.
    let matches = text.match(
      /[^\w\s!-@[-`{-~\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65]+/g
    );
    return matches ? matches.join("").length : 0;
  }
  function countImages(element) {
    return element.querySelectorAll("img").length;
  }
  function updateDisplay(element) {
    let text = element.value || element.innerText; // for both textarea/input or other elements
    let engCount = countEnglishWords(text);
    let charCount = countNonEnglishCharacters(text);
    let imgCount = countImages(element);
    // Caculations
    let engTime = engCount / engSpeed; // in minutes
    let charTime = charCount / charSpeed; // in minutes
    let imgTime = (imgCount * imgSpeed) / 60; // convert seconds to minutes
    let totalReadingTime = engTime + charTime + imgTime;
    let roundedTime = Math.round(totalReadingTime * 10) / 10; // round to 1 decimal place
    // Display reading time
    let displayTime =
      roundedTime % 1 === 0 ? Math.round(roundedTime) : roundedTime;
    document.getElementById("readtime").textContent = displayTime;
    // Display counting info
    let infoParts = [];
    if (engCount > 0) infoParts.push(`English words: ${engCount}`);
    if (charCount > 0) infoParts.push(`Non-English characters: ${charCount}`);
    if (imgCount > 0) infoParts.push(`Images: ${imgCount}`);
    document.getElementById("hybridCount").textContent = infoParts.join(", ");
  }
  // Monitor content changes
  const readtimeArea = document.getElementById("readtimearea");
  // Use input event for textarea/input elements and contenteditable, and MutationObserver for others
  if (
    readtimeArea.tagName === "INPUT" ||
    readtimeArea.tagName === "TEXTAREA" ||
    readtimeArea.isContentEditable
  ) {
    readtimeArea.addEventListener("input", function () {
      updateDisplay(readtimeArea);
    });
  } else {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(function () {
      updateDisplay(readtimeArea);
    });
    observer.observe(readtimeArea, config);
  }
  // Initial update
  updateDisplay(readtimeArea);
});