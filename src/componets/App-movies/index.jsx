import React from 'react'
import { useState } from 'react'
import { MoviesData } from '../../mock/movies'
import './movies.css'

const AppMovies = ({ sorch,troya }) => {
    const [films, setFilms] = useState(MoviesData)
    const onDel = (id) => {
        const res = films.filter(value => value.id !== id)
        setFilms(res)
    }
    return (
        <div className='movies'>
            {films.length ?
                films.map((value) => value.name.toLocaleLowerCase().includes(sorch.toLocaleLowerCase()) && (
                    <div className="movie" key={value.id}>
                        <div className="name">{value.name}</div>
                        <div className="opt">
                            <div className="caunt">{value.views}</div>
                            <div className="btns">
                                <div className='btn-movie' onClick={() => onDel(value.id)}>Del</div>

                            </div>
                        </div>

                    </div>
                )) : <h1 className='noFilm'>No Film</h1>
            }
        </div>
    )
}

export default AppMovies