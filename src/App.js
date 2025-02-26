// src/App.js
import PlantList from './components/PlantList';
import './styles/App.css';

const PlantsData = [
  { id:1, name:'Ficus', image:'https://placehold.co/600x400'},
  { id:2, name:'Monstera', image:'https://placehold.co/600x400'},
  { id:3, name:'Cactus', image:'https://placehold.co/600x400'},

];

const App = () => {
  return(
    <div className='app-container'>
      <h1>Plant Gallery</h1>
      <PlantList plants={PlantsData} />
    </div>
    );
};

export default App;