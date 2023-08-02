import React from "react"
import ReactDOM from "react-dom/client"
// 初始样式 重置样式
import "reset-css"
// UI框架样式
// import 'antd/dist/antd.css'
// 全局样式
import "@/assets/styles/global.scss"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
