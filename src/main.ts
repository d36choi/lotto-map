import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'
import { createNaverMap } from 'vue3-naver-maps'

const app = createApp(App)


app.use(createPinia());
app.use(router);
app.use(createNaverMap, {
  clientId: import.meta.env.VITE_NAVER_MAP_CLIENT,
});
app.use(
  createVuestic({
    config: {
      colors: {
        variables: {
          primary: '#03045e',
          secondary: '#0077b6',
          success: '#00b4d8',
          info: '#90e0ef',
          danger: '#d90429',
          warning: '#ef233c',
          gray: 'rgb(245,242,242)',
          dark: '#252A34',
          white: '#fff'
        }
      },
      components: {
        VaNavbar: {
          color: 'white'
        },
        VaSidebar: {
          color: 'gray'
        }
      }
    }
  })
);
app.mount('#app');
