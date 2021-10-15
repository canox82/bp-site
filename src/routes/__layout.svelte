<script>
    import "../app.css";
    import bpLogo from '$lib/img/bp_logo.webp'
    import facebookLogo from '$lib/img/facebook.png'
    import instagramLogo from '$lib/img/instagram.webp'
    import pinterestLogo from '$lib/img/pinterest.webp'
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
</style>

<main>
    <div class="flex flex-col h-screen justify-between text-gray-400 font-bpfont content-center">
        <header>
            <div class="flex my-5 items-center justify-center">
                <div><img src={bpLogo} alt="Logo BP Garden Designer" loading="lazy" decoding="async" /></div>
                <div class="flex mx-20 items-end">
                    <span class="text-2xl">Barbara Ponti</span><span class="text-xl">&nbsp; -  garden designer</span>
                </div>
            </div>
            <nav class="text-center my-10 space-x-10 text-sm">
                <a href="/">Home</a>
                <a href="/about">About me</a>
                <a href="/bottega">Bottega</a>
                <a href="/working">Servizi</a>
                <a href="/working">Giardini</a>
                <a href="/working">I like</a>
                <a href="/working">Video</a>
                <a href="/working">Contatti</a>
            </nav>
        </header>
        <div class="text-sm mx-auto">
            <slot></slot>
        </div>
        <footer class="flex text-sm mb-5 justify-center">
            <a href="https://www.instagram.com/bp.garden.designer/" target="_blank"><img src={instagramLogo} alt="BP Garden Designer on Instagram" loading="lazy" decoding="async" /></a>
            <a href="http://www.pinterest.com/centox100verde/" target="_blank"><img src={pinterestLogo} alt="BP Garden Designer on Pinterest" loading="lazy" decoding="async" /></a>
            <a href="http://www.facebook.com/barbara.ponti.79" target="_blank"><img src={facebookLogo} alt="BP Garden Designer on Facebook" loading="lazy" decoding="async" /></a>
        </footer>
    </div>
</main>