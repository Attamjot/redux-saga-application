import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    images: imagesReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer
});

export default rootReducer;