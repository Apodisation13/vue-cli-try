import { createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/pages/MainPage'
import GamePage from '@/pages/GamePage'
import AboutPage from '@/pages/AboutPage'
import DeckbuildPage from '@/pages/DeckbuildPage'
import XoPage from '@/pages/XoPage'
import TryPage from '@/pages/TryPage'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/game',
        component: GamePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/deckbuild',
        component: DeckbuildPage
    },
    {
        path: '/xo',
        component: XoPage
    },
    {
        path: '/try',
        component: TryPage
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory()
})


export default router
