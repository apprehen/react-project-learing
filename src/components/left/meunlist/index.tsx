import { useState } from "react"
interface MeunListProps {
	meunlistData: {
		title: string
		id: number
		actived: boolean
	}[]
}
import Item from "./item"
import styles from "./index.module.scss"
const MeunList = (props: MeunListProps) => {
	// console.log(props.meunlistData)
	const { meunlistData } = props
	const [meunlistDataState, setMeunlistData] = useState(meunlistData)
	const cilckItem = (id: number) => {
		const index = meunlistData.findIndex((item) => {
			return item.id === id
		})
		const newMeunlistData = [...meunlistData]
		newMeunlistData.forEach((item) => {
			item.actived = false
		})
		newMeunlistData[index].actived = true
		setMeunlistData(newMeunlistData)
	}
	const meunlist = meunlistData.map((item) => {
		return (
			<Item
				key={item.id}
				title={item.title}
				id={item.id}
				change={cilckItem}
				actived={item.actived}
			></Item>
		)
	})
	return <div className={styles["meun-list"]}>{meunlist}</div>
}

export default MeunList
