import './SliderItem.css'
import { useState, useEffect } from 'react'
import usePrevious from '@hooks/usePrevious'
import Icon from '@components/Icon/Icon'

export interface SliderItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  title: string
  start_date: Date
  icon_list: string[]
  description: string
  position: number
  side: number
}

export interface Style {
  transform?: string
  opacity?: number
  transition?: string
  animation?: string
}

const SliderItem = ({
  className,
  title,
  start_date,
  icon_list,
  description,
  position,
}: SliderItemProps) => {
  const [style, setStyle] = useState<Style>({})
  const oldPosition = usePrevious(position)

  useEffect(() => {
    console.log(position, oldPosition)
    if (position === 0 && oldPosition !>= 3) {
      setStyle({
        transform: `translateX(-100%) 
                    translateX(-20px)`,
        opacity: 0,
        transition: '0s transform'
      })
      setTimeout(() => {
        setStyle({
          transform: `translateX(${position * 100}%) 
                      translateX(${position * 20}px)`,
          opacity: 1
        })
      }, 50)
    } else if (position !>= 3 && oldPosition === 0) {
      setStyle({
        transition: 'transform 0s',
        animation: '0.5s nextSlide cubic-bezier(0.31, 0.22, 0.57, 1.07)'
      })
      setTimeout(() => {
        setStyle({
          transform: `translateX(${position * 100}%) 
                      translateX(${position * 20}px)`,
          opacity: 0,
        })
      }, 500)
    } else {
      setTimeout(() => {
        setStyle({
          transform: `translateX(${position * 100}%) 
                      translateX(${position * 20}px)`,
          opacity: 1
        })
      }, 50)
    }
    console.log(style)
  }, [position])

  const convertDate = () => {
    let dateNow = new Date()
    let yearsPassed = dateNow.getFullYear() - start_date.getFullYear()
    let monthsPassed = dateNow.getMonth() - start_date.getMonth()
    if (monthsPassed === 0) {
      return `${yearsPassed} г.`
    } else if (monthsPassed < 0) {
      if (yearsPassed - 1 <= 0) {
        return `${12 - Math.abs(monthsPassed)} мес.`
      } else {
        return `${yearsPassed - 1} г. ${12 - Math.abs(monthsPassed)} мес.`
      }
    }
    return `${yearsPassed} г. ${monthsPassed} мес.`
  }

  const icons = () => {
    return icon_list.map(icon => {
      return (
        <li key={ icon }>
          <Icon 
            className="slider-item__icon"
            src={ icon }
            alt='Python'
          />
        </li>
      )
    })
  }

  return (
    <li 
      className={`slider-item ${className}`} 
      style={ style }
    >
      <div className="slider-item__header">
        <h3 className='slider-item__title'>{ title }</h3>
        <p className='slider-item__date'>{ convertDate() }</p>
        <ul className='slider-item__icons'>
          { icons() }
        </ul>
      </div>
      <p className='slider-item__text'>{ description }</p>
    </li>
  )
}

export default SliderItem