import './App.css';
import { Routes, Route } from 'react-router-dom';
import Postlist from './Components/Postlist';
import PostDetail from './Components/PostDetail';
import Header from './Components/Header';
import DetailPostWordpress from './Components/DetailPostWordpress';
import WordpressPosts from './Components/WordpressPosts';
import Footer from './Components/Footer';
import WordPressPage from './Components/WordpressPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/detail/:id' element={<PostDetail/>}/>
        <Route path='/post/:id' element={<DetailPostWordpress/>}/>
        <Route path='/' element={<Postlist/>}/>
        <Route path='/wordpress' element={<WordpressPosts/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
