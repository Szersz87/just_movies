import React from "react";

export default function SetItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
