import Slider from '@components/Slider/Slider';
import Container from '@components/Container/Container';
import TileSet from '@components/TileSet/TileSet';

import "the-new-css-reset/css/reset.css"; 


function Index() {
  const slides = [
    {
      id: '1',
      title: 'React',
      start_date: new Date(2022, 10, 1),
      icon_list: ['/js.png', '/ts.png'],
      description: 'Начал изучать после месячного опыта работы с Vue, дополнительно знаю Redux и React Router.',
    },
    {
      id: '2',
      title: 'Django',
      start_date: new Date(2021, 8, 1),
      icon_list: ['/python.png'],
      description: `Первый опыт работы с Django получил еще в школе, когда для себя изучал Python. Потом в ходе курсовых
      работ в вузе изучил Django-rest-framework, работу с JWT токенами, OAuth2. Устанавливал Swagger, Celery.`,
    },
    {
      id: '3',
      title: 'Vue2',
      start_date: new Date(2022, 9, 1),
      icon_list: ['/js.png', '/ts.png'],
      description: 'В ходе учебной программы второго семестра начал изучать Vue. Работал также с Vuetify, Vuex.',
    },
    {
      id: '4',
      title: 'Vue3',
      start_date: new Date(2022, 9, 1),
      icon_list: ['/js.png', '/ts.png'],
      description: 'В ходе учебной программы второго семестра начал изучать Vue. Работал также с Vuetify, Vuex.',
    },
  ]
  
  const portfolio = [
    {
      id: '1',
      text: 'Сайт курьерской службы',
      tags: ['HTML5', 'SCSS'],
      cover: '/cleopartner.jpg'
    },
    {
      id: '2',
      text: 'Сайт курьерской службы',
      tags: ['HTML5', 'SCSS'],
      cover: '/cleopartner.jpg'
    },
    {
      id: '3',
      text: 'Сайт курьерской службы',
      tags: ['HTML5', 'SCSS'],
      cover: '/cleopartner.jpg'
    },
  ]

  return (
    <>
      <header>
      </header>
      <main>     
        <Container>
          <Slider 
            items={ slides }
          >
            Мой стек  
          </Slider>
          <TileSet
            items={ portfolio }  
          >
            Портфолио
          </TileSet>
        </Container>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Index