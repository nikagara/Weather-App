import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';


function App() {
const [weather, setWeather] = useState(null); 
const [text, setText] = useState('Москва')

useEffect(() => {
  getData();
}, []);

async function getData() {
  try {
 const response = await fetch(`https://wttr.in/${text}?format=j1`);
  const post = await response.json();
  console.log(post.current_condition);
  setWeather(post.current_condition[0])

  } catch (error) {
    console.error('Ошибка запроса:', error);
}}

  return(
    <div>
      <div>
        <input type="text" value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder='Введите город'/>
        <button
        onClick={getData}>Найти</button>
      </div>
      <h1>Погода</h1>
      <p>{weather?.temp_C} градусов</p>
      <p>Влажность: {weather?.humidity}</p>
      <p>Скорость ветра: {weather?.windspeedKmph} км/ч</p>
      <p>{weather?.lang_ru[0].value}</p>
    </div>
  )
}

export default App