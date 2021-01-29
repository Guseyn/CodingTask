'use strict'

const fillLineWithSpaces = (lines, linesCounter, pageWidth) => {
  const wordsInLine = lines[linesCounter].split(' ')
  const numberOfSpaces = wordsInLine.length - 1
  const delta = pageWidth - (lines[linesCounter].length - numberOfSpaces)
  if (delta % numberOfSpaces === 0) {
    lines[linesCounter] = wordsInLine.join(' '.repeat(delta / numberOfSpaces))
  } else {
    const numberOfCharsInEverySpaceExceptLastOne = Math.floor(delta / (numberOfSpaces - 1))
    const numberOfCharsInLastSpace = delta - numberOfCharsInEverySpaceExceptLastOne * (numberOfSpaces - 1)
    lines[linesCounter] = wordsInLine
      .slice(0, wordsInLine.length - 1)
      .join(' '.repeat(numberOfCharsInEverySpaceExceptLastOne)) +
      ' '.repeat(numberOfCharsInLastSpace) +
      wordsInLine[wordsInLine.length - 1]
  }
}

const justifyParagraphByPageWidth = (paragraph, pageWidth) => {
  const words = paragraph.split(' ')
  const lines = []
  let linesCounter = 0
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (!lines[linesCounter]) {
      lines[linesCounter] = word
      if (lines[linesCounter].length >= pageWidth) {
        linesCounter++
      }
      continue
    }
    if ((lines[linesCounter] + ' ' + word).length <= pageWidth) {
      lines[linesCounter] += ' ' + word
      if (i === words.length - 1) {
        fillLineWithSpaces(lines, linesCounter, pageWidth)
      } else {
        if (lines[linesCounter].length === pageWidth) {
          linesCounter++
        }
      }
    } else {
      fillLineWithSpaces(lines, linesCounter, pageWidth)
      linesCounter++
      lines[linesCounter] = word
      if (lines[linesCounter].length >= pageWidth) {
        linesCounter++
      }
    }
  }
  return lines
}

module.exports = justifyParagraphByPageWidth
