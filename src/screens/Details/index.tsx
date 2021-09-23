import React from 'react';
// import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { requestPermit } from "../../actions";
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';
import './Details.css';
import {
  AiOutlineArrowLeft,
  AiOutlineClockCircle,
  AiOutlineNumber,
} from 'react-icons/ai';
import {
  FaRegMoneyBillAlt,
  FaRegStickyNote,
  FaDirections,
} from 'react-icons/fa';
import {
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import {
  MdRateReview,
} from 'react-icons/md';


function Details(props: {requestPermit: Function, permit: any, match: {params: {id: string}}}) {
  React.useEffect(() => {
    fetchPermit();
  }, [])
  
  const fetchPermit = async () => {
    await props.requestPermit(Number(props.match.params.id));
    console.log('permit ', props.permit)
  }
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push(`/`);
  }

  return (
    <div className="details">
      <div>
        <AiOutlineArrowLeft style={{cursor: 'pointer'}} onClick={handleRoute} size={30} />
      </div>
      <div className="details-title">Permit details</div>
      <div className="details-subtitle">Showing more permit details</div>
      <div className="details-container">
        <div className="top-row">
          <div className="permit-id">#{props.match.params.id}</div>
          <div>
            <div className="details-date">
              <div className="title">Application Date: </div>
              <div>{props.permit.application_start_date && format(new Date(props.permit.application_start_date), 'dd MMMM yyyy')}</div>
            </div>
            <div className="details-date" style={{marginTop: '10px'}}>
              <div className="title">Issue Date: </div>
              <div>{props.permit.issue_date && format(new Date(props.permit.issue_date), 'dd MMMM yyyy')}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="detail">
            <div className="detail-title">
              <FaRegStickyNote />{'  '}PERMIT
            </div>
            <div className="detail-body">
              {props.permit.permit_}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <FaRegStickyNote />{'  '}PERMIT TYPE
            </div>
            <div className="detail-body">
              {props.permit.permit_type}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <MdRateReview />{'  '}REVIEW TYPE
            </div>
            <div className="detail-body">
              {props.permit.review_type}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <HiOutlineLocationMarker />{'  '}CONTACT
            </div>
            <div className="detail-body">
              {props.permit.contact_1_name} ({props.permit.contact_1_type})<br />
              {props.permit.contact_1_city}, {props.permit.contact_1_state}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="detail">
            <div className="detail-title">
              <AiOutlineClockCircle />{'  '}PROCESSING TIME
            </div>
            <div className="detail-body">
              {props.permit.processing_time}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <FaRegMoneyBillAlt/>{'  '}REPORTED COST
            </div>
            <div className="detail-body">
              {props.permit.reported_cost}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <FaRegMoneyBillAlt/>{'  '}TOTAL FEE
            </div>
            <div className="detail-body">
              {props.permit.total_fee}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <FaRegStickyNote />{'  '}DESCRIPTION
            </div>
            <div className="detail-body">
              {props.permit.work_description}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="detail">
            <div className="detail-title">
              SUFFIX
            </div>
            <div className="detail-body">
              {props.permit.suffix}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <FaDirections />{'  '}STREET NAME
            </div>
            <div className="detail-body">
              {props.permit.street_name}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <AiOutlineNumber />{'  '}STREET NUMBER
            </div>
            <div className="detail-body">
              {props.permit.street_number}
            </div>
          </div>
          <div className="detail">
            <div className="detail-title">
              <FaDirections />{'  '}STREET DIRECTION
            </div>
            <div className="detail-body">
              {props.permit.street_direction}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: {details: object}) => {
  return {
    permit: state.details,
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  (dispatch) => bindActionCreators({ requestPermit }, dispatch)
  )(Details);
