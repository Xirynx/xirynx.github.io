import './moviecard.css';
import React from 'react';

const MovieCard = ({ details }) => {
	return (
		<div className='moviecard'>
			<a href={`https://rarbgtor.org/s/${details.id}/`} target='_blank' rel="noreferrer">
				<div>
					<div className='moviecard__text'>
						<h2>{details.l}</h2>
						<h3>{details.y}</h3>
					</div>
					<img className='moviecard__poster' src={details.i.imageUrl} alt='poster' />
				</div>
			</a>
		</div>
	)
}

export default MovieCard