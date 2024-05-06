import { atom } from "recoil";
import img1 from "../assets/userimg_01.png"
import img2 from "../assets/userimg_02.png"
import defaultImg from "../assets/profile.png"

export const UsersState = atom({
    key: 'users',
    default: [    
        {
            name: '한민정',
            img: img1,
            profileImg: defaultImg
        },
    ]
})