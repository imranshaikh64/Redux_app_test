import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/action";


class CountryDropDown extends React.Component {
    render() {
        const { users, error } = this.props.users;
        if (error !== "") { alert("could not fetch data");}
        return (
            <>
                <select className="CountryDropDown" aria-label="countries" data-test="Countrydropdown" >
                    {users.map(country => <option key={country.name.official}>{country.name.common}</option>)}
                </select>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    error: state.error
})

export default connect(mapStateToProps, { getUsers })(CountryDropDown);
