import { createArray, sortArrayOfObject } from '../array';

describe('createArray function testing', () => {
  it('Should create array with valid length', () => {
    const arr = createArray(5);
    expect(arr).toHaveLength(5);
  });

  it('Should create array that starts with 0', () => {
    const arr = createArray(6);
    expect(arr[0]).toBe(0);
  });

  it('Should create array that ends with n-1', () => {
    const arr = createArray(8);
    expect(arr).toHaveLength(8);
    expect(arr[7]).toBe(7);
  });
});

describe('sortArrayOfObject function testing', () => {
  it('Should sort array of object by number', () => {
    const arrObj = [
      {
        name: 'John',
        age: 27,
      },
      {
        name: 'Doe',
        age: 21,
      },
      {
        name: 'Jane',
        age: 23,
      },
    ];
    const sorted = sortArrayOfObject(arrObj, { age: 1 });

    expect(sorted).toMatchObject([arrObj[1], arrObj[2], arrObj[0]]);
  });

  it('Should sort array of object by string', () => {
    const arrObj = [
      {
        name: 'John',
        age: 27,
      },
      {
        name: 'Doe',
        age: 21,
      },
      {
        name: 'Jane',
        age: 23,
      },
    ];
    const sorted = sortArrayOfObject(arrObj, { name: -1 });

    expect(sorted).toMatchObject([arrObj[0], arrObj[2], arrObj[1]]);
  });

  it('Should sort array of object by number and string', () => {
    const arrObj = [
      {
        name: 'John',
        age: 23,
      },
      {
        name: 'John',
        age: 27,
      },
      {
        name: 'John',
        age: 21,
      },
    ];
    const sorted = sortArrayOfObject(arrObj, { age: 1, name: 1 });

    expect(sorted).toMatchObject([arrObj[2], arrObj[0], arrObj[1]]);
  });
});
