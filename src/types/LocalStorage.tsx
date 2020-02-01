import { DisplayMode, FilterType, FilterAttr } from "../components/books/common/BKConstant";

export class LocalStorage {
  /***
   * Condition
   */
  filterInput: string;
  filterOption: FilterAttr | null;
  filterType: FilterType | null;
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
    this.filterOption = null;
    this.filterType = null;
    this.pageSize = 30;
    this.displayMode = 'BigCard';
    this.tagList = Array<string>();
    this.selectedIdList = Array<string>();
  }
}
