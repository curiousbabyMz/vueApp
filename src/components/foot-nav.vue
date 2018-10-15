<template>
    <div class="foot-nav-containner">
        <ul class="bottom-nav">
            <router-link :to='{name:"home"}' tag='li' class="bottom-nav__li bottom-nav__li--home" >home</router-link>
            <router-link :to='{name:"search"}' tag='li' class="bottom-nav__li bottom-nav__li--search">search</router-link>
            <router-link :to='{name:"car"}' tag='li' class="bottom-nav__li bottom-nav__li--car">car</router-link>
            <router-link :to='{name:"vip"}' tag='li' class="bottom-nav__li bottom-nav__li--vip">vip</router-link>
        </ul>
    </div>
</template>
