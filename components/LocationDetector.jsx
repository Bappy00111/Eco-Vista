'use client';

import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import {  useEffect } from 'react';
import { useState } from 'react';
const LocationDetector = () => {
    const [loading, setLoading] = useState(false);

    const searchParams = useSearchParams()
    const router = useRouter();

    // useEffect(() => {
    //     setLoading(true);
    //     const params = new URLSearchParams(searchParams)

    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             params.set('latitude', position.coords.latitude);
    //             params.set('longitude', position.coords.longitude);
    //             setLoading(false);
    //             router.push(`/current?${params.toString()}`);
    //         })
    //     }


    // }, [searchParams, router]);

    useEffect(() => {
  setLoading(true);
  const params = new URLSearchParams(searchParams?.toString());

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      params.set('latitude', position.coords.latitude);
      params.set('longitude', position.coords.longitude);
      setLoading(false);
      router.push(`/current?${params.toString()}`);
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [router,searchParams]); // বা []


    console.log("Search Params:", searchParams);


    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
            {
                loading && (
                    <>
                        <Image
                            src="/network.gif"
                            alt="Loading..."
                            height={500}
                            width={500}
                            className="border rounded-md my-4" />
                        <p className="text-4xl text-center">Detecting Location...</p>
                    </>
                )
            }
        </div>
    );




}
export default LocationDetector;


// 'use client'
// import { useState, useEffect } from 'react';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import Image from 'next/image';

// const LocationDetector = () => {
//     const [loading, setLoading] = useState(false);

//     const searchParams = useSearchParams();
//     const pathName = usePathname();
//     const router = useRouter();

//     useEffect(() => {
//         setLoading(true);
//         const params = new URLSearchParams(searchParams);

//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 params.set('latitude', position.coords.latitude);
//                 params.set('longitude', position.coords.longitude);
//                 setLoading(false);
//                 router.push(`/current?${params.toString()}`);
//             })
//         }

//     }, [pathName, searchParams]);

//     return (
//         <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
//             {
//                 loading && (
//                     <>
//                         <Image
//                             src="/network.gif"
//                             alt="Loading..."
//                             height={500}
//                             width={500}
//                             className="border rounded-md my-4" />
//                         <p className="text-4xl text-center">Detecting Location...</p>
//                     </>
//                 )
//             }
//         </div>
//     )
// }

// export default LocationDetector