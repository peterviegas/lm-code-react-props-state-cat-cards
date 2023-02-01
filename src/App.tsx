import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card';
import { v4 as uuidv4 } from 'uuid';

function App(): JSX.Element {

	const catData = [ /* big long array of cats here */];
	// JavaScript/TypeScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	//const [ data, setData ] = useState()
	
		const catCount = cats.length;
	return (
		<>
			<Navbar />
			<Header catCount = {catCount}/>

			<main>
				<div className='cards__wrapper'>
				{cats.map((cat, index) => 
				<CatCard 
				name={cat.name}
				species={cat.species}
				favFoods={cat.favFoods}
				birthYear={cat.birthYear}
				catIndex={index}
					/> )}
					
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
