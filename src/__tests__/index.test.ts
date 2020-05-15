import {hello} from '../index'

test('Index', () => {
  expect(hello()).toBe('hello');
});