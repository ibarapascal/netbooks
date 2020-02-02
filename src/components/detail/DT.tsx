import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { InputAction } from '../../types/BaseTypes';
import { LocalStorage } from '../../types/LocalStorage';
import { CMGrid } from '../common/CMGrid';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { URLService } from '../../services/URLService';
import { BKConstant } from '../books/common/BKConstant';
import { BookInfoRes } from '../../types/api/GetBookInfo';

const useStyles = makeStyles(theme => ({
  root: {
  },
  button: {
  }
}));

interface Props {
  /**
   * reactr-router-dom route history
   */
  history: any,
  /**
   * redux store: main books list
   */
  bookInfo: BookInfoRes,
  /**
   * Props description
   */
  localStorage: LocalStorage,
  /**
   * Props description
   */
  saveLocalStorage: (payload: InputAction) => void,
}

interface State {
} 

/**
 * Component description
 */
export const DT: React.FC<Props> = connect(
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
  };

  async componentDidMount() {
  }
  acquireId(): string | undefined {
    const { history } = this.props;
    if (URLService.acquireCurrentPageDomain(history) === 'details') {
      return URLService.acquireEditingId(history);
    }
  }

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { bookInfo } = this.props;
    const isbn = this.acquireId() ?? '';
    const book = bookInfo.find(x => x.isbn === isbn);
    return (
      <CMGrid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color={'default'}
              size="large"
              className={classes.button}
              startIcon={<ArrowBackIcon />}
              component={Link}
              to={`/books`}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={12}>
            {BKConstant.DATA_MAP.map(item => {
              const showingValue = item.attr === 'publishedDate'
                ? new Date((book as any)[item.attr]?.$date ?? '')
                : (book as any)[item.attr];
              return (
              <Typography gutterBottom variant="subtitle1" component="h2" key={item.value}>
                {item.value + ': ' + showingValue}
              </Typography>
            )})}
          </Grid>
        </Grid>
      </CMGrid>
    )
  }
});
