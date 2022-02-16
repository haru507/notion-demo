import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { PrimaryButton, SelectBox, TextInput } from './UIKit';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import DatePickers from './UIKit/DatePickers';
import { Functions, Task } from '../assets/ts/type';
import { statusList } from '../assets/ts/data';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

interface Props {
    open: boolean
    handleOpen: () => void
    value: Task
    onChange: Functions
}

const InputModal = (props: Props) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.open}
            onClose={() => props.handleOpen()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <div className={classes.paper}>
                <h2 className="u-text-center u-text__headline">タスク登録</h2>
                <div className="module-spacer--medium" />
                <TextInput
                    fullWidth={true} label={"タスク名"} multiline={false} required={true}
                    rows={1} value={props.value.title} type={"text"} onChange={props.onChange.inputTaskName}
                />
                <SelectBox
                    label="ステータス" options={statusList} required={true} select={props.onChange.setStatus} value={props.value.status}
                />
                <DatePickers
                    label={'開始日'}
                    value={new Date(props.value.start)}
                    onChange={props.onChange.inputStartedAt}
                />
                <DatePickers
                    label={'終了日'}
                    value={new Date(props.value.end)}
                    onChange={props.onChange.inputEndedAt}
                />
                <TextInput
                    fullWidth={true} label={"詳細"} multiline={true} required={false}
                    rows={10} value={props.value.description!!} type={"text"} onChange={props.onChange.inputDescription}
                />
                <div className="module-spacer--medium" />
                <div className="center">
                    <PrimaryButton
                        label={"タスクを登録する"}
                        onClick={() => dispatch(signUp(props.value.title, props.value.status, props.value.start.toString(), props.value.end.toString()))}
                        isButtonChanged={true}
                    />
                    <div className="module-spacer--small" />
                </div>
            </div>
            </Fade>
        </Modal>
    )
}

export default InputModal