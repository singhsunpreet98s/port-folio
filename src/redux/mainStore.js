import { combineReducers } from 'redux';
import { mode } from './pageMode'
const mainStore = combineReducers({
   pageMode: mode
})
export { mainStore }