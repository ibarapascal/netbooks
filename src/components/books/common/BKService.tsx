import { Store } from '../../../store';
import { BookUnit } from '../../../types/api/GetBookInfo';
import { FilterType } from './BKConstant';

export class BKService {
  /**
   * Check the value got by filter option whether match the filter condition
   * @param value 
   * @param input 
   * @param type 
   */
  static checkIfMatch(value: string | Array<string> | unknown, input: string, type: FilterType): boolean {
    if (input === '') {
      return true;
    } else {
      switch(type) {
        case 'Normal':
          return JSON.stringify(value).toUpperCase().includes(input.toUpperCase());
        case 'Exact':
          return typeof value === 'string'
            ? value.toUpperCase() === input.toUpperCase()
            : value instanceof Array
              ? value.some(x => x.toUpperCase() === input.toUpperCase())
              : false;
        case 'Start': 
          return typeof value === 'string'
            ? value.startsWith(input)
            : value instanceof Array
              ? value.some(x => x.startsWith(input))
              : false;
        default:
          return false;
      }
    }
  }
  /**
   * Get the books after filter
   * @param props 
   */
  static acquireRawBooks(props: DisplayProps): Array<BookUnit> {
    const { filterInput, filterOption, filterType } = props.localStorage;
    // Input filter
    return props.bookInfo.filter(x => this.checkIfMatch(x[filterOption], filterInput, filterType));
  }
  /**
   * Get the books after filter and tags selection
   * @param props 
   */
  static acquireFinalBooks(props: DisplayProps): Array<BookUnit> {
    const { tagList, sortMode } = props.localStorage;
    // Select tag
    const result = BKService.acquireRawBooks(props).filter(x => tagList.length === 0 || x?.categories.some(y => tagList.includes(y)));
    // Sort content
    result.sort((a, b) => (a as any)[sortMode].toString().localeCompare((b as any)[sortMode].toString()))
    return result;
  }
}

interface DisplayProps {
  bookInfo: Store['bookInfo'],
  localStorage: Store['localStorage'],
}