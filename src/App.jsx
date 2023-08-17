
import './App.css'
import Footer from './Footer'
import Gallery from './Gallery'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
      <Gallery />
    </>
  )
}

export default App;
