import React, {useState} from 'react'
import styles from './App.module.scss'
import {getUser} from '../../../utilities/users-service'
import LoginPage from  '../LoginPage/LoginPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import { Navigate } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'

export default function App(){
    const [user,setUser] = useState(getUser())
    return(
        <main className={styles.App}>
            {user?
            <>
            <Routes>

                <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />}/> {/* New Order Page is my main page */}
                <Route path="/orders/" element={<OrderHistoryPage user={user} setUser={setUser} />}/>
                <Route path ="/*" element ={<Navigate to="orders/new"/>}/>

            </Routes>
                </>
            :
            <>

            <LoginPage setUser={setUser} />
            

            </>
            }

        </main>
    )
}