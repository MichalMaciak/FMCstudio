<script lang="ts">

    import { Text } from '@threlte/extras'
    import * as THR from '@threlte/core';
    import * as Three from 'three';
   

    let stduio1 = 'Studio 1 - 4m2'
    let stduio2 = 'Studio 2 - 25m2'
    let stduio3 = 'Studio 3 - 50m2'

    let studioColor 

     
    const onStudio1 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (studioColor != "red") {
      studioColor = "red"   
    }}

    const onStudio1leave = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (studioColor != "black") {
      studioColor = "black"   
    }}

</script>


<THR.Mesh
  position = {{x:1, y:2.5, z: 0.3}}
  geometry = {new Three.PlaneGeometry(6,3.5)}
  material = {new Three.MeshStandardMaterial({
    color: "white"
  })}
  receiveShadow
    
>
    <Text text={stduio1} 
        position = {{x:-2, y:1.3, z: 0.3}}
        fontSize = {0.5}
        color = {studioColor}
        interactive on:pointerenter={onStudio1} on:pointerleave={onStudio1leave}
    />

    

    <Text text={stduio2} 
        position = {{x:-2, y:0.4, z: 0.3}}
        fontSize = {0.5}
        color = {"black"}
    />

    <Text text={stduio3} 
        position = {{x:-2, y:-0.5, z: 0.3}}
        fontSize = {0.5}
        color = {"black"}
    />

</THR.Mesh>
