import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { withStyles, createStyles, WithStyles } from '@material-ui/core';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';

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
export const BKOption = withStyles(styles)(connect(
  (store: Store) => ({
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
    // const {} = this.props;
    // const {} = this.state;
    return (
      <>
        <div>BKOption</div>
      </>
    )
  }
}));
