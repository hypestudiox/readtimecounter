/**
 * Reading Time Counter v3.2.6
 * https://github.com/hypestudiox/readtimecounter
 */
(function () {
  // Default settings (can be overridden via window.readingTimeSettings)
  const defaults = {
    engSpeed: 230, // words per minute for English and Latin-based languages
    charSpeed: 285, // CKJ characters per minute
    imgSpeed: 8, // seconds per image
    timeFormat: "decimal" // "decimal" or "integer"
  };

  // Merge defaults with user overrides (if provided)
  const settings = Object.assign(
    {},
    defaults,
    window.readingTimeSettings || {}
  );

  // Helper functions
  function countWords(text, isCKJ = false) {
    if (isCKJ) {
      let matches = text.match(
        /[\p{Script=Han}\p{Script=Hangul}\p{Script=Hiragana}\p{Script=Katakana}]+/gu
      );
      return matches ? matches.join("").length : 0;
    } else {
      let cleanedText = text
        .replace(/[^\w\s'-]/g, " ") // Keep apostrophes and hyphens
        .replace(/\s+/g, " ") // Normalize spaces and line breaks
        .trim();
      return cleanedText.split(" ").filter((word) => word.length > 0).length;
    }
  }

  function countImages(element) {
    return element.querySelectorAll("img[alt], svg[alt]").length;
  }

  function getReadableText(element) {
    function walkNodes(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (["SCRIPT", "STYLE"].includes(node.nodeName)) {
          return "";
        }
        return Array.from(node.childNodes).map(walkNodes).join(" ");
      } else if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent || "";
      }
      return "";
    }
    let rawText = walkNodes(element);
    return rawText
      .replace(/\s+/g, " ") // Collapse multiple spaces into one
      .trim(); // Remove leading/trailing spaces
  }

  function updateDisplay(element) {
    let text = getReadableText(element);
    let engCount = countWords(text, false);
    let ckjCount = countWords(text, true);
    let imgCount = countImages(element);

    let engTime = engCount / settings.engSpeed;
    let ckjTime = ckjCount / settings.charSpeed;
    let imgTime = (imgCount * settings.imgSpeed) / 60;
    let totalReadingTime = engTime + ckjTime + imgTime;

    // Format time based on settings.timeFormat
    let roundedTime = Math.round(totalReadingTime * 10) / 10; // Base calculation to 1 decimal
    let displayTime;
    if (settings.timeFormat === "integer") {
      displayTime = Math.round(totalReadingTime); // Round to nearest integer
    } else {
      displayTime = roundedTime; // Keep 1 decimal place (default)
    }
    displayTime = displayTime === 0 ? "0" : displayTime; // Ensure 0 for empty content

    const readTimeElement = document.getElementById("readtime");
    if (readTimeElement) readTimeElement.textContent = `${displayTime}`;

    const wordCountElement = document.getElementById("wordCount");
    if (wordCountElement) wordCountElement.textContent = engCount;

    const ckjCountElement = document.getElementById("ckjCount");
    if (ckjCountElement) ckjCountElement.textContent = ckjCount;

    const imgCountElement = document.getElementById("imgCount");
    if (imgCountElement) imgCountElement.textContent = imgCount;

    const hybridCountElement = document.getElementById("hybridCount");
    if (hybridCountElement) {
      let infoParts = [];
      if (engCount > 0) infoParts.push(`${engCount} Words`);
      if (ckjCount > 0) infoParts.push(`${ckjCount} CKJ Characters`);
      if (imgCount > 0) infoParts.push(`${imgCount} Images`);
      hybridCountElement.textContent = infoParts.length
        ? infoParts.join(" • ")
        : "0";
    }
  }

  // Initialize on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    const readtimeArea = document.getElementById("readtimearea");
    if (!readtimeArea) {
      return; // Silently exit if no readtimearea
    }

    if (
      ["INPUT", "TEXTAREA"].includes(readtimeArea.tagName) ||
      readtimeArea.isContentEditable
    ) {
      readtimeArea.addEventListener("input", () => updateDisplay(readtimeArea));
    } else {
      const observer = new MutationObserver(() => updateDisplay(readtimeArea));
      observer.observe(readtimeArea, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    updateDisplay(readtimeArea);
  });
})();
