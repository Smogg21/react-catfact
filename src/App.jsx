import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const { fact, getFactAndUpdateState } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    getFactAndUpdateState()
  }

  return (
    <main>
      <h1>
        App de gatitos.
      </h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App
