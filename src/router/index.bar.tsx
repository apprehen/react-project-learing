// 组件形式写法
import App from '@/App'
import Home from '@/views/Home'
import About from '@/views/About'
import { BrowserRouter, Route, Navigate,Routes } from 'react-router-dom'
// 两种路由模式 BrowserRouter(history模式) HashRouter(hash模式)
const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

