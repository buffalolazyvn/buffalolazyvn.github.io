const required = value => (value || typeof value === 'number' ? undefined : 'required')

export {
  required,
}