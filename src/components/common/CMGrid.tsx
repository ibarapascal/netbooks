import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Store } from '../../store';
import { CMGridFooter } from './CMGridContent/CMGridFooter';
import { CMGridHeader } from './CMGridContent/CMGridHeader';
import { CMGridInfo } from './CMGridContent/CMGridInfo';
import { CMGridSidebar } from './CMGridContent/CMGridSidebar';

const useStyles = makeStyles(theme => ({
  root: {
  },
  header: {
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 60,
    textAlign: 'center',
    backgroundColor: '#D0D0D0',
  },
  mainContent: {
    minHeight: 1000,
    marginTop: 20,
  }
}));

interface Props {
  /**
   * Main page content zone
   */
  children: React.ReactNode,
}

interface State {
}

/**
 * Common component used for rendering header, footer and sidebar
 */
export const CMGrid: React.FC<Props> = connect(
  (store: Store) => ({
  }),
  (dispatch: any) => ({
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
    const classes = useStyles();
    const { children } = this.props;
    return (
      <Grid container>
          <Grid item xs={12} className={classes.header}>
            <CMGridHeader />
          </Grid>
          <Grid item xs={3}>
            <CMGridSidebar />
          </Grid>
          <Grid item xs={6} className={classes.mainContent}>
            {children}
          </Grid>
          <Grid item xs={3}>
            <CMGridInfo />
          </Grid>
          <Grid item xs={12} className={classes.footer}>
            <CMGridFooter />
          </Grid>
        </Grid>
    )
  }
});
