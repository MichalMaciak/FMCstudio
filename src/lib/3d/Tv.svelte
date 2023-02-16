<script lang="ts">
  import * as THR from '@threlte/core';
  import * as Three from 'three';

  const videoPW = document.createElement('video');
    videoPW.src ='/video/Innovation.mp4';
    videoPW.poster ='/img/tlo.jpg'
    videoPW.controls = true;
    videoPW.muted = false;
    videoPW.height = 240; // in px
    videoPW.width = 320; // in px */


    const VideoPolendWeekly = new Three.VideoTexture( videoPW ) 

    const onPlay = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (videoPW.paused) {
      videoPW.play();    
    }
    else {
      videoPW.pause();;
    }
  }
</script>

<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
    
  interactive on:click={onPlay}
/>


<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
  interactive on:click={onPlay}
/>


<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 8.14}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
  interactive on:click={onPlay}
/>
<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
  interactive on:click={onPlay}
/>
<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
  interactive on:click={onPlay}
/>
<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 8.14}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
  interactive on:click={onPlay}
/>
