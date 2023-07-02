import './SlideListItem.css'
import Icon from '@/components/Icon/Icon'

export interface SlideListItemProps {
  id?: string
  title: string
  start_date: Date
  icon_list: string[]
  description: string
}

const SlideListItem = ({
  title,
  start_date,
  icon_list,
  description
}: SlideListItemProps) => {
  const convertDate = () => {
    let dateNow = new Date()
    let yearsPassed = dateNow.getFullYear() - start_date.getFullYear()
    let monthsPassed = dateNow.getMonth() - start_date.getMonth()
    return `${yearsPassed} года ${monthsPassed} месяцев`
  }

  const icons = () => {
    return icon_list.map(icon => {
      return (
        <li>
          <Icon 
            className="slide-list-item__icon"
            src={ icon }
            alt='Python'
          />
        </li>
      )
    })
  }
  return (
    <>
      <div className="slide-list-item__header">
        <h3 className='slide-list-item__title'>{ title }</h3>
        <p className='slide-list-item__date'>{ convertDate() }</p>
        <ul className='slide-list-item__icons'>
          { icons() }
        </ul>
      </div>
      <p className='slide-list-item__text'>{ description }</p>
    </>
  )
}

export default SlideListItem