import './Breadcrumbs.css'
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const routes = [
    {'projects': 'Проекты', 'link': '#projects'},
  ]
  const loc = useLocation();
  let currentLink = ''
  let crumbs = loc.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      let route = routes.find(route => (route as any)[crumb] !== '')
      currentLink += `/${route?.link}`

      return (
        <li key={ crumb } className='breadcrumbs__crumb'>
          <Link to={ currentLink }>{ (route as any)[crumb] }</Link>
        </li>
      )
    })
  return (
    <ol className='breadcrumbs'>
      { crumbs }
    </ol>
  )
}

export default Breadcrumbs