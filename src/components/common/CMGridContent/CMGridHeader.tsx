import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   }
// }));

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
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    // const classes = useStyles();
    // const {} = this.props;
    // const {} = this.state;
    return (
      <>
        <div>CMGridHeader</div>
      </>
    )
  }
});
