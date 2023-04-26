import { createSignal, onCleanup, onMount } from "solid-js";

interface HobbiesOption {
    text: string;
    active: boolean;
    link: string;
}

const hobbiesOptions = [
    {
        text: "loving zod",
        active: true,
        link: "",
    },
    {
        text: "exercising with volumn cycles",
        active: true,
        link: "",
    },
    {
        text: "rebuilding my shonen jump api",
        active: true,
        link: "",
    },
    {
        text: "playing the stanley parable",
        active: true,
        link: "",
    },
];

const getHobbies = (hobbiesOptions: HobbiesOption[]) => {
    const active = hobbiesOptions.filter((option) => option.active);
    return active[Math.floor(Math.random() * hobbiesOptions.length)].text;
};

export function Hobbies() {
    const [subhobby, setHobby] = createSignal("");
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
