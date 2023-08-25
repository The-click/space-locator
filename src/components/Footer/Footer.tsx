import React from "react";
import cls from "./Footer.module.scss";

interface FooterProps {
    className?: string;
}

export default function Footer(props: FooterProps) {
    const { className = "" } = props;

    return <div className={cls.footer}>© Все права и планета защищены</div>;
}
