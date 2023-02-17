<script lang="ts">
  import * as THR from '@threlte/core';
  import * as Three from 'three';

  const videoPW = document.createElement('video');
  videoPW.src ='/video/PW.mp4#t=5';
  videoPW.poster ='/img/tlo.jpg'
  videoPW.controls = true;
  videoPW.muted = false;
  videoPW.height = 240; // in px
  videoPW.width = 320; // in px */

  const VideoPolendWeekly = new Three.VideoTexture( videoPW ) 

  const videoCheda = document.createElement('video');
  videoCheda.src ='/video/cheda.mp4#t=13';
  videoCheda.poster ='/img/tlo.jpg'
  videoCheda.controls = true;
  videoCheda.muted = false;
  videoCheda.height = 240; // in px
  videoCheda.width = 320; // in px */

  const VideoCheda = new Three.VideoTexture( videoCheda ) 

  const videoKolek = document.createElement('video');
  videoKolek.src ='/video/kolek.mp4#t=5';
  videoKolek.poster ='/img/tlo.jpg'
  videoKolek.controls = true;
  videoKolek.muted = false;
  videoKolek.height = 240; // in px
  videoKolek.width = 320; // in px */

  const VideoKolek = new Three.VideoTexture( videoKolek ) 

  const videoTomczyk = document.createElement('video');
  videoTomczyk.src ='/video/tomczyk.mp4#t=8';
  videoTomczyk.poster ='/img/tlo.jpg'
  videoTomczyk.controls = true;
  videoTomczyk.muted = false;
  videoTomczyk.height = 240; // in px
  videoTomczyk.width = 320; // in px */

  const VideoTomczyk = new Three.VideoTexture( videoTomczyk ) 

  const videoWojciechowski = document.createElement('video');
  videoWojciechowski.src ='/video/wojciechowski.mp4#t=9';
  videoWojciechowski.poster ='/img/tlo.jpg'
  videoWojciechowski.controls = true;
  videoWojciechowski.muted = false;
  videoWojciechowski.height = 240; // in px
  videoWojciechowski.width = 320; // in px */

  const VideoWojciechowski = new Three.VideoTexture( videoWojciechowski ) 

  const videoZiobrowski = document.createElement('video');
  videoZiobrowski.src ='/video/ziobrowski.mp4#t=11';
  videoZiobrowski.poster ='/img/tlo.jpg'
  videoZiobrowski.controls = true;
  videoZiobrowski.muted = false;
  videoZiobrowski.height = 240; // in px
  videoZiobrowski.width = 320; // in px */

  const VideoZiobrowski = new Three.VideoTexture( videoZiobrowski ) 


  const onPlayPW = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (videoPW.paused) {
    videoPW.play();    
  }
  else {
    videoPW.pause();;
  }}

  const onPlayCheda = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (videoCheda.paused) {
    videoCheda.play();    
  }
  else {
    videoCheda.pause();;
  }}

  const onPlayKolek = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (videoKolek.paused) {
    videoKolek.play();    
  }
  else {
    videoKolek.pause();;
  }}

  const onPlayTomczyk = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (videoTomczyk.paused) {
    videoTomczyk.play();    
  }
  else {
    videoTomczyk.pause();;
  }}

  const onPlayWojciehcowski = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (videoWojciechowski.paused) {
    videoWojciechowski.play();    
  }
  else {
    videoWojciechowski.pause();;
  }}

  const onPlayZiobrowski = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (videoZiobrowski.paused) {
    videoZiobrowski.play();    
  }
  else {
    videoZiobrowski.pause();;
  }}

  const width = 2.50;
  const height = 1.50;
  const intensity = 5;
  const rectLight = new Three.RectAreaLight( 0xfcfbf5, intensity,  width, height );
  rectLight.position.set( 7.8, 1.6, 2.8 );
  rectLight.lookAt( 5, 1.6, 2.8 );

  const rectLight1 = new Three.RectAreaLight( 0xfcfbf5, intensity,  width, height );
  rectLight1.position.set( 7.8, 1.6, 5.46 );
  rectLight1.lookAt( 5, 1.6, 5.46 );

  const rectLight2 = new Three.RectAreaLight( 0xfcfbf5, intensity,  width, height );
  rectLight2.position.set( 7.8, 1.6, 8.14 );
  rectLight2.lookAt( 5, 1.6, 8.14 );
  
</script>




<THR.Mesh
  dispose
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
    
  interactive on:click={onPlayPW}
/>

<THR.Three type={rectLight} />

<THR.Mesh
  dispose
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoCheda
  })}
  interactive on:click={onPlayCheda}
/>

<THR.Three type={rectLight1} />

<THR.Mesh
  dispose
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 8.10}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoKolek
  })}
  interactive on:click={onPlayKolek}
/>

<THR.Three type={rectLight2} />

<THR.Mesh
  dispose
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoTomczyk
  })}
  interactive on:click={onPlayTomczyk}
/>
<THR.Mesh
  dispose
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoWojciechowski
  })}
  interactive on:click={onPlayWojciehcowski}
/>
<THR.Mesh
  dispose
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 8.10}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoZiobrowski
  })}
  interactive on:click={onPlayZiobrowski}
/>
