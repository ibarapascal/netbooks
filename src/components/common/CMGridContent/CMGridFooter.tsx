import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
  }
}));

interface Props {
}

interface State {
}

/**
 * Common footer component
 */
export const CMGridFooter: React.FC<Props> = connect(
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
    const classes = useStyles();
    return (
      <>
        <div className={classes.root}>Created by <a href='https://github.com/ibarapascal'>ibarapascal</a></div>
      </>
    )
  }
});
