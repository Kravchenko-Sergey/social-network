import React from 'react'

class ProfileStatus extends React.Component<any, any> {
	state = { editMode: false, status: this.props.status }
	activateEditMode = () => {
		this.setState({ editMode: true })
	}
	deactivateEditMode = () => {
		this.setState({ editMode: false })
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = (e: any) => {
		this.setState({ status: e.currentTarget.value })
	}

	componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status })
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode ? (
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
					</div>
				) : (
					<div>
						<input
							onChange={this.onStatusChange}
							onBlur={this.deactivateEditMode}
							value={this.state.status}
							autoFocus={true}
						/>
					</div>
				)}
			</div>
		)
	}
}

export default ProfileStatus
