export interface IEventData {
    id: number;
    event_name: string;
    event_category: string;
    start_time: string;
    end_time: string;
    selected?: boolean;
    overlapping?: boolean;
}

export interface IEventsGroup {
    title: string;
    eventList: IEventData[];
    handleEventSelection: (event: IEventData, remove?: boolean) => void;
}

export interface IEventCard {
    eventData: IEventData;
    handleSelect: (event: IEventData, remove?: boolean) => void;
}
