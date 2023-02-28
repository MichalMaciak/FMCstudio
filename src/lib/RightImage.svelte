<script>
     import { onMount } from 'svelte';

    let imagePath = "/img/studio_m1.jpg"
    
    const handleScroll = () => {
    const h2Elements = document.querySelectorAll('h3[id]');
    h2Elements.forEach(h3 => {
      const rect = h3.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        const id = h3.getAttribute('id');
        if (id === '1') {
          imagePath = '/img/studio_m1.jpg';
        } else if (id === '2') {
          imagePath = '/img/studio_m2.jpg';
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

<img class="sticky top-0 w-full h-screen object-cover pt-8" src={imagePath} alt="FMC Studio zdjecie" />