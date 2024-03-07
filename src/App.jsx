import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './features/counter/Counter';
import Todo from './features/todos/Todo';
function App() {
  return (
    <Provider store={store}>
    <div className='myredbox'>
      <h2>App Component</h2>
      <Counter></Counter>
      <Todo></Todo>

    </div>
    </Provider>
  )
}

export default App