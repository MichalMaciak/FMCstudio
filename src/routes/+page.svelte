<svelte:head>
	<link rel="stylesheet" href='src/lib/style.css'>
</svelte:head>


<script>
	import Logo from '$lib/3d/Logo.svelte';
    import OpenTag from '$lib/OpenTag.svelte';
    import * as THR from '@threlte/core';
    import * as Three from 'three'

</script>


<section class="canvas-wrapper-logo">
	<THR.Canvas 
        shadows 
        rendererParameters = {{antialias: true}}
        shadowMapType = {Three.VSMShadowMap}
    >   
        <Logo/>
        
    </THR.Canvas>     
</section>

<section class="wrapper-OpenTag">
    <OpenTag /> 
</section>


<style>
    .canvas-wrapper-logo {
        position: relative;
		height: 100vh;
        width: 100vw;
    }

    .wrapper-OpenTag {
        position: fixed;
        width: 25%;
        bottom: 0;
        right: 0;
        z-index: 9999;
        background-color: aliceblue;
        padding: 10rem;
    }
    


</style>