import { IResponseAsteroid } from "@/type/asteroids";

export const getNeoWsByLink = async (src: string) => {
    try {
        const response = await fetch(src);

        if (response.status === 200) {
            return response.json() as Promise<IResponseAsteroid>;
        }

        return null;
    } catch (e) {
        console.log("Error", e);
    }
};
