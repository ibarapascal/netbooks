import { DisplayMode } from "../components/books/common/BKConstant";

export class LocalStorage {
  pageSize: number;
  displayMode: DisplayMode;
  selectedIdList: Array<string>;
  constructor() {
    this.pageSize = 30;
    this.displayMode = 'BigCard';
    this.selectedIdList = Array<string>();
  }
}
