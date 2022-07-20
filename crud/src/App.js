import ListaDepartamento from './components/ListaDepartamentos';
import Menu from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


const App = () => {
  return (
    <>
      <Menu />
      <div className='container'>

        <ListaDepartamento />

      </div>

    </>
  )
}

export default App;