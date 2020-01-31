import { Storage } from './types/Storage';
import { BookInfoRes } from './types/api/GetBookInfo';

export interface Store {
  storage: Storage;
  bookInfo: BookInfoRes;
}