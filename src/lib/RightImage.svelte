<script>
  import { onMount } from 'svelte';
  import studioM1 from '$lib/img/m1.jpg?run'
  import studioM2 from '$lib/img/m2.jpg?run'
  import studioS1 from '$lib/img/s1.jpg?run'
  import studioS2 from '$lib/img/s2.jpg?run'
  import car from '$lib/img/car.jpg?run'
  import Img from '@zerodevx/svelte-img'

</script>

<Img class="sticky top-0 w-full object-cover" src={studioM1} alt="FMC Studio małe zdjecie" />
<Img class="sticky top-0 w-full object-cover" src={studioM2} alt="FMC Studio małe zdjecie" />
<Img class="sticky top-0 w-full object-cover" src={studioS1} alt="FMC Studio średnie zdjecie" />
<Img class="sticky top-0 w-full object-cover" src={studioS2} alt="FMC Studio średnie zdjecie" />
<Img class="sticky top-0 w-full object-cover" src={car} alt="FMC Studio samochód zdjecie" />