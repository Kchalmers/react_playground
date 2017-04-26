import React from 'react';
import {connect} from 'react-redux';
import './home.css';
import Greeting from './greeting';

import {signin} from '../actions/index'

const Home = (props) => {
    console.log('auth: ', props);

    const {auth, user} = props;

    const displayGreeting = () => {
        if(auth){
            return <Greeting color={user.fav_color} name={user.name}/>
        }
        else {
            return <h2>Please click to sign in...</h2>
        }
    };

    return (
        <div className="home">
            <button onClick={() => {
                props.signin(!auth)
            }}>{auth ? 'Sign Out' : 'Sign In'}
            </button>
            {displayGreeting()}
        </div>
    )
};

function mapStateToProps(state) {
    return {
        auth: state.app.auth,
        user: state.app.user
    }
}

export default connect(mapStateToProps, {signin})(Home)