export const initValues = (val = null) => {
  let newVals = {}
  if (Array.isArray(val) && val.length > 0) {
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
  }
  return newVals
}