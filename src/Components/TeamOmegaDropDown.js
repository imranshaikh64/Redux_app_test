import React from "react";
import data from "../Mock/Mock";
import PropTypes from 'prop-types';

class TeamOmegaDropDown extends React.Component {
    render() {
        const { handleChange } = this.props;
        return (
            <>
                <select className="regionDropDown"  data-test='RegionDropDown' onChange={(e)=>handleChange(e.target.value)}  aria-label="region">
                    {data.map(data => <option key={data.id} >{data.region}</option>)}
                </select>
            </>
        );
    }
}

TeamOmegaDropDown.propTypes = {
    handleChange: PropTypes.func,
}


export default TeamOmegaDropDown;