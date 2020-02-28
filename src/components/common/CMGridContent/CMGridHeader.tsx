import React from 'react';
import { connect } from 'react-redux';

import {
  Card,
  CardMedia,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Store } from '../../../store';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  font: {
    position: 'absolute',
    top: '20%',
    width: '100%',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'none',
    fontFamily: 'Comic Sans MS'
  }
}));

interface Props {
}

interface State {
}

/**
 * Common header component
 */
export const CMGridHeader: React.FC<Props> = connect(
  (store: Store) => ({
  }),
  (dispatch: any) => ({
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
  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    const classes = useStyles();
    return (
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://drscdn.500px.org/photo/51516774/q%3D80_m%3D2000/v2?sig=7973e7123b681c6a91f0b5887ca44ea5684fb9465684ee0d9bfdbf7296a30da6"
          title="Contemplative Reptile"
        />
        <Typography gutterBottom variant="h1" component="h1" className={classes.font}>
          Books
        </Typography>
      </Card>
    )
  }
});
