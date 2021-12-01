import store from './store'
import { addUser, deleteUser } from './users.actions'


const actionCteators=(func)=>{
  store.dispatch(func)
}
actionCteators(addUser({id:3, nane:'John'}))
actionCteators(addUser({id:1, name:'Tom'}))
actionCteators(deleteUser(3))
actionCteators(addUser({id:2, name:'Bob'}))



