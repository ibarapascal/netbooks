import React from 'react';
import { connect } from 'react-redux';

import {
  Fab,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Store } from '../../../store';
import { BookInfoRes } from '../../../types/api/GetBookInfo';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import {
  CMSelection,
  CMSelectionUnit
} from '../../common/CMSelection';
import { CMTextInput } from '../../common/CMTextInput';
import { BKConstant as CONST } from '../common/BKConstant';
import { BKService as Service } from '../common/BKService';

const useStyles = makeStyles(theme => ({
  root: {
  },
  tags: {
    margin: 3,
    height: 42,
    textTransform: 'none',
  }
}));

interface TagUnit {
  name: string;
  amount: number;
  isbn: string;
}

interface ReduxProps {
  /**
   * redux store: main books list
   */
  bookInfo: BookInfoRes,
  /**
   * redux store: locaStorage
   */
  localStorage: LocalStorage,
  /**
   * redux action: save item to localStorage
   */
  saveLocalStorage: (payload: InputAction) => void,
}

interface RawProps {
}

interface Props extends RawProps, ReduxProps {
}

interface State {
}

/**
 * Book condition component
 */
export const BKCondition: React.FC<RawProps> = connect(
  (store: Store) => ({
    bookInfo: store.bookInfo,
    localStorage: store.localStorage,
  }),
  (dispatch: any) => ({
    saveLocalStorage: (payload: InputAction) => dispatch({type: 'saveLocalStorageItem', payload}),
  })
)(class extends React.Component<Props, State>{
  static defaultProps = {
  };
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
  }

  acquireCategoryList(): Array<TagUnit> {
    let list: Array<TagUnit> = [];
    // For display each book's each categories
    Service.acquireRawBooks(this.props).forEach(x => x?.categories.forEach(y => !list.some(z => z.name === y)
    // If not exist, init
      ? list.push({name: y, amount: 1, isbn: x.isbn ?? ''})
    // If exist, add amount 1
      : list = list.map(item => item.name === y ? {name: item.name, amount: item.amount + 1, isbn: item.isbn} : item)));
    // Sort by sum amount with the largest first
    list.sort((a,b) => b.amount - a.amount);
    // Remove empty tag
    return list.filter(x => x.name !== '');
  }

  handleInputFilter = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload: InputAction = {item: 'filterInput', value: event.target.value};
    this.props.saveLocalStorage(payload);
  };
  handleSelectFilter = (field: string) => (event: CMSelectionUnit | null | undefined) => {
    const payload: InputAction = {item: field, value: event?.value ?? null};
    this.props.saveLocalStorage(payload);
  };
  handleTagClick = (name: string) => () => {
    const { tagList } = this.props.localStorage;
    let list = tagList.slice();
    tagList.includes(name) ? list = list.filter(x => x !== name) : list.push(name);
    const payload: InputAction = {item: 'tagList', value: list};
    this.props.saveLocalStorage(payload);
  }

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { localStorage } = this.props;
    const optionList: Array<CMSelectionUnit> = CONST.FILTER_SUBMAP.map(x => ({label: x.value, value: x.attr}));
    const typeList: Array<CMSelectionUnit> = CONST.OPTION_MODE_MAP.map(x => ({label: x.value, value: x.attr}));

    const categoryList: Array<TagUnit> = this.acquireCategoryList();
  
    return (
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Typography gutterBottom variant="h5" component="h2">
            Input
          </Typography>
          <CMTextInput
            id='BK_INPUT_01'
            value={localStorage.filterInput}
            onChange={this.handleInputFilter()}
            customProps={{
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography gutterBottom variant="h5" component="h2">
            Filter
          </Typography>
          <CMSelection
            id='BK_SELECT_01'
            value={optionList.find(x => x.value === localStorage.filterOption)}
            dataList={optionList}
            onChange={this.handleSelectFilter('filterOption')}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography gutterBottom variant="h5" component="h2">
            Option
          </Typography>
          <CMSelection
            id='BK_SELECT_02'
            value={typeList.find(x => x.value === localStorage.filterType)}
            dataList={typeList}
            onChange={this.handleSelectFilter('filterType')}
          />
        </Grid>
        <Grid item xs={12}>
          {categoryList.map((tag) => {return (
            <Fab
              variant="extended"
              key={tag.name}
              className={classes.tags}
              color={localStorage.tagList.includes(tag.name) ? 'primary' : 'default'}
              onClick={this.handleTagClick(tag.name)}
            >
              {tag.name + ' - ' + tag.amount}
            </Fab>
          )})}
        </Grid>
      </Grid>
    )
  }
});
