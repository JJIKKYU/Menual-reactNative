import types from "./type";

export function updateSumValueFirst(num) {
    console.log("updateSumValueFirst = ", num);
    return {
        type: types.CALCULATOR_UPDATE_SUM_FIRST,
        payload: num
    };
}

export function updateSumValueSecond(num) {
    console.log("updateSumValueSecond = ", num);
    return {
        type: types.CALCULATOR_UPDATE_SUM_SECOND,
        payload: num
    }
}