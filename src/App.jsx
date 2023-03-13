import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [showProducts, setShowProducts] = useState(false);
  // const [products, setProducts] = useState([])
  // const [count, setCount] = useState(1);

  console.log(showProducts)
  // console.log(count)

  const handleShowProduct = () => {
    setShowProducts(!showProducts)
  }

  useEffect(()=>{
    
    //PETICION GET CON FETCH
    // fetch('https://api.escuelajs.co/api/v1/products')
    // .then(response => response.json())
    // .then(data => console.log(data))

    
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY1MDIzMzkwOSwiZXhwIjoxNjUwMjM3NTA5LCJzdWIiOiIyIn0.nS99u-MBatZHbexMUenwsGdS8oV55BIaGwI6PSP7BC8"
      },
      body: {
        "email": "anita.borg@systers.xyz",
        "password": "g6WQSrsv7rC7et5B"
      }
    }
    //PETICION POST CON FETCH
    // fetch('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/login', options)
    // .then(response => response.json())
    // .then(data => console.log(data))

    //PETICION GET CON AXIOS
    // axios.get('https://api.escuelajs.co/api/v1/products')
    // .then(response => console.log(response.data))
    // .catch(error => console.log(error))

    //PETICION POST CON AXIOS
    axios.post('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/login', options)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

  }, [showProducts])

  return (
		<div>
			<button onClick={handleShowProduct}>Show Products</button>
			{/* <button onClick={()=> {setCount(count + 1)}}>Contar</button> */}
		</div>
  )

}

export default App
