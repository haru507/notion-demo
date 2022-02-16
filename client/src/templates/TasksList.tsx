import React, { useCallback, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { bodyData, headData } from '../assets/ts/data'
import { InputModal, ListTable } from '../components'
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Task } from '../assets/ts/type';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      position: "absolute",
      bottom: 15,
      right: 15
    },
  }),
);

const TasksList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOpen = (data?: Task | null | undefined): void => {
    if(data){
      if(data.id){
        setId(data.id);
        setTitle(data.title);
        setStatus(data.status);
        setStart(new Date(data.start));
        setEnd(new Date(data.end));
        setDescription(data.description!!);
      }
    }else {
      setId(null)
      setTitle("");
      setStatus("");
      setStart(new Date());
      setEnd(new Date());
      setDescription("");
    }
    setOpen(!open);
  };

  const [id, setId] = useState<string | null>(null)
  const [title, setTitle] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const [start, setStart] = useState<Date>(new Date())
  const [end, setEnd] = useState<Date>(new Date())
  const [description, setDescription] = useState<string>("")

  const [lists, setLists] = useState<Task[]>([])

  const inputTaskName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  },[setTitle]);

  const inputStartedAt = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(new Date(e.target.value))
  },[setStart]);

  const inputEndedAt = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(new Date(e.target.value))
  },[setEnd]);

  const inputDescription = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  },[setDescription]);

  const taskSubmit = async () => {
    const res: Task = await dispatch
    setLists(lists => [...lists, res]);
    setOpen(!open)
  }

  const classes = useStyles();
  return (
      <>
        <div>Tasks</div>
        <ListTable
          headers={headData}
          bodies={bodyData}
          handleOpen={handleOpen}
        />
        <InputModal
          open={open}
          handleOpen={handleOpen}
          value={{title, status, start, end, description}}
          onChange={{inputTaskName, setStatus, inputStartedAt, inputEndedAt, inputDescription}}
        />
        <div className={classes.root}>
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={() => handleOpen(null)} />
            </Fab>
        </div>
      </>
  )
}

export default TasksList