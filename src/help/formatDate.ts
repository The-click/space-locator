const addPrefix = (num: number | string) => {
    num = String(num);
    if (num.length > 1) {
        return num;
    } else {
        return "0" + num;
    }
};

export const formatDateYMD = (date: Date) => {
    return `${date.getFullYear()}-${addPrefix(date.getMonth() + 1)}-${addPrefix(
        date.getDate()
    )}`;
};

export const formatDateShow = (date: string) => {
    const dateSplit = date.split("-");

    const month = [
        "янв",
        "фев",
        "март",
        "апр",
        "май",
        "июнь",
        "июль",
        "авг",
        "сент",
        "окт",
        "нояб",
        "дек",
    ];

    return `${dateSplit[2]} ${month[Number(dateSplit[1]) - 1]} ${dateSplit[0]}`;
};
