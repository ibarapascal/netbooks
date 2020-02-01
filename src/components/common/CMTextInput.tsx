import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { withStyles, createStyles, WithStyles, TextField } from '@material-ui/core';

const styles = () => createStyles({
});

interface Props extends WithStyles<typeof styles> {
  classes: any,
  id?: string,
  value: string | number,
  onChange: Function,
  label?: string,
  placeholder?: string,
  customProps?: any,
}

interface State {
}

/**
 * Write the description of this component here
 */
export const CMTextInput = withStyles(styles)(connect(
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
      onChange,
      label,
      placeholder,
      customProps
    } = this.props;

    const isValidate = true;
    const touched = isValidate && true;
    const valid = isValidate && true;
    const error = isValidate && '';

    return (
      <TextField
        label={label}
        input={value}
        value={value ? value : ''}
        placeholder={placeholder ? placeholder : label}
        error={touched && !valid}
        helperText={touched && !valid && error}
        onChange={(e: any) => onChange(e, id)}
        {...customProps}
      />
    )
  }
}));
