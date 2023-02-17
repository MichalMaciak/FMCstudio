<script lang="ts">
    import { useGltf } from '@threlte/extras'; 
    import { derived } from 'svelte/store';
    import * as THR from '@threlte/core';
    import type * as Three from 'three';

    const { gltf } = useGltf('/3d/scena.gltf', {
    useDraco: true
  })
	const logoGeometry = derived(gltf, (gltf) => {
		if (!gltf) return
		return (gltf.nodes.STUDIO as Three.Mesh).geometry
	})


</script>


{#if $gltf}

  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['FMC']} 
  scale = {0.8}
  castShadow
  receiveShadow
  position = {{x:-2, y:0.5, z:3}}
  />

  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['TV']} 
  scale = {1}
  />

  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['TV2']} 
  scale = {1}
  />

  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['krata']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['krata2']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['kabel01']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['kabel02']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['kabel03']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  dispose
  object = {$gltf.nodes['kabel04']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  
  
{/if}
