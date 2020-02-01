import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { withStyles, createStyles, WithStyles } from '@material-ui/core';
import Select from 'react-select';

const styles = () => createStyles({
  root: {
  }
});

export class CMSelectionUnit {
  label: string;
  value: string;
  constructor() {
    this.label = '';
    this.value = '';
  }
}

interface Props extends WithStyles<typeof styles> {
  classes: any,
  id?: string,
  value: CMSelectionUnit | undefined,
  dataList: Array<CMSelectionUnit>,
  onChange: Function,
  customProps?: any,
}

interface State {
}

/**
 * Write the description of this component here
 */
export const CMSelection = withStyles(styles)(connect(
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

  render() {
    const {
      id,
      value,
      dataList,
      onChange,
      customProps,
    } = this.props;

    const isValidate = true;
    const touched = isValidate && true;
    const valid = isValidate && true;
    const error = isValidate && true;

    return (
      <>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name="color"
          options={dataList}
          onChange={(e: any) => onChange(e, id)}
          value={value ? value : new CMSelectionUnit()}
          {...customProps}
        />
        <div>
          {touched && !valid &&
            <div style={{'fontSize':'12px','color':'rgb(244, 67, 54)'}}>
              {error}
            </div>
          }
        </div>
      </>
    )
  }
}));
