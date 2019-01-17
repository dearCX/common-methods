export const checkPoint = (str) => {
  return str.trim()
}
export const emptyParmas = (params) => {
  return params.map((param, i) => param[i] === '')
}
