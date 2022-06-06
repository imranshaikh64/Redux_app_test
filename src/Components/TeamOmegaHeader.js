import React from "react";
import {PropTypes} from 'prop-types';

class TeamOmegaHeader extends React.Component{
    render(){
        const {value}= this.props;
        return(
            <>
             <h1 className="Header" data-test="TeamOmegaHeader">{value}</h1>
            </>
        );
    }
}

TeamOmegaHeader.propTypes = {
    value: PropTypes.string
}

export default TeamOmegaHeader;