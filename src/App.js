import Header from './components/Header/Header';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import firstList from './assets/json/articles-1.json'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Articles list={firstList} />
      <Footer />
    </div>
  );
}

export default App;
