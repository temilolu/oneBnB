import React, {Component} from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Cities from './Cities';


class Landing extends Component{
    render(){
         return(
             <div>
                <Nav />
                <Banner />
                <Cities />
             </div>
         );
     }
}

export default Landing;
