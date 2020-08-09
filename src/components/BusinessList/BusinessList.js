import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

/*
The point of the <BusinessList /> component is to simulate what a returned list of businesses would look like in Ravenous (after querying the Yelp API, for example). To help this simulation, <BusinessList /> will make use of the <Business /> component repeatedly. 
*/

class BusinessList extends React.Component {
    render() {
        return (
            <div class="BusinessList">
                {
                    this.props.businesses.map( business => {
                        return <Business business={business}/>
                    })
                }
            </div>
        )
    } // fin render()

} // fin class BusinessList extends ...

export default BusinessList;