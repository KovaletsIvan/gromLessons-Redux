import store from './store'
import { setUser, removeUser } from './user.actions'
import { setLanguage } from './language.actions'
import { addProduct, removeProduct } from './cart.actions'

store.dispatch(setUser({ name: 'John' }))
store.dispatch(removeUser())
store.dispatch(setLanguage('ua'))
store.dispatch(addProduct({ id: 1, name: 'iPhone' }))
store.dispatch(addProduct({ id: 2, name: 'MacOS' }))
store.dispatch(removeProduct(1))

console.log(store.getState());

