import React, { Fragment } from 'react';



const Buttontupodi = (props) => {     
          return (
            <Fragment>      
                <button type="button" class="btn btn-secondary btn-lg tupodibutonad">
                    <i className={props.fa}></i>
                    <h6>{props.h6}</h6>
                    <h5>{props.h5}</h5>
                </button>
            </Fragment>  
          );
      }  
export default Buttontupodi;