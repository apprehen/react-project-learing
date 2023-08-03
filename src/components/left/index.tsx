import Logo from "./logo"
import Add from "@/components/common/add"
import MeunList from "@/components/left/meunlist"
import styles from "./index.module.scss"
import { useState } from "react"
const Left = () => {
	const [meunlistData, setMeunlistData] = useState([
		{
			title: "MyProject",
			id: 1,
			actived: false,
		},
		{
			title: "Metting",
			id: 2,
			actived: false,
		},
	])
	const add = () => {
		console.log("add")
		// 弹窗询问添加什么title
		const title: string | null = prompt("请输入添加的事件")
		// 添加到meunlistData
		if (title) {
			setMeunlistData((perMeunlistData) => {
				return [
					...perMeunlistData,
					{
						title: title as string,
						id: Math.random(),
						actived: false,
					},
				]
			})
		}
	}
	return (
		<div className={styles.left}>
			<Logo />
			<Add add={add} />
			<MeunList meunlistData={meunlistData} />
		</div>
	)
}

export default Left
