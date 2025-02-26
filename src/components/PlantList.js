//  src/components/PlantList.js
import LazyImages from './LazyImages'
import '../styles/PlantList.css';

const PlantList = ({ plants }) => {
	return(
			<div className='plant-list'>
				{
					plants.map((plant) => (
							<div key={plant.id} className='plant-item'>
								<LazyImages src={plant.image} alt={plant.name} />
								<p>{plant.name}</p>
							</div>
						))
				}
			</div>
		);
};

export default PlantList;