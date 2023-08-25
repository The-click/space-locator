import React from "react";
import clsx from "clsx";
import cls from "./page.module.scss";
import { getAsterDetails } from "@/api/getAsterDetails";
import Image from "next/image";
import AsteroidImg from "@/assets/img/asterMax.png";
import { formatNumber } from "@/help/formatNumber";
import CloseApproachCard from "./components/CloseApproachCard/CloseApproachCard";
import TitlePage from "@/ui/TitlePage/TitlePage";

interface AsterDetailsProps {
    params: { id: string };
}

export default async function AsterDetails(props: AsterDetailsProps) {
    const { params } = props;
    const response = await getAsterDetails(params.id);

    if (!response) {
        return (
            <div className={cls.main}>
                <section className={cls.asteroidInfo}>
                    <h3 className={clsx(cls.title, cls.infoHeader)}>
                        Астероид найти не удалось
                    </h3>
                </section>
            </div>
        );
    }
    return (
        <div className={cls.main}>
            <section className={cls.asteroid}>
                <div className={cls.asteroidInfo}>
                    <TitlePage
                        text={response.name.replace(/[()]/g, "")}
                        className={cls.infoHeader}
                    />
                    <Image src={AsteroidImg} alt="asteroid" />
                    <p className={cls.title}>
                        {"Ø " +
                            formatNumber(
                                response.estimated_diameter.meters
                                    .estimated_diameter_min
                            ) +
                            " м"}
                    </p>
                </div>
                <div className={cls.listApproach}>
                    {response?.close_approach_data.map((approach, index) => (
                        <CloseApproachCard
                            key={approach.close_approach_date_full}
                            date={approach.close_approach_date}
                            distance={approach.miss_distance.lunar}
                            speed={
                                approach.relative_velocity.kilometers_per_second
                            }
                            orbit={approach.orbiting_body}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
