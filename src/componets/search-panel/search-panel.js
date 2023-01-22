import './search-panel.css'

const SearchPanel = ({setsorch}) => {
  return (
    
      <input onChange={({target:{value}})=>setsorch(value)} type="text" className='form-control search-input' placeholder='Kinolarni qidirish' />
    
  )
}

export default SearchPanel;