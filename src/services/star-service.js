export default class StarService {

    constructor(){
        this._apiUrl = 'https://swapi.co/api';
    }



     makeRequest = async (url) => {
        let res = await fetch(`${this._apiUrl}${url}`);
        let body = await res.json();
        return body;
    }

     getPerson = async (id) => {
        let person = await this.makeRequest(`/people/${id}`)
        return this._transformPerson(person);
    }

     getPlanet = async (id) => {
        let planet = await this.makeRequest(`/planets/${id}`);
        return this._transformPlanet(planet);
    }
     getStarship = async (id) => {
        let starship = await this.makeRequest(`/starships/${id}`);
        return this._transformStarship(starship);
    }

     getAllPeople = async () => {
        let res = await this.makeRequest('/people/');
        return res.results.map(this._transformPerson);
    }

     getAllPlanets = async () => {
        let res = await this.makeRequest('/planets/');
        return res.results.map(this._transformPlanet);
    }

     getAllStarships = async () => {
        let res = await this.makeRequest('/starships/');
        return res.results.map(this._transformStarship);
    }







    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }
    _transformPlanet = (planet) =>{
       return {
            id: this._extractId(planet),
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            planetName: planet.name
        }
    }
    _transformStarship = (starship) =>{
        return {
             id: this._extractId(starship),
             name: starship.name,
             model: starship.model,
             costInCredits: starship.costInCredits,
             length: starship.length,
             crew: starship.crew,
             passengers: starship.passengers
         }
     }
     _transformPerson = (person) =>{
         return{
             id: this._extractId(person),
             name: person.name,
             gender: person.gender,
             height: person.height,
             eyeColor: person.eye_color
         }
     }
}
