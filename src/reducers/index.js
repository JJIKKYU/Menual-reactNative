import { combineReducers } from "redux";
import CalculatorReducer from './calculatorReducers';

export default combineReducers({
    calculator: CalculatorReducer,
});