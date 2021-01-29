const assert = require('assert')
const justifyParagraphByPageWidth = require('./justifyParagraphByPageWidth')


assert.deepStrictEqual(
  justifyParagraphByPageWidth(
    'This is a sample text but a complicated problem to be solved, so we are adding more text to see that it actually works.',
    20
  ),
  [
    'This   is   a sample',
    'text      but      a',
    'complicated  problem',
    'to be solved, so  we',
    'are adding more text',
    'to   see   that   it',
    'actually      works.'
  ]
)
