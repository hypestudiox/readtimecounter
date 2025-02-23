# Reading Time Counter v3.2.4

A ***simple*** yet ***robust*** reading time counter calculates reading time for English, [CKJ](https://en.wikipedia.org/wiki/CJK_characters) (Chinese, Korean, Japanese), and other Latin-based languages. The script also takes into account the number of images in the content, providing an estimated reading time that combines text and image viewing time.

<br>

## How to use?

### The script:

Simply include the script `readtime.js` in your page’s **footer code** (before `</body>`) and you’re set. For example, add the following to your webpage:

```html
<script async src="readtime.js"></script>
```

You can also use the CDN version via jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/hypestudiox/readtimecounter/readtime.min.js"></script>
```

### Define the area for the counting the Read Time:

Wrap your article content in a container with the attribute `id="readtimearea"`.

**Limitation:** Only one `readtimearea` per webpage is supported.

### Outputs:

Display the estimated reading time (in minutes) by adding an element with the `id="readtime"`.

For example: `<span id="readtime"></span>`

The script also outputs individual counts for:

•	**Words:** Displayed in an element with `id="wordCount"`.

•	**CKJ Characters:** Displayed in an element with `id="ckjCount"`.

•	**Images:** Displayed in an element with `id="imgCount"`.

•	**Combined Info:** For a summary view, use an element with `id="hybridCount"`.

Example:

```html
<p>This article takes around <span id="readtime"></span> minutes to read.</p>
<p class="note">
  There are
  <span id="wordCount"></span> words,
  <span id="ckjCount"></span> CJK characters, and
  <span id="imgCount"></span> images in this article.
</p>
<p class="note">Summary: <span id="hybridCount"></span></p>
```

<br>

## Configurations

You can override default reading speed by:

```html
<script src="https://cdn.jsdelivr.net/gh/hypestudiox/readtimecounter/readtime.min.js"></script>
<script>
  window.readingTimeSettings = {
    engSpeed: 220,
    charSpeed: 300,
    imgSpeed: 10
  };
</script>
```

<br>

## Live Example

See it on CodePen: https://codepen.io/pen/EaxyZzG

📣 **Please feel free to comment, contribute and make the code better!**


<br>

---

References:

https://en.wikipedia.org/wiki/English_alphabet

https://en.wikipedia.org/wiki/Universal_Character_Set_characters

https://en.wikipedia.org/wiki/CJK_characters