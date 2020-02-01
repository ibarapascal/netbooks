import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import {
  withStyles,
  createStyles,
  WithStyles,
  Grid,
  Typography,
  Fab
} from '@material-ui/core';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { CMTextInput } from '../../common/CMTextInput';
import { CMSelection, CMSelectionUnit } from '../../common/CMSelection';
import { BKConstant as CONST } from '../common/BKConstant';
import { BookInfoRes } from '../../../types/api/GetBookInfo';
import { BKService as Service } from '../common/BKService';

const styles = () => createStyles({
  root: {
  },
  tags: {
  }
});

type TagUnit = {
  name: string;
  amount: number;
  isbn: string;
}

interface Props extends WithStyles<typeof styles> {
  classes: any,
  bookInfo: BookInfoRes,
  localStorage: LocalStorage,
  saveLocalStorage: (payload: InputAction) => void,
}

interface State {
}

/**
 * Write the description of this component here
 */
export const BKCondition = withStyles(styles)(connect(
  (store: Store) => ({
    bookInfo: store.bookInfo,
    localStorage: store.localStorage,
  }),
  (dispatch: any) => ({
    saveLocalStorage: (payload: InputAction) => dispatch({type: 'saveLocalStorageItem', payload}),
  })
)(class extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  static defaultProps = {
    classes: {},
  };

  async componentDidMount() {
  }

  acquireCategoryList(): Array<TagUnit> {
    let list: Array<TagUnit> = [];
    // For display each book's each categories
    Service.acquireDisplayBooks(this.props).forEach(x => x?.categories.forEach(y => !list.some(z => z.name === y)
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
    const { classes, localStorage } = this.props;
    const optionList: Array<CMSelectionUnit> = CONST.FILTER_SUBMAP.map(x => ({label: x.value, value: x.attr}));
    const typeList: Array<CMSelectionUnit> = CONST.OPTION_MODE_MAP.map(x => ({label: x.value, value: x.attr}));

    const categoryList: Array<TagUnit> = this.acquireCategoryList();
  
    return (
      <Grid container spacing={4}>
        <Grid item xs={6}>
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
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
}));
