export const formatTime = (dateString: string) => {
    const jsDate = new Date(dateString);
    return jsDate.toLocaleString([], { hour: "numeric", hour12: true }).toUpperCase();
};

export const getTime = (dateString: string) => {
    const jsDate = new Date(dateString);
    return jsDate.getTime();
};

export const getInterval: (startTime: string, endTime: string) => number[] = (
    startTime: string,
    endTime: string
) => {
    return [getTime(startTime), getTime(endTime)];
};

export const isOverlapping = (
    startTime: string,
    endTime: string,
    selectedEventsIntervals: [number, number][]
) => {
    const interval = getInterval(startTime, endTime);
    let result = false;
    for (let index = 0; index < selectedEventsIntervals.length; index++) {
        const start = selectedEventsIntervals[index][0];
        const end = selectedEventsIntervals[index][1];
        if (
            (interval[0] >= start && interval[1] <= end) ||
            (interval[0] > start && interval[0] < end) ||
            (interval[1] > start && interval[1] < end)
        ) {
            result = true;
            break;
        }
    }
    return result;
};
