import { Outlet } from 'react-router-dom';
import './App.scss';
import Navigation from './components/fragment/navigation';
import Footer from './components/fragment/footer';
import style from "./style.module.scss";
import bg from "./asset/bg.png"
function App() {
  return (
    <>
      <Navigation />
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}>
          <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
