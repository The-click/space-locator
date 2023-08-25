import React from "react";
import clsx from "clsx";
import cls from "./TitlePage.module.scss";

interface TitlePageProps {
    className?: string;
    text: string;
}

export default function TitlePage(props: TitlePageProps) {
    const { className = "", text } = props;

    return <h2 className={clsx(cls.title, [className])}>{text}</h2>;
}
