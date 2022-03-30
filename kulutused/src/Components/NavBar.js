

import { Link } from "react-router-dom";

function NavBar() {

    return <div>
        <Link to="/">
            <button>Overview</button>
        </Link>

        <Link to="/addExpense">
            <button>Add Expense</button>
        </Link>

        <Link to="/history">
            <button>History</button>
        </Link>

         </div>
}

export default NavBar;