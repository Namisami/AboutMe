import './Container.css'
import { ReactNode } from 'react'

export interface ContainerProps{
  children: ReactNode
}

const Container = ({
  children
}: ContainerProps) => {
  return (
    <div className='container'>
      { children }
    </div>
  )
}

export default Container