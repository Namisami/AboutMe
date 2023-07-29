import './Tile.css'
import { useState } from 'react'

export interface TileProps extends React.AllHTMLAttributes<HTMLDivElement> {
  id?: string
  text?: string
  tags: string[]
  cover: string
}

const Tile = ({
  className,
  id,
  text,
  tags,
  cover,
}: TileProps) => {
  const [showDesc, setShowDesc] = useState(false)

  const tagList = tags.map((tag) => 
    <li className='tile__tag' key={ tag }>
      <div className='tile__tag-link'>
        { tag }
      </div>
    </li>
  )

  return (
    <a
      onMouseEnter={ () => setShowDesc(true) } 
      onMouseLeave={ () => setShowDesc(false) }
      className={`tile ${className}`}
      href={`/projects/${ id }`}
    >
      <img className='tile__cover' src={ cover } alt={ text } />
      { showDesc &&
        <ul className='tile__tags'>
          { tagList }
        </ul>
      }
      { showDesc &&
        <p className='tile__description'>{ text }</p>
      }
    </a>
  )
}

export default Tile