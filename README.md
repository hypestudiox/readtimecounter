# Reading Time Counter

A *simple* yet *throughful* javascript reading time counter optimized for content written in English, [CKJ](https://en.wikipedia.org/wiki/CJK_characters) characters. The script also considered the number of images in the content.

### Reading Time Counter 2.2.0 is added to this repo.

### BUT the below README info are content of v1.X. I will update it soon when I have time!


## Usage

Put the scripts `readtime.js` in your HTML and that’s all.

You can also add it to your website by embedding `readtime.js`.

`<script async src="readtime.js"></script>`

CDN by jsDelivr: [https://www.jsdelivr.com/package/gh/hypestudiox/readtimecounter](https://www.jsdelivr.com/package/gh/hypestudiox/readtimecounter)

### Define the area for the counting the Read Time

Put `id="readtimearea"` in the `div` that contains the whole article.

**Limitation:** Support only one `readtimearea` per webpage only.

### Output: Reading Time

Reading Time in minutes: `id="readtime"` 

For example: `<span id="readtime"></span>`

### Output: Words and Images Counting

The text content will be written by the javascript inside the element with `id="hybridCount"`.

For example: `<span id="hybridCount"></span>`

You may customize how it writes in the script, if you use it.

## Configurations

Open the `readtime.js` with a text editor, and you will see the below. Change the numbers that may suit your case.

Reading speed of English words, in words per minute:

`let engSpeed = 235;`

Reading speed of non-English characters, in words per minute:

`let charSpeed = 280;`

How long does it take to read an image, in seconds:

`let imgSpeed = 20;`

## Example

See it on CodePen: [https://codepen.io/pen/XWNRxWN](https://codepen.io/pen/XWNRxWN)

## Known Issues

**👾 Some known *but minor* issues:**

1. Some punctuation marks are not removed from counting yet, and some may be double-counted.
2. It is possible that some spaces after non-English words are counted as a word.
3. Minor wrong word counting when breaking lines.

📣 **Please feel free to comment, contribute and make the code better!**

---

References:

[https://en.wikipedia.org/wiki/English_alphabet](https://en.wikipedia.org/wiki/English_alphabet)

[https://en.wikipedia.org/wiki/Universal_Character_Set_characters](https://en.wikipedia.org/wiki/Universal_Character_Set_characters)

[https://en.wikipedia.org/wiki/CJK_characters](https://en.wikipedia.org/wiki/CJK_characters)