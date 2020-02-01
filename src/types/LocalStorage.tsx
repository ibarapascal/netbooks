import { DisplayMode, FilterType, FilterAttr } from "../components/books/common/BKConstant";

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
  pageSize: number;
  displayMode: DisplayMode;
  /**
   * Storage
   */
  tagList: Array<string>;
  selectedIdList: Array<string>;
  constructor() {
    this.filterInput = '';
    this.filterOption = 'title';
    this.filterType = 'Normal';
    this.pageSize = 30;
    this.displayMode = 'BigCard';
    this.tagList = Array<string>();
    this.selectedIdList = Array<string>();
  }
}
