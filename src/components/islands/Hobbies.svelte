<script lang="ts">
    interface HobbiesOption {
        text: string;
        active: boolean;
    }

    let hobbyOptions = [
        {
            text: "loving Koa.js",
            active: true,
        },
        {
            text: "doing yoga",
            active: true,
        },
        {
            text: "fighting an addiction to play another round of Vampire Survivors...",
            active: true,
        },
        {
            text: "scraping Shopify stores for fun and profit",
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
