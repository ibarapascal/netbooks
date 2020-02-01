import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }));

interface Props {
  /**
   * I/O element id
   */
  id?: string,
  /**
   * input value
   */
  value: string | number,
  /**
   * input event
   */
  onChange: Function,
  /**
   * field label
   */
  label?: string,
  /**
   * placeholder
   */
  placeholder?: string,
  /**
   * other native props of TextField
   */
  customProps?: any,
}

interface State {
}

/**
 * Common text input component based on Material-UI
 */
export const CMTextInput: React.FC<Props> = connect(
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

  render() {
    return <this.functionalRender />
  }
  functionalRender: React.FC = () => {
    // const classes = useStyles();
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
});
