<script lang="ts">
  import { useGltf } from '@threlte/extras'; 
  import { derived } from 'svelte/store';
  import * as THR from '@threlte/core';
  import * as Three from 'three';
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
  
  let screen = "/img/tlo.jpg"
  let camScreen = new Three.TextureLoader().load( screen ); 
</script>


{#if $gltf}

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['FMC']} 
  scale = {0.8}
  castShadow
  receiveShadow
  position = {{x:2, y:0.2, z:3}}
  />

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['TV']} 
  scale = {1}
  />

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['TV2']} 
  scale = {1}
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
  scale = {1}
  castShadow
  />
  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['camera1']} 
  scale = {1}
  castShadow
  />

  <THR.Object3DInstance 
  dispose = {true}
  object = {$gltf.nodes['camera01_screen']} 
  scale = {1}
  receiveShadow
  
  />
  
  
{/if}
