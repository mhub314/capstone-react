import Background from  "../assets/images/concert.jpg"

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className=' flex place-items-center h-screen'>
          <h3 className='font-serif p-8 mb-16 text-2xl bg-gray-900 bg-opacity-20 text-neutral-100 rounded'>Compose, Collaborate, Conquer: Your Songwriting Oasis</h3>
        </div>
    </div>
  )
}

export default Home
