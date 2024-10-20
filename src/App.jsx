import {ResponsiveContextProvider} from './contexts/ResponsiveContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageScreen from './pages/page-screen';
import NotFoundScreen from './pages/not-found-screen';
import LoginScreen from './pages/login-screen';
import RegisterScreen from './pages/register-screen';

function App() {
    return (
        <BrowserRouter>
            <ResponsiveContextProvider>
                <Routes>
                    <Route path="/" element={<PageScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegisterScreen/>}/>
                    <Route path="*" element={<NotFoundScreen/>}/>
                </Routes>
            </ResponsiveContextProvider>
        </BrowserRouter>
    )
}

export default App
