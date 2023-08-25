export interface IResponseAsteroid {
    element_count: number;
    links: { next: string; prev: string; self: string };
    near_earth_objects: { [date: string]: IAsteroidData[] };
}
export interface IEstimatedDiameter {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}
export interface ICloseApproach {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: {
        kilometers_per_second: string;
        kilometers_per_hour: string;
        miles_per_hour: string;
    };
    miss_distance: {
        astronomical: string;
        lunar: string;
        kilometers: string;
        miles: string;
    };
    orbiting_body: string;
}
export interface IAsteroidData {
    links: { self: string };
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: {
        kilometers: IEstimatedDiameter;
        meters: IEstimatedDiameter;
        miles: IEstimatedDiameter;
        feet: IEstimatedDiameter;
    };
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: ICloseApproach[];
    is_sentry_object: boolean;
}

export interface IAsteroid {
    id: string;
    date: string;
    distantion: { km: string; lunar: string };
    name: string;
    diameter: number;
    danger: boolean;
    inOrder?: boolean;
}

export enum Distantion {
    KM = "km",
    LUNAR = "lunar",
}
