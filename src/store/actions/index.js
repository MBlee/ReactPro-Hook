import {RENAME} from '../constants'
export {loginAsync,loginAction,logoutAction} from './login'
export {loading} from "./works"
export {workLoading} from "./work"
export {indexCoords} from "./scroll"
export {no_goods,goods} from "./goods"
export {loadingComment,addComment} from "./comment"
export const renameAction = (newName)=>({type:RENAME,name:newName})