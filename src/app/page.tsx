"use client";
import {
    useCallback,
    useEffect,
    useState,
    MutableRefObject,
    useRef,
    useContext,
} from "react";
import { notFound } from "next/navigation";
import cls from "./page.module.scss";
import { clsx } from "clsx";
import { getNeoWsByDate } from "../api/getNeoWs";
import { Distantion, IAsteroid, IAsteroidData } from "@/type/asteroids";
import { formatDateYMD } from "@/help/formatDate";
import { convertToAster } from "@/help/convertToAster";
import { AsteroidCard } from "@/components/AsteroidCard/AsteroidCard";
import Button, { ThemeButton } from "@/ui/Buttton/Button";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { AsteroidContext } from "@/store/AsteroidContext";
import TitlePage from "@/ui/TitlePage/TitlePage";
import Loader from "@/components/Loader/Loader";
import Order from "@/components/Order/Order";

export default function Aramagedon() {
    const [allAster, setAllAster] = useState<IAsteroid[]>([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const { order, changeOrder, changeTypeDist, typeDist } =
        useContext(AsteroidContext);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const onScrollEnd = () => {
        if (isFetching) return;
        fetchAsteroids();
    };
    useInfiniteScroll({ callback: onScrollEnd, triggerRef });

    useEffect(() => {
        if (isError) {
            notFound();
        }
    }, [isError]);

    const fetchAsteroids = useCallback(async () => {
        setIsFetching(true);
        const date = formatDateYMD(currentDate);
        const asteroids = await getNeoWsByDate(date);
        if (!asteroids) {
            setIsFetching(false);
            setIsError(true);
            return;
        }
        const rawAstData = asteroids.near_earth_objects[date];

        if (rawAstData) {
            addAsteroids(rawAstData, date);
        }
        setCurrentDate(new Date(currentDate.getTime() + 86400000));
        setIsFetching(false);
    }, [currentDate]);

    const addAsteroids = useCallback(
        (rawAstData: IAsteroidData[], date?: string) => {
            const asteroids = convertToAster(rawAstData, date);
            setAllAster((prev) => [...prev, ...asteroids]);
        },
        []
    );

    const addInOrder = useCallback(
        (aster: IAsteroid) => {
            let newOrder;
            aster.inOrder = !aster.inOrder;
            const newAllAster = allAster.map((el) =>
                el.id === aster.id ? aster : el
            );
            if (aster.inOrder) {
                newOrder = [...order, aster];
            } else {
                newOrder = order.filter((el) => el.id !== aster.id);
            }
            setAllAster(newAllAster);
            changeOrder(newOrder);
        },
        [allAster, order]
    );

    return (
        <div className={cls.main}>
            <section className={cls.info}>
                <TitlePage
                    text="Ближайшие подлеты астероидов"
                    className={cls.infoHeader}
                />
                <div className={clsx(cls.switchDist, cls.infoHeader)}>
                    <Button
                        className={clsx(cls.btnSwitch, {
                            [cls.active]: typeDist === Distantion.KM,
                        })}
                        onClick={() => changeTypeDist(Distantion.KM)}
                        theme={ThemeButton.CLEAR}
                    >
                        в километрах
                    </Button>
                    |
                    <Button
                        className={clsx(cls.btnSwitch, {
                            [cls.active]: typeDist === Distantion.LUNAR,
                        })}
                        onClick={() => changeTypeDist(Distantion.LUNAR)}
                        theme={ThemeButton.CLEAR}
                    >
                        в лунных орбитах
                    </Button>
                </div>
                <ul className={cls.listAster}>
                    {allAster.map((aster, index) => (
                        <li className={cls.itemAster} key={aster.id}>
                            <AsteroidCard
                                addInOrder={addInOrder}
                                aster={aster}
                                typeDist={typeDist}
                            />
                        </li>
                    ))}
                </ul>
                {isFetching && <Loader />}
                <div ref={triggerRef}></div>
            </section>
            <Order order={order} />
        </div>
    );
}
