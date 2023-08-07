import styles from "../index.module.scss"
const RightTitle = () => {
	return (
		<div className={styles["right-title"]}>
			<div className={styles["right-text"]}>All Tasks</div>
			<div className={styles["right-btn"]}>Remove this Event</div>
		</div>
	)
}

export default RightTitle
