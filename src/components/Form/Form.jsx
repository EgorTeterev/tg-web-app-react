import React from 'react';
import { useState } from 'react';
import './Form.css'

const Form = () => {
  const [country,setCountry] = useState('');
  const [city,setcity] = useState('');
  const [street,setstreet] = useState('');
  const [houseNumber,sethouseNumber] = useState('');

  const onChangeCountry = (e)=>{
    setCountry(e.target.value)
  }
  const onChangecity = (e)=>{
    setcity(e.target.value)
  }
  const onChangestreet = (e)=>{
    setstreet(e.target.value)
  }
  const onChangehouseNumber = (e)=>{
    sethouseNumber(e.target.value)
  }

  return (
    <div className='form'>
      <h3>Введите данные</h3>
      <input className={'input'} type="text" placeholder={'Cтрана'} value={country} onChange={onChangeCountry}/>
      <input className={'input'} type="text" placeholder={'Город'}  value={city} onChange={onChangecity}/>
      <input className={'input'} type="text" placeholder={'Улица'}  value={street} onChange={onChangestreet}/>
      <input className={'input'} type="text" placeholder={'Номер дома'}  value={houseNumber} onChange={onChangehouseNumber}/>
    </div>
  );
};

export default Form;