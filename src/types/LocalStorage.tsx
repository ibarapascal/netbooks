import { DisplayMode, FilterType, FilterAttr } from "../components/books/common/BKConstant";

export class LocalStorage {
  filterInput: string;
  filterOption: FilterAttr | null;
  filterType: FilterType | null;
  pageSize: number;
  displayMode: DisplayMode;
  selectedIdList: Array<string>;
  constructor() {
    this.filterInput = '';
    this.filterOption = null;
    this.filterType = null;
    this.pageSize = 30;
    this.displayMode = 'BigCard';
    this.selectedIdList = Array<string>();
  }
}
