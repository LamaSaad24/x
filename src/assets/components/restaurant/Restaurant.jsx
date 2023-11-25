import React from 'react'
import {Link} from 'react-router-dom'

export default function Restaurant() {
  return (
    <>
    <Link to="/restaurant/pizza" className='ms-1'>pizza</Link>
     <Link to="/restaurant/onion" className='ms-1'>onion</Link>
     <Link to="/restaurant/salad" className='ms-1'>salad</Link>
    </>
  )
}
