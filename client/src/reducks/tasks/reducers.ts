import * as Actions from './actions';
import {initialState} from '../store/initialState';
import { TasksAction } from '../../assets/ts/type';

export const TasksReducer = (state = initialState.tasks, action: TasksAction)  => {
    switch (action.type) {
        case Actions.DELETE_TASKS:
            return {
                ...state,
                task: action.payload
            };
        case Actions.FETCH_TASKS:
            return {
                ...state,
                task: action.payload
            };
        case Actions.INIT_TASKS:
            return {
                ...initialState.tasks
            };
        default:
            return state
    }
};