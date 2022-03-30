import { Link } from 'react-router-dom';


function Admin() {





    function muudaToode() {

    }

    return (
    <div>
        
        
        <Link to="/admin/lisa">
            <button className='menyy-nupp'>Lisa uus toode</button>
        </Link>

        
        
        <Link to="/admin/tooted">
            <button className='menyy-nupp'>Muuda/kustuta</button>
        </Link>
        

    </div>
    )
} export default Admin;