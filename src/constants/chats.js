import userImage1 from "../assets/profile.png";
import userImage2 from "../assets/profile2.png";

const chats = [
    {
        id: "1",
        chatWithUser: "Andre",
        messages: [
            {
                isUser: false,
                text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
                userImage: userImage1,
            },
            {
                isUser: true,
                text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
                userImage: userImage2,
            },
            {
                isUser: false,
                text: "Thank you! That was very helpful!",
                userImage: userImage1,
            },
        ],
    },
    {
        id: "2",
        chatWithUser: "Mauro Felipe",
        messages: [
            {
                isUser: false,
                text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
                userImage: userImage2,
            },
            {
                isUser: true,
                text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
                userImage: userImage2,
            },
            {
                isUser: false,
                text: "Thank you! That was very helpful!",
                userImage: userImage2,
            },
        ],
    },
    {
        id: "3",
        chatWithUser: "John Pablo",
        messages: [
            {
                isUser: false,
                text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
                userImage: userImage2,
            },
            {
                isUser: true,
                text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
                userImage: userImage2,
            },
            {
                isUser: false,
                text: "Thank you! That was very helpful!",
                userImage: userImage2,
            },
        ],
    },
    {
        id: "4",
        chatWithUser: "Gustavo Nobre",
        messages: [
            {
                isUser: false,
                text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
                userImage: userImage2,
            },
            {
                isUser: true,
                text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
                userImage: userImage2,
            },
            {
                isUser: false,
                text: "Thank you! That was very helpful!",
                userImage: userImage2,
            },
        ],
    },
];

export default chats;
