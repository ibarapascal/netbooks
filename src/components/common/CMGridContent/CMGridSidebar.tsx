import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { withStyles, createStyles, WithStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
  }
});

interface Props extends WithStyles<typeof styles> {
  classes: any,
}

interface State {
}

/**
 * Write the description of this component here
 */
export const CMGridSidebar = withStyles(styles)(connect(
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
    classes: {},
  };

  async componentDidMount() {
  }

  render() {
    // const {} = this.props;
    // const {} = this.state;
    return (
      <>
        <div>CMGridSidebar</div>
      </>
    )
  }
}));
