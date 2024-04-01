import React, { useCallback, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import SearchBox from "../../components/SearchBox";
import Toast from "../../components/Toast";
import EventsGroup from "./EventsGroup";
import { Container, EventsContainer, Title } from "../../styles/events";
import { getEvents } from "../../helpers/getEvents";
import {
    formatEventData,
    getSelectedEvents,
    getNonSelectedEvents,
    selectEvent,
    removeEvent,
} from "../../helpers/handleEvents";
import { MAX_EVENT_SELECTION, MAX_EVENT_ERROR_MESSAGE } from "../../constants/events";
import { IEventData } from "./types";

const Events = () => {
    const [events, setEvents] = useState<IEventData[]>([]);
    const [formattedEvents, setFormattedEvents] = useState({});
    const [selectedEvents, setSelectedEvents] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const setEventsData = async () => {
            setIsLoading(true);
            const eventsData = await getEvents();
            setEvents(eventsData);
            setFormattedEvents(formatEventData(eventsData));
            const selectedEventsFromStorage = getSelectedEvents();
            if (selectedEventsFromStorage)
                setSelectedEvents(formatEventData(selectedEventsFromStorage, true));
            setIsLoading(false);
        };
        setEventsData();
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const nonSelectedEvents = getNonSelectedEvents(events);
        setFormattedEvents(formatEventData(nonSelectedEvents));
        setIsLoading(false);
    }, [events, selectedEvents]);

    console.log(showToast);

    const handleSearch = useCallback(async (searchText: string) => {
        setIsLoading(true);
        const updatedEvents = await getEvents(searchText);
        const nonSelectedEvents = getNonSelectedEvents(updatedEvents);
        setFormattedEvents(formatEventData(nonSelectedEvents || []));
        setIsLoading(false);
    }, []);

    const openToast = useCallback(() => {
        const closeToast = () => setTimeout(() => setShowToast(false), 4000);
        setShowToast(true);
        closeToast();
    }, []);

    const handleEventSelection = useCallback(
        (selectedEvent: IEventData, remove?: boolean) => {
            if (remove) {
                const updatedEvents = removeEvent(selectedEvent);
                setSelectedEvents(formatEventData(updatedEvents, true));
            } else {
                if (getSelectedEvents()?.length === MAX_EVENT_SELECTION) return openToast();
                const updatedEvents = selectEvent(selectedEvent);
                setSelectedEvents(formatEventData(updatedEvents, true));
            }
        },
        [openToast]
    );

    return (
        <Container>
            <EventsContainer>
                <Title>
                    All Events
                    <SearchBox onSearch={handleSearch} label="Search by event names..." />
                </Title>
                {Object.keys(formattedEvents).map((category) => (
                    <EventsGroup
                        key={category}
                        title={category}
                        eventList={formattedEvents[category]}
                        handleEventSelection={handleEventSelection}
                    />
                ))}
                {isLoading && <ThreeDots color="black" />}
            </EventsContainer>
            <EventsContainer noleftborder="true">
                <Title>Selected Events</Title>
                {Object.keys(selectedEvents).map((category) => (
                    <EventsGroup
                        key={`${category}-selected`}
                        title={category}
                        eventList={selectedEvents[category]}
                        handleEventSelection={handleEventSelection}
                    />
                ))}
            </EventsContainer>
            {showToast && <Toast message={MAX_EVENT_ERROR_MESSAGE} />}
        </Container>
    );
};

export default Events;
