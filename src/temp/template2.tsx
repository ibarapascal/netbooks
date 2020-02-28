import React from 'react';
import { connect } from 'react-redux';

import { Store } from '../store';
import { InputAction } from '../types/BaseTypes';
import { LocalStorage } from '../types/LocalStorage';

// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

interface Props {
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
export const YourComponentName: React.FC<Props> = connect(
  (store: Store) => ({
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

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    // const classes = useStyles();
    // const {} = this.props;
    // const {} = this.state;
    return (
      null
    )
  }
});
