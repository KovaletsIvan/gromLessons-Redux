import store, { increment, decrement, reset } from './store'
import './index.scss'

const resultElem = document.querySelector('.counter__result')
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const resetBtn = document.querySelector('[data-action="reset"]')

const onIncrement = () => {
  store.dispatch(increment())
}

const onDecrement = () => {
  store.dispatch(decrement())
}

const onReset = () => {
  store.dispatch(reset())
}

incrementBtn.addEventListener('click', onIncrement)
decrementBtn.addEventListener('click', onDecrement)
resetBtn.addEventListener('click', onReset)

store.subscribe(() => {
  const state = store.getState();
  const value = state.history.reduce((acc, val) => acc + Number(val), 0)
  const historyStr = state.history.join(' ');
  resultElem.textContent = historyStr.length == 0 ? '' : `${historyStr} = ${value}`
})

