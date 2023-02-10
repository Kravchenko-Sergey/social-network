import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
	id: number
	text: string
	className: string
}

const Message = (props: MessagePropsType) => {
	return <div className={props.className}>{props.text}</div>
}

export default Message
