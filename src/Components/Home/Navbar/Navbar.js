
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  sticky-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Navbar</Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link class="nav-link active mr-5" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mr-5" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mr-5" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mr-5 text-white" to="/dashboard">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mr-5 text-white" to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mr-5 text-white" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;