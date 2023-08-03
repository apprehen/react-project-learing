import styles from "./index.module.scss"
interface IProps {
	title: string
	change: any
	id: number
	actived: boolean
}

const Item = (props: IProps) => {
	// console.log(props.change)
	const clickItem = () => {
		props.change(props.id)
	}
	return (
		<div
			className={
				props.actived
					? `${styles["meun-list-item"]} ${styles.actived} `
					: styles["meun-list-item"]
			}
			onClick={clickItem}
		>
			<div className={styles["meun-list-item-title"]}>{props.title}</div>
		</div>
	)
}

export default Item
