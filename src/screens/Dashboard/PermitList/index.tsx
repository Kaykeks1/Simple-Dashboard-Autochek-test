import React from 'react';
// import './App.css';
import { Link } from 'react-router-dom';
import PermitItem from './PermitItem';
import './PermitList.css'

function PermitList(props: {permits: object[]}) {

  return (
    <div className="permit-list">
      <table className="permit-table">
        <thead>
          <tr className="permit-heading">
            <th className="title">ID</th>
            <th className="title">Permit Code</th>
            <th className="title">Permit Type</th>
            <th className="title">Reported Cost</th>
            <th className="title">Total Fee</th>
            <th className="title">Issue Date</th>
          </tr>
        </thead>
        <tbody>
          {
            props.permits.map((permit: object, key) => 
            (<PermitItem
              key={key}
              permit={permit}
              />)
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default PermitList;
