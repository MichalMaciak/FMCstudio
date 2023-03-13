<script lang="ts">
  import * as THR from '@threlte/core';
  import * as Three from 'three';

  const colorStudio = new Three.Color( 0x0A0A0A )

  let carpert = "/texture/fmc.png" 
  
  let carpertTexture = new Three.TextureLoader().load( carpert );  

  const geometry = new Three.PlaneGeometry(6.5, 3.5)
  const material = new Three.MeshStandardMaterial({ 
    map:carpertTexture,
    transparent: true,
    metalness: 0.7,
    roughness: 0.5,
  });

  const carpetFloor = new Three.Mesh( geometry, material );
  carpetFloor.scale.set(0.9, 0.9, 0.9)
  carpetFloor.position.set( 2, 0.2, 5.5 );
  carpetFloor.rotation.set(-Math.PI / 2, 0, -Math.PI / 5.5)
  carpetFloor.receiveShadow
  
</script>



<THR.Mesh
  dispose = {true}
  position = {{x:1.7, y:2.5, z: 0.1}}
  geometry = {new Three.BoxGeometry(12.5,5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio,
    roughness: 0.4,
    metalness: 0.2
  })}
  receiveShadow
  castShadow
/>

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:8.05, y:2.5, z: 6.2}}
  geometry = {new Three.BoxGeometry(12.5,5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio,
    roughness: 0.4,
    metalness: 0.2
  })}
  receiveShadow
  castShadow
/>

<THR.Mesh
  dispose = {true}
  rotation = {{x: -Math.PI / 2, }}
  position = {{x:1.84, y:0.04, z: 6.2}}
  geometry = {new Three.BoxGeometry(12.8,12.5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio,
    roughness: 0.4,
    metalness: 0.2
  })}
  receiveShadow
  castShadow
/>

<THR.DisposableObject dispose={true}>
  <THR.Three type={carpetFloor}/>
</THR.DisposableObject>
