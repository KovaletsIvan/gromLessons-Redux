import  { increment, decrement, store } from './counter'


const actionCteators = (func) => {
  store.dispatch(func)
}

actionCteators(increment())
actionCteators(increment())
actionCteators(increment())
actionCteators(decrement())
actionCteators(increment())

console.log(store.getState())

