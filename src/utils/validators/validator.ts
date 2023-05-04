export const required = (value: any) => (value ? undefined : 'field is required')

export const maxLengthCreator = (maxLength: any) => (value: any) => {
	return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}
