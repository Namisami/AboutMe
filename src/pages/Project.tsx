import { useParams } from 'react-router-dom'
import Slider from "@components/Slider/Slider"
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import Text from '@components/Text/Text'

const items = [
  {
    id: '1',
    description: `Пожалуй первый более-менее серьезный сайт, который я написал.
                  Впрочем пока что без использования JS.
                  Были использованы: HTML (+ семантика), CSS + SCSS. 
                  Верстка адаптивная.`,
    images: [
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
  },
  {
    id: '2',
    description: `Пожалуй первый более-менее серьезный сайт, который я написал.
                  Впрочем пока что без использования JS.
                  Были использованы: HTML (+ семантика), CSS + SCSS. 
                  Верстка адаптивная.`,
    images: [
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
  },
]

const Project = () => {
  const params = useParams()
  const project = items.find((item) => item.id === params.projectId)
  if (project === undefined) {
    throw new Response(null, {
      status: 404
    })
  }
  return (
    <>
      <Breadcrumbs />
      <Slider items={ project?.images } size={ 1 } height={ 500 } width={ 80 } />
      <div>
        <h2>Описание</h2>
        <Text>
          { project?.description}
        </Text>
      </div>
    </>
  )
}

export default Project