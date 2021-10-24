export const initValues = (val = null) => {
  let newVals = {}
  val.map((elem) => {
    newVals = {
      ...newVals,
      [elem.id]: {
        id: false,
        count: 1,
      }
    }
    return newVals
  })
  return newVals
}