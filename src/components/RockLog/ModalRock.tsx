
import RockLog from './RockLog'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const ModalRock = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div 
            onClick={ props.onClose } 
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-rose-950 bg-opacity-70'
        
        >
            <div
                className='w-3/4 fixed mt-28 z-1 bg-rose-200 shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-pink-900 p-2 rounded hover:bg-pink-700 text-white"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <RockLog id={props.id } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRock