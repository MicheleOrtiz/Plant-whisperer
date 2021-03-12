import * as ActionTypes from './ActionTypes';

export const plantsites = (state = { isLoading: true,
                                     errMess: null,
                                     plantsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PLANTSITES:
            return {...state, isLoading: false, errMess: null, plantsites: action.payload};

        case ActionTypes.PLANTSITES_LOADING:
            return {...state, isLoading: true, errMess: null, plantsites: []}

        case ActionTypes.PLANTSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};