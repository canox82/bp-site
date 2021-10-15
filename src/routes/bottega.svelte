<svelte:head>
    <title>BP Garden Designer - Bottega</title>
</svelte:head>

<script>
    //
    import oggBottega01 from '$lib/img/bottega/oggetti_design_01.webp'
    import oggBottega02 from '$lib/img/bottega/oggetti_design_02.webp'
    import oggBottega03 from '$lib/img/bottega/oggetti_negozio_03.webp'
    import oggBottega04 from '$lib/img/bottega/oggetti_negozio_04.webp'
    import imgVetrina from '$lib/img/bottega/vetrina.webp'
</script>

<main>
    <div class="flex justify-center mb-3">
        <div class="flex flex-col">
            <div class="flex flex-row gap-x-2 items-center">
                <div class="w-3/5 m-2">
                    <center>
                        <span class="font-semibold">LA MIA “BOTTEGA”<br/>UN POSTO DOVE CAMBIARE</span>
                    </center>
                    <br/>
                    <span class="text-xs">
                        Volevo un posto dove fare progetti,<br/>
                        dove poter incontrare persone diverse e scambiare pareri,<br/>
                        dove poter esporre le cose che disegno e<br/>
                        dove gli altri presentano le cose che progettano e disegnano.<br/>
                        Un posto che si trasforma nei suoi tanti allestimenti,<br/>
                        secondo lo stile e la ricerca del momento.<br/>
                        Una finestra sulla città, dove potere avere delle vetrine... interattive magari:)<br/>
                        Un posto pieno di Piante e di Funghi,<br/>
                        che di sera si illumina  e diventa un cubo di Luce ed Ombre.<br/>
                        Un posto per le mie Alchimie.<br/>
                        Un posto lungo la strada, dove ogni giorno non sai chi entra<br/>
                        e a volte chi passa ti sorride e si blocca incantato<br/>
                        e poi entra, ed è sempre quello giusto!<br/>
                        Un posto dove le mani viaggiano veloci come la testa<br/>
                        e le cose sono Leggere e Trasparenti e tu ti senti bene.<br/>
                        Un posto che ogni giorno cambia un po'... <br/>
                        E dove io posso infinitamente cambiare!<br/>
                    </span>
                </div>
                <div>
                    <!-- immagini negozio che ruotano -->
                    <img class="rounded-lg" src={imgVetrina} alt="Vetrina Bottega Barbara Ponti Gardeb Designer" loading="lazy" decoding="async" width="400" />
                </div>
            </div>
            <div class="flex flex-row gap-x-2">
                <!-- 4 immagini piccole di oggetti -->
                <div class="w-1/4">
                    <img class="rounded-lg h-full w-full" src={oggBottega01} alt="Oggetti di design Barbara Ponti Garden Designer" loading="lazy" decoding="async" />
                </div>
                <div class="w-1/4">
                    <img class="rounded-lg h-full w-full" src={oggBottega02} alt="Oggetti di design Barbara Ponti Garden Designer" loading="lazy" decoding="async" />
                </div>
                <div class="w-1/4">
                    <img class="rounded-lg h-full w-full" src={oggBottega03} alt="Oggetti di design Barbara Ponti Garden Designer" loading="lazy" decoding="async" />
                </div>
                <div class="w-1/4">
                    <img class="rounded-lg h-full w-full" src={oggBottega04} alt="Oggetti di design Barbara Ponti Garden Designer" loading="lazy" decoding="async" />
                </div>
            </div>
        </div>
    </div>
</main>