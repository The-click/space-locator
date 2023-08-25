import React, { ButtonHTMLAttributes, ReactNode, memo } from "react";
import classNames from "clsx";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    BACKGROUND = "background",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean;
    children?: ReactNode;
}

export default function Button(props: ButtonProps) {
    const {
        className,
        children,
        theme = ThemeButton.BACKGROUND,
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.button, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
}
