import React, { useEffect, useState } from 'react'

type ProfileStatusPropsType = {
	status: string
	updateStatus: any
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => setEditMode(true)

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e: any) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div>
			{!editMode ? (
				<div>
					<span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
				</div>
			) : (
				<div>
					<input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus={true} />
				</div>
			)}
		</div>
	)
}

export default ProfileStatus
