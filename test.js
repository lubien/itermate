import test from 'ava';
import i from './index.js'

const xs = [1, 2, 3, 4, 5]
const evens = [2, 4, 6, 8]
const odds = [1, 3, 5, 7]

const identity = x => x
const double = x => 2 * x
const even = x => x % 2 === 0
const odd = x => !even(x)

test('adjust', t => {
  t.deepEqual(i.list(i.adjust(double, 0, xs)),
    [2, 2, 3, 4, 5]
  )

  t.deepEqual(i.list(i.adjust(double, 2, xs)),
    [1, 2, 6, 4, 5]
  )

  t.deepEqual(i.list(i.adjust(double, 4, xs)),
    [1, 2, 3, 4, 10]
  )

  t.deepEqual(i.list(i.adjust(double, +Infinity, xs)),
    xs
  )
})

test('all', t => {
  t.is(i.all(even, evens), true)
  t.is(i.all(even, odds), false)
  t.is(i.all(odd, evens), false)
  t.is(i.all(odd, odds), true)
  t.is(i.all(odd, xs), false)
})

test('any', t => {
  t.is(i.any(even, evens), true)
  t.is(i.any(even, odds), false)
  t.is(i.any(odd, evens), false)
  t.is(i.any(odd, odds), true)
  t.is(i.any(odd, xs), true)
})

test('aperture', t => {
  t.deepEqual(i.list(i.aperture(2, xs)),
    [[1, 2], [2, 3], [3, 4], [4, 5]]
  )

  t.deepEqual(i.list(i.aperture(3, xs)),
    [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
  )

  t.deepEqual(i.list(i.aperture(7, xs)),
    []
  )
})

test('append', t => {
  t.deepEqual(i.list(i.append(6, xs)),
    [1, 2, 3, 4, 5, 6]
  )

  t.deepEqual(i.list(i.append(6, [])),
    [6]
  )
})

test('chain', t => {
  const duplicate = x => [x, x]

  t.deepEqual(i.list(i.chain(duplicate, xs)),
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
  )

  t.deepEqual(i.list(i.chain(identity, xs)),
    xs
  )

  t.deepEqual(i.list(i.chain(duplicate, [])),
    []
  )
})

test('concat', t => {
  t.deepEqual(i.list(i.concat(xs, [1, 2, 3])),
    [1, 2, 3, 4, 5, 1, 2, 3]
  )

  t.deepEqual(i.list(i.concat([], [])),
    []
  )

  t.deepEqual(i.list(i.concat([1], [])),
    [1]
  )

  t.deepEqual(i.list(i.concat([], [1])),
    [1]
  )
})

test('contains', t => {
  t.is(i.contains(1, xs), true)
  t.is(i.contains(10, xs), false)
  t.is(i.contains(1, []), false)
})

test('equals', t => {
  t.is(i.equals(1, 1), true)
  t.is(i.equals('', ''), true)
  t.is(i.equals(1, 2), false)
  t.is(i.equals('', 'a'), false)
  t.is(i.equals([], []), false)
  t.is(i.equals({}, {}), false)
})

test('drop', t => {
  t.deepEqual(i.list(i.drop(1, xs)),
    [2, 3, 4, 5]
  )

  t.deepEqual(i.list(i.drop(3, xs)),
    [4, 5]
  )

  t.deepEqual(i.list(i.drop(+Infinity, xs)),
    []
  )
})

test('list', t => {
  t.deepEqual(i.list([1, 2, 3]),
    [1, 2, 3]
  )
})

test('map', t => {
  t.deepEqual(i.list(i.map(identity, xs))
  , [1, 2, 3, 4, 5]
  )

  t.deepEqual(i.list(i.map(double, xs)),
    [2, 4, 6, 8, 10]
  )
})

test('slice', t => {
  t.deepEqual(i.list(i.slice(0, xs.length, xs)),
    xs
  )

  t.deepEqual(i.list(i.slice(0, +Infinity, xs)),
    xs
  )

  t.deepEqual(i.list(i.slice(0, 3, xs)),
    [1, 2, 3]
  )

  t.deepEqual(i.list(i.slice(4, 4, xs)),
    []
  )

  t.deepEqual(i.list(i.slice(4, 5, xs)),
    [5]
  )

  t.deepEqual(i.list(i.slice(+Infinity, 5, xs)),
    []
  )
})

test('take', t => {
  t.deepEqual(i.list(i.take(1, xs)),
    [1]
  )

  t.deepEqual(i.list(i.take(3, xs)),
    [1, 2, 3]
  )

  t.deepEqual(i.list(i.take(xs.length, xs)),
    xs
  )

  t.deepEqual(i.list(i.take(+Infinity, xs)),
    xs
  )
})
