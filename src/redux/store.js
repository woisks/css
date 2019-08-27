import {combineReducers} from "redux";
import homeReducers from './home/reducers';
import articleReducers from './article/reducer';


const allReducer = combineReducers({
        home: homeReducers,
        article: articleReducers
    })
;

export default allReducer;
