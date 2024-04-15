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
        <nav className='drop-shadow-2xl shadow-2xl font-light flex items-center justify-between flex-wrap bg-neutral-900 p-5'>
            <div className='flex items-center flex-shrink-0 text-neutral-100 mr-6'>
                <Link to='/' className='hover:text-neutral-500 font-serif ml-5 font-bold text-xl tracking-tight'>Your Song Log</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-4 py-4 text-neutral-100 rounded border-neutral-100 border-solid border-2 hover:text-neutral-500 hover:border-neutral-500'>
                    <i className='fa-solid fa-caret-down'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                {
                            !auth.currentUser ?

                            <Button className='border-solid border-2 border-neutral-100 p-3 m-5 bg-neutral-900 hover:bg-neutral-300 rounded justify-center'>
                                <div>
                                    <Link to="/" onClick={ () => { signInOnClick() }} className=" font-serif flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-neutral-100 hover:text-neutral-900 font-bold">
                                        Sign In
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='border-solid border-2 border-neutral-100 p-3 m-5 bg-neutral-900 hover:bg-neutral-300 rounded justify-center'>
                                <div>
                                    <Link to="/" onClick={ () => { signOutOnClick() }} className=" font-serif flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-neutral-100 hover:text-neutral-900 font-bold">
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    <Button className='border-solid border-2 border-neutral-100 p-3 m-5 bg-neutral-900 hover:bg-neutral-300 rounded justify-center'>
                        <div>
                            <Link to='/' onClick={ clicked} className=" font-serif flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-neutral-100 hover:text-neutral-900 font-bold">
                                Home
                            </Link>
                        </div>

                    </Button>
                    {/* <Button className='border-solid border-2 border-neutral-100 p-3 m-5 bg-neutral-900 hover:bg-neutral-300 rounded justify-center'>
                        <div>
                            <Link to='/about' onClick={ clicked} className="flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-neutral-100 hover:text-neutral-900 font-bold">
                                About
                            </Link>
                        </div>

                    </Button> */}
                    <Button className='border-solid border-2 border-neutral-100 p-3 m-5 bg-neutral-900 hover:bg-neutral-300 rounded justify-center'>
                        <div>
                            <Link to='/folkdashboard' onClick={ clicked} className=" font-serif flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-neutral-100 hover:text-neutral-900 font-bold">
                                Folk Log
                            </Link>
                        </div>

                    </Button>
                    <Button className='border-solid border-2 border-neutral-100 p-3 m-5 bg-neutral-900 hover:bg-neutral-300 rounded justify-center'>
                        <div>
                            <Link to='/rockdashboard' onClick={ clicked} className=" font-serif flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-neutral-100 hover:text-neutral-900 font-bold">
                                Rock Log
                            </Link>
                        </div>

                    </Button>
                    <Button className='border-solid border-2 border-neutral-100 p-3 m-5 bg-neutral-900 hover:bg-neutral-300 rounded justify-center'>
                        <div>
                            <Link to='/rhythmdashboard' onClick={ clicked} className=" font-serif flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-neutral-100 hover:text-neutral-900 font-bold">
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

