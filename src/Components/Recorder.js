import React from 'react'

import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import 'audio-react-recorder/dist/index.css'
import 'bulma/css/bulma.min.css';
import '../App.css'

class Recorder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recordState: null,
      audioData: null
    }
  }

  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE
    })
  }

  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }

  reset = () => {
    this.setState({
      recordState: null
    })
  }

  onStop = (data) => {
    this.setState({
      audioData: data
    })
    console.log('onStop: audio data', data)
  }

  render() {
    const { recordState } = this.state

    return (
        <>
            <div className="is-flex-direction-column pt-3rem mt-3rem">
                <div id="recorder">
                    <AudioReactRecorder
                    state={recordState}
                    onStop={this.onStop}
                    backgroundColor='rgb(255,255,255)'
                    />
                </div>

                <div className=" mb-1">
                    <audio
                    id='audio'
                    controls
                    src={this.state.audioData ? this.state.audioData.url : null}
                    ></audio>
                </div>

                <div>
                    <button className="button is-small is-danger m-3" id='record' onClick={this.start}>
                    Start
                    </button>
                    <button className="button is-small is-rounded is-link m-3" id='pause' onClick={this.pause}>
                    Pause
                    </button>
                    <button className="button is-small  is-danger m-3" id='stop' onClick={this.stop}>
                    Done
                    </button>
                </div>
            </div>
      </>
    )
  }
}
export default Recorder;