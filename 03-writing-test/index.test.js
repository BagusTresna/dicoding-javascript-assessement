import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum menambahkan dua angka', () => {
  assert.strictEqual(sum(1, 2), 3,);
  assert.strictEqual(sum(-1, -1), -2,);
  assert.strictEqual(sum(0, 0), 0,);
  assert.strictEqual(sum(5, -2), 3,);
});