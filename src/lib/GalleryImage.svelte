<script lang=ts>

    import { onMount } from 'svelte';
    import Img from '@zerodevx/svelte-img'
    import studioS1 from '$lib/img/studio_s1.jpg?run'
    import studioS2 from '$lib/img/studio_s2.jpg?run'
    import studioM1 from '$lib/img/studio_m1.jpg?run'
    import studioM2 from '$lib/img/studio_m1.jpg?run'
    import studioD1 from '$lib/img/studio_s1.jpg?run'
    import studioD2 from '$lib/img/studio_m1.jpg?run'

    let images = [
        {url: studioS1},
        {url: studioS2},
        {url: studioM1},
        {url: studioM2},
        {url: studioD1},
        {url: studioD2}
    ]
    
    let isDragging = false;
    let startX:Number;
    let scrollLeft:Number;
    let container:any;

    function handleMouseDown(event:any) {
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




<div class="flex flex-nowrap touch-pan-x pt-8 overflow-auto"
    on:mousedown={handleMouseDown}
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
    on:mouseleave={handleMouseUp}
    bind:this={container}
>

    {#each images as { url }, i}
        <Img class="w-screen h-full object-cover shrink-0" src={url} alt="Studio średnie-{i + 1}"/>
    {/each}   

</div>
