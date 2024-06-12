/**
 * Represents a path or array of paths used for selecting properties within an object.
 * Paths can be dot-notated strings for nested properties and can include array indices.
 * For example, "prop1.prop2[2]" accesses the third item in the array located at `obj.prop1.prop2`.
 * @typedef {(string|string[])} Path
 */
export type Path = string | string[];

/**
 * Represents a deeply nested object where keys can be strings or numbers, and values can be objects or any other data type.
 * @typedef {{[key: string | number]: NestedObj | unknown}} NestedObj
 */
export type NestedObj = { [key: string | number]: NestedObj | unknown };

/**
 * Selects and returns a subset of a nested object, based on the specified paths.
 * This function can pick properties at any depth and can handle paths that involve both object properties and array indices.
 * It allows for precise selection of elements within nested structures, including arrays.
 *
 * @param {NestedObj} obj - The source object from which properties are to be extracted.
 * @param {Path} paths - A single path or an array of paths that specify the properties to extract. Paths can include properties and array indices.
 * @returns {Partial<NestedObj>} A new object containing only the picked properties as specified by paths.
 */
export function nestedPick(obj: NestedObj, paths: Path): Partial<NestedObj> {
  // to be implemented
  return obj;
}
