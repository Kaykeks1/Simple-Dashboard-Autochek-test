import React from 'react';
// import './App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { useHistory } from "react-router-dom";

import './PermitItem.css';

function PermitItem(props: {permit: any}) {

  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push(`/details/${props.permit.id}`);
  }
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <tr className="permit-row" onClick={handleRoute}>
      <td className="item">
        <p>{props.permit.id ? props.permit.id : '-'}</p>
      </td>
      <td className="item">
        <p>{props.permit.permit_ ? props.permit.permit_ : '-'}</p>
      </td>
      <td className="item">
        <p>{props.permit.permit_type ? props.permit.permit_type : '-'}</p>
      </td>
      <td className="item">
        <p>{props.permit.reported_cost ? formatter.format(props.permit.reported_cost) : '-'}</p>
      </td>
      <td className="item">
        <p>{props.permit.total_fee ? formatter.format(props.permit.total_fee) : '-'}</p>
      </td>
      <td className="item">
        <p>{props.permit.issue_date ? format(new Date(props.permit.issue_date), 'dd MMMM yyyy') : '-'}</p>
      </td>
    </tr>
  );
}

PermitItem.defaultProps = {
    permit: {
        id: 1
    }
}

PermitItem.propTypes = {
    permit: PropTypes.object
}

export default PermitItem;
