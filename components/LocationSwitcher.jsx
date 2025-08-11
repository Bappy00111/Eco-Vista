
"use client";

import Image from "next/image";
import Link from "next/link";
import { getLocationLatLongList } from '@/lib/location-info';
import { useEffect, useState } from "react";


const LocationSwitcher = () => {
    const [showLocationList, setShowLocationList] = useState(false);
    const [locations, setLocations] = useState([]);

    console.log("Locations: ", locations);


    // useEffect(async () => {
    //     async function getLocationList() {
    //         const locationList = await getLocationLatLongList();
    //         setLocations(locationList);
    //     }

    //     getLocationList();

    // }, []);

    //     useEffect(() => {
    //     async function getLocationList() {
    //         const locationList = await getLocationLatLongList();
    //          console.log("Location List Data: ", locationList); // এখানে দেখাবে
    //         setLocations(locationList);
    //     }
    //     getLocationList();
    // }, []);

    //      console.log("Locations: ", locations);



    useEffect(() => {
        async function getLocationList() {
            const locationList = await getLocationLatLongList();
            console.log("Location List Data:", locationList);
            setLocations(locationList);
        }
        getLocationList();
    }, []);

    useEffect(() => {
        console.log("Locations state changed:", locations);
    }, [locations]);

    // console.log("Locations:", locations);


    return (
        <div className="relative">
            <button onClick={() => setShowLocationList(!showLocationList)}>
                <Image
                    className="size-9"
                    src="link.svg"
                    alt="link icon"
                    width={36}
                    height={36}
                />
            </button>
            {showLocationList && (
                <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
                    <ul
                        role="list"
                        className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                    >
                        {locations.map((info) => (
                            <li key={info.location}>
                                <Link
                                    href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}
                                >
                                    {info.location}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LocationSwitcher;
