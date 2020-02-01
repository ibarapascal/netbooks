import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { withStyles, createStyles, WithStyles, Grid } from '@material-ui/core';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { BookInfoRes, BookUnit } from '../../../types/api/GetBookInfo';
import { BKConstant as CONST } from '../common/BKConstant';
import { ProcessService } from '../../../services/ProcessService';

const styles = () => createStyles({
  root: {
  }
});

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
export const BKItems = withStyles(styles)(connect(
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

  render() {
    const { bookInfo } = this.props;
    const {
      displayMode,
      pageSize
    } = this.props.localStorage;
    const gridWidth = ProcessService.acquireAttrValue(CONST.DISPLAY_MODE_MAP, displayMode);

    const displayBook = bookInfo.slice(0, pageSize);
    return (
      <Grid container>
        {displayBook.map(book => {return (
          <Grid item xs={gridWidth}>
            {displayMode !== 'List' ? <>
              {this.Card(book)}
            </> : <>
              {this.List(book)}
            </>}
          </Grid>
        )})}
      </Grid>
    )
  }

  Card = (book: BookUnit) => {
    return (
      <>{book.isbn}</>
    )
  }

  List = (book: BookUnit) => {
    return (
      <>{book.isbn}</>
    )
  }

}));
