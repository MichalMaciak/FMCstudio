<script lang="ts">

    import { Text } from '@threlte/extras'
    import * as THR from '@threlte/core';
    import * as Three from 'three';
    let value = 'Helow world'
</script>


<THR.Mesh
  position = {{x:1, y:2.5, z: 0.3}}
  geometry = {new Three.PlaneGeometry(6,3.5)}
  material = {new Three.MeshStandardMaterial({
    color: "white"
  })}
  receiveShadow
    
>
    <Text text={value} 
        position = {{x:-2, y:1, z: 0.3}}
        fontSize = {0.5}
        color = {"black"}
    />

</THR.Mesh>

   <!--  
     <HTML position={{ x: 2, y:1, z:4 }} 
        transform 
        occlude
        
        portal={document.body}
        zIndexRange = {[1, 8]}
        as = {"div"}
        eps = {0.01}
    >
        <h1>Hello World</h1>
        
    </HTML> -->
    

