export const initialState = {
    loading: {
        state: false,
        text: ""
    },
    users: {
        userId: "",
        email: "",
        username: "",
        roles: {
            id: 0,
            name: ""
        },
        isSignedIn: false,
        created_at: "",
        updated_at: ""
    },
    tasks: []
};