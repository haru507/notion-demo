import { Users } from "../../assets/ts/type";
import { createSelector } from "reselect";

const usersSelector = (state: Users) => state.users;

export const getSignedIn = createSelector(
    [usersSelector],
    state => state.isSignedIn
);

export const getUsername = createSelector(
    [usersSelector],
    state => state.username
);

export const getUserId = createSelector(
    [usersSelector],
    state => state.id
);