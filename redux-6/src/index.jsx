import { increment,decrement } from './counter.actions'
import store from './store'
import { addUser, deleteUser, updateUser } from './users.actions'


const actionCteators = (func) => {
  store.dispatch(func)
}
actionCteators(addUser({ id: 3, nane: 'John' }))
actionCteators(addUser({ id: 1, name: 'Tom' }))
actionCteators(deleteUser(3))
actionCteators(addUser({ id: 2, name: 'Bob' }))
actionCteators(updateUser(2, { name: 'Sem', age: 35 }))
actionCteators(increment())
actionCteators(increment())


console.log(store.getState())

