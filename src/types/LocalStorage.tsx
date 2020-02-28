import {
  DisplayMode,
  FilterAttr,
  FilterType,
  SortAttr
} from '../components/books/common/BKConstant';

export class LocalStorage {
  /***
   * Condition
   */
  filterInput: string;
  filterOption: FilterAttr;
  filterType: FilterType;
  /**
   * Option
   */
  pageSize: string;
  displayMode: DisplayMode;
  sortMode: SortAttr;
  /**
   * Storage
   */
  tagList: Array<string>;
  selectedIdList: Array<string>;
  constructor() {
    this.filterInput = '';
    this.filterOption = 'title';
    this.filterType = 'Normal';
    this.pageSize = '20';
    this.displayMode = 'SmallCard';
    this.sortMode = 'title';
    this.tagList = Array<string>();
    this.selectedIdList = Array<string>();
  }
}
