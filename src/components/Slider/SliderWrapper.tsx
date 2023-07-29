import './SliderWrapper.css'
import { PropsWithChildren } from 'react'
import Icon from '@components/Icon/Icon'

export interface SliderWrapperProps extends PropsWithChildren {
  width: number
  onNextBtnClick: () => void
  onPrevBtnClick: () => void
}

const SliderWrapper = ({
  width,
  onNextBtnClick,
  onPrevBtnClick,
  children
}: SliderWrapperProps) => {
  return (
    <div className='slider-wrapper' style={{ width: `${width}%` }}>
      <button className='slider-wrapper__pagination slider-wrapper__pagination--left' onClick={ onPrevBtnClick }>
        <Icon
          src='/arrow-left.svg'
          alt='Предыдущий слайд'  
        />
      </button>
      { children }
      <button className='slider-wrapper__pagination slider-wrapper__pagination--right' onClick={ onNextBtnClick }>
        <Icon 
          src='/arrow-right.svg'
          alt='Предыдущий слайд'  
        />
      </button>
    </div>
  )
}

export default SliderWrapper