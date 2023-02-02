import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import Dog from './data/dog';
import CatCard from './components/cat_card';
import DogCard from './components/dog_card';
import { v4 as uuidv4 } from 'uuid';
import catData from './data/cat-data';
import dogData from './data/dog-data';

function App(): JSX.Element {

	//const catData = [ /* big long array of cats here */];
	// JavaScript/TypeScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs, setDogs ] = useState<Array<Dog>>(dogData);

		const catCount = cats.length;
		//const dogCount = dogs.length;
	return (
		<>
			<Navbar />
			<Header catCount = {catCount}/>

			<main>
				<div className='cards__wrapper'>
				{cats.map((cat, index) => 
					<CatCard 
					key={cat.id}
					name={cat.name}
					species={cat.species}
					favFoods={cat.favFoods}
					birthYear={cat.birthYear}
					catIndex={index}
					/> )}
				{dogs.map((dog, index) => 
					<DogCard 
					key={dog.id}
					name={dog.name}
					species={dog.species}
					favFoods={dog.favFoods}
					birthYear={dog.birthYear}
					catIndex={index}
						/> )}
					
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
