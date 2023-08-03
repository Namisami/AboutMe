import './Tile.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <Link
      to={`/projects/${id}`}
    >
      <div
        onMouseEnter={ () => setShowDesc(true) } 
        onMouseLeave={ () => setShowDesc(false) }
        className={`tile ${className}`}  
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
      </div>
    </Link>
  )
}

export default Tile