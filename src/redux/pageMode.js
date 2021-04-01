import { setDarkMode } from './allActions'
const initialState = {
   darkMode: false,
}
export function mode(state = initialState, action) {
   switch (action.type) {
      case setDarkMode:
         return {
            ...state, darkMode: action.payload
         }
      default:
         return {
            ...state
         }
   }
}