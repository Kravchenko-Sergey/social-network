import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching,
	unfollow,
	usersReducer
} from './users-reducer'

test("The user status should change to 'follow'", () => {
	const startState = {
		users: [
			{
				id: 234,
				name: 'Sergey',
				uniqueUrlName: 'hgtghrt',
				photos: {
					large: 'dfgfgfdg',
					small: 'dfgdfgtrg'
				},
				followed: false,
				status: 'dsdfsf'
			},
			{
				id: 123,
				name: 'Slavik',
				uniqueUrlName: 'hgtghdsrt',
				photos: {
					large: 'ddfgdfdg',
					small: 'dfhjkhjrg'
				},
				followed: false,
				status: 'sdfdsf'
			},
			{
				id: 582,
				name: 'Dimon',
				uniqueUrlName: 'hsdfsdrt',
				photos: {
					large: 'dfggfhdg',
					small: 'dfgdfdghfrg'
				},
				followed: true,
				status: 'sdfsdff'
			}
		],
		pageSize: 5,
		totalUserCount: 0,
		currentPage: 1,
		isFetching: false
	}

	const endState = usersReducer(startState, follow(123))

	expect(endState.users[1].followed).toBeTruthy()
})

test("The user status should change to 'unfollow'", () => {
	const startState = {
		users: [
			{
				id: 234,
				name: 'Sergey',
				uniqueUrlName: 'hgtghrt',
				photos: {
					large: 'dfgfgfdg',
					small: 'dfgdfgtrg'
				},
				followed: false,
				status: 'dsdfsf'
			},
			{
				id: 123,
				name: 'Slavik',
				uniqueUrlName: 'hgtghdsrt',
				photos: {
					large: 'ddfgdfdg',
					small: 'dfhjkhjrg'
				},
				followed: false,
				status: 'sdfdsf'
			},
			{
				id: 582,
				name: 'Dimon',
				uniqueUrlName: 'hsdfsdrt',
				photos: {
					large: 'dfggfhdg',
					small: 'dfgdfdghfrg'
				},
				followed: true,
				status: 'sdfsdff'
			}
		],
		pageSize: 5,
		totalUserCount: 0,
		currentPage: 1,
		isFetching: false
	}

	const endState = usersReducer(startState, unfollow(582))

	expect(endState.users[2].followed).toBeFalsy()
})

test('The list of users should display correctly', () => {
	const startState = {
		users: [
			{
				id: 234,
				name: 'Sergey',
				uniqueUrlName: 'hgtghrt',
				photos: {
					large: 'dfgfgfdg',
					small: 'dfgdfgtrg'
				},
				followed: false,
				status: 'dsdfsf'
			},
			{
				id: 123,
				name: 'Slavik',
				uniqueUrlName: 'hgtghdsrt',
				photos: {
					large: 'ddfgdfdg',
					small: 'dfhjkhjrg'
				},
				followed: false,
				status: 'sdfdsf'
			},
			{
				id: 582,
				name: 'Dimon',
				uniqueUrlName: 'hsdfsdrt',
				photos: {
					large: 'dfggfhdg',
					small: 'dfgdfdghfrg'
				},
				followed: true,
				status: 'sdfsdff'
			}
		],
		pageSize: 5,
		totalUserCount: 0,
		currentPage: 1,
		isFetching: false
	}

	const endState = usersReducer(
		startState,
		setUsers([
			{
				id: 234,
				name: 'Sergey',
				uniqueUrlName: 'hgtghrt',
				photos: {
					large: 'dfgfgfdg',
					small: 'dfgdfgtrg'
				},
				followed: false,
				status: 'dsdfsf'
			},
			{
				id: 123,
				name: 'Slavik',
				uniqueUrlName: 'hgtghdsrt',
				photos: {
					large: 'ddfgdfdg',
					small: 'dfhjkhjrg'
				},
				followed: false,
				status: 'sdfdsf'
			}
		])
	)

	expect(endState.users.length).toBe(2)
})

test('The current page must be correctly set', () => {
	const startState = {
		users: [
			{
				id: 234,
				name: 'Sergey',
				uniqueUrlName: 'hgtghrt',
				photos: {
					large: 'dfgfgfdg',
					small: 'dfgdfgtrg'
				},
				followed: false,
				status: 'dsdfsf'
			},
			{
				id: 123,
				name: 'Slavik',
				uniqueUrlName: 'hgtghdsrt',
				photos: {
					large: 'ddfgdfdg',
					small: 'dfhjkhjrg'
				},
				followed: false,
				status: 'sdfdsf'
			},
			{
				id: 582,
				name: 'Dimon',
				uniqueUrlName: 'hsdfsdrt',
				photos: {
					large: 'dfggfhdg',
					small: 'dfgdfdghfrg'
				},
				followed: true,
				status: 'sdfsdff'
			}
		],
		pageSize: 5,
		totalUserCount: 0,
		currentPage: 1,
		isFetching: false
	}

	const endState = usersReducer(startState, setCurrentPage(5))

	expect(endState.currentPage).toBe(5)
})

test('The total number of users must be correctly set', () => {
	const startState = {
		users: [
			{
				id: 234,
				name: 'Sergey',
				uniqueUrlName: 'hgtghrt',
				photos: {
					large: 'dfgfgfdg',
					small: 'dfgdfgtrg'
				},
				followed: false,
				status: 'dsdfsf'
			},
			{
				id: 123,
				name: 'Slavik',
				uniqueUrlName: 'hgtghdsrt',
				photos: {
					large: 'ddfgdfdg',
					small: 'dfhjkhjrg'
				},
				followed: false,
				status: 'sdfdsf'
			},
			{
				id: 582,
				name: 'Dimon',
				uniqueUrlName: 'hsdfsdrt',
				photos: {
					large: 'dfggfhdg',
					small: 'dfgdfdghfrg'
				},
				followed: true,
				status: 'sdfsdff'
			}
		],
		pageSize: 5,
		totalUserCount: 0,
		currentPage: 1,
		isFetching: false
	}

	const endState = usersReducer(startState, setTotalUsersCount(20))

	expect(endState.totalUserCount).toBe(20)
})

test('The switch should work correctly', () => {
	const startState = {
		users: [
			{
				id: 234,
				name: 'Sergey',
				uniqueUrlName: 'hgtghrt',
				photos: {
					large: 'dfgfgfdg',
					small: 'dfgdfgtrg'
				},
				followed: false,
				status: 'dsdfsf'
			},
			{
				id: 123,
				name: 'Slavik',
				uniqueUrlName: 'hgtghdsrt',
				photos: {
					large: 'ddfgdfdg',
					small: 'dfhjkhjrg'
				},
				followed: false,
				status: 'sdfdsf'
			},
			{
				id: 582,
				name: 'Dimon',
				uniqueUrlName: 'hsdfsdrt',
				photos: {
					large: 'dfggfhdg',
					small: 'dfgdfdghfrg'
				},
				followed: true,
				status: 'sdfsdff'
			}
		],
		pageSize: 5,
		totalUserCount: 0,
		currentPage: 1,
		isFetching: false
	}

	const endState = usersReducer(startState, toggleIsFetching(false))

	expect(endState.isFetching).toBeTruthy()
})
