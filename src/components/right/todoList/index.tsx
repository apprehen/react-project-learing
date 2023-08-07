// import React, { useState, useEffect } from "react"
import { DragDropContext } from "react-beautiful-dnd"

const TodoList = () => {
	const dragEnd = (e: any) => {
		// 拖拽结束后
		console.log(e)
		// do something 。。。。
	}
	return (
		<DragDropContext
			onDragEnd={(e) => dragEnd(e)}
			// onDragUpdate = {(e)=>dragUpdate(e)}
			// onDragStart = {(e)=>dragStart(e)}
		>
			{
				//你的<Droppable/>组件
			}
		</DragDropContext>
	)
}

export default TodoList
