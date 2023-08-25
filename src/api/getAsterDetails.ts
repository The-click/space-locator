import { IAsteroidData } from "@/type/asteroids";

export const getAsterDetails = async (id: string) => {
    try {
        const response = await fetch(
            `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );

        if (response.status === 200) {
            return response.json() as Promise<IAsteroidData>;
        }
        return null;
    } catch (e) {
        console.log("Error", e);
    }
};
