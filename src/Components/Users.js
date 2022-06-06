import React from "react";
import { connect } from 'react-redux'
import { getUsers } from "../actions/action";
import TeamOmegaDropDown from "./TeamOmegaDropDown";
import TeamOmegaHeader from "./TeamOmegaHeader";
import CountryDropDown from "./CountryDropDown";


class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            region: "Africa",
        }
    }

    componentDidMount() {
        this.props.getUsers(this.state.region);
    }
    
    dropDownHandler= (region) => {
        this.props.getUsers(region);
    }


    render() {
        return (
            <>
                <div role="main" data-test="Main_Component">
                    <TeamOmegaHeader value="Dropdown App"/>
                    <div className="MainDiv">
                        <div className="FirstDropDown">
                            <span for="region">Choose Region </span>
                            <TeamOmegaDropDown handleChange={this.dropDownHandler}  />
                        </div>
                        <div className="SecondDropDown">
                            <span>Countries </span>
                            <CountryDropDown />
                        </div>
                    </div>
                </div>
                
            </>
        );
    }

}

 const mapStateToProps = (state) => ({
    // users: state.users, 
 })


export default connect(mapStateToProps, { getUsers })(Users);
