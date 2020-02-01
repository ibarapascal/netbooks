import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { CMGrid } from '../common/CMGrid';
import { BookInfoRes } from '../../types/api/GetBookInfo';
import { data } from '../../data'
import { Grid } from '@material-ui/core';
import { BKCondition } from './content/BKCondition';
import { BKOption } from './content/BKOption';
import { BKItems } from './content/BKItems';

// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   }
// }));

interface Props {
  /**
   * redux action: save books data to bookInfo
   */
  saveBookInfo: (payload: BookInfoRes) => void,
}

interface State {
}

/**
 * Book main page
 */
export const BK: React.FC<Props> = connect(
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
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    // const classes = useStyles();
    return (
      <CMGrid>
        <Grid container spacing={4}>
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
});
