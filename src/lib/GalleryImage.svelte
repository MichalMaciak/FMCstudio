<script lang=ts>
    export let images = [
        {url: "/img/studio_s1.jpg"},
        {url: "/img/studio_s2.jpg"},
        {url: "/img/studio_m1.jpg"},
        {url: "/img/studio_m2.jpg"},
        {url: "/img/studio_s1.jpg"},
        {url: "/img/studio_m2.jpg"}
    ]

    let isDragging = false;
    let startX:Number;
    let scrollLeft:Number;
    let container;

    function handleMouseDown(event) {
        if (!container) return;
        isDragging = true;
        startX = event.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.classList.add('cursor-grabbing');
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const debouncedMouseMove = debounce(handleMouseMove, 10);

    function handleMouseMove(event) {
        if (!isDragging || !container) return;
        event.preventDefault();
        const x = event.pageX - container.offsetLeft;
        const walk = (x - startX) * 3;
        container.scrollLeft = scrollLeft - walk;
    }

    function handleMouseUp() {
        isDragging = false;
        if (!container) return;
        container.classList.remove('cursor-grabbing');
        container.classList.add('cursor-grab');
    }

</script>




<div class="flex flex-nowrap w-full shrink-0 snap-mandatory touch-pan-x pt-8 overflow-hidden"
    on:mousedown={handleMouseDown}
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
    on:mouseleave={handleMouseUp}
    bind:this={container}
>

    {#each images as { url }, i}
        <img class="snap-always snap-center w-2/3 h-auto object-cover min-w-650 shrink-0" src={url} alt="Studio średnie-{i + 1}"/>
    {/each}   

</div>

<style>
    .cursor-grabbing {
        cursor: grabbing;
    }

    .cursor-grab {
        cursor: grab;
    }
</style>