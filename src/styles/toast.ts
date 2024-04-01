import styled from "styled-components";

export const ToastContainer = styled.div({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    bottom: 0,
    right: 0,
    width: "calc(50vw - 24px)",
    height: "60px",
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    paddingLeft: "24px",
});
