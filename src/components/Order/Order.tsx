import React from "react";
import clsx from "clsx";
import cls from "./Order.module.scss";
import { IAsteroid } from "@/type/asteroids";
import Link from "next/link";

interface OrderProps {
    className?: string;
    order: IAsteroid[];
}

export default function Order(props: OrderProps) {
    const { className = "", order } = props;

    return (
        <aside className={clsx(cls.order, [className])}>
            <div className={cls.orderInfo}>
                <p className={cls.orderName}>Корзина</p>
                <p className={cls.orderCount}>астероидов: {order.length}</p>
            </div>

            <Link
                href={"/order"}
                className={clsx(cls.orderBtn, {
                    [cls.disable]: order.length === 0,
                })}
            >
                Отправить
            </Link>
        </aside>
    );
}
