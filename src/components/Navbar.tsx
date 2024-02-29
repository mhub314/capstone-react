import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='drop-shadow-xl font-light  flex items-center justify-between flex-wrap bg-orange-200 p-5'>
            <div className='flex items-center flex-shrink-0 text-rose-700 mr-6'>
                <Link to='/' className='hover:text-orange-300 ml-5 font-bold text-xl tracking-tight'>Your Song Log</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-4 py-4 text-orange-600 rounded border-orange-600 border-solid border-2 hover:text-orange-300 hover:border-orange-300'>
                    <i className='fa-solid fa-caret-down'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                {
                            !auth.currentUser ?

                            <Button className='border-solid border-2 border-orange-400 p-3 m-5 bg-orange-300 hover:bg-orange-300 rounded justify-center'>
                                <div>
                                    <Link to="/" onClick={ () => { signInOnClick() }} className="flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-rose-800 hover:text-white font-bold">
                                        Sign In
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='border-solid border-2 border-orange-400 p-3 m-5 bg-orange-300 hover:bg-orange-300 rounded justify-center'>
                                <div>
                                    <Link to="/" onClick={ () => { signOutOnClick() }} className="flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-rose-800 hover:text-white font-bold">
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    <Button className='border-solid border-2 border-orange-400 p-1 m-5 rounded bg-orange-300 justify-center'>
                        <div>
                            <Link to='/' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-rose-800 font-bold hover:text-white mr-3'>
                                Home
                            </Link>
                        </div>

                    </Button>
                    {/* <Button className='border-solid border-2 border-orange-400 p-1 m-5 rounded bg-orange-300 justify-center'>
                        <div>
                            <Link to='/about' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-rose-800 font-bold hover:text-white mr-3'>
                                About
                            </Link>
                        </div>

                    </Button> */}
                    <Button className='border-solid border-2 border-orange-400 p-1 m-5 rounded bg-orange-300 justify-center'>
                        <div>
                            <Link to='/folkdashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-rose-800 font-bold hover:text-white mr-3'>
                                Folk Log
                            </Link>
                        </div>

                    </Button>
                    <Button className='border-solid border-2 border-orange-400 p-1 m-5 rounded bg-orange-300 justify-center'>
                        <div>
                            <Link to='/rockdashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-rose-800 font-bold hover:text-white mr-3'>
                                Rock Log
                            </Link>
                        </div>

                    </Button>
                    <Button className='border-solid border-2 border-orange-400 p-1 m-5 rounded bg-orange-300 justify-center'>
                        <div>
                            <Link to='/rhythmdashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-rose-800 font-bold hover:text-white mr-3'>
                                Rhythm & Blues Log
                            </Link>
                        </div>

                    </Button>
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar

