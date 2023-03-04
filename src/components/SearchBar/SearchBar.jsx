import './searchbar.css'
import React, { useState } from 'react'

const SearchBar = ({ search }) => {
	let [searchTerm, setSearchTerm] = useState('');

	const onChange = (e) => {
		setSearchTerm(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		search(searchTerm);
	}
	return (
		<div className='searchbar'>
			<h1 className='searchbar__heading'>Find a Movie</h1>
			<form className='searchbar__search' onSubmit={handleSubmit}>
				<input value={searchTerm} className='searchbar__input' type='search' placeholder='Search a Movie Title' onChange={onChange}></input>
				<button className='searchbar__button gradient_accent' type='submit'>Search</button>
			</form>
		</div>
	)
}

export default SearchBar