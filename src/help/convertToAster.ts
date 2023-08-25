import { IAsteroid, IAsteroidData } from "../type/asteroids";

export const convertToAster = (
    rawAsters: IAsteroidData[],
    date?: string
): IAsteroid[] => {
    return rawAsters.map((ast) => {
        const closeAppoarch =
            ast.close_approach_data.find(
                (el) => el.close_approach_date === date
            ) || ast.close_approach_data.pop();
        return {
            id: ast.id,
            date: closeAppoarch?.close_approach_date || "не определено",
            distantion: {
                km: closeAppoarch?.miss_distance.kilometers || "не определено",
                lunar: closeAppoarch?.miss_distance.lunar || "не определено",
            },
            name: ast.name,
            diameter: ast.estimated_diameter.meters.estimated_diameter_min,
            danger: ast.is_potentially_hazardous_asteroid,
        };
    });
};
