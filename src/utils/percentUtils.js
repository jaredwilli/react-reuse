
export const getWidthAsPercentOfTotalWidth = (percent, totalWidth) => {
    return parseInt(totalWidth * (percent / 100), 10);
};
