import React from "react";

export default function GetItem(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}