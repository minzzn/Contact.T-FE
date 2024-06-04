import { atom } from "recoil";

export const sseEventState = atom({
    key: 'sse',
    default: []
})