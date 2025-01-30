import React from 'react'

export const GradientText = ({children}) => {
  return (
    <span className=' bg-linear-(--gradient-linear-primary) bg-clip-text text-transparent'>{children}</span>
  )
}
