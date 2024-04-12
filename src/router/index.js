import { createRouter, createWebHistory } from 'vue-router'

import EyefindHome from '@/components/Eyefind/Home.vue'
import EyefindCategoryListing from '@/components/Eyefind/CategoryListing.vue'
import Missing from '@/components/Eyefind/Missing.vue'
import Placeholder from '@/components/Placeholder.vue'

const routes = [
    { path: '/', name: 'Home', component: EyefindHome },
    { path: '/error', name: '404', component: Missing },
    { path: '/media-and-entertainment', name: 'Media and Entertainment', component: EyefindCategoryListing },
    { path: '/food-and-drink', name: 'Food and Drink', component: EyefindCategoryListing },
    { path: '/money-and-services', name: 'Money and Services', component: EyefindCategoryListing },
    { path: '/travel-and-transport', name: 'Travel and Transport', component: EyefindCategoryListing },
    { path: '/fashion-and-health', name: 'Fashion and Health', component: EyefindCategoryListing },
    // Media and Entertainment
    { path: '/lifeinvader', name: 'Lifeinvader', component: Placeholder  },
    { path: '/classicvinewood', name: 'Classic Vinewood', component: Placeholder  },
    { path: '/fameorshame', name: 'Fame or Shame', component: Placeholder  },
    { path: '/kfrlf', name: 'Kung Fu Rainbow Lazer Force', component: Placeholder  },
    { path: '/prb', name: 'Princess Robot Bubblegum', component: Placeholder  },
    { path: '/rsp', name: 'Republican Space Rangers', component: Placeholder  },
    { path: '/rs7', name: 'Righteous Slaughter 7', component: Placeholder  },
    // Food and Srink
    { path: '/lossantosfreegans', name: 'Los Santos Freegans', component: Placeholder  },
    { path: '/egochaser', name: 'EgoChaser Energy Bar', component: Placeholder  },
    { path: '/tacobomb', name: 'Taco Bomb', component: Placeholder  },
    { path: '/grainoftruth', name: 'Grain of Truth', component: Placeholder  },
    // Money and Services
    { path: '/casino', name: 'The Diamond Casino & Resort', component: Placeholder  },
    { path: '/mazebankforeclosures', name: 'Maze Bank Foreclosures', component: Placeholder  },
    { path: '/d8executive', name: 'Dynasty 8 Executive Realty', component: Placeholder  },
    { path: '/bawsaq', name: 'Bawsaq', component: Placeholder  },
    { path: '/d8realestate', name: 'Dynasty 8 Real Estate', component: Placeholder  },
    { path: '/mazebank', name: 'Maze Bank', component: Placeholder  },
    // Travel and Transport
    { path: '/arenawar', name: 'Arena War', component: Placeholder  },
    { path: '/bennys', name: 'Benny\'s Original Motor Works', component: Placeholder  },
    { path: '/elitastravel', name: 'Elitas Travel', component: Placeholder  },
    { path: '/lm', name: 'Legendary Motorsport', component: Placeholder  },
    { path: '/warstock', name: 'Warstock Cache & Carry', component: Placeholder  },
    { path: '/docktease', name: 'Dock Tease', component: Placeholder  },
    { path: '/pedalandmetal', name: 'Pedal and Metal', component: Placeholder  },
    { path: '/ssasa', name: 'Southern San Andreas Super Autos', component: Placeholder  },
    // Fashion and Health
    { path: '/swallowco', name: 'Swallow', component: Placeholder  },
    { path: '/universaluniform', name: 'Universal Uniform', component: Placeholder  },
    { path: '/toeshoes', name: 'Toe Shoes', component: Placeholder  },
    { path: '/preservex', name: 'Preservex Skin Cream', component: Placeholder  },
    { path: '/prop14', name: 'Abstinent America', component: Placeholder  },
    { path: '/fabien', name: 'Fabien Larouche Yoga', component: Placeholder  },
    { path: '/:catchAll(.*)', redirect: '/error' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router