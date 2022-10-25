import React, { Component } from 'react'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

//components


class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Layout></Layout>
            </React.Fragment>
        );
    }
}
 
export default Home;