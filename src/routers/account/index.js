export default{
    path:'/account',
    component:()=>import('@/views/Account'),
    children:[
        {
            path:'overview',
            component:()=>import('@/components/Overview'),
        },
        {
            path:'setup',
            component:()=>import('@/components/Setup'),
        },
        {
            path:'subscription',
            component:()=>import('@/components/Subscription'),
        },
        {
            path:'transaction',
            component:()=>import('@/components/Transaction'),
        },
        {
            path : '/account',
            redirect : '/account/overview'
        }
]
}