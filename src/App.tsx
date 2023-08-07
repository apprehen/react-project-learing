import Left from "@/components/left"
import Right from "@/components/right"
function App() {
	return (
		<div
			className="App"
			style={{
				display: "flex",
				height: "100vh",
				width: "100vw",
				overflow: "hidden",
			}}
		>
			<Left />
			<Right />
		</div>
	)
}

export default App
