<script>
    import * as THR from '@threlte/core';
    import { onMount, onDestroy } from 'svelte';
    import { tick } from 'svelte/internal';
    import { writable } from 'svelte/store';

    const xCam = writable(-7);
    const yCam = writable(4);
    const zCam = writable(10);
    const farCam = writable(25)
    const maxAzimuthAngleCam = writable(-0.5)
    const maxPolarAngleCam = writable(1.4)
    const minAzimuthAngleCam = writable(-1.4)
    const minPolarAngleCam = writable(1)
    const targetCamX = writable(0)
    const targetCamY = writable(2)
    const targetCamZ = writable(5)
    const enableZoomCam = writable(false) 

    let updateCAM
    
    onMount(() => {
        const mediaQueryMobile = window.matchMedia('(max-width: 768px)');

        updateCAM = () => {
        xCam.set(mediaQueryMobile.matches ? 20: -7);
        yCam.set(mediaQueryMobile.matches ? 2 : 3);
        zCam.set(mediaQueryMobile.matches ? 8: 10);
        farCam.set(mediaQueryMobile.matches ? 35 : 25);
        targetCamX.set(mediaQueryMobile.matches ? 2 : 0);
        targetCamY.set(mediaQueryMobile.matches ? 2 : 2);
        targetCamZ.set(mediaQueryMobile.matches ? 5 : 5);
        maxAzimuthAngleCam.set(mediaQueryMobile.matches ? 0.2 : -0.5);
        minAzimuthAngleCam.set(mediaQueryMobile.matches ? -2 : -1.4);
        enableZoomCam.set(mediaQueryMobile.matches ? true : false);
        }
        
        updateCAM();
        window.addEventListener('resize', updateCAM());
    });

    onDestroy(() => {
        window.removeEventListener('resize', updateCAM());
    });




</script>


<THR.PerspectiveCamera 
  fov={25} 
  position={{ x: $xCam, y:$yCam, z: $zCam}}
  lookAt={{}}
  far = {$farCam}
>
<THR.OrbitControls 
    enableDamping 
    target = {{x:$targetCamX, y:$targetCamY, z:$targetCamZ}}
    enablePan = {false}
    enableZoom = {false}
   
    maxAzimuthAngle = {$maxAzimuthAngleCam}
    maxPolarAngle = {$maxPolarAngleCam}
    minAzimuthAngle = {$minAzimuthAngleCam}
    minPolarAngle = {$minPolarAngleCam}
  
    
  />
</THR.PerspectiveCamera>
