import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { withStyles, createStyles, WithStyles } from '@material-ui/core';
import { CMGrid } from '../common/CMGrid';
import { BookInfoRes } from '../../types/api/GetBookInfo';
import { data } from '../../data'
import { Grid } from '@material-ui/core';
import { BKCondition } from './content/BKCondition';
import { BKOption } from './content/BKOption';
import { BKItems } from './content/BKItems';

const styles = () => createStyles({
  root: {
  }
});

interface Props extends WithStyles<typeof styles> {
  classes: any,
  saveBookInfo: (payload: BookInfoRes) => void,
}

interface State {
}

/**
 * Write the description of this component here
 */
export const BK = withStyles(styles)(connect(
  (store: Store) => ({
  }),
  (dispatch: any) => ({
    saveBookInfo: (payload: BookInfoRes) => dispatch({type: 'saveBookInfo', payload}),
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
    const savedData = data
      // Remove which don't have `isbn`
      .filter(x => x.isbn)
      // Remove which have duplicated `isbn`
      .filter((y, idx, self) => idx === self.findIndex(z => z.isbn === y.isbn));
    await this.props.saveBookInfo(savedData);
  }

  render() {
    return (
      <CMGrid>
        <Grid container>
          <Grid item xs={12}>
            <BKCondition />
          </Grid>
          <Grid item xs={12}>
            <BKOption />
          </Grid>
          <Grid item xs={12}>
            <BKItems />
          </Grid>
        </Grid>
      </CMGrid>
    )
  }
}));
