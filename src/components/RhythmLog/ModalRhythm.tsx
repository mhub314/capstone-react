
import RhythmLog from './RhythmLog'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const ModalRhythm = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div 
            onClick={ props.onClose } 
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-blue-950 bg-opacity-70'
        
        >
            <div
                className='w-3/4 fixed mt-28 z-1 bg-slate-300 shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-blue-800 p-2 rounded hover:bg-blue-950 text-white"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <RhythmLog id={props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRhythm