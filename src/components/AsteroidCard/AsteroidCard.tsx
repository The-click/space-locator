import React, { useCallback } from "react";
import { clsx } from "clsx";
import cls from "./AsteroidCard.module.scss";
import { Distantion, IAsteroid } from "@/type/asteroids";
import { formatNumber } from "@/help/formatNumber";
import { formatDateShow } from "@/help/formatDate";
import Image from "next/image";
import AsteroidMinImg from "@/assets/img/asterMin.png";
import AsteroidMaxImg from "@/assets/img/asterMax.png";
import ExclamationImg from "@/assets/img/⚠.svg";

import Link from "next/link";
import Button, { ThemeButton } from "@/ui/Buttton/Button";

interface AsteroidCardProps {
    aster: IAsteroid;
    typeDist: Distantion;
    addInOrder?: (aster: IAsteroid) => void;
}

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { addInOrder, aster, typeDist } = props;

    const onclickHandler = useCallback(() => {
        addInOrder?.(aster);
    }, [aster, addInOrder]);

    return (
        <div className={cls.aster}>
            <p className={cls.asterDate}>{formatDateShow(aster.date)}</p>
            <div className={cls.asterInfo}>
                <p className={cls.asterDistance}>
                    {" "}
                    {typeDist === Distantion.KM
                        ? formatNumber(aster.distantion.km) + " км"
                        : formatNumber(aster.distantion.lunar) +
                          " лунных орбит"}
                </p>
                <Image
                    src={aster.diameter > 100 ? AsteroidMaxImg : AsteroidMinImg}
                    alt="asteroid"
                />

                <div className={cls.asterAbout}>
                    <Link
                        href={`/asteroids/${aster.id}`}
                        className={cls.asterName}
                    >
                        {aster.name.replace(/[()]/g, "")}
                    </Link>
                    <p className={cls.asterDiameter}>
                        Ø {formatNumber(aster.diameter)} м
                    </p>
                </div>
            </div>
            <div className={cls.asterFooter}>
                {addInOrder && (
                    <Button
                        className={clsx(cls.asterOrder, {
                            [cls.inOrder]: aster.inOrder,
                        })}
                        theme={ThemeButton.BACKGROUND}
                        onClick={onclickHandler}
                    >
                        {aster.inOrder ? "в корзине" : "заказать"}
                    </Button>
                )}
                {aster.danger && (
                    <p className={cls.danger}>
                        <Image src={ExclamationImg} alt="Exclamation point" />
                        Опасен
                    </p>
                )}
            </div>
        </div>
    );
};
