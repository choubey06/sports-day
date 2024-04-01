import React from "react";
import EventCard from "./EventCard";
import { EventsGroupContainer, EventsGroupTitle, EventCardsContainer } from "../../styles/events";
import { IEventsGroup } from "./types";

const EventsGroup = ({ title, eventList = [], handleEventSelection }: IEventsGroup) => {
    return (
        <EventsGroupContainer>
            <EventsGroupTitle>{title}</EventsGroupTitle>
            <EventCardsContainer>
                {eventList.map((event) => (
                    <EventCard
                        key={`${event.event_name}-${event.selected}`}
                        eventData={event}
                        handleSelect={handleEventSelection}
                    />
                ))}
            </EventCardsContainer>
        </EventsGroupContainer>
    );
};

export default EventsGroup;
