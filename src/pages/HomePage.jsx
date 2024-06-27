import React, { useRef } from 'react';
import { setTrainer } from '../store/slices/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css';
import PokeFooter from '../components/shared/PokeFooter';

const HomePage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const textInput = useRef();  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = '';
    navigate('/pokedex');
  }

  return (
    <div className='homepage__container'>
      <div className='homepage'>
         <h1 className='homepage__title'>Pokedex</h1>
         <h2 className='homepage__wellcome'>Hi trainer</h2>
         <p className='homepage__line'>to start give me your name</p>
         <form onSubmit={handleSubmit}>
            <input className='homepage__input' ref={textInput} type="text" />
            <button className='homepage__button'>Start</button>
         </form>
         </div>
         <div className='homapage__footer'>
         <PokeFooter/>
         </div>
    </div>
  )
}

export default HomePage;