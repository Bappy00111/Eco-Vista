import { getLocationData } from "./utils/location";


export const GET = async () => {
    const loacation = getLocationData();

    return Response.json(loacation)
}