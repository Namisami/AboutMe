import './TileSet.css'
import Tile, { TileProps } from '@components/TileSet/Tile'

export interface TileSetProps extends React.PropsWithChildren {
  cols?: number
  items: TileProps[]
}

const TileSet = ({
  children,
  cols=2,
  items,
}: TileSetProps) => {
  const tiles = items.map((item) => 
    <Tile
      key={ item.id }
      className='tileset__tile'
      id={ item.id }
      text={ item.text }
      tags={ item.tags }
      cover={ item.cover }
    />
  )

  return (
    <>
      <h2 className='tileset-header'>{ children }</h2>
      <div className={`tileset tileset--${cols}`}>
        { tiles }
      </div>
    </>
  )
}

export default TileSet