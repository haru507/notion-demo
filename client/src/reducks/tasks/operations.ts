import { Task } from "../../assets/ts/type";
import axios from "axios";
import {push} from "connected-react-router";
import { hideLoadingAction, showLoadingAction } from "reducks/loading/actions";
import { isValidRequiredInput } from "../../utils/common";
import { SEVER_URL } from "../../utils/config";

export const taskCreated = (id: string, title: string, status: string, description: string, start: Date, end: Date) => {
    return async (dispatch: any) => {
        dispatch(showLoadingAction("Task created..."));
        // Validations
        if(!isValidRequiredInput(title, status, description, start, end)) {
            alert('必須項目が未入力です。');
            return false
        }

        const tasksData = {
            id: id,
            title: title,
            status: status,
            description: description,
            start: start,
            end: end
        };

        return axios.post(`${SEVER_URL.key}/task/created`, tasksData ,{ headers: {'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'} })
            .then(res => {
                console.log(res.data)
                dispatch(hideLoadingAction())
            })
            .catch(err => {
                console.log(err)
                dispatch(hideLoadingAction())
            })
    }
}