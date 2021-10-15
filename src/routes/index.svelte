<svelte:head>
    <title>BP Garden Designer - Home</title>
</svelte:head>

<script>
    import Carousel from '@beyonk/svelte-carousel'

    import img01 from '$lib/img/home/01.webp'
    import img02 from '$lib/img/home/02.webp'
    import img03 from '$lib/img/home/03.webp'
    import img04 from '$lib/img/home/04.webp'
    import img05 from '$lib/img/home/05.webp'
    import img06 from '$lib/img/home/06.webp'
    import img07 from '$lib/img/home/07.webp'
    import img08 from '$lib/img/home/08.webp'
</script>

<main>
    <div class="mx-auto">
        <Carousel perPage={{ 1300: 2, 1024: 2 }} autoplay={2000}>
            <div class="slide-content">
                <img src={img01} alt="Barbara Ponti Garden Designer"/>
            </div>
            <div class="slide-content">
                <img src={img02} alt="Barbara Ponti Garden Designer"/>
            </div>
            <div class="slide-content">
                <img src={img03} alt="Barbara Ponti Garden Designer"/>
            </div>
            <div class="slide-content">
                <img src={img04} alt="Barbara Ponti Garden Designer"/>
            </div>
            <div class="slide-content">
                <img src={img05} alt="Barbara Ponti Garden Designer"/>
            </div>
            <div class="slide-content">
                <img src={img06} alt="Barbara Ponti Garden Designer"/>
            </div>
            <div class="slide-content">
                <img src={img07} alt="Barbara Ponti Garden Designer"/>
            </div>
            <div class="slide-content">
                <img src={img08} alt="Barbara Ponti Garden Designer"/>
            </div>
        </Carousel>
    </div>
</main>