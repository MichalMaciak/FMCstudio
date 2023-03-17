<script lang="ts">
  import { useGltf } from '@threlte/extras'; 
  import { derived } from 'svelte/store';
  import * as THR from '@threlte/core';
  import type Three from 'three';
  import { onMount, onDestroy } from 'svelte'

  const { gltf } = useGltf('/3d/scena.gltf', {
  useDraco: true
  })

  onMount(async () => {
	const logoGeometry = derived(gltf, (gltf) => {
    if (!gltf) return
      return (gltf.nodes.STUDIO as Three.Mesh).geometry
    })
  });

  onDestroy(async () => {
	const logoGeometry = derived(gltf, (gltf) => {
    if (!gltf) return
      return (gltf.nodes.STUDIO as Three.Mesh).geometry
    })
  });
</script>


{#if $gltf}

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['FMC']} 
  scale = {0.8}
  castShadow
  receiveShadow
  position = {{x:1.5, y:0.2, z:2.5}}
  />

    <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['krata']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['krata2']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['krata3']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['kabel01']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['kabel02']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['kabel03']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['kabel04']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['camera']} 
  scale = {1.2}
  castShadow
  position = {{x:0, y:0, z:-3}}

  />
  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['camera1']} 
  scale = {1.2}
  castShadow
  position = {{x:4, y:3, z:9}}
  />

 
  
{/if}
