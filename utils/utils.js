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

export const initFun = async (
  statusLoad = '',
  statusSucc = '',
  statusErr = '',
  setStatus = () => { },
  get_products_in_basket = () => { },
  setItems = () => { },
  initValues = () => { },
  formik = {}
) => {
  try {
    setStatus(statusLoad)
    const items = await get_products_in_basket()
    setItems(items)
    formik.setValues(initValues(items))
    setStatus(statusSucc)
    return items
  } catch (error) {
    setStatus(statusErr)
  }
}