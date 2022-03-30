import { Link } from 'react-router-dom';


function AdminHome() {
    
    return (
        <div style={{'textAlign': 'center'}}>
            
            
            <Link to="/admin/addProduct">
                <button >Lisa uus toode</button>
            </Link>
              
{/*             <Link to="/admin/editProduct">
                <button >Muuda/kustuta</button>
            </Link> */}

            <Link to="/admin/viewProduct">
                <button >Vaata ladu</button>
            </Link>

            <Link to="/admin/registreeri">
                <button >Lisa uus Kasutaja</button>
            </Link>

            </div>);

}

export default AdminHome;