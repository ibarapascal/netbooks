import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import {
  withStyles,
  createStyles,
  WithStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  ListItem,
  ListItemText, 
  Theme,
  List,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { BookInfoRes, BookUnit } from '../../../types/api/GetBookInfo';
import { ProcessService } from '../../../services/ProcessService';
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { BKConstant as CONST } from '../common/BKConstant';
import { BKService as Service } from '../common/BKService';

const styles = (theme: Theme) => createStyles({
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

  handleOpen = (isbn: string) => () => {
    console.log(isbn);
  }

  render() {
    const { classes } = this.props;
    const { pageSize, displayMode } = this.props.localStorage;

    const displayBook = Service.acquireFinalBooks(this.props).slice(0, pageSize);;
    
    if (displayMode !== 'List') {
      return (
        <Grid container>
          {displayBook.map(book => {return (
            this.Card(book)
          )})}
        </Grid>
      )
    } else {
      return (
        <List className={classes.list}>
          {displayBook.map(book => {return (
            this.List(book)
          )})}
        </List>
      )
    }
  }

  Card = (book: BookUnit) => {
    const { classes } = this.props;
    const { displayMode } = this.props.localStorage;
    const gridWidth = ProcessService.acquireAttrValue(CONST.DISPLAY_MODE_MAP, displayMode);
    const url = book.thumbnailUrl ?? 'https://via.placeholder.com/300';
    return (
      <Grid
        item
        xs={gridWidth}
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
    )
  }

  List = (book: BookUnit) => {
    const { classes } = this.props;
    const url = book.thumbnailUrl ?? 'https://via.placeholder.com/300';
    return (
      <ListItem
        alignItems="flex-start"
        key={book.isbn}
        className={classes.listUnit}
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
    )
  }

}));
