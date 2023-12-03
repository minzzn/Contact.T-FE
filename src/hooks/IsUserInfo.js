import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const { persistAtom } = recoilPersist({
    key: "entry", // 고유한 키 값(변수이름)
    storage: localStorage,
});

export const isUserInfoAtom  = atom({
    key: 'entry',
    default: {},
    effects_UNSTABLE: [persistAtom],
});
