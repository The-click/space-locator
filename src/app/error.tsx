"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
    return <h1>Ошибка: {error.message}</h1>;
}
