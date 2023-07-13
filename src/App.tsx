import Header1 from './components/Header/Header1';
import Header2 from './components/Header/Header2';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Pageup from './components/Pageup/Pageup';
// import CenterMode from './components/Main/SlickSlider/SlickSlider';


function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <Main />
      {/* <Footer /> */}
      <Pageup />
      {/* <CenterMode /> */}
    </div>
  );
}

export default App;
