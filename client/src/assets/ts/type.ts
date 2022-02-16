export interface Lists {
    id: string,
    name: string
}

export interface ListsBool {
    id: boolean,
    name: string
}

export interface Roles {
    id: number,
    name: string
}
export interface Users {
    users: {
        id: string | number,
        email: string,
        username: string,
        roles: Roles,
        isSignedIn: boolean,
        createdAt?: Date,
        updatedAt?: Date
    }
}

export interface UsersAction {
    type: string,
    payload: Users
}

export interface Task {
    id?: string,
    title: string,
    status: string,
    description?: string,
    start: Date,
    end: Date,
    createdAt?: Date,
    updatedAt?: Date
}

export interface Tasks {
    task: Task[]
}

export interface TasksAction {
    type: string,
    payload: Task
}

export interface TaskGroups {
    user_id: number,
    groupName: string,
    createdAt: Date,
    updatedAt: Date
}

export interface Modals {
    taskName: string
    status: string
    startedAt: Date
    endedAt: Date
}

export interface Functions {
    inputTaskName: (e: any) => void
    setStatus: (e: any) => void
    inputStartedAt: (e: any) => void
    inputEndedAt: (e: any) => void
    inputDescription: (e: any) => void
}