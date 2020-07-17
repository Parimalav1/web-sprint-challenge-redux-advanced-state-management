import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import { smurfActions } from '../store/actions'

const SmurfsList = (props) => {

    useEffect(() => {
        console.log('Calling smurfActions()')
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
                    <div key={x.id} className='smurfsList'>
                        <Smurfs {...x} />
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