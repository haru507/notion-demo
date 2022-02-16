type _Config = {
    key: string
}

export const SEVER_URL: _Config = {
    key: process.env.SERVER_URL || ""
}
