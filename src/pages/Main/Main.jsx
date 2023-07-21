import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/reducers/CountSlice'

const Main = () => {
  const dispath = useDispatch()
  const {count} = useSelector((state) => state.countReducer)

  const onIncrement =  () => dispath(increment())
  const onDecrement = () => dispath(decrement())
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={onIncrement}>INC</button>
        <button onClick={onDecrement}>DEC</button>
        </div>
  )
}

export default Main