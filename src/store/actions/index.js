import {RENAME} from '../constants'
export {loginAsync,loginAction,logoutAction} from './login'
export {loading} from "./works"
export {indexCoords} from "./scroll"
export const renameAction = (newName)=>({type:RENAME,name:newName})