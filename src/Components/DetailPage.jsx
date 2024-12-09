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
                                    opacity: "0.5",
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
                                        <div className="flex space-x-10">
                                            <img src={storedata.urls.small} alt="image not match"
                                                className="h-[400px] w-[300px] rounded-3xl shadow-xl shadow-gray-600" />
                                            <div className="">
                                                <h1 className="mb-[15px] text-xl"><span className="font-serif font-semibold">ID: </span>{storedata.id}</h1>
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
                                                </div><hr className="mt-[15px] mb-[10px] border-2 border-gray-700" />
                                                <div className="flex gap-x-2">
                                                    <h1 className="text-md text-pretty"><span className="font-serif font-semibold">Created At: </span>{storedata.created_at}</h1>
                                                    <h1><span className="font-serif font-semibold">Updated At: </span>{storedata.updated_at}</h1>
                                                    <h1><span className="font-serif font-semibold">Promoted At: </span>{storedata.promoted_at}</h1>
                                                </div>
                                                <div>
                                                    <h2><span className="font-serif font-semibold">Height:</span> {storedata.height}</h2>
                                                    <h2><span className="font-serif font-semibold">Width:</span> {storedata.width}</h2>
                                                    <h2><span className="font-serif font-semibold">Color:</span> {storedata.color}</h2>
                                                    <h2><span className="font-serif font-semibold">Hash:</span> {storedata.blur_hash}</h2>
                                                    <hr className="mt-[15px] mb-[10px] border-2 border-gray-700" /><h1 className="font-serif font-semibold">Description: </h1>
                                                    <p>{storedata?.description ? storedata.description : storedata.alt_description}</p>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                    {activetab === 'review' && (
                                        <div>
                                            <h1 className="text-center text-3xl underline text-blue-900 font-bold">User Reviews</h1>
                                            <div>
                                                <h1 ><span className="font-bold">User ID: </span>{storedata.user.id}</h1>
                                                <h1><span className="font-bold">Name: </span>{storedata.user.name}</h1>
                                                <h1><span className="font-bold">UserName: </span>{storedata.user.username}</h1>
                                                <p><span className="font-bold">Bio: </span></p>{storedata.user.bio ? storedata.user.bio : "No Available"}
                                                <h1><span className="font-bold">Location: </span>{storedata.user.location}</h1>
                                            </div><hr />
                                            <div>
                                                <h1>Social Media Links:</h1>
                                                <ul>
                                                    <li><span className="font-bold">Self: </span>{storedata.links.self ? storedata.links.self : "not available"}</li>
                                                    <li><span className="font-bold">Photos: </span>{storedata.links.photos ? storedata.links.photos : "not available"}</li>
                                                    <li><span className="font-bold">HTML: </span>{storedata.links.html ? storedata.links.html : "not available"}</li>
                                                    <li><span className="font-bold">Likes: </span>{storedata.links.likes ? storedata.links.likes : "not available"}</li>
                                                    <li><span className="font-bold">Following: </span>{storedata.links.following ? storedata.links.following : "not available"}</li>
                                                    <li><span className="font-bold">Followers: </span>{storedata.links.followers ? storedata.links.followers : "not available"}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                    {activetab === 'additional' && (
                                        <div>
                                            <h1><span className="font-bold">Slug: </span>{storedata.slug}</h1>
                                            <h1 className="font-bold">Alternative Slugs:</h1>
                                            <ol>
                                               <h1><span className="font-semibold">en: </span>{storedata.alternative_slugs.en}</h1>
                                               <h1><span className="font-semibold">es: </span>{storedata.alternative_slugs.es}</h1>
                                               <h1><span className="font-semibold">js: </span>{storedata.alternative_slugs.ja}</h1>
                                               <h1><span className="font-semibold">fr: </span>{storedata.alternative_slugs.fr}</h1>
                                               <h1><span className="font-semibold">it: </span>{storedata.alternative_slugs.it}</h1>
                                               <h1><span className="font-semibold">ko: </span>{storedata.alternative_slugs.ko}</h1>
                                               <h1><span className="font-semibold">de: </span>{storedata.alternative_slugs.de}</h1>
                                               <h1><span className="font-semibold">pt: </span>{storedata.alternative_slugs.pt}</h1>
                                               
                                            </ol>
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