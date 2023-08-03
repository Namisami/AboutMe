import './Text.css'

const Text = ({
  children
}: React.PropsWithChildren) => {
  return (
    <p className='text'>
      { children }
    </p>
  )
}

export default Text