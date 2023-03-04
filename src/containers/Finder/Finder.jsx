import './finder.css';
import { MovieCard, SearchBar } from '../../components';
import React, { useEffect, useState } from 'react';

const Finder = () => {
	let [searchTerm, setSearchTerm] = useState();
	let [searchResults, setSearchResults] = useState();

	const handleSearch = (e) => {
		setSearchTerm(e);
	}

	useEffect(() => {
		const fetchResults = async () => {
			const res = await fetch(`https://v3.sg.media-imdb.com/suggestion/x/${searchTerm}.json?includeVideos=0`);
			const { d } = await res.json();
			setSearchResults(d.filter(el => 
				el.i &&
				el.id.startsWith('tt') && 
				el.qid === 'movie'
			));
		}
		if (searchTerm) {
			fetchResults()
			.catch(err => console.log(err));
		}
	}, [searchTerm, searchResults])

	return (
		<div className='finder section__padding'>
			<SearchBar search={handleSearch} />
			<div className='moviecards'>
			{
				searchResults &&
				searchResults.map(result => <MovieCard details={result} />)
			}
			</div>
		</div>
	)
}

export default Finder