import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import {
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { DisplayMode, BKConstant as CONST } from '../common/BKConstant';
import { makeStyles } from '@material-ui/core/styles';
import { CMSelection, CMSelectionUnit } from '../../common/CMSelection';
const useStyles = makeStyles(theme => ({
  root: {
  },
  button: {
    margin: theme.spacing(0.5),
  },
}));

interface ReduxProps {
  /**
   * redux store: locaStorage
   */
  localStorage: LocalStorage,
  /**
   * redux action: save item to localStorage
   */
  saveLocalStorage: (payload: InputAction) => void,
}

interface RawProps {
}

interface Props extends RawProps, ReduxProps {
}

interface State {
}

/**
 * Book option component
 */
export const BKOption: React.FC<RawProps> = connect(
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
  };

  async componentDidMount() {
  }

  handleDisplayModeClick = (value: DisplayMode) => () => {
    const payload: InputAction = {item: 'displayMode', value: value};
    this.props.saveLocalStorage(payload);
  }
  handleSelection = (field: string) => (event: CMSelectionUnit | null | undefined) => {
    const payload: InputAction = {item: field, value: event?.value ?? null};
    this.props.saveLocalStorage(payload);
  };

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    const classes = useStyles();
    const { localStorage } = this.props;
    const sortList: Array<CMSelectionUnit> = CONST.SORT_SUBMAP.map(x => ({label: x.value, value: x.attr}));
    const pageSizeList = ['5', '10', '20', '50'].map(x => ({label: x, value: x}));
    return (
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Typography gutterBottom variant="h5" component="h2">
            View
          </Typography>
          {CONST.DISPLAY_MODE_MAP.map(mode => {return (
            <Button
              key={mode.id}
              variant="contained"
              color={localStorage.displayMode === mode.attr ? 'primary' : 'default'}
              size="large"
              className={classes.button}
              startIcon={mode.icon}
              onClick={this.handleDisplayModeClick(mode.attr)}
            >
              {mode.value}
            </Button>
          )})}
        </Grid>
        <Grid item xs={2}>
          <Typography gutterBottom variant="h5" component="h2">
            Sort
          </Typography>
          <CMSelection
            id='BK_SELECT_03'
            value={sortList.find(x => x.value === localStorage.sortMode)}
            dataList={sortList}
            onChange={this.handleSelection('sortMode')}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography gutterBottom variant="h5" component="h2">
            Size
          </Typography>
          <CMSelection
            id='BK_SELECT_04'
            value={pageSizeList.find(x => x.value === localStorage.pageSize)}
            dataList={pageSizeList}
            onChange={this.handleSelection('pageSize')}
          />
        </Grid>
      </Grid>
    )
  }
});
