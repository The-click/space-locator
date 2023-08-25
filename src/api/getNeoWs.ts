import { IResponseAsteroid } from "@/type/asteroids";

export const getNeoWsByDate = async (date: string) => {
    try {
        const response = await fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&detailed=false&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );

        if (response.status === 200) {
            return response.json() as Promise<IResponseAsteroid>;
        }
        return null;
    } catch (e) {
        console.log("Error", e);
    }
};
