import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HistoryIcon from '@material-ui/icons/History';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PopOver from "./PopOver";
import { signOut } from '../../reducks/users/operations'

interface Props {
    uid: string | number
}

const SideList = (props: Props) => {
    const dispatch = useDispatch()
    const uid = props.uid

    const [anchorEl, setAnchorEl] = React.useState<any>(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl]);

    const handleSignout = useCallback(() => {
        dispatch(signOut())
        setAnchorEl(null)
    },[dispatch]);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const showSignIn = () => {
        return(
            <>
                <ListItem button onClick={() => dispatch(push('/signIn'))}>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="ログイン" />
                </ListItem>
            </>
        )
    }

    const showSignOut = () => {
        return(
            <>
                <ListItem button >
                    <ListItemIcon>
                        <ModeCommentIcon />
                    </ListItemIcon>
                    <ListItemText primary="掲示板" />
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="履歴" />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="ログアウト" />
                </ListItem>
                <PopOver
                    id={id} open={open} anchorEl={anchorEl} onClose={handleClose} onClick2={handleClose}
                    label1="戻る" label2="サインアウト" isButtonChanged={true} onClick={() => handleSignout()}
                />
            </>
        )
    }

    return(
        <List>
            <ListItem button onClick={() => dispatch(push('/'))}>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="ホーム" />
            </ListItem>
            <Divider />
            {!uid ? showSignIn() : showSignOut()}
            <Divider />
                <ListItem button onClick={() => dispatch(push('/task'))}>
                    <ListItemIcon>
                        <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="タスク" />
                </ListItem>
                <ListItem button onClick={() => dispatch(push('/calendar'))}>
                    <ListItemIcon>
                        <CalendarTodayIcon />
                    </ListItemIcon>
                    <ListItemText primary="カレンダー" />
                </ListItem>
        </List>
    )
}

export default SideList