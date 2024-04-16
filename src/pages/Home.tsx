import backgroundImage from "../assets/images_1/cheering-crowd-at-a-concert--805394354-59e62cadb501e80011bbb996.jpg"

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ backgroundImage })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='font-serif p-8 mb-16 text-5xl font-bold text-neutral-900 rounded'>Compose, Collaborate, Conquer: Your Songwriting Oasis</h3>
        </div>
    </div>
  )
}

export default Home
