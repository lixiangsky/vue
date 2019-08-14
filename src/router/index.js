import Vue from 'vue'
import Router from 'vue-router'
import emplist from '@/components/emplist'
import empadd from '@/components/empadd'
import empupdate from '@/components/empupdate'
import uploadtest from '@/components/uploadtest'
Vue.use(Router)

export default new Router({
	mode:'history',//去除url中的#号
  routes: [
    {
      path: '/',
      name: 'emplist',
      component: emplist
    },
    {
      path: '/empadd',
      name: 'empadd',
      component: empadd
    },
    {
    	path: '/empupdate',
      name: 'empupdate',
      component: empupdate
    	
    },
    {
    	path: '/uploadtest',
      name: 'uploadtest',
      component: uploadtest
    	
    }
 ]
})
