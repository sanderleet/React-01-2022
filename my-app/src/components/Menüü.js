import { Link } from 'react-router-dom';


function Menüü () {
    return (<div>
        <Link to="/">
        <button className='menyy-nupp'>AVALEHELE</button>
        </Link>
        <Link to="/ostukorv">
        <button className='menyy-nupp'>OSTUKORVI</button>
        </Link>

        <Link to="/pakiautomaadid">
        <button className='menyy-nupp'>PAKIAUTOMAADID</button>
        </Link>

        <Link to="/tegelased">
        <button className='menyy-nupp'>TEGELASED</button>
        </Link>

        <Link to="/autod">
        <button className='menyy-nupp'>AUTOD</button>
        </Link>

        <Link to="/admin">
        <button className='menyy-nupp'>ADMIN</button>
        </Link>


    </div>)
}

export default Menüü;