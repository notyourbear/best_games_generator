import fns from './fns';

describe('title generator functions', () => {
  describe('switcher', () => {
    test('switches to prev or next', () => {
      expect(fns.switcher('next')).toEqual('prev');
      expect(fns.switcher('prev')).toEqual('next');
    });
  });

  describe('arrayMaker', () => {
    test('returns an array of words', () => {
      const opts = { input:  'this is a test.' };
      const expected = ['this', 'is', 'a', 'test.'];
      expect(fns.arrayMaker(opts)).toEqual(expect.arrayContaining(expected));
    });
  });

  describe('sample', () => {
    test('returns a random item from array', () => {
      const array = [1,2,3];
      const result = fns.sample({array});
      const isTrue = result === 1 || result === 2 || result === 3;
      expect(isTrue).toBe(true);
    });

    test('returns a seeded random number', () => {
      const array = [1,2,3,4,5,6];
      const result = fns.sample({array, seed: 'imagine 1'});
      expect(result).toEqual(4);
    });
  });

  describe('addToState', () => {
    test('creates a state with three items', () => {
      const array = ['hey', 'you', 'there'];
      const expected = {
        hey: [{
          entry: true,
          exit: false,
          value: 'hey'
        }],
        you: [{
          entry: false,
          exit: false,
          value: 'you'
        }],
        there: [{
          entry: false,
          exit: true,
          value: 'there'
        }]
      };

      expect(fns.addToState({array})).toEqual(expect.objectContaining(expected));
    });
  });

  describe('createChain', () => {
    const state = {
      hey: [{
        entry: true,
        exit: false,
        value: 'hey'
      }],
      you: [{
        entry: false,
        exit: false,
        value: 'you'
      }],
      there: [{
        entry: false,
        exit: true,
        value: 'there'
      }]
    };

    expect(fns.createChain({state, amount: 1})).toEqual('hey')


  })
});
