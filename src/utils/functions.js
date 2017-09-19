export const formatPhoneNumber = (s) => {
  let s2 = (""+s).replace(/\D/g, '');
  let m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : m[1] + "-" + m[2] + "-" + m[3];
}

export const looseMatch = (filter, row) => row[filter.id].toString().toLowerCase().includes((filter.value).toString().toLowerCase());

export const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object