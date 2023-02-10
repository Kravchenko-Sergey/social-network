import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const postsData = [
	{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
	{ id: 2, message: "It's my first post", likesCount: 10 },
	{ id: 3, message: 'Yo', likesCount: 15 }
]
const dialogsData = [
	{ id: 1, name: 'Maksim' },
	{ id: 2, name: 'Dasha' },
	{ id: 3, name: 'Sasha' },
	{ id: 4, name: 'Mama' },
	{ id: 5, name: 'Papa' }
]
const messagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'Hi, how are you?' },
	{ id: 3, message: 'How is your it-incubator?' },
	{ id: 4, message: 'Yo' },
	{ id: 5, message: 'Yo' },
	{ id: 6, message: 'Yo' },
	{ id: 7, message: 'Yo' }
]

ReactDOM.render(
	<App
		postsData={postsData}
		dialogsData={dialogsData}
		messagesData={messagesData}
	/>,
	document.getElementById('root')
)
