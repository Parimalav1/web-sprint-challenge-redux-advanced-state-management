import React from 'react';
import { connect } from 'react-redux';

const Smurfs = (props) => {

    return (
        <div>
            <div className='smurfs'>
                <h2><span role="img">😈 {props.name} 😈</span></h2>
                <p>Age: {props.age}<br /></p>
                <p>Height: {props.height}<br /></p>
            </div>
        </div>
    )
};

export default connect(
    null, {}
)(Smurfs);