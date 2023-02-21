<script lang="ts">
    import { spring } from 'svelte/motion';
    import * as THR from '@threlte/core';
    import * as Three from 'three' 
    import { useGltf } from '@threlte/extras'; 
    import { derived } from 'svelte/store';
    import { onMount, onDestroy } from 'svelte'



    const { gltf } = useGltf('/3d/test.gltf', {
    useDraco: true
    })

    onMount(async () => {
        const logoGeometry = derived(gltf, (gltf) => {
        if (!gltf) return
        return (gltf.nodes.Scene as Three.Mesh).geometry
        })
    });

    onDestroy(async () => {
        const logoGeometry = derived(gltf, (gltf) => {
        if (!gltf) return
        return (gltf.nodes.Scene as Three.Mesh).geometry
        })
    });

    const colorLight = new Three.Color( "rgb(204, 240, 255)" ) 
</script>

<THR.AmbientLight color={colorLight} intensity={1} />

<THR.DirectionalLight 
dispose = {true}
color = {colorLight} 
intensity={2}
position={{ x: -3, y: 4, z: 5 }} 
target={{ x: 2 }}
shadow = {{
    mapSize: [1024, 1024],
    camera: {left: -15, right: 25, top: 15, bottom: -5, near: 0.1, far: 30},
    radius: 1.5,
    bias: 0.0001
}} 

/>



<THR.PerspectiveCamera 
fov={25} 
position={{ x: -7, y:4, z: 10}}
lookAt={{}}
far = {150}
>
<THR.OrbitControls 
    enableDamping      
/>
</THR.PerspectiveCamera>
  
 
{#if $gltf}

<THR.Object3DInstance 
dispose = {true}
object = {$gltf.nodes['Textured_mesh_2']} 
scale = {0.8}
castShadow
receiveShadow
position = {{x:2, y:0.2, z:3}}
/>

{/if}
