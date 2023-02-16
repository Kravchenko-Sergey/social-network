const state = {
	profilePages: {
		postsData: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
			{ id: 2, message: "It's my first post", likesCount: 10 },
			{ id: 3, message: 'Yo', likesCount: 15 }
		]
	},
	dialogsPages: {
		dialogsData: [
			{ id: 1, name: 'Maksim' },
			{ id: 2, name: 'Dasha' },
			{ id: 3, name: 'Sasha' },
			{ id: 4, name: 'Mama' },
			{ id: 5, name: 'Papa' }
		],
		messagesData: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'Hi, how are you?' },
			{ id: 3, message: 'How is your it-incubator?' },
			{ id: 4, message: 'Yo' },
			{ id: 5, message: 'Yo' },
			{ id: 6, message: 'Yo' },
			{ id: 7, message: 'Yo' }
		]
	},
	sidebar: {
		friends: [
			{ id: 1, name: 'Dimych' },
			{ id: 2, name: 'Sveta' },
			{ id: 3, name: 'Denis' },
			{ id: 4, name: 'Alisa' },
			{ id: 5, name: 'Egor' },
			{ id: 6, name: 'Masha' }
		]
	}
}

export const addPost = (postMessage: string) => {
	const newPost = { id: 92, message: postMessage, likesCount: 0 }
	state.profilePages.postsData.push(newPost)
	console.log(state.profilePages.postsData)
}

export default state
