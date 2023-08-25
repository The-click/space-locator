import React from "react";
import clsx from "clsx";
import cls from "./CloseApproachCard.module.scss";
import { formatDateShow } from "@/help/formatDate";
import { formatNumber } from "@/help/formatNumber";
import SpeedImg from "@/assets/img/speed.png";
import OrbitImg from "@/assets/img/orbit.png";
import Image from "next/image";

interface CloseApproachCardProps {
    className?: string;
    date: string;
    distance: string;
    speed: string;
    orbit: string;
}

export default function CloseApproachCard(props: CloseApproachCardProps) {
    const { className = "", date, distance, speed, orbit } = props;

    return (
        <div className={clsx(cls.approach, [className])}>
            <p className={cls.approachDate}>{formatDateShow(date)}</p>
            <p className={cls.approachDist}>
                {formatNumber(distance) + " лунных орбит"}
            </p>
            <div className={cls.approachFooter}>
                <p className={clsx(cls.approachSpeed, cls.approachIndicator)}>
                    <Image src={SpeedImg} alt="speed" />
                    {formatNumber(speed) + " км/с"}
                </p>
                <p className={clsx(cls.approachOrbit, cls.approachIndicator)}>
                    <Image src={OrbitImg} alt="orbit" />
                    {orbit}
                </p>
            </div>
        </div>
    );
}
