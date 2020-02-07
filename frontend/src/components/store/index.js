//Redux
import { createStore, combineReducers } from 'redux';

//Reducers
import settings from './reducer/settings';
import dataLogin from './reducer/dataLogin';
import alertsStatus from './reducer/alertsStatus';
import news from './reducer/news';

const reducers = combineReducers({
    settings,
    dataLogin,
    alertsStatus,
    news,
});

const store = createStore(
    reducers
);

export default store;