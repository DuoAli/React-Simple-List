import React from 'react';

const UserData = props => {
  let deleteValue = () => {
    props.datas.remove(data);
  };
  return (
    <tr>
      {props.datas.map(data => (
        <ul>
          {data.name}
          {data.date}
        </ul>
      ))}
      <button type="button" onChange={deleteValue}>
        Delete
      </button>
    </tr>
  );
};
export default UserData;
