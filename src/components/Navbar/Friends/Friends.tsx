import React from 'react'
import classes from './Friends.module.css'
import { FriendType } from '../../../App'
import Friend from './Friend/Friend'

type FriendsPropsType = {
	friends: Array<FriendType>
}

function Friends(props: FriendsPropsType) {
	console.log(props)
	const friendElement = props.friends.map(friend => (
		<div key={friend.id} className={classes.container}>
			<Friend id={friend.id} name={friend.name} />
		</div>
	))
	return <div className={classes.container}>{friendElement}</div>
}

export default Friends
