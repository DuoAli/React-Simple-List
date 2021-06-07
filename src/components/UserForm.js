import React, { useState } from 'react';

const UserForm = props => {
  const [useTitle, setTitle] = useState();
  const [useDate, setDate] = useState('');

  const updateTitle = e => {
    setTitle(e.target.value);
  };
  const updateDate = e => {
    setDate(e.target.value);
  };
  const changeValue = e => {
    e.preventDefault();
    props.onDataSave(useTitle, useDate);
  };

  return (
    <>
      <form onSubmit={changeValue}>
        <label>Title</label>
        <input
          placeholder="What should be done"
          onChange={updateTitle}
          value={useTitle}
        />
        <lable>When should be done</lable>
        <input type="date" onChange={updateDate} value={useDate} />
      </form>
    </>
  );
};

export default UserForm;
