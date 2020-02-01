import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import { withStyles, createStyles, WithStyles, Grid, Typography } from '@material-ui/core';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { CMTextInput } from '../../common/CMTextInput';
import { CMSelection, CMSelectionUnit } from '../../common/CMSelection';
import { BKConstant as CONST } from '../common/BKConstant';

const styles = () => createStyles({
  root: {
  }
});

interface Props extends WithStyles<typeof styles> {
  classes: any,
  localStorage: LocalStorage,
  saveLocalStorage: (payload: InputAction) => void,
}

interface State {
}

/**
 * Write the description of this component here
 */
export const BKCondition = withStyles(styles)(connect(
  (store: Store) => ({
    localStorage: store.localStorage,
  }),
  (dispatch: any) => ({
    saveLocalStorage: (payload: InputAction) => dispatch({type: 'saveLocalStorageItem', payload}),
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

  handleInputFilter = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload: InputAction = {item: 'filterInput', value: event.target.value};
    this.props.saveLocalStorage(payload);
  };

  handleSelectFilter = (field: string) => (event: CMSelectionUnit | null | undefined) => {
    const payload: InputAction = {item: field, value: event?.value ?? null};
    this.props.saveLocalStorage(payload);
  };

  render() {
    const { localStorage } = this.props;
    const optionList: Array<CMSelectionUnit> = CONST.FILTER_SUBMAP.map(x => ({label: x.value, value: x.attr}));
    const typeList: Array<CMSelectionUnit> = CONST.OPTION_MODE_MAP.map(x => ({label: x.value, value: x.attr}));

    return (
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Typography gutterBottom variant="h5" component="h2">
            Input
          </Typography>
          <CMTextInput
            id='BK_INPUT_01'
            value={localStorage.filterInput}
            onChange={this.handleInputFilter()}
            customProps={{
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography gutterBottom variant="h5" component="h2">
            Filter
          </Typography>
          <CMSelection
            id='BK_SELECT_01'
            value={optionList.find(x => x.value === localStorage.filterOption)}
            dataList={optionList}
            onChange={this.handleSelectFilter('filterOption')}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography gutterBottom variant="h5" component="h2">
            Option
          </Typography>
          <CMSelection
            id='BK_SELECT_02'
            value={typeList.find(x => x.value === localStorage.filterType)}
            dataList={typeList}
            onChange={this.handleSelectFilter('filterType')}
          />
        </Grid>
      </Grid>
    )
  }
}));
