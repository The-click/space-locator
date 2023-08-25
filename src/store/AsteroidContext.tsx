"use client";

import { createContext, useCallback, useState } from "react";
import { Distantion, IAsteroid } from "@/type/asteroids";

interface AsteroidContextProps {
    order: IAsteroid[];
    changeOrder: (value: IAsteroid[]) => void;
    typeDist: Distantion;
    changeTypeDist: (value: Distantion) => void;
}

export const AsteroidContext = createContext<AsteroidContextProps>({
    order: [],
    changeOrder: (value) => {},
    typeDist: Distantion.KM,
    changeTypeDist: (value) => {},
});

interface AsteroidStoreProps {
    children: React.ReactNode;
}

export function AsteroidStore({ children }: AsteroidStoreProps) {
    const [order, setOrder] = useState<IAsteroid[]>([]);
    const [typeDist, setTypeDist] = useState<Distantion>(Distantion.KM);

    const changeOrder = useCallback((newOrder: IAsteroid[]) => {
        setOrder(newOrder);
    }, []);
    const changeTypeDist = useCallback((newTypeDist: Distantion) => {
        setTypeDist(newTypeDist);
    }, []);

    return (
        <AsteroidContext.Provider
            value={{ order, changeOrder, typeDist, changeTypeDist }}
        >
            {children}
        </AsteroidContext.Provider>
    );
}
