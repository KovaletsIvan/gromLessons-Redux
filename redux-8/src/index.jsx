import { store } from './store'
import { addUser, removeUser } from './user.actions'
import { setLenguage } from './lenguage.actions'
import { addProduct, removeProduct } from './cart.actions'

store.dispatch(addUser({ name: 'John' }))
store.dispatch(removeUser())
store.dispatch(setLenguage('ua'))
store.dispatch(addProduct({ id: 1, name: 'iPhone' }))
store.dispatch(addProduct({ id: 2, name: 'MacOS' }))
store.dispatch(removeProduct(1))

console.log(store.getState());
