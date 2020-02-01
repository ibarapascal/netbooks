import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  ListItem,
  ListItemText, 
  List,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { BookInfoRes } from '../../../types/api/GetBookInfo';
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { BKService as Service } from '../common/BKService';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
  cardUnit: {
  },
  card: {
    maxWidth: 345,
  },
  cardActionArea: {
    height: 600,
  },
  media: {
    height: 300,
  },
  cardDescription: {
    height: 200,
    overflow: 'hidden',
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
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  static defaultProps = {
  };

  async componentDidMount() {
  }

  handleOpen = (isbn: string) => () => {
    console.log(isbn);
  }

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { pageSize, displayMode } = this.props.localStorage;
    const displayBook = Service.acquireFinalBooks(this.props).slice(0, pageSize);

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
              className={classes.cardUnit}
            >
              <Card className={classes.card}>
                <CardActionArea
                  className={classes.cardActionArea}
                  onClick={this.handleOpen(book.isbn ?? '')}
                >
                  <CardMedia
                    className={classes.media}
                    image={url}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2">
                      {book.authors}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.cardDescription}>
                      {book.shortDescription ?? 'No specific description.'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton edge="end" aria-label="comments">
                    <AddIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="comments">
                    <FormatListBulletedIcon />
                  </IconButton>
                </CardActions>
              </Card>
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
              onClick={this.handleOpen(book.isbn ?? '')}
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
                <IconButton edge="end" aria-label="comments">
                  <AddIcon />
                </IconButton>
                <IconButton edge="end" aria-label="comments">
                  <FormatListBulletedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )})}
        </List>
      )
    }
  }
});
