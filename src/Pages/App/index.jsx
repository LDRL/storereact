import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ShopingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'


const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/sign-in', element: <SignIn /> },
        { path: '/*', element: <NotFound /> },
    ])

    return routes
}


const App = () => {
    return (
        <ShopingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
            </BrowserRouter>
        </ShopingCartProvider>
    )
}

export default App