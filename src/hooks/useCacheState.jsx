import React from 'react'

const useCacheState = (key, defaultValue) => {
  const [value, setValue] = React.useState(() => {
    const cachedValue = localStorage.getItem(key)
    if (!cachedValue) return defaultValue
    else return cachedValue
  })
  React.useEffect(() => {
    if (value) localStorage.setItem(key, value)
    if (value === null) localStorage.clear(key)
  }, [key, value])

  return [value, setValue]
}

export default useCacheState
