import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { withStyles, createStyles, WithStyles, Grid } from '@material-ui/core';
import { CMGridHeader } from './CMGridContent/CMGridHeader';
import { CMGridSidebar } from './CMGridContent/CMGridSidebar';
import { CMGridFooter } from './CMGridContent/CMGridFooter';

const styles = () => createStyles({
  root: {
  },
  header: {
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  }
});

interface Props extends WithStyles<typeof styles> {
  classes: any,
  children: React.ReactNode,
}

interface State {
}

/**
 * Write the description of this component here
 */
export const CMGrid = withStyles(styles)(connect(
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
    const { classes, children } = this.props;
    // const {} = this.state;
    return (
      <>
        <Grid container>
          <Grid item xs={12} className={classes.header}>
            <CMGridHeader />
          </Grid>
          <Grid item xs={3}>
            <CMGridSidebar />
          </Grid>
          <Grid item xs={6}>
            {children}
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={12} className={classes.footer}>
            <CMGridFooter />
          </Grid>
        </Grid>
      </>
    )
  }
}));
