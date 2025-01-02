import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Header({city}) {
    return (
        <div className='container-fluid header'>
            <h6 className='ml-20 mt-3 mb-3'> Daily Weather</h6>
            <div className='d-flex'>
                <p className='mt-4   mb-3'><FontAwesomeIcon icon={faLocationDot} /> {city}</p>
                <div >
                    <input type='text' placeholder='Enter city' name='city' className='form-control-md mt-3 mb-3 ps-4' />
                </div>
            </div>
        </div>
    )
}
export default Header;