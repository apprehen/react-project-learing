import styles from './comp1.module.scss'
import {Button } from 'antd'
const Comp1 = () => {
	return (<div className={styles.box}>Comp1组件
		<div>
			<Button type="primary">Button</Button>
		</div>
	</div>)
}

export default Comp1