import { Tasks } from "../../assets/ts/type";

export const DELETE_TASKS = "DELETE_TASKS";
export const deleteTasksAction = (id: number) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export const FETCH_TASKS = "FETCH_TASKS";
export const fetchTasksAction = (tasks: Tasks) => {
    return {
        type: "FETCH_PRODUCTS",
        payload: tasks
    }
}

export const INIT_TASKS = "INIT_TASKS";
export const initTasksAction = () => {
    return {
        type: "INIT_PRODUCTS",
        payload: null
    }
}