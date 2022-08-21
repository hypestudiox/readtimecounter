# Reading Time Counter

A simple javascript read time counter optimized for content written in English, [CKJ](https://en.wikipedia.org/wiki/CJK_characters) characters (and possibly more languages). The script also takes into account the number of images.

## Usage

Put the scripts in your HTML and that’s all.

You can also add it to your website by embedding `readtimecounter.js`.

### Define the area for the counting the Read Time

Put `id=”readtimearea”` in the `div` that contains the whole article.

**Limitation:** Support only one `readtimearea` per webpage only.

### Output: Read Time

Read Time in minutes: `id="readtime"` 

For example: `<span id="readtime"></span>`

### Output: Words and Images Counting

The text content will be written by the javascript inside the element with `id="hybridCount"`.

For example: `<span id="hybridCount"></p>`

## Configurations

Open the `readtimecounter.js` with a text editor, and you will see the below. Change the numbers that may suit your case.

Reading speed of English words, in words per minute:

`let engSpeed = 235;`

Reading speed of non-English characters, in words per minute:

`let charSpeed = 275;`

How long does it take to read an image, in seconds:

`let imgSpeed = 25;`

## Example

See it on CodePen: [https://codepen.io/pen/XWNRxWN](https://codepen.io/pen/XWNRxWN)

## Know Issues

**👾 Some known, but minor, issues:**

1. Some punctuation marks are not removed from counting yet, and some may be double-counted.
2. Space after a non-English character is being counted as a word.
3. Minor wrong word counting when breaking lines.

**Please help to make the code better! Thanks a lot.**

---

References:

[https://en.wikipedia.org/wiki/English_alphabet](https://en.wikipedia.org/wiki/English_alphabet)

[https://en.wikipedia.org/wiki/Universal_Character_Set_characters](https://en.wikipedia.org/wiki/Universal_Character_Set_characters)

[https://en.wikipedia.org/wiki/CJK_characters](https://en.wikipedia.org/wiki/CJK_characters)