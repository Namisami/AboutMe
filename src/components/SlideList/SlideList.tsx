import './SlideList.css'
import SlideListItem from './SlideListItem'
import { SlideListItemProps } from './SlideListItem'
import { PropsWithChildren } from 'react'

export interface SlideListProps {
  items: SlideListItemProps[]
  size?: number
}

const SlideList = ({
  children,
  items,
  size=3
}: PropsWithChildren<SlideListProps>) => {
  const slides = items.map(item => 
    <li key={ item.id } className='slide-list__slide-list-item slide-list-item'>
      <SlideListItem 
        title={ item.title }
        start_date={ item.start_date }
        icon_list={ item.icon_list }
        description={ item.description }
      />
    </li>
  )
  return (
    <>
      <h2>{ children }</h2>
      <ul className='slide-list'>
        { slides }
      </ul>
    </>
  )
}

export default SlideList