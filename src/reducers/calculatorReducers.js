import types from "../actions/type";

const defaultState = {
    result: 0,
    sumInfo: {
        first: 0,
        second: 0,
    },
}

export default calculator = (state = defaultState, action) => {
    // For Debugger
    console.log('2. payload', + action.payload);
    console.log('3. action.types', + action.type);

    switch (action.type) {
        case types.CALCULATOR_UPDATE_SUM_FIRST:
            console.log('3. result = ')
            return {
                // ..state,
                result : action.payload + state.sumInfo.second,
                sumInfo: {
                    first: action.payload,
                    second: state.sumInfo.second
                }
            };

        case types.CALCULATOR_UPDATE_SUM_SECOND:
            return {
                // ..state,
                result: action.payload + state.sumInfo.first,
                sumInfo: {
                    first: state.sumInfo.first,
                    second: action.payload
                }
            };

        default:
            return state;
    }
};