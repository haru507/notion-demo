import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { format } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "33%"
  },
}));

interface Props {
    label: string,
    value: Date,
    onChange: (e: any) => void
}

const DatePickers = (props: Props) => {
  const classes = useStyles();

  return (
    <TextField
        id="date"
        label={props.label}
        type="date"
        required={true}
        defaultValue={format(new Date(props.value), 'yyyy-MM-dd')}
        className={classes.textField}
        InputLabelProps={{
            shrink: true,
        }}
    />
  );
}

export default DatePickers;