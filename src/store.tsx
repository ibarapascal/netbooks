import { BookInfoRes } from './types/api/GetBookInfo';
import { LocalStorage } from './types/LocalStorage';

export interface Store {
  localStorage: LocalStorage;
  bookInfo: BookInfoRes;
}