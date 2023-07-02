import './Icon.css'

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
}

const Icon = ({
  className,
  src,
  alt
}: IconProps) => {
  return (
    <>
      <img className={`icon ${className}`} src={ src } alt={ alt } />
    </>
  )
}

export default Icon