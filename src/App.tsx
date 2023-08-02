import { useState } from 'react'
import Comp1 from '@/components/Comp1'
import Comp2 from '@/components/Comp2'
import { Outlet,Link,useRoutes } from 'react-router-dom'
import router from '@/router'
function App() {
  const [count, setCount] = useState(0)
  const myroutes = useRoutes(router)
  return (
    <div className='App'>
      {/* <h1>顶级组件</h1>
      <Comp1></Comp1>
      <Comp2></Comp2> */}
      <Link to="/home">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/user">User</Link>
      {myroutes}
    </div>
  )
}

export default App
