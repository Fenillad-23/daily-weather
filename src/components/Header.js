import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div className="container-fluid header">
            <h6 > Daily Weather</h6>
            <p ><FontAwesomeIcon icon={faLocation}/> London</p>
            <input type="text" placeholder="Enter city" name="city" className="form-control-md " />
        </div>
    )
}
export default Header;