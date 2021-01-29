# About

It's a program that can accept a paragraph string and page width as parameters and return an array of left and right justified string.

# How to run

You need Node.js to run this script:

 ```bash
 node justifyParagraphByPageWidth.js
 ```
 
 # Tests
 
 You also can run test:
 
 ```bash
 node test.js
 ```
 
 # Example
 
 **Input**:

```yml
paragraph: "This is a sample text but a complicated problem to be solved, so we are adding more text to see that it actually works."
pageWidth: 20
```

**Output:**

```json
[
 "This   is   a sample",
 "text      but      a",
 "complicated  problem",
 "to be solved, so  we",
 "are adding more text",
 "to   see   that   it",
 "actually      works."
]
```
