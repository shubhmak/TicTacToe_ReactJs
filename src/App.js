
import './App.css';
import Board from './components/Board';
function App() {
  return (
    <div className="App">


<div class="navbar"><span>CSS Parallax Scrolling Tutorial</span></div>  
        <div className="parallax-wrapper">
            <div className="content"><center>
            <h1> <i> 2 Player TicTacToe</i></h1>
            <Board/> </center>
            </div>
        </div>
        <div className="regular-wrapper">
            <div className="content">
                <p><h1><b><i><strong>~ShubhMak</strong></i></b><br />ReactJs</h1>  </p>
            </div>
        </div>
      
    </div>
  );
}

export default App;
