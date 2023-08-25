import cls from "./Loader.module.scss";
import clsx from "clsx";

export default function Loader({ className }: { className?: string }) {
    return (
        <div className={cls.loaderWrap}>
            <span className={clsx(cls.loader, [className])}></span>
        </div>
    );
}
