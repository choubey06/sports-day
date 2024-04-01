import React from "react";
import { IToast } from "./types";
import { ToastContainer } from "../../styles/toast";

const Toast = ({ message }: IToast) => (
    <ToastContainer data-testid="toast-body">{message}</ToastContainer>
);

export default Toast;
