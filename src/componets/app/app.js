import AppInfo from '../app-info/app-info.js'
import SearchPanel from '../search-panel/search-panel.js'
import AppFilter from '../app-filter/'
import "./app.css"
import AppMovies from '../App-movies/index.jsx'
import { useState } from 'react'
import { MoviesData } from '../../mock/movies.js'

const App = ()=>{
  const [sorch, setsorch]= useState("")
  const troya = (olja) => {
  }
    return <div className = 'app'>
        <div className = 'content'>
          <AppInfo olja1={''} />
          <div className='Searchpanel'>
            <SearchPanel sorch={sorch} setsorch={setsorch}/>
            <AppFilter />
          </div>
          <AppMovies troya={troya} sorch={sorch}/>
        </div>
    </div>
}

export default App;