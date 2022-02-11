type _Config = {
    key: string
}

export const SPRING_URL: _Config = {
    key: process.env.REACT_APP_SPRING_URL || ""
}
