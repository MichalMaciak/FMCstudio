<script lang="ts">
    import * as THR from '@threlte/core';
    import type Three from 'three';
    import { onMount, onDestroy } from 'svelte';
    import { useGltf, HTML, Float } from '@threlte/extras'; 
    import { derived } from 'svelte/store';
    import { writable } from 'svelte/store';
    import { tweened } from 'svelte/motion';

    const { gltf } = useGltf('/3d/TV.gltf', {
    useDraco: true
    })

    
    onMount(async () => {
        const TVGeometry = derived(gltf, (gltf) => {
        if (!gltf) return
        return (gltf.nodes.Scene as Three.Mesh)
        })
    });


    onDestroy(async () => {
        const TVGeometry = derived(gltf, (gltf) => {
        if (!gltf) return
        return (gltf.nodes.Scene as Three.Mesh)
        })
    });

  

 
</script>

<div class="relative">
    <div class="h-screen w-full absolute -top-24">
        <THR.Canvas> 

            <THR.PerspectiveCamera 
            position={{ x:0, y: -0.8, z: 8 }}
            rotation = {{y: 0.2}}
            fov={25} 
            near={1}
            far={30}
            >

            </THR.PerspectiveCamera>

            <THR.DirectionalLight 
                position={{ y: 2, z: 2 }} 
                intensity={0.3}
                   
            />

            {#if $gltf}
            <THR.Object3DInstance object={$gltf.nodes['tv']}
            scale = {{x:1.75, y: 1.75, z: 2 }}
            />
            <THR.Object3DInstance object={$gltf.nodes['Screen']}
            scale = {{x:1.75, y: 1.75, z: 2 }}
            />
            {/if}

            <HTML
                position = {{y:0.33}}
                scale = {0.19}
                transform = {true}
                >
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QgQLNkSt7ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </HTML>
            
                
        </THR.Canvas> 
    </div>
    
</div>
