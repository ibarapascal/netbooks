import { FilterType } from "./BKConstant";
import { BookUnit } from "../../../types/api/GetBookInfo";
import { Store } from "../../../store";

export class BKService {
  /**
   * 
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
   * 
   * @param props 
   */
  static acquireRawBooks(props: DisplayProps): Array<BookUnit> {
    const { filterInput, filterOption, filterType } = props.localStorage;
    return props.bookInfo.filter(x => this.checkIfMatch(x[filterOption], filterInput, filterType));
  }
  /**
   * 
   * @param props 
   */
  static acquireFinalBooks(props: DisplayProps): Array<BookUnit> {
    const { tagList } = props.localStorage;
    return BKService.acquireRawBooks(props).filter(x => tagList.length === 0 || x?.categories.some(y => tagList.includes(y)));
  }
}

interface DisplayProps {
  bookInfo: Store['bookInfo'],
  localStorage: Store['localStorage'],
}