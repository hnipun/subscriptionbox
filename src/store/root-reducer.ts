import {combineReducers} from 'redux';

import branches from './branches/reducer';

const rootReducer = combineReducers({
    branches
});

export default rootReducer;
