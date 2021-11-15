import React, {useState} from 'react'
import 'bulma/css/bulma.min.css';
import Modal from './Components/Modal'

const App = () => {

  const [index, setIndex] = useState(0)
  const words = ['', 'Faith', 'Wisdom', 'Perseverance', 'Commandment', 'Creation', 'the Cross', 'Eden', 'The fall', 'The flood', 'Gospel', 'Redemption', 'Resurrection', 'Salvation', 'Second Coming']
  let theWord=words[index]

  const handleButtom = () => {
    if ( index < words.length ) {
      setIndex(index + 1)
      theWord = words[index]
      openModal()
    } else {
      setIndex(0)
    }
  }

  const closeModal = () => {
    document.querySelector('.modal').classList.remove('is-active')
  }



  const openModal = () => {
    document.querySelector('.modal').classList.add('is-active')
  }

  return (
    <>

          < Modal theWord = {theWord} />
        <div>

            <div>
                <h1>Game</h1>
                <h1>improvised Worship Challenge</h1>
            </div>

            {theWord}
            <div class="buttons">
            <button class="button is-danger"  onClick={handleButtom}> Clicked for new Word </button>
            </div>

            <div>
              <footer class="footer">
                <div class="content has-text-centered is-primary"> 
                  <p> Inspired by: Papa Mathieu Zampaligre | Created by: Pegwende P Zabsore  </p>
                </div>
              </footer>
            </div>

        </div>
    </>
  )
}
export default App;
