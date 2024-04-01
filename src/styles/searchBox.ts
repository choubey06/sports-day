import styled from "styled-components";

export const SearchContainer = styled.div({
    display: "flex",
    alignItems: "center",
    width: "30%",
    border: "1px solid black",
    marginLeft: "auto",
});

export const TextArea = styled.textarea({
    outline: "none",
    width: "100%",
    height: "24px",
    resize: "none",
    border: 0,
    lineHeight: "24px",
});

export const SearchAction = styled.div({
    justifyContent: "center",
    flexDirection: "row",
    width: "24px",
    height: "24px",
    margin: "0px 8px",
});
