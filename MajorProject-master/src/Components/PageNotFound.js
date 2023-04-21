import React from 'react'
import { toast } from 'react-hot-toast'
import "../styles/pagenotfound.css"

function PageNotFound() {
  return (
    <div className='error-main'>
        <a href="/login">Please Login First <i className="fa-solid fa-right-to-bracket"></i></a>
    </div>
  )
}

export default PageNotFound