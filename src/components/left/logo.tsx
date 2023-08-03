import styles from "./index.module.scss"
const Logo = () => {
	return (
		<div className={styles.logo}>
			<div className={styles["logo-title"]}>ToDoList</div>
		</div>
	)
}

export default Logo
