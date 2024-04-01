import styled from "styled-components";

export const Container = styled.div({
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
});

interface IEventsContainere {
    noLeftBorder?: boolean;
}

export const EventsContainer = styled.div<IEventsContainere>(
    () => ({
        width: "50%",
        border: "2px solid black",
        padding: "4px",
    }),
    ({ noLeftBorder }) =>
        noLeftBorder && {
            borderLEft: "none",
        }
);

export const Title = styled.div({
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "12px",
});

export const EventsGroupContainer = styled.div({
    padding: "24 px 12px",
    border: "1px solid black",
    borderRadius: "2px",
    marginBottom: "24px",
});

export const EventsGroupTitle = styled.div({
    fontSize: "24px",
    fontWeight: "bold",
});

export const EventCardsContainer = styled.div({
    display: "flex",
    flexWrap: "wrap",
});

interface IEventCardContainer {
    useGrayscale?: boolean;
}

export const EventCardContainer = styled.div<IEventCardContainer>(
    () => ({
        display: "flex",
        alignItems: "center",
        backgroundColor: "#b5cfe8",
        width: "250px",
        height: "140px",
        borderRadius: "12px",
        margin: "8px",
    }),
    ({ useGrayscale }) =>
        useGrayscale && {
            filter: "grayscale(100%)",
        }
);

export const CardIcon = styled.div({
    fontSize: "50px",
    fontWeight: "bold",
});
export const CardDetails = styled.div({
    borderLeft: "thick solid black",
    fontSize: "20px",
    marginLeft: "12px",
    paddingLeft: "8px",
});
export const CardTitle = styled.div({
    fontSize: "24px",
    fontWeight: "bold",
});

export const CardItem = styled.div({
    fontSize: "24px",
});

interface ICardActionButton {
    isSelected?: boolean;
    disabled?: boolean;
}

export const CardActionButton = styled.button<ICardActionButton>(
    () => ({
        height: "30px",
        width: "90%",
        cursor: "pointer",
        borderRadius: "4px",
        backgroundColor: "#46891a",
        color: "white",
    }),
    ({ isSelected }) =>
        isSelected && {
            backgroundColor: "#e84747",
        },
    ({ disabled }) =>
        disabled && {
            cursor: "auto",
        }
);
