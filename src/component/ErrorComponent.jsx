import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <>
     <div className="error">
     <div class="alert alert-danger" role="alert">
            {message}
</div>
     </div>
    </>
  )
}

export default ErrorComponent
