import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addnewSmurf } from '../store/actions'

const SmurfsForm = (props) => {
    const [newSmurf, setnewSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    });
    const [values, setValues] = useState();

    useEffect(() => {
        // call the action creator
        addnewSmurf();
    }, []);


    const handleChanges = (evt) => {
        evt.preventDefault();
        setnewSmurf({
            ...newSmurf, 
            [evt.target.name]: evt.target.value
        })
    };

    return (
        <div>
            <div>
                <h3 id='enter'>MAKE YOUR SMURF</h3>
                <div>
                    <input
                        className='input'
                        type="text"
                        name="name"
                        value={values}
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <input
                        className='input'
                        type='number'
                        name="age"
                        value={values}
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <input
                        className='input'
                        type="text"
                        name="height"
                        value={values}
                        onChange={handleChanges}
                    />
                </div>
                <button className='addBtn' onClick={() => props.addnewSmurf(newSmurf)}>
                    ADD A SMURF
          </button>
            </div>
        </div>

    );
};

export default connect(
    null,
    { addnewSmurf }
)(SmurfsForm);
