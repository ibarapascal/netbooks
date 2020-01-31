import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../store';
import './Home.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputAction } from '../types/BaseTypes';
import { Storage } from '../types/Storage';

const divStyle = {
  color: 'blue',
};

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

interface Props {
  /**
   * localStorage storage
   */
  storage: Storage,
  /**
   * action: save storage
   */
  saveStorage: (payload: InputAction) => void,
}

interface State {
}

/**
 * The place where all story start
 */
export const Home: React.FC<Props> = connect(
  (store: Store) => ({
    storage: store.storage,
  }),
  (dispatch: any) => ({
    saveStorage: (payload: InputAction) => dispatch({type: 'saveStorageItem', payload}),
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

  render() {
    return <this._render />
  }
  _render: React.FC = () => {
    const classes = useStyles();
    // const {} = this.props;
    // const {} = this.state;
    return (
      <>
        <div className='yourStyleClass'>netBooks</div>
        <Button
          className={classes.root}
        >
          Text
        </Button>
        <div style={divStyle}>XXX</div>
      </>
    )
  }
});
