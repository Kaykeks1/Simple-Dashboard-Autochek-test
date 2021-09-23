import React from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { requestPermits } from "../../actions";
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import PermitList from './PermitList';

function Dashboard(props: {requestPermits: Function, permits: any}) {
  const perPage = 7;
  const [currentList, setCurrentList] = React.useState([])
  const [pageCount, setPageCount] = React.useState(1)
  const [pageBoundaries, setPageBoundaries] = React.useState({ offset: 0, limit: perPage })

  React.useEffect(() => {
    fetchPermits();
  }, []);
  React.useEffect(() => {
    console.log('permits: ', props.permits)
    loadNewPermits()
  }, [props])
  React.useEffect(() => {
    console.log('limit: ', pageBoundaries.limit);
    console.log('offset: ', pageBoundaries.offset);
    loadNewPermits();
  }, [pageBoundaries])
  
  const fetchPermits = async () => {
    await props.requestPermits();
  }

  const loadNewPermits = () => {
    setCurrentList(props.permits.slice(pageBoundaries.offset, pageBoundaries.limit))
    setPageCount(Math.ceil(props.permits.length / pageBoundaries.limit))
  }

  const handlePageClick = (data: {selected: number}) => {
    let selected = data.selected;
    const offset = Math.ceil(selected * perPage);
    setPageBoundaries({offset: offset, limit: offset + perPage })
    console.log('selected: ', selected);
    
  };
  return (
    <div className="dashboard">
      <div className="dashboard-title">Recent Permits</div>
      <div className="dashboard-subtitle">10 recent permits for the city of Chicago</div>
      <PermitList permits={currentList} />
      <div className="footer">
        <div className="showing">Showing {currentList.length} of {props.permits.length}</div>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: {dashboard: object}) => {
  return {
    permits: state.dashboard,
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({ requestPermits }, dispatch)
  )(Dashboard);
