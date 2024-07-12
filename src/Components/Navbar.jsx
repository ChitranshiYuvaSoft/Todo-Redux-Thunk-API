import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex align-items-center justify-content-between px-5 w-100 bg-light py-3 px-4'>
        <span className='w-25 text-dark fw-bold'>Redux-Thunk</span>
        <span  className='w-25 text-dark fw-bold d-flex align-items-center justify-content-around nav-span'>
          <ul className='w-75 text-dark fw-bold d-flex align-items-center justify-content-around'>
            <Link to={'/'} style={{textDecoration : "none"}}  className='text-dark'> <li style={{listStyle : "none"}}>Form</li></Link>
            <Link to={'/data'} style={{textDecoration : "none"}} className='text-dark'> <li style={{listStyle : "none"}}>Data</li></Link>
          </ul>
        </span>
    </div>
  )
}

export default Navbar