import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const DetailPage = () => {
    const { id } = useParams();
    const [storedata, setStoreData] = useState({ results: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [activetab, setActiveTab] = useState('overview');
    const my_id = import.meta.env.VITE_ID;

    useEffect(() => {
        const handleData = async () => {
            try {
                const getData = await fetch(
                    `https://api.unsplash.com/photos/${id}?client_id=${my_id}`
                );
                if (!getData.ok) {
                    throw new Error("Something went wrong...");
                }
                const response = await getData.json();
                setStoreData(response);
            } catch (err) {
                console.log(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        handleData();
    }, [id]);
    const HandleTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>
            {isLoading ? (
                <div>
                    Loading.....
                </div>
            ) : (
                <div>
                    {storedata ? (
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundImage: `url(${storedata.urls?.small})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    opacity: "0.3",
                                    zIndex: "-1",
                                }}
                            ></div>
                            <div className="animate-pulse bg-gray-400 p-[10px]">
                                <h1 className="text-center text-4xl text-green-800 font-serif font-bold">WELCOME TO MY DETAIL PAGE</h1>
                            </div>
                            <div>
                                <div className="mt-2">
                                    <ul className="inline-flex gap-x-5 cursor-pointer">
                                        <li id="list" className={activetab === 'overview'} onClick={() => HandleTab('overview')}>OverView</li>
                                        <li id="list" className={activetab === 'review'} onClick={() => HandleTab('review')}>Reviews</li>
                                        <li id="list" className={activetab === 'additional'} onClick={() => HandleTab('additional')}>Additional Information</li>
                                    </ul>
                                </div>
                                <div className="p-[20px]">
                                    {activetab === 'overview' && (
                                        <div className="flex space-x-20">
                                            <img src={storedata.urls.small} alt="image not match"
                                                className="h-[400px] w-[300px] rounded-3xl shadow-xl shadow-gray-600" />
                                            <div className="">
                                                <h1><span>ID: </span>{storedata.id}</h1>
                                                <div className="flex space-x-4">
                                                    {/* Raw Image */}
                                                    <div className="text-center">
                                                        <img
                                                            src={storedata.urls.raw}
                                                            alt="Raw image"
                                                            className="h-[120px] w-[120px] rounded-lg shadow-lg shadow-gray-800 hover:scale-110 duration-500"
                                                        />
                                                        <p className="mt-2 text-sm text-gray-600">Raw</p>
                                                    </div>

                                                    {/* Full Image */}
                                                    <div className="text-center">
                                                        <img
                                                            src={storedata.urls.full}
                                                            alt="Full image"
                                                            className="h-[120px] w-[120px] rounded-full border-4 border-blue-500 shadow-lg shadow-gray-800 hover:scale-110 duration-500"
                                                        />
                                                        <p className="mt-2 text-sm text-gray-600">Full</p>
                                                    </div>

                                                    {/* Regular Image */}
                                                    <div className="text-center">
                                                        <img
                                                            src={storedata.urls.regular}
                                                            alt="Regular image"
                                                            className="h-[120px] w-[120px] rounded-xl shadow-lg shadow-gray-800 hover:scale-110 duration-500"
                                                        />
                                                        <p className="mt-2 text-sm text-gray-600">Regular</p>
                                                    </div>

                                                    {/* Small Image */}
                                                    <div className="text-center">
                                                        <img
                                                            src={storedata.urls.small}
                                                            alt="Small image"
                                                            className="h-[100px] w-[100px] rounded-md shadow-lg shadow-gray-800 hover:scale-110 duration-500"
                                                        />
                                                        <p className="mt-2 text-sm text-gray-600">Small</p>
                                                    </div>

                                                    {/* Thumbnail Image */}
                                                    <div className="text-center">
                                                        <img
                                                            src={storedata.urls.thumb}
                                                            alt="Thumbnail image"
                                                            className="h-[80px] w-[80px] rounded-full shadow-lg shadow-gray-800 hover:scale-110 duration-500"
                                                        />
                                                        <p className="mt-2 text-sm text-gray-600">Thumb</p>
                                                    </div>

                                                    {/* Small S3 Image */}
                                                    <div className="text-center">
                                                        <img
                                                            src={storedata.urls.small_s3}
                                                            alt="Small S3 image"
                                                            className="h-[100px] w-[100px] rounded-lg shadow-lg shadow-gray-800 hover:scale-110 duration-500"
                                                        />
                                                        <p className="mt-2 text-sm text-gray-600">Small S3</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                    {activetab === 'review' && (
                                        <div>
                                            review
                                        </div>
                                    )}
                                    {activetab === 'additional' && (
                                        <div>
                                            add
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                        : (
                            <div>
                                Data Not Match
                            </div>
                        )}
                </div>
            )}
        </div>
    )
}