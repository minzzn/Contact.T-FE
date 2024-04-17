import { atom } from "recoil";

export const IconsState = atom({
    key: 'icon',
    default: {
        chatList: true,
        peopleList: false,
        setProfile: false,
        house: false
    }
});