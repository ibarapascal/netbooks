# Note

Styles in classic component without HOC

```tsx
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
  },
});

  render() {
    return <this._render />
  }
  _render: React.FC = () => {
    // const classes = useStyles();
    // const {} = this.props;
    // const {} = this.state;
    return (
      <></>
    )
  }

```
