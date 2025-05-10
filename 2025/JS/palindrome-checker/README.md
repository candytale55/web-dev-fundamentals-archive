

## NOTES:

✅ Summary: Palindrome Definition Used in the Checker
A string is considered a palindrome if, after removing all non-alphanumeric characters (such as spaces, punctuation, and symbols) and ignoring case, the string reads the same forwards and backwards.

🔍 Inferred Rules for Palindrome Checking
Case-insensitive comparison

Example: "A" and "a" are treated the same.
✅ "A" is a palindrome.

Punctuation marks are ignored

Example: "A man, a plan, a canal. Panama" is treated as "amanaplanacanalpanama".
✅ It is a palindrome.

Spaces are ignored

Example: "race car" → "racecar"
✅ It is a palindrome.

Special characters are ignored

Includes _, |, \, /, :, -, (, ), etc.

Example: "0_0 (: /-\ :) 0-0" becomes "000" or "000000" depending on exact filtering, but it’s a palindrome.
✅ It is a palindrome.

Numbers are preserved and compared

Example: "1 eye for of 1 eye." is not a palindrome because the sequence isn't symmetric, even when filtered.
❌ Not a palindrome.

Only alphanumeric characters (letters and digits) are considered

All other symbols are stripped before the actual palindrome comparison.







## References:
Old project (2020): https://github.com/candytale55/2020-palindrome-checker-js 
