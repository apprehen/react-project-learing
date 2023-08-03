import Logo from "./logo"
import Add from "@/components/common/add"
import styles from "./index.module.scss"
const Left = () => {
	const add = () => {
		console.log("add")
	}
	return (
		<div className={styles.left}>
			<Logo />
			<Add add={add} />
		</div>
	)
}

export default Left
