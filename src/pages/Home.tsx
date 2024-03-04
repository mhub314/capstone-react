import Background from '../assets/images/107653.jpg'
// import imageToAdd from '../assets/image/img2.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='border-solid border-2 border-orange-400 p-8 mb-10 text-xl bg-amber-200 bg-opacity-70 text-amber-700 rounded'>Song Log Empire</h3>
          {/* <img src={imageToAdd} alt='img3'/> */}
        </div>
    </div>
  )
}

export default Home