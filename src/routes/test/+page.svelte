<svelte:head>
	<link rel="stylesheet" href='src/lib/style.css'>
</svelte:head>


<script>
    import Test from '$lib/3d/Test.svelte';
    import * as THR from '@threlte/core';

   

</script>



<section class="canvas-wrapper-theatre">
   	<THR.Canvas>
         <Test/>  
    </THR.Canvas>     
</section>


<style>
    .canvas-wrapper-theatre {
        position: relative;
		height: 100vh;
        width: 100vw;
    }
</style>