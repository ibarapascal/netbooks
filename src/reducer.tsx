import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { Storage } from './types/Storage';
import { BookInfoRes } from './types/api/GetBookInfo';
import { Store } from './store';

const StorageReducer = createReducer<Store['storage']>(
  new Storage(),
  {
    saveStorageItem(state: Storage, action: any) {
      return state = {...state, [action.payload.item]: action.payload.value};
    },
    clearStorage(state: Storage) {
      return state = new Storage();
    },
  }
);

const BookInfoReducer = createReducer<Store['bookInfo']>(
  new BookInfoRes(),
  {
    saveBookInfo(state: any, action: any) {
      return state = action.payload;
    },
  }
);

export const reducer = combineReducers({
  storage: StorageReducer,
  bookInfo: BookInfoReducer,
});
