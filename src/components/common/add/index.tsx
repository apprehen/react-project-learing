import styles from "./index.module.scss"
import { ReactComponent as AddIcon } from "@/assets/svgs/add.svg"

const Add = (props: { add: any }) => {
	return (
		<div className={styles.add} onClick={props.add}>
			<div className={styles["add-icon"]}>
				<AddIcon
					style={{
						width: "32px",
						height: "32px",
						fill: "black",
					}}
				></AddIcon>
			</div>
		</div>
	)
}

export default Add
