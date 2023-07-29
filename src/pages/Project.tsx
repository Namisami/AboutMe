import Slider from "@components/Slider/Slider"

const items = [
  {
    id: '1',
    image: '/cleopartner-1.jpg',
  },
  {
    id: '2',
    image: '/cleopartner-2.jpg',
  },
  {
    id: '3',
    image: '/cleopartner-3.jpg',
  },
  {
    id: '4',
    image: '/cleopartner-4.jpg',
  },
]

const Project = () => {
  return (
    <Slider items={ items } size={ 1 } height={ 500 } width={ 80 } />
  )
}

export default Project