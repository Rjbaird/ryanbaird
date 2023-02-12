import { createSignal, onCleanup, onMount } from "solid-js";

interface HobbiesOption {
    text: string;
    active: boolean;
    link: string;
}

const hobbiesOptions = [
    {
        text: "trying out new web development tools like astro, solid.js and tailwind css",
        active: true,
        link: "",
    },
    {
        text: "exercising with volumn cycles",
        active: true,
        link: "",
    },
    {
        text: "reading one piece",
        active: true,
        link: "",
    },
    {
        text: "playing fire emblem engage",
        active: true,
        link: "",
    },
];

const getHobbies = (hobbiesOptions: HobbiesOption[]) => {
    const active = hobbiesOptions.filter((option) => option.active);
    return active[Math.floor(Math.random() * hobbiesOptions.length)].text;
};

export function Hobbies() {
    const [subhobby, setHobby] = createSignal(hobbiesOptions[0].text);
    onMount(() => {
        const firstHobby = getHobbies(hobbiesOptions);
        setHobby(firstHobby);
    });

    const timer = setInterval(() => {
        const newHobby = getHobbies(hobbiesOptions);
        setHobby(newHobby);
    }, 5000);
    onCleanup(() => clearInterval(timer));

    return <span class="text-sm lowercase text-orange-400">{subhobby()}</span>;
}
