import { Lists, ListsBool, Task } from "./type"

export const statusList: Lists[] = [
    {"id": "1", "name": "未処理"},
    {"id": "2", "name": "処理中"},
    {"id": "3", "name": "処理済"}
]

export const meetList: Lists[] = [
    {"id": "Z011", "name": "東京全般"},
]

export const radioList: ListsBool[] = [
    {"id": true, "name": "広い地域"},
    {"id": false, "name": "現在地からの半径"},
]

export const rangeList: Lists[] = [
    {"id": "1", "name": "300m"},
    {"id": "2", "name": "500m"},
    {"id": "3", "name": "1km"},
    {"id": "4", "name": "2km"},
    {"id": "5", "name": "3km"},
]

export const headData: string[] = [
    "タスク名", "ステータス", "開始日", "終了日"
]

export const bodyData: Task[] = [
    {id: "1", taskGroupId: 1, title: "test1", status: "1", description: "", start: new Date(), end: new Date(), createdAt: new Date(), updatedAt: new Date()},
    {"id": "2", "taskGroupId": 1, "title": "test2", "status": "1", "description": "", "start": new Date(), "end": new Date(), "createdAt": new Date(), "updatedAt": new Date()},
    {"id": "3", "taskGroupId": 1, "title": "test3", "status": "1", "description": "", "start": new Date(), "end": new Date(), "createdAt": new Date(), "updatedAt": new Date()},
    {"id": "4", "taskGroupId": 1, "title": "test4", "status": "1", "description": "", "start": new Date(), "end": new Date(), "createdAt": new Date(), "updatedAt": new Date()},
]