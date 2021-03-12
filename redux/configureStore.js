import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { plantsites } from './plantsites';
import { comments } from './comments';
import { promotions } from './promotions';
import { partners } from './partners';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            plantsites,
            comments,
            partners,
            promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}