import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { Storage } from './types/Storage';

const StorageReducer = createReducer<Storage>(
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

export const reducer = combineReducers({
  Storage: StorageReducer,
});
