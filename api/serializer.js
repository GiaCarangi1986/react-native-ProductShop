export const getData = (data = []) => {
  const res = []
  data.forEach((doc) => {
    const id = doc.id
    const obj = doc.data()
    obj.id = id
    res.push(obj)
  });
  return res
}

export const removeID = (data = {}) => {
  // debugger
  const product = { ...data }
  const id = product.id
  delete product.id
  return {
    id,
    product,
  }
}