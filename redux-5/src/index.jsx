import store from './store'
import { addUser, deleteUser } from './users.actions'


const actionCteators=(func)=>{
  store.dispatch(func)
}
actionCteators(addUser(3, 'John'))
actionCteators(addUser(1, 'Tom'))
actionCteators(deleteUser(3))
actionCteators(addUser(2, 'Bob'))

console.log(store.getState())

