import React from 'react'
import { cn } from '../../lib/utilities'
import { GradientText } from './GradientText'

export const SectionTitle = ({children, className, gradient}) => {
  return (
    <h1 className={cn('text-3xl md:text-4xl lg:text-[46px] font-grotesk font-bold leading-[40px] md:leading-[58px]',
        className
    )}>{children}<GradientText>{gradient}</GradientText></h1>
  )
}
