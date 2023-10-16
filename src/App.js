import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './component/Photo/Main';
import Error from './component/Error';
import MyNavLink from './component/MyNavLink';
import Paint_menu from '../src/component/Paint/Paint_menu';
import Space from '../src/component/Space/Space';
import Menu from '../src/component/Menu/Menu';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="Active">
                    <MyNavLink to="/menu">На главную</MyNavLink>
                    <MyNavLink to="/photo">Выбор фото</MyNavLink>
                    <MyNavLink to="/paint">Рисование</MyNavLink>
                    <MyNavLink to="/space">Космос</MyNavLink>
                </div>

                <Routes>
                    <Route path="/photo" element={<Main />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/paint" element={<Paint_menu />} />
                    <Route path="/space" element={<Space />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="*" element={<Navigate to="/menu" replace />} />
                    <Route
                        path="/"
                        element={<Navigate to="/error" replace />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
