import React, { useCallback } from "react";
import { formatTime } from "../../helpers/time";
import {
    EventCardContainer,
    CardIcon,
    CardDetails,
    CardTitle,
    CardItem,
    CardActionButton,
} from "../../styles/events";
import { IEventCard } from "./types";

const EventCard = ({ eventData, handleSelect }: IEventCard) => {
    const getIcon = useCallback(
        () => (eventData?.event_category ? eventData.event_category[0] : ""),
        [eventData?.event_category]
    );

    const onSelect = () => handleSelect(eventData, eventData?.selected);
    const duration = `${formatTime(eventData?.start_time)} - ${formatTime(eventData?.end_time)}`;

    return (
        <EventCardContainer usegrayscale={eventData?.overlapping}>
            <CardIcon>{getIcon()}</CardIcon>
            <CardDetails>
                <CardTitle>{eventData?.event_name}</CardTitle>
                <CardItem>{`(${eventData?.event_category})`}</CardItem>
                <CardItem>{duration}</CardItem>
                <CardActionButton
                    onClick={onSelect}
                    isSelected={eventData?.selected}
                    disabled={eventData?.overlapping}
                >
                    {eventData?.selected ? "Remove" : "Select"}
                </CardActionButton>
            </CardDetails>
        </EventCardContainer>
    );
};

export default EventCard;
