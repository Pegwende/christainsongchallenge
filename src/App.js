import React, {useState} from 'react'
import 'bulma/css/bulma.min.css';
import Modal from './Components/Modal'
import "./App.css"

const App = () => {

  const [index, setIndex] = useState(0)
  const words = ['', 'Faith', 'Wisdom', 'Perseverance', 'Commandment', 'Creation', 'the Cross', 'Eden', 'The fall', 'The flood', 'Gospel', 'Redemption', 'Resurrection', 'Salvation', 'Second Coming', 'Love']
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


  const openModal = () => {
    document.querySelector('.modal').classList.add('is-active')
  }

  return (
    <>
          
          < Modal theWord = {theWord} handleButtom={handleButtom} />
        <div className="m-1">

            <div class="backImg p-6 mb-6">
                <h1 className="title is-1 has-text-centered">Game</h1>
            </div>
            <h1 className = 'title is-3 mt-4 has-text-centered'>improvised Worship Challenge</h1>
            <figure class="image is-3by1">
               <img src="https://i.imgur.com/56R43jI.png" alt=''/>
            </figure>

            <div class="card m-6">
                <header class="card-header">
                  <p class="card-header-title">
                    DESCRIPTION!!!
                  </p>
                  <button class="card-header-icon" aria-label="more options">
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </header>
                <div class="card-content">
                  <div class="content">
                    This Game consists of improvising a christian worship songs base on the 
                    word generated when clicked on the button. 
                    <p>NOTE: Only Christian music.🎶</p>

                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">GOOD LUCK!!!</p>
                </footer>
              </div>


            <div class="buttons m-6 is-centered">
            <button class="button is-link is-rounded is-medium has-text-centered "  onClick={handleButtom}> Let's Get Started </button>
            </div>

            <div>
              <footer id='foot' class="footer has-background-grey is-small">
                <div class="content has-text-centered"> 
                  <p class='has-text-primary-light' ><strong>Inspired by:</strong> Papa Mathieu Zampaligre <strong>|</strong> <strong>Created by:</strong> Pegwende P Zabsore  </p>
                  <p className="color has-text-danger-dark pb-3rem pt-3 title is-1">Jesus ❤️ you</p>
                </div>
              </footer>
            </div>

        </div>
    </>
  )
}
export default App;
