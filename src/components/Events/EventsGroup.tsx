import React from "react";
import EventCard from "./EventCard";
import { EventsGroupContainer, EventsGroupTitle, EventCardsContainer } from "../../styles/events";
import { IEventsGroup } from "./types";

const EventsGroup = ({ title, eventList = [], handleEventSelection }: IEventsGroup) => {
    return (
        <EventsGroupContainer data-testid="events-group">
            <EventsGroupTitle data-testid="events-group-title">{title}</EventsGroupTitle>
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
