"use client";

import { AsteroidStore } from "@/store/AsteroidContext";

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return <AsteroidStore>{children}</AsteroidStore>;
}
