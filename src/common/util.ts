
let index = 0

export const randomId = () => {
  index++

  return index.toString()
}
