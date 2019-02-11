import StarSerivce from '../../services/star-service';
import { withData } from '../hoc/with-data';
import ItemList from '../item-list/item-list';



const { 
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = new StarSerivce();

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);



export {
    PersonList,
    PlanetList,
    StarshipList
}