import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import { smurfActions } from '../store/actions'

const SmurfsList = (props) => {
    useEffect(() => {
        console.log('Calling smurfActoins()')
        props.smurfActions();
    }, []);

    return (
        <div>
            {props.isLoading && <h3>Loading data...</h3>}
            {
                props.error && props.error.length>0 && <p>ERROR: {props.error}</p>
            }
            {
                props.smurfsList.map(x => (
                    <div className='smurfsList'>
                        <Smurfs key={x.id} {...x} />
                    </div>
                ))
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        smurfsList: state.res,
        error: state.error,
        isLoading: state.isLoading
    }
};

export default connect(
    mapStateToProps, {smurfActions}
)(SmurfsList);