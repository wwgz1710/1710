import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e56cb3b4c0754b93b10d4964354412fd17a0dd63
// import HelloWorld from '@/components/HelloWorld'
import Slide from "@/views/slide/slide"


<<<<<<< HEAD
=======
import HelloWorld from '@/components/HelloWorld'
import Form from '@/views/form/form'
>>>>>>> 069b800fa9695265b03f70f7edd24051774c331d
=======
>>>>>>> e56cb3b4c0754b93b10d4964354412fd17a0dd63
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e56cb3b4c0754b93b10d4964354412fd17a0dd63
      path: '/slide',
      name: 'slide',
      component: Slide,
			redirect: '/slide/form',
			children:[
				{
					path: 'form',
					name: 'form',
					component: resolve => require(["@/views/form/form"],resolve)
				},{
					path: 'table',
					name: 'table',
					component: resolve => require(["@/views/table/table"],resolve)
				},{
					path: 'list',
					name: 'list',
					component: resolve => require(["@/views/list/list"],resolve)
				}
			]
<<<<<<< HEAD
=======
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
>>>>>>> 069b800fa9695265b03f70f7edd24051774c331d
=======
>>>>>>> e56cb3b4c0754b93b10d4964354412fd17a0dd63
    }
  ]
})
