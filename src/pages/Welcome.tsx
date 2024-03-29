import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Slider from '@components/Slider/Slider';
import TileSet from '@components/TileSet/TileSet';
import Text from '@components/Text/Text';

import "the-new-css-reset/css/reset.css"; 

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
    cover: '/cleopartner-1.jpg',
  },
  {
    id: '2',
    tags: ['HTML5', 'SCSS'],
    cover: '/cleopartner-1.jpg'
  },
  {
    id: '3',
    text: 'Сайт курьерской службы',
    tags: ['HTML5', 'SCSS'],
    cover: '/cleopartner-1.jpg'
  },
]

const Welcome = () => {
  return (
    <>
      <header>
      </header>
      <main>     
        <Breadcrumbs />
        <h2 id='me'>Обо мне</h2>
        <Text>
          Меня зовут Хасанов Марат и я начинающий Frontend-разработчик. В данный момент являюсь студентом Московского политеха и учусь
          на третьем курсе направления "Веб-технологии", обучаясь именно тому, чем планирую заниматься в ближайшем будущем. Помимо этого
          также стараюсь развиваться и в других сферах: в основном учу английский (в данный момент уровень где-то Intermediate) 
          и играю на гитаре, на остальное затрачиваю сравнительно меньше времени.
        </Text>
        <h2 id="stack">Мой стек</h2>
        <Slider 
          items={ slides }
        />  
        <h2 id="projects">Портфолио</h2>
        <TileSet
          items={ portfolio }  
        />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Welcome
