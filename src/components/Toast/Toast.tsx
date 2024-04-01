import React from "react";
import { IToast } from "./types";
import { ToastContainer } from "../../styles/toast";

const Toast = ({ message }: IToast) => <ToastContainer>{message}</ToastContainer>;

export default Toast;
