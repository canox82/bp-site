<svelte:head>
    <title>BP Garden Designer - About me</title>
</svelte:head>

<script>
    import imgBarbara from '$lib/img/barbara.webp'
</script>

<main>
    <div class="flex justify-center">
        <div class="m-5 w-1/3 leading-loose">
            Libera professionista e giardiniera appassionata, che ama da sempre arte e design.<br/>
            Le mie inclinazioni personali, le competenze accumulate e coltivate per passione, si sono naturalmente concretizzate in questo affascinante lavoro.<br/>
            Allieva e collaboratrice per anni in uno studio di architettura del paesaggio dove ho potuto affinarmi e coordinare tutte le fasi del progetto. Non rinuncio mai ad  approfondire le tematiche dei giardini attraverso workshop e viaggi.<br/>
            Nei vari progetti mi piace studiare il “ mood ”, lo spirito personale del luogo, unendo le conoscenze botaniche, la ricerca costante di semplicità nel design ma ricca di contenuti, l’uso di materiali ed arredi per contribuire a creare giardini e luoghi di carattere; fondamentalmente sereni e gioiosi da vivere. <br/>
        </div>
        <div mx-5>
            <img src={imgBarbara} alt="Barbara Ponti" loading="lazy" decoding="async" />
        </div>
    </div>
</main>