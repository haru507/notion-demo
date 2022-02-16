export const getStatus = (status: string): string => {
    const UNTREATED: string = "未処理"
    const PROCESS: string = "処理中"
    const TREATED: string = "処理済"

    switch(status) {
        case "1":
            return UNTREATED
        case "2":
            return PROCESS
        case "3":
            return TREATED
        default:
            return ""
    }
}