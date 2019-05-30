import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Slide from "@/views/slide/slide"


Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
  ]
})
