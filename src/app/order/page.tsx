"use client";

import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import cls from "./page.module.scss";
import { AsteroidCard } from "@/components/AsteroidCard/AsteroidCard";
import { AsteroidContext } from "@/store/AsteroidContext";
import TitlePage from "@/ui/TitlePage/TitlePage";

interface OrderPageProps {}

export default function OrderPage(props: OrderPageProps) {
    const { order, changeOrder, typeDist } = useContext(AsteroidContext);

    useEffect(() => {
        return () => changeOrder([]);
    }, []);

    return (
        <div className={clsx(cls.orderPage)}>
            <TitlePage className={cls.title} text="Заказ отправлен!" />
            <ul className={cls.listAster}>
                {order.map((aster, index) => (
                    <li className={cls.itemAster} key={aster.id}>
                        <AsteroidCard aster={aster} typeDist={typeDist} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
