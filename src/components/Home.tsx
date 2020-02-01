import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../store';
import './Home.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputAction } from '../types/BaseTypes';
import { LocalStorage } from '../types/LocalStorage';
import { data } from '../data'
import { BookInfoRes } from '../types/api/GetBookInfo';

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
  localStorage: LocalStorage,
  /**
   * action: save storage
   */
  saveLocalStorage: (payload: InputAction) => void,
  /**
   * action: save static data to redux storage
   */
  saveBookInfo: (payload: BookInfoRes) => void,
}

interface State {
}

/**
 * The place where all story start
 */
export const Home: React.FC<Props> = connect(
  (store: Store) => ({
    localStorage: store.localStorage,
  }),
  (dispatch: any) => ({
    saveLocalStorage: (payload: InputAction) => dispatch({type: 'saveLocalStorageItem', payload}),
    saveBookInfo: (payload: BookInfoRes) => dispatch({type: 'saveBookInfo', payload}),
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
    await this.props.saveBookInfo(data.filter(x => x.isbn));
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
