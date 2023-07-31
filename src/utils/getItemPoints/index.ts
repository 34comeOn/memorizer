import { REPEAT_TIMES_CONVERT_TO_POINTS } from "../../constants/stockConstants"
import { countItemPoints } from "../countItemPoints"
import { getHoursSinceRepeat } from "../getHoursSinceRepeat"

export const getItemPoints = (repeatedTimeStamp: number, timesBeenRepeated: number) => {
    const itemHours: number = getHoursSinceRepeat(repeatedTimeStamp ?? 0)
    return countItemPoints(REPEAT_TIMES_CONVERT_TO_POINTS[timesBeenRepeated], itemHours)
}