import { DisplayMode } from "../components/books/common/BKConstant";

export class LocalStorage {
  pageSize: number;
  displayMode: DisplayMode;
  constructor() {
    this.pageSize = 30;
    this.displayMode = 'BigCard';
  }
}
