import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { Grid } from '@material-ui/core';
import { CMGridHeader } from './CMGridContent/CMGridHeader';
import { CMGridSidebar } from './CMGridContent/CMGridSidebar';
import { CMGridFooter } from './CMGridContent/CMGridFooter';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
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
    const { children } = this.props;
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
});
