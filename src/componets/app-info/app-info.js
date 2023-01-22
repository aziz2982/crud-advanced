import { useState } from 'react';
import { MoviesData } from '../../mock/movies';
import './app-info.css'


const AppInfo = () => {
   const [sorch]=useState(MoviesData)
  return (
    <div className = "AppInfo">
      <p >Barcha kinolar soni: {sorch.length}</p>
      <p>Ko'rilgan kinolar Soni: </p>
    </div>
  )
}

export default AppInfo;