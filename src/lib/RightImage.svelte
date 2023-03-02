<script>
  import { onMount } from 'svelte';
  import studioM1 from '$lib/img/studio_m1.jpg?run'
  import studioS2 from '$lib/img/studio_s2.jpg?run'
  import studioS1 from '$lib/img/studio_s1.jpg?run'
  import Img from '@zerodevx/svelte-img'


  let imagePath = studioM1
    
  const handleScroll = () => {
    const h2Elements = document.querySelectorAll('h2[id]');
    h2Elements.forEach(h2 => {
      const rect = h2.getBoundingClientRect();
      if (rect.top <= 50) {
        const id = h2.getAttribute('id');
        if (id === '1') {
          imagePath = studioM1;
        } 
        if (id === '2') {
          imagePath = studioS2;
        } else if (id === '3') {
          imagePath = studioS1;
        }
      }
    });
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
</script>

<Img class="sticky top-0 w-full h-screen object-cover pt-8" src={imagePath} alt="FMC Studio zdjecie" />