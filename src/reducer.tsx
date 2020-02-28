import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';

import { Store } from './store';
import { BookInfoRes } from './types/api/GetBookInfo';
import { LocalStorage } from './types/LocalStorage';

const LocalStorageReducer = createReducer<Store['localStorage']>(
  new LocalStorage(),
  {
    saveLocalStorageItem(state: LocalStorage, action: any) {
      return {...state, [action.payload.item]: action.payload.value};
    },
    clearLocalStorage(state: LocalStorage) {
      return new LocalStorage();
    },
  }
);

const BookInfoReducer = createReducer<Store['bookInfo']>(
  new BookInfoRes(),
  {
    saveBookInfo(state: any, action: any) {
      return action.payload;
    },
  }
);

export const reducer = combineReducers({
  localStorage: LocalStorageReducer,
  bookInfo: BookInfoReducer,
});
