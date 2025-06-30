import { useState,  } from 'react'
import { Routes, Route, Link, useNavigate, Outlet, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toPage } from './store'
import { useDispatch } from 'react-redux'


import store from './store'
import './App.css'

import Home from './pages/Home'
import Burgers from './pages/Burgers';
import Sandwitches from './pages/Sandwitches'
import Others from './pages/Others'
import Post from './pages/Post'

import Daemoon from './components/Daemoon'

function App() {

  const [count, setCount] = useState(0)
  let navigate =  useNavigate();

  let [menu, setMenu] = useState('Home')
  const page = useSelector((state) => state.page.value)
  const dispatch = useDispatch()



  return (
    <>
        <div className='wrap'>

          <nav>
            <div className='navTop'>
              <ul className='menu'>
                  <li><Link to="/" onClick={()=>{ dispatch(toPage('Home'))}}>Home</Link></li>
                  <li><Link to="/burgers" onClick={()=>{ dispatch(toPage('Beef'))}}>Burgers</Link></li>
                  <li><Link to="/sandwitches" onClick={()=>{ dispatch(toPage('Chicken'))}}>Sandwitches</Link></li>
                  <li><Link to="/others" onClick={()=>{ dispatch(toPage('Other'))}}>Others</Link></li>
                  <li><Link to="/about" onClick={()=>{ dispatch(toPage('어바웃'))}}>About</Link></li>

              </ul>

            </div>
            <div className='navBot'></div>
            
          </nav>
          <div className='box'>
            <header> <h1>Beef Patty only</h1></header>
            <main>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/burgers' element={<Burgers/>} />
                <Route path='/sandwitches' element={<Sandwitches/>} />
                <Route path='/others' element={<Others/>} />
                <Route path="/post/:id" element={<Post />} />
              </Routes>
            </main>
            <footer>
              <p>© 2025 Beef Patty Only. All patties are fictional. Any resemblance to actual burgers is purely coincidental.</p>
              <p>문의: beefpatties@fakeemail.com | 위치: 충북 청주시 상당구 </p>
              <p>이 블로그는 순전히 배고픔에 의해 구동됩니다.</p>
              <p>Powered by 열정, 치즈, 그리고 약간의 양상추</p>
            </footer>
          </div>
        </div>



    </>
  )
}

export default App
