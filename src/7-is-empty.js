
export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (Array.isArray(stringArrayOrObject)) {
    return stringArrayOrObject.length === 0; 
  }

  if (type === 'string') {
    return stringArrayOrObject === ''
  }
  if (type === 'object') {
    return JSON.stringify(stringArrayOrObject) === JSON.stringify({});
  }
  return false 
}
   

    

  



