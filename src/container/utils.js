import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';
import {Card, Row, Col} from 'react-bootstrap';

export function MainTable({columns = [], action = '', defaultSize=10,  className=''}){
    const [resp, setResp] = useState({total:0, data: []});
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(defaultSize);
    const [loading, setLoading] = useState(true);
    const {total = 0, data= []} = resp;

    useEffect(() => {
        setLoading(true)
        setTimeout(getResponse, 2000);
        function getResponse(){
            setResp({data:Array(size).fill(0).map(() => columns.map(()=> 'Rendom Test' )), total: 100});
            setLoading(false);
        }
    }, [page, size]);

    return <div className={"main-table-wrap " + className }>
        <Row>
            <Col  md='6'>
            <div>
                show 
                <input type="number" min={5} value={size} onChange={e=> e.target.value && setSize(parseInt(e.target.value))} />
            </div>  
            </Col>
            <Col className='float-right text-right' md='6'><SearchField onChange={e=> this.setState({search: e.target.value})} /></Col>
        </Row>
      <table className="table">
      <thead><tr>{columns && columns.map((v,i) => <th key={i}>{v.name}</th> )}</tr></thead>
      <tbody>
        {loading ? Array(size).fill(0).map((r,i)=> <tr key={i}>{columns.map((v,j) =><td key={j}><Skeleton /></td> )}</tr> ) :
            data.map((r,i)=> <tr key={i}>
                {columns.map((v,j) =>{ 
                var val = r[v.key] || null; 
                var { path, key} = v.route || {};
                return <td key={j}>{v.component ? v.component(val,r,v.key) : 
                    (path && key ? <Link to={{ pathname: path + (r[key] || ''), state: r }} >{val}</Link> : val )}</td> 
                }) } </tr>)}
      </tbody>
    </table>
    <div className="pt-3 d-flex justify-content-between">
      <div>
        show {size} from {total} entries
      </div>  
      { total > size &&
            <ReactPaginate pageCount={ Math.ceil(total/ size) } onPageChange={({selected}) =>  setPage(selected+1)}
                containerClassName="pagination"
                pageClassName="page-item"
                previousClassName="page-item"
                nextClassName="page-item"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeClassName="active"
                breakLinkClassName="page-link"
            />
        }
    </div>
    </div>
}

export function SearchField(props){
    return <label className="search-field">
        Search
        <span>
            <input type="search" {...props} />
            <i className="fa fa-search"/>       
        </span>
    </label>
}

