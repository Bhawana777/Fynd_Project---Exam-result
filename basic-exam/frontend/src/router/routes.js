import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import ForgotPassword from '@/views/auth/ForgotPassword.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'
import Verify from '@/views/auth/Verify.vue'
import Settings from '@/views/Settings.vue'
import CreateResult from '@/views/CreateResult.vue'
import EditResult from '@/views/EditResult.vue'
import ViewResult from '@/views/ViewResult.vue'
import ViewResultForStudent from '@/views/ViewResultForStudent.vue'

export default [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPassword
    },
    {
        path: '/verify',
        name: 'verify',
        component: Verify
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
    {
        path: '/results/CreateResult',
        name: 'CreateResult',
        component: CreateResult
    },
    {
        path: '/results/EditResult',
        name: 'EditResult',
        component: EditResult
    },
    {
        path: '/results/ViewResult',
        name: 'ViewResult',
        component: ViewResult
    },
    {
        path: '/results/ViewResultForStudent',
        name: 'ViewResultForStudent',
        component: ViewResultForStudent
    }
]