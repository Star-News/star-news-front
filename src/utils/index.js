import moment from "moment";

export function getPastTime(str) {
    const date = moment(str)
    const now = moment()
    const result = date.diff(now, 'hour')
    return Math.abs(result)
}