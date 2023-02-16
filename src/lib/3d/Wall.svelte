<script lang="ts">
    import * as THR from '@threlte/core';
    import * as Three from 'three';

    const colorStudio = new Three.Color( 0x07214f )

    
</script>



<THR.Mesh
  position = {{x:1.7, y:2.5, z: 0.1}}
  geometry = {new Three.BoxGeometry(12.5,5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio
  })}
  receiveShadow
  castShadow
/>

<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:8.05, y:2.5, z: 6.2}}
  geometry = {new Three.BoxGeometry(12.5,5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio
  })}
  receiveShadow
  castShadow
/>

<THR.Mesh
  rotation = {{x: -Math.PI / 2, }}
  position = {{x:1.84, y:0.04, z: 6.2}}
  geometry = {new Three.BoxGeometry(12.8,12.5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio
  })}
  receiveShadow
  castShadow
/>
