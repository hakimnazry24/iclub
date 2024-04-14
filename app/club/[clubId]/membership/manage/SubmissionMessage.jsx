'use client'
import {useEffect, useState} from "react";


export default function SubmissionMessage({showPopup, Message,MessageType}) {
   const [alertType, setAlertType] = useState("stroke-info");
    useEffect(() => {
        switch (MessageType) {
            case "success":
                setAlertType("stroke-success");
                break;
            case "error":
                setAlertType("stroke-error");
                break;
            case "warning":
                setAlertType("stroke-warning");
                break;
            default:
                setAlertType("stroke-info");
        }
    }, [MessageType]);

    return (
        <div role="alert" className={` ${showPopup ? "alert show" : "alert"} m-5 w-fit z-50 absolute transition-all duration-200 ease-in-out `}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 className={` ${alertType} shrink-0 w-6 h-6`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{Message}</span>
        </div>
    )
}