import React from 'react';
import { connect } from 'react-redux';

import {
  createStyles,
  withStyles,
  WithStyles
} from '@material-ui/core';

import { Store } from '../store';
import { InputAction } from '../types/BaseTypes';
import { LocalStorage } from '../types/LocalStorage';

const styles = () => createStyles({
  root: {
  }
});

interface Props extends WithStyles<typeof styles> {
  classes: any,
  localStorage: LocalStorage,
  saveLocalStorage: (payload: InputAction) => void,
}

interface State {
}

/**
 * Write the description of this component here
 */
export const YourComponentName = withStyles(styles)(connect(
  (store: Store) => ({
    localStorage: store.localStorage,
  }),
  (dispatch: any) => ({
    saveLocalStorage: (payload: InputAction) => dispatch({type: 'saveLocalStorageItem', payload}),
  })
)(class extends React.Component<Props, State>{
  static defaultProps = {
    classes: {},
  };
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
  }

  render() {
    // const {} = this.props;
    // const {} = this.state;
    return (
      null
    )
  }
}));
