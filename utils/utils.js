export const initValues = (val = null) => {
  let newVals = {}
  val.map((elem) => {
    newVals = {
      ...newVals,
      [elem.id]: {
        id: false,
        count: elem.count,
      }
    }
    return newVals
  })
  return newVals
}