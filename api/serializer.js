export const getData = (data = []) => {
  const res = []
  if (data && Object.keys(data).length) {
    data.forEach((doc) => {
      const id = doc.id
      const obj = doc.data()
      obj.id = id
      res.push(obj)
    });
  }
  return res
}

export const renameId = (data = {}) => {
  const obj = { ...data }
  obj.id_product = obj.id
  delete obj.id
  return obj
}

export const updateProduct = (data = {}, count = -1) => {
  const obj = { ...data }
  obj.id_product = obj.id
  obj.count += count
  delete obj.id
  return obj
}