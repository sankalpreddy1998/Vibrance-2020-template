import { combineReducers } from 'redux'
import { stateTree } from  '../statetree'


function reducer(state = stateTree, action) {
  switch (action.type) {
    case 'AUTH_USERNAME_UPDATE':
      return {
        ...state, 
        auth:{
            ...state.auth,
            username_input:action.data
        }
      }
    case 'UPDATE_EVENTS':
      return {
        ...state, 
        main:{
            ...state.main,
            events:action.data
        }
      }
    default:
      return state
    }
}



export default reducer