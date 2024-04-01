import { getItem, setItem } from "./storage";
import { IEventData } from "../components/Events/types";
import { getInterval, isOverlapping } from "./time";
import { SELECTED_EVENTS, SELECTED_EVENTS_INTERVALS } from "../constants/localStorageKeys";

export const formatEventData = (eventList: IEventData[], selected?: boolean) => {
    const eventData = {};
    const selectedEventsIntervals = getItem(SELECTED_EVENTS_INTERVALS, []) as [number, number][];
    eventList.forEach((event) => {
        const category = event?.event_category;
        const updatedEvent = { ...event, selected };
        if (!selected)
            updatedEvent.overlapping = isOverlapping(
                event.start_time,
                event.end_time,
                selectedEventsIntervals
            );
        if (eventData[category]) eventData[category].push(updatedEvent);
        else eventData[category] = [updatedEvent];
    });
    return eventData;
};

export const getSelectedEvents = () => {
    return getItem(SELECTED_EVENTS, []) as IEventData[];
};

export const selectEvent = (event: IEventData) => {
    const selectedEvents = getSelectedEvents();
    const updatedEvents = [...selectedEvents, event];
    setItem(SELECTED_EVENTS, updatedEvents);
    const selectedEventsIntervals = getItem(SELECTED_EVENTS_INTERVALS, []) as [number, number][];
    const interval = getInterval(event.start_time, event.end_time) as [number, number];
    selectedEventsIntervals.push(interval);
    setItem(SELECTED_EVENTS_INTERVALS, selectedEventsIntervals);
    return updatedEvents;
};

export const removeEvent = (event: IEventData) => {
    const selectedEvents = getSelectedEvents();
    const index = selectedEvents?.findIndex((cEvent) => cEvent?.id === event?.id);
    selectedEvents?.splice(index, 1);
    setItem(SELECTED_EVENTS, selectedEvents);
    const selectedEventsIntervals = getItem(SELECTED_EVENTS_INTERVALS, []) as [number, number][];
    const interval = getInterval(event.start_time, event.end_time) as [number, number];
    const intervalIndex = selectedEventsIntervals?.findIndex((cInterval) => cInterval === interval);
    selectedEventsIntervals?.splice(intervalIndex, 1);
    setItem(SELECTED_EVENTS_INTERVALS, selectedEventsIntervals);
    return selectedEvents;
};
