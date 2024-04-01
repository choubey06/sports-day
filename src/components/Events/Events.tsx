import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import EventsGroup from "./EventsGroup";
import { Container, EventsContainer, Title } from "../../styles/events";
import { getEvents } from "../../helpers/getEvents";
import {
    formatEventData,
    getSelectedEvents,
    selectEvent,
    removeEvent,
} from "../../helpers/handleEvents";
import { MAX_EVENT_SELECTION } from "../../constants/events";
import { IEventData } from "./types";

const Events = () => {
    const [events, setEvents] = useState<IEventData[]>([]);
    const [formattedEvents, setFormattedEvents] = useState({});
    const [selectedEvents, setSelectedEvents] = useState({});
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const setEventsData = async () => {
            const eventsData = await getEvents();
            setEvents(eventsData);
            setFormattedEvents(formatEventData(eventsData));
            const selectedEventsFromStorage = getSelectedEvents();
            if (selectedEventsFromStorage)
                setSelectedEvents(formatEventData(selectedEventsFromStorage, true));
        };
        setEventsData();
    }, []);

    useEffect(() => {
        setFormattedEvents(formatEventData(events));
    }, [events, selectedEvents]);

    console.log(showToast);

    const handleSearch = async (searchText: string) => {
        const updatedEvents = await getEvents(searchText);
        setFormattedEvents(formatEventData(updatedEvents || []));
    };

    const handleEventSelection = (selectedEvent: IEventData, remove?: boolean) => {
        if (remove) {
            const updatedEvents = removeEvent(selectedEvent);
            setSelectedEvents(formatEventData(updatedEvents, true));
        } else {
            if (getSelectedEvents()?.length === MAX_EVENT_SELECTION) return setShowToast(true);
            const updatedEvents = selectEvent(selectedEvent);
            setSelectedEvents(formatEventData(updatedEvents, true));
        }
    };

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
            </EventsContainer>
            <EventsContainer noLeftBorder={true}>
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
        </Container>
    );
};

export default Events;
