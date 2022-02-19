import { Users } from "../../assets/ts/type";

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: Users) => {
    return {
        type: "SIGN_IN",
        payload: userState
    }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return {
        type: "SIGN_OUT",
        payload: null
    }
};