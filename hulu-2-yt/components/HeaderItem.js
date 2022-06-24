import React from 'react'

function HeaderItem({ title, Icon }) {
  return (

    <div>
        <Icon className="h-8" />
        <p>{title}</p>
    </div>
  )
}

export default HeaderItem