<script lang="ts">
    interface HobbiesOption {
        text: string;
        active: boolean;
    }

    let hobbyOptions = [
        {
            text: "loving zod",
            active: true,
        },
        {
            text: "exercising with volumn cycles",
            active: false,
        },
        {
            text: "rebuilding my shonen jump api",
            active: true,
        },
        {
            text: "finally playing the Breath of the Wild",
            active: true,
        },
    ].filter((option) => option.active) as HobbiesOption[];

    let index = 0;
    let ms = 5000;
    const setIndex = () =>
        (index = Math.floor(Math.random() * hobbyOptions.length));

    let clear: NodeJS.Timeout;
    $: {
        clearInterval(clear);
        clear = setInterval(setIndex, ms);
    }
</script>

<span class="text-sm lowercase text-orange-400">{hobbyOptions[index].text}</span
>
