import React from 'react'

function NavLink(props) {
  return (
    <>
        <button className={`px-2 py-1 ${props.hidden}`}>
            <a href={props.link} className='text-sm text-nowrap hover:text-blue-500 transition '>{props.name}</a>
        </button>
    </>
  )
}

export default NavLink