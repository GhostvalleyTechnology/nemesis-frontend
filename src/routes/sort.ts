import { SortValue } from '@smui/data-table';

export function sortFunc(sort: keyof any, sortDirection: Lowercase<keyof typeof SortValue>) {
  return (a: any, b: any) => {
    const [aVal, bVal] = [getValue(a, sort), getValue(b, sort)][
      sortDirection === 'ascending' ? 'slice' : 'reverse'
    ]();
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal);
    }
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      console.log(JSON.stringify(aVal))
      console.log(JSON.stringify(bVal))
      console.log(aVal + ":" + bVal);
      console.log(aVal && bVal ? -1 : 1);
      return aVal && bVal ? -1 : 1;
    }
    return Number(aVal) - Number(bVal);
  };
}

function getValue(obj: any, sort: keyof any):any {
  if(typeof sort == 'string' && sort.includes('.')) {
    return findValue(obj, sort);
  }
  return obj[sort] ? obj[sort] : '';
}

function findValue(obj: any, key: any){
  if(!obj) {
    return '';
  }
  let keys = key.split('.');
  for (var i = 0; i < keys.length; i++) {
    if(!obj[keys[i]]) { return ''; }
    obj = obj[keys[i]];
  }
  return obj;
}