import store from './store'
import { addUser, deleteUser } from './users.actions'
const divElem = document.querySelector('.page')

store.dispatch(addUser(1, 'Ivan'))
store.dispatch(addUser(2, 'Igor'))
store.dispatch(addUser(3, 'John'))
store.dispatch(deleteUser(3))
store.dispatch(addUser(3, 'John'))



store.subscribe(() => {
  divElem.textContent = store.getState()
})

