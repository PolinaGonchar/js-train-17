// Task 1
/**
 * The `replaceText` function replaces all occurrences of a specific word in the text with a given phrase.
 *
 *  word - The word to be replaced.
 *  replacement - The phrase to replace the word with.
 *  text - The text in which the replacement should be made.
 */
function replaceText(word, replacement, text) {
  const regex = new RegExp(word, 'g');
  const replacedText = text.replace(regex, replacement);
  return replacedText;
}

// Test
console.log("Task 1 ==============================");
console.log(
  replaceText(
    "example",
    "sample text",
    "This is an example sentence. Another example is here."
  )
);
// Output: This is a sample text sentence. Another sample text is here.

// Task 2

/**
 * The `checkWord` function checks if a specific word is present in the text.
 *
 *  word - The word to check for.
 *  text - The text in which to check.
 */
function checkWord(word, text) {
  const regex = new RegExp(word, 'i');
  return regex.test(text);
}

// Test
console.log("Task 2 ==============================");
console.log(checkWord("example", "This is an example sentence."));
// Output: true

// Task 3

/**
 * The `extractTextInParentheses` function extracts the text inside parentheses from a string.
 *
 *  str - The string from which to extract the text.
 */
function extractTextInParentheses(str) {
  const regex = /\((.*?)\)/g;
  const matches = str.matchAll(regex);
  let extractedTexts = Array.from(matches, (match) => match[1]);
  return extractedTexts;
}

// Test
console.log("Task 3 ==============================");

console.log(extractTextInParentheses("I have some (text) in (parentheses)."));
// Output: [ 'text', 'parentheses' ]

// Task 4

/**
 * The `countEmails` function finds and counts the number of email addresses in a string.
 *
 *  str - The string in which to find email addresses.
 */
function countEmails(str) {
  const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  const matches = str.match(regex);
  const count = matches ? matches.length : 0;
  return count;
}

// Test
console.log("Task 4 ==============================");

console.log(
  countEmails("Emails: john@example.com, kate@example.com, mike@example.com")
);
// Output: 3

// Task 5
/**
 * The `findWordOccurrences` function finds all occurrences of a given word in a string, ignoring case sensitivity.
 *
 *  str - The string in which to find occurrences of the word.
 *  word - The word to find occurrences of.
 *  Returns an array of indexes of all occurrences of the word in the string.
 */
function findWordOccurrences(str, word) {
  const regex = new RegExp(word, "gi");
  let matches = [];
  let match;
  while ((match = regex.exec(str))) {
    matches.push(match.index);
    regex.lastIndex = match.index + 1;
  }
  return matches;
}

// Test

console.log("Task 5 ==============================");

console.log(
  findWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The Fox is quick.",
    "fox"
  )
);
// Output: [ 16, 49 ]

// Task 6

/**
 * The `checkRegexFlags` function checks if the regular expression has the 'g' and 'm' flags.
 *
 *  regex - The regular expression to check.
 * Returns - true if the 'g' and 'm' flags are present, otherwise - false.
 */
function checkRegexFlags(regex) {
  const flags = regex.flags;
  const hasGlobalFlag = flags.includes("g");
  const hasMultilineFlag = flags.includes("m");
  return hasGlobalFlag && hasMultilineFlag;
}

// Test

console.log("Task 6 ==============================");

console.log(checkRegexFlags(/pattern/gm));
// Output: true

// Task 7

/**
 * The `replaceWordOccurrences` function replaces all occurrences of a given word in a string with a new word.
 *
 *  str - The string in which to replace occurrences of the word.
 *  word - The word to replace.
 *  newWord - The new word to replace with.
 * Returns - The result of replacing the occurrences of the word in the string.
 */
function replaceWordOccurrences(str, word, newWord) {
  const regex = new RegExp(word, 'g');
  const replacedStr = str.replaceAll(regex, newWord);
  return replacedStr;
}

// Test
console.log("Task 7 ==============================");

console.log(
  replaceWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "fox",
    "cat"
  )
);
// Output: The quick brown cat jumps over the lazy dog. The cat is quick.

// Task 8

/**
 * The `checkFlags` function checks which flags are used in a given regular expression.
 *
 *  regex - The regular expression to check.
 * Returns - An array of flags used in the regular expression.
 */
function checkFlags(regex) {
  const usedFlags = [];
  const hasIgnoreCase = regex.ignoreCase;
  if (hasIgnoreCase) {
    usedFlags.push("ignoreCase");
  }
  const sourceCode = regex.source;
  usedFlags.push(sourceCode);
  return usedFlags;
}

// Example usage:
console.log("Task 8 ==============================");

console.log(checkFlags(/pattern/gimsy));
// Output: [ 'ignoreCase', 'pattern' ]

// Task 9

/**
 * The `checkRegexMethods` function checks which methods are used in a given regular expression.
 *
 *  regex - The regular expression to check.
 * Returns - An array of methods used in the regular expression.
 */
function checkRegexMethods(regex) {
  const usedMethods = [];
  if (regex.dotAll) {
    usedMethods.push("dotAll");
  }
  if (regex.multiline) {
    usedMethods.push("multiline");
  }
  if (regex.sticky) {
    usedMethods.push("sticky");
  }
  return usedMethods;
}

// Example usage:
console.log("Task 9 ==============================");

console.log(checkRegexMethods(/test/msy));
// Output: [ 'dotAll', 'multiline', 'sticky' ]

// Task 10

/**
 * The `findWord` function finds the first occurrence of a given word in a string using the `search` method.
 *
 *  str - The string in which to find the occurrence of the word.
 *  word - The word to find the occurrence of.
 * Returns - The index of the first occurrence of the word in the string or -1 if the word is not found.
 */
function findWord(str, word) {
  const regex = new RegExp(word);
  const index = str.search(regex);
  return index;
}

// Example usage:
console.log("Task 10 ==============================");

console.log(
  findWord(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "quick"
  )
); // Output: 4

