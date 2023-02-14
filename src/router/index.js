import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../components/Blog.vue'
import Intro from '../components/Intro.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

const routes = [
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/',
    name: 'Index',
    component: Intro
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router