import { useState } from 'react'

import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

export const withErrorApi = (View) => (props) => {
  const [errorApi, setErrorApi] = useState(false)

  return (
    <>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <View setErrorApi={setErrorApi} {...props} />
      )}
    </>
  )
}
