import test from 'tape';
import {toArray} from 'utils/utils';

test('utils -> toArray', t => {
  t.deepEqual(
    toArray(),
    [],
    'Should return an empty array for undefined value'
  );

  t.deepEqual(
    toArray([1, 2]),
    [1, 2],
    'Should not change an existing array'
  );

  t.deepEqual(
    toArray(null),
    [],
    'Should return an empty array for a null value'
  );

  t.deepEqual(
    toArray('test'),
    ['test'],
    'Should return an array with one element for a string'
  );

  t.end();
});