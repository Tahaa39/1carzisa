import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import './css/profile.css'

function Profile() {
    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();

    // Logout function
    const logOut = () => {
        try {
            auth.signOut();
            navigate('/home')            
        } catch (error) {
            toast.error(error.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <>
            <Navbar />
            <section className="profile">
                <div className="container">
                    <h1>Moj Nalog</h1>
                    <div className="profile-section">
                        <div className="section-1">
                            <div className="img-box">
                                <img src="https://www.autobum.ba/img/avatar.png" alt="" />
                            </div>
                            <h3>{user.displayName}</h3>
                            <h4>Kakanj</h4>
                            <ul>
                                <li><Link className='link active'>Moja vozila</Link></li>
                                <li><Link className='link'>Poruke</Link></li>
                                <li><Link className='link'>Spašeni artikli</Link></li>
                                <li><Link className='link'>Uredi profil</Link></li>
                                <li><Link to='/' className='link' onClick={logOut}>Odjavi se</Link></li>
                            </ul>
                        </div>
                        <div className="section-2"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile