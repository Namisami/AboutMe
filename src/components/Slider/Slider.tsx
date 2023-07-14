import './Slider.css'
import SliderItem from './SliderItem'
import SliderWrapper from './SliderWrapper'
import { SliderItemProps } from './SliderItem'
import { PropsWithChildren, useState, useEffect } from 'react'

export interface SliderProps extends PropsWithChildren {
  items: SliderItemProps[]
  size?: number
}

const Slider = ({
  children,
  items,
  size=3
}: SliderProps) => {
  const [current, setCurrent] = useState(0)
  const [side, setSide] = useState(0)

  useEffect(() => {
    if (current + side > items.length - 1) {
      setCurrent(0)
    } else if (current + side < 0) {
      setCurrent(items.length - 1)
    } else {
      setCurrent(current + side)
    }
    setSide(0)
  }, [side])

  const positionCalc = (position: number) => {
    const maxElementPosition = items.length - 1
    let resPosition = 0
    position = position - current
    if (position === 0) {
      resPosition = 0
    } else if (position === -size && current === maxElementPosition) {
      resPosition = 1
    } else if (position === size || position === -1) {
      resPosition = size
    } else {
      resPosition = Math.abs(position)
    }
    return resPosition
  }

  const slides = items.map((item, index) => 
    <SliderItem
      key={ item.id } 
      className='slider__slider-item'
      title={ item.title }
      start_date={ item.start_date }
      icon_list={ item.icon_list }
      description={ item.description }
      position={ positionCalc(index) }
    />
  )

  return (
    <>
      <h2>{ children }</h2>
      <SliderWrapper
        onNextBtnClick={ () => setSide(1) }
        onPrevBtnClick={ () => setSide(-1) }
      >
        <ul className='slider' >
          { slides }
        </ul>
      </SliderWrapper>
    </>
  )
}

export default Slider