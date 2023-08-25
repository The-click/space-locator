import React from "react";
import clsx from "clsx";
import cls from "./Header.module.scss";

interface HeaderProps {
    className?: string;
}

export default function Header(props: HeaderProps) {
    const { className = "" } = props;

    return (
        <header className={cls.header}>
            <aside className={cls.about}>
                <h1 className={cls.name}>ARMAGEDDON 2023</h1>
                <p className={cls.descr}>
                    ООО “Команда им. Б. Уиллиса”. <br />
                    Взрываем астероиды с 1998 года.
                </p>
            </aside>
        </header>
    );
}
