import Accueil from './components/Accueil'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Post from './components/Post'

export default [
  { path: '/', component: Accueil },
  { path: '', component: Accueil },
  { path: '/my-vuejs-project', component: Accueil },
  { path: '/my-vuejs-project/blog', component: Page1 },
  { path: '/my-vuejs-project/meteo/', component: Page2 },
  { path: '/my-vuejs-project/blogpost/:id', component: Post },
]
