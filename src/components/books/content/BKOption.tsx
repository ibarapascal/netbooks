import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../../store';
import {
  withStyles,
  createStyles,
  WithStyles,
  Grid,
  Typography,
  Theme,
  Button
} from '@material-ui/core';
import { InputAction } from '../../../types/BaseTypes';
import { LocalStorage } from '../../../types/LocalStorage';
import { DisplayMode, BKConstant as CONST } from '../common/BKConstant';

const styles = (theme: Theme) => createStyles({
  root: {
  },
  button: {
    margin: theme.spacing(0.5),
  },
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
export const BKOption = withStyles(styles)(connect(
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

  handleDisplayModeClick = (value: DisplayMode) => () => {
    const payload: InputAction = {item: 'displayMode', value: value};
    this.props.saveLocalStorage(payload);
  }

  render() {
    const { classes, localStorage } = this.props;
    // const {} = this.state;
    return (
      <Grid container spacing={4}>
        <Grid item xs={6}>
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
        <Grid item xs={3}>
          <Typography gutterBottom variant="h5" component="h2">
            Sort
          </Typography>
        </Grid>
      </Grid>
    )
  }
}));
