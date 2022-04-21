/**
 * Create an array with n length
 * eg. n = 5 => [0,1,2,3,4]
 *
 * @param n - array length
 * @returns array with n length
 */
export function createArray(n: number) {
  const arr = [];
  for (let i = 0; i < new Array(n).length; i++) arr.push(i);
  return arr;
}

/**
 * Sort array of object by the given sort param
 *
 * @param objs - array of object o sort
 * @param sortParam - sort param with key and value (1 to asc, -1 to desc)
 * @returns sorted array of object
 */
export function sortArrayOfObject<T>(
  objs: T[],
  sortParam: Partial<Record<keyof T, number>>,
): T[] {
  // duplicate object to keep the original value
  const duplicatedObjs = [...objs];

  // prevent sorting earlier if sort param empty
  const sortKeys = Object.keys(sortParam) as (keyof T)[];
  if (sortKeys.length <= 0) return duplicatedObjs;

  duplicatedObjs.sort((a, b) => {
    for (const key of sortKeys) {
      let result: number;
      // check value type
      if (typeof a[key] === 'number')
        result = (+a[key] - +b[key]) * +sortParam[key] ?? 0;
      else
        result = `${a[key]}`.localeCompare(`${b[key]}`) * +sortParam[key] ?? 0;

      if (result === 0) continue;
      return result;
    }
    return 0;
  });

  return duplicatedObjs;
}
