import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import { useStore } from '../Hooks/useStore';

const FinalScore = () => {
    const navigate = useNavigate();
    const {
        score,
        triviaQuizDTO: { results },
      } = useStore();
  return (
    <div className='flex flex-col justify-center align-middle w-full'>
        <div className='text-3xl md:text-6xl text-center mb-2'>Your Final Score</div>
        <div className='text-3xl md:text-6xl mb-6 text-center'>{score}/{results.length }</div>
        <div className='text-xl text-center'>
            <Button buttonText={'Back to home'} onClick={() => navigate("/")} />
        </div>
    </div>
  )
}

export default FinalScore