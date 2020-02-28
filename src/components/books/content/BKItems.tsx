import { debounce } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import { Store } from '../../../store';
import { BookInfoRes } from '../../../types/api/GetBookInfo';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { CMSelectionUnit } from '../../common/CMSelection';
import { BKConstant as CONST } from '../common/BKConstant';
import { BKService as Service } from '../common/BKService';

const useStyles = makeStyles(theme => ({
  root: {
  },
  cardRoot: {
  },
  cardUnit: {
    height: '100%',
    maxWidth: 350,
  },
  cardActionArea: {
    height: 500,
  },
  cardContent: {
    height: '100%',
  },
  media: {
    height: 350,
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listUnit: {
  },
  inline: {
    display: 'inline',
  },
}));

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
 * Book display component
 */
export const BKItems: React.FC<RawProps> = connect(
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

  handleOnMouseOver = (isbn: string) => () => {
    this.debounceEvent(isbn);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  debounceEvent = debounce((value: string) => {
    console.log(value);
  }, 500);

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { pageSize, displayMode } = this.props.localStorage;
    const displayBook = Service.acquireFinalBooks(this.props).slice(0, Number(pageSize));
    const tooltipList: Array<CMSelectionUnit> = CONST.TOOLTIP_SUBMAP.map(x => ({label: x.value, value: x.attr}));
    // TODO: re-rendered during shift between `Card` and `List`, use hidden to avoid
    if (displayMode !== 'List') {
      return (
        <Grid container>
          {displayBook.map(book => {
            const url = book.thumbnailUrl ?? 'https://via.placeholder.com/300';
            return (
            <Grid
              item
              xs={displayMode === 'BigCard' ? 4 : 2}
              key={book.isbn}
              className={classes.cardRoot}
            >
              <Tooltip
                placement="left"
                TransitionProps={{timeout: 1000}}
                title={
                  tooltipList.map(item => {
                    const showingValue = item.value === 'publishedDate'
                      ? new Date((book as any)[item.value]?.$date ?? '')
                      : (book as any)[item.value];
                    return (
                    <Typography gutterBottom variant="subtitle1" component="h2" key={item.value}>
                      {item.label + ': ' + showingValue}
                    </Typography>
                  )})
              }>
              <Card className={classes.cardUnit}>
                <CardActionArea
                  className={classes.cardActionArea}
                  onMouseOver={this.handleOnMouseOver(book.isbn ?? '')}
                >
                  <CardMedia
                    className={classes.media}
                    image={url}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2">
                      {book.authors}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Tooltip title="Add to order" aria-label="add" placement="top">
                    <IconButton edge="end" aria-label="comments">
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Details" aria-label="add" placement="top">
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      component={Link}
                      to={`/details/${book.isbn ?? ''}`}
                    >
                      <FormatListBulletedIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
              </Tooltip>
            </Grid>
          )})}
        </Grid>
      )
    } else {
      return (
        <List className={classes.list}>
          {displayBook.map(book => {
            const url = book.thumbnailUrl ?? 'https://via.placeholder.com/300';
            return (
            <ListItem
              alignItems="flex-start"
              className={classes.listUnit}
              key={book.isbn}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={url} />
              </ListItemAvatar>
              <ListItemText
                primary={book.title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {book.authors}
                    </Typography>
                    {` — ${book.categories}`}
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Tooltip title="Add to order" aria-label="add">
                  <IconButton edge="end" aria-label="comments">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Details" aria-label="add">
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    component={Link}
                    to={`/details/${book.isbn ?? ''}`}
                  >
                    <FormatListBulletedIcon />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          )})}
        </List>
      )
    }
  }
});
