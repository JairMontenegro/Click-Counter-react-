import './App.css';
import ButtonFun from './components/button';
import Counter from './components/counter';
import logocounter  from './images/logo-counter.png';


function App() {

  const setClick = () => {
      console.log('click')
  }
const restartCounter = () => {
  console.log('restart')
}


  return (
    


    <div className='App'>
      <div className='logo-container'>
      <img className='logo' src={logocounter} alt='logo'/>
      </div>

      <div className='principal-container'>
      <Counter
      numberOfClicks = "5"
      />


      <ButtonFun
      text = 'Click'
      isClickButton = {true}
      setClick = {setClick} />
      <ButtonFun
      text ='Reset'
      isClickButton = {false}
      setClick = {restartCounter} />
    
      </div>
    </div>
  );
}

export default App;

