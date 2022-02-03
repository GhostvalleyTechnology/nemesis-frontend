import { SortValue } from '@smui/data-table';

export function sortFunction(items: any[], sort: keyof any, sortDirection: Lowercase<keyof typeof SortValue>) {
  items.sort((a, b) => {
    const [aVal, bVal] = [a[sort], b[sort]][
      sortDirection === 'ascending' ? 'slice' : 'reverse'
    ]();
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal);
    }
    return Number(aVal) - Number(bVal);
  });
  items = items;
}