export const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object

// /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im