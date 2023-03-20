import React from 'react'
import { Container } from '../../components/Containers/container';
import ExerciseHeader from '../../components/elements/ExerciseHeader';
import { GlobalStyles } from '../../components/globalStyles'
import { Button } from '../../components/styles/styled.button';
import { PrincipalLayout } from '../../components/styles/styled.layout'
import Expression from './ExpressionElements';
import arrayExpressions from '../../Datas/expressions'
import StartStopExerciseContainer from '../../components/elements/StartStopExerciseContainer';

let index=0;
const NewExpressions = () => {
    const[expression,setExpression]=React.useState('')
    const[stop,setStop]=React.useState(-1); //stop=-1 it means that the lesson has not started, when stop=5 => the end of the lesson

    function extractExpression(){
      setExpression(arrayExpressions[index])
      index++;
      setStop(prevValue=>prevValue+2)
    }

    function start(){
      setStop(0) //stop=0 it means that the lesson starts 
    }

  return (
    <>
      <GlobalStyles/>
      <ExerciseHeader stop={stop} background={'#e69500'} progressColor={'#7BC5C1'}/>
      <PrincipalLayout>
      {stop === 10 || stop === -1 ? //if it's the beggining of the lesson or the end, the words will not be displayed on the screen 
        <>
            <StartStopExerciseContainer start={start} stop={stop} iconStart={'book.png'} iconStop={'rainbow.png'} text={'5 new expressions'}/>
        </>
        :
        <>
          <Expression term={expression.expression} explanation={expression.explanation} example={expression.example}/>
          <Container align={'center'} >
            <Button onClick={extractExpression} background={'#a79cc9'} >
                    {stop === 8 ? 'Finish' : 'Next Expressoin 🡺'} 
            </Button>
          </Container>
          </>
      }
      </PrincipalLayout>
      

    </>
  )
}

export default NewExpressions
//#e69500 //orange