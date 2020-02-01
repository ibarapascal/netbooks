import { LocalStorage } from './types/LocalStorage';
import { BookInfoRes } from './types/api/GetBookInfo';

export interface Store {
  localStorage: LocalStorage;
  bookInfo: BookInfoRes;
}