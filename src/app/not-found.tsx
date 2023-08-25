import TitlePage from "@/ui/TitlePage/TitlePage";
import cls from "./page.module.scss";

export default async function NotFound() {
    return (
        <div className={cls.main}>
            <section className={cls.info}>
                <TitlePage
                    text="Ошибка: Найти астероиды не удалось!"
                    className={cls.infoHeader}
                />
            </section>
        </div>
    );
}
