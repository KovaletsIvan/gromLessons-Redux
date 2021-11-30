import store from './store'
import { addUser, deleteUser } from './users.actions'




store.dispatch(addUser(1, 'Ivan'))
store.dispatch(addUser(2, 'Igor'))
store.dispatch(addUser(3, 'John'))
store.dispatch(deleteUser(3))



store.subscribe(() => (store.getState()))

