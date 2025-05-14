/**
 * @description Check if value is an object
 * @param {object} obj - Value to check
 * @returns {boolean} True if value is an object, false otherwise
 */
function isObject(obj) {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    'constructor' in obj &&
    obj.constructor === Object
  );
}

/**
 * @description Check if value is a DOM node
 * @param {Node} node - Value to check
 * @returns {boolean} True if value is a DOM node, false otherwise
 */
function isNode(node) {
  return typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined'
    ? node instanceof window.HTMLElement
    : node &&
        typeof node === 'object' &&
        node.nodeType === 1 &&
        typeof node.nodeName === 'string';
}

export { isNode, isObject };
