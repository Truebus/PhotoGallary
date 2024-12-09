export const Home=()=>{
    return(
        <div>
            <div className="p-[10px]  bg-gradient-to-tr from-red-200 to-pink-300"
            style={{backgroundImage:"url('https://img.freepik.com/premium-vector/man-is-taking-picture-with-camera-bird-flying-background_608297-34824.jpg')",zIndex: -1,
                backgroundRepeat: "no-repeat", backgroundSize: "cover",height:"450px",width:"100%",backgroundPosition:"50% 20%"
            }}>
                <div className="text-center relative top-[150px] text-4xl font-bold text-red-600 font-serif">
                    <h1>WelCome To My Photo Gallary</h1>
                </div>
                <div className="relative top-[200px] text-center flex items-center justify-center gap-x-2">
                    <button type="button" className="bg-gradient-to-tr from-red-500 to-yellow-400
                    font-serif font-bold p-1 rounded-md cursor-pointer hover:scale-110 300s ease-linear">Learn More</button>
                    <button type="button" className="bg-gradient-to-tr from-red-500 to-yellow-400
                    font-serif font-bold p-1 rounded-md cursor-pointer hover:scale-110 300s ease-linear">Join Us</button>
                </div>
            </div>
        </div>
    )
}