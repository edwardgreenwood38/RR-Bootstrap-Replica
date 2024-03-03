import './App.css';
import TopNav from './components/TopBar';
import LocationForm from './components/LocationForm';
import StoreListing from './components/StoreListing';


function App() {
  return (
    <div className="App">
      <TopNav />
      <LocationForm />
      <StoreListing />
    </div>
  );
}

export default App;
