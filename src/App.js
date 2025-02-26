// src/App.js
import PlantList from './components/PlantList';
import './styles/App.css';

const PlantsData = [
  { id:1, name:'Landscape', image:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'},
  { id:2, name:'River', image:'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ'},
  { id:3, name:'Sea', image:'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w'},

];

const App = () => {
  return(
    <div className='app-container'>
      <h1>Image Gallery</h1>
      <PlantList plants={PlantsData} />
    </div>
    );
};

export default App;