import Recorder from './Recorder';
const Modal = (props) => {

console.log(props.theWord)
    const closeModal = () => {
        document.querySelector('.modal').classList.remove('is-active')
      }

      if (props.theWord ) {
        return (
            <>
                <div class="modal">
                    <div onClick={closeModal} class="modal-background"></div>
                    <div id="modal" class="modal-content has-background-white has-text-centered title is-1 mx-1 px-1 py-6 ">
                            <p className="title is-1"> 〉〉〉 {props.theWord} 〈〈〈 </p>
                            < Recorder  />
                            <button className="button is-ligth m-3" id='stop' onClick={props.handleButtom}>
                               Next Word
                            </button>
                    </div>
                    <button onClick = {closeModal} class="modal-close is-large" aria-label="close"></button>
                    
                </div>
            </>
        )

      } else {
        return (
            <div class="modal">
                <div onClick = {closeModal} class="modal-background"></div>
                  <div class="modal-content has-background-white has-text-centered title is-1 p-6">
                    <p>CONGRATS!</p> 
                    <p>🎉🎉🎊</p> 
                    <p>YOU WIN</p>
                    <p>🥂</p>
                    
                  </div>
                <button onClick = {closeModal} class="modal-close is-large" aria-label="close"></button>
            </div>
        )
      }


}

export default Modal;