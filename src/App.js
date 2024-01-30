import Input from './components/Input';
import Button from './components/Button';


import {Container, Content, Row, Column } from './styles';
import { useState } from 'react';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState ('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handOnClear = () => { 
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    
  };

  const handleAddnumber = (num) => {
    setCurrentNumber(prev => `${prev ==='0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = ( ) => {
    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }
  const handleMinusumbers = ( ) => {
    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }

  const handleMultiplyNumbers = ( ) => {
    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }
  const handleDivisionNumbers = ( ) => {
    if(firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }

  const handleEquals = ( ) => {
    if(firstNumber !=='0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
          handleMinusumbers();
          break;  
          case 'x':
            handleMultiplyNumbers();
            break;  
          case '/':
            handleDivisionNumbers();
            break;              

          default: break;         
        }
    }
  }

  return (
    <Container>
        <Content>
          <Input value={currentNumber}/>            
          <Row>
              <Button label="0"onClick={() => handleAddnumber('0')}/>
              <Button label="/" onClick={handleDivisionNumbers}/>
              <Button label="c" onClick={handOnClear}/>
              <Button label="x" onClick={handleMultiplyNumbers}/>
            </Row>
            <Row>
              <Button label="7" onClick={() => handleAddnumber('7')}/>
              <Button label="8" onClick={() => handleAddnumber('8')}/>
              <Button label="9" onClick={() => handleAddnumber('9')}/>
              <Button label="+" onClick={handleSumNumbers}/> 
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddnumber('4')}/>
              <Button label="5" onClick={() => handleAddnumber('5')}/>
              <Button label="6" onClick={() => handleAddnumber('6')}/>
              <Button label="-" onClick={handleMinusumbers}/>

            </Row>
            <Row>
              <Button label="1" onClick={() => handleAddnumber('1')}/>
              <Button label="2" onClick={() => handleAddnumber('2')}/>
              <Button label="3" onClick={() => handleAddnumber('3')}/>
              <Button label="=" onClick={handleEquals}/>
            </Row>
        </Content>
    </Container>
  );
}

export default App;
