<script>

export default{
    name: 'AppHeader',
}

</script>

<template>
    <header>
        <!-- navbatr -->
        <nav class="navbar navbar-dark navbar-expand-lg fixed-top" data-bs-theme="dark">
            <div class="container-fluid">

                <!-- Logo sito -->
                <router-link :to="{name: 'home'}" class="navbar-brand fs-2" href="#">Vite Boolfolio</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- offcanvas sidebar-->
                <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header border-bottom">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body d-flex flex-column p-4">
                        <ul class="navbar-nav justify-content-center align-content-center flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Progetti</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">lol</a>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">

    nav{
        font-size: larger;

        .sidebar{
            background-color: rgba($color: #000000, $alpha: 0.15);
            backdrop-filter: blur(10px);
        }
    }
</style>