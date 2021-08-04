import {createStore,applyMiddleware,combineReducers} from 'redux'
import userReducer from './reducer/userReducer'
import applicationReducer from './reducer/applicationReducer'
// import TeacherReducer from './reducer/teacherReducer'
var ReduxThunk = require('redux-thunk').default

const combine=combineReducers({
  
    user:userReducer,
    application:applicationReducer
    
})
const store=createStore(combine,applyMiddleware(ReduxThunk))

export default store
