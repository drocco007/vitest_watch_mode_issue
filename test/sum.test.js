import { expect, test } from 'vitest'

// note the relative path '.' rather than '..'. This spelling will succeed,
// changes to '../src/sum.js' will trigger vitest to rerun tests, but
// updates to the '../src/sum.js' will not be reflected until vitest is
// completely restarted.
import { sum } from './src/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
