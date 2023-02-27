<script>
    export let images = [
        {url: "/img/studio_s1.jpg"},
        {url: "/img/studio_s2.jpg"},
        {url: "/img/studio_m1.jpg"},
        {url: "/img/studio_m2.jpg"},
        {url: "/img/studio_s1.jpg"},
        {url: "/img/studio_m2.jpg"}
    ]
</script>




<div class="flex flex-nowrap w-full shrink-0 overflow-x-auto snap-x snap-mandatory touch-pan-x pt-8">
    {#each images as { url }, i}
        <img class="snap-center snap-always w-2/5 h-auto object-cover min-w-450 shrink-0" src={url} alt="Studio średnie-{i + 1}"/>
    {/each}   
</div>
