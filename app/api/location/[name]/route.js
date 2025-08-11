import { getLocationNames } from "../utils/location";


export const GET = async (request , { params }) => {
  const locationName = params?.name;
  if (!locationName) {
    return Response.json(
      { error: "Location name is required" },
      { status: 400 }
    );
  }
  const locationData = getLocationNames(locationName);
  return Response.json(locationData);
};
