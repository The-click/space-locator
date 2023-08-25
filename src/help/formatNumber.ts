export const formatNumber = (num: string | number) => {
    return Math.round(Number(num)).toLocaleString("ru");
};
