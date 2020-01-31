import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../store';
import { InputAction } from '../types/BaseTypes';
import { Storage } from '../types/Storage';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//   },
// });

// const style = {
// };

interface Props {
  /**
   * localStorage: storage
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
 * Write the description of this component here
 */
export const YourComponentName: React.FC<Props> = connect(
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
    // const classes = useStyles();
    // const {} = this.props;
    // const {} = this.state;
    return (
      <></>
    )
  }
});
