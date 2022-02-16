import { Tasks } from "../../assets/ts/type";
import { createSelector } from "reselect";

const tasksSelector = (state: Tasks) => state.task;

export const getProducts = createSelector(
    [tasksSelector],
    state => state
);
