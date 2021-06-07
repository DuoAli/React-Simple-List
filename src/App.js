import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserData from './components/UserData';
import './style.css';

export default function App() {
  const [datas, setDatas] = useState(['']);

  const saveDatas = (names, dates) => {
    setDatas(datas => {
      return [
        ...datas,
        {
          name: names,
          date: dates
        }
      ];
    });
  };
  return (
    <div>
      <h1>Heading</h1>
      <UserForm onDataSave={saveDatas} />
      <UserData datas={datas} />
    </div>
  );
}
