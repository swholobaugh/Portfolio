<template>
    <div class="flex justify-center items-center">
        <div class="h-20 bottom-o py-8 flex">
            <p class="pr-2">&copy; Seth Holobaugh</p>
            <a class="github" href="https://github.com/swholobaugh" target="_blank"><GithubCircle /></a>
            <a class="facebook" href="https://facebook.com" target="_blank"><Facebook /></a>
            <a class="twitter" href="https://twitter.com" target="_blank"><Twitter /></a>
        </div>
    </div>
</template>

<script>
import GithubCircle from 'vue-material-design-icons/GithubCircle'
import Facebook from 'vue-material-design-icons/Facebook'
import Twitter from 'vue-material-design-icons/Twitter'

export default {
    name: 'Footer',
    components: {
        GithubCircle,
        Facebook,
        Twitter
    }
}
</script>

<style lang="scss" scoped>
.github:hover {
    @apply text-red-700;
}
.facebook:hover {
    @apply text-blue-700;
}
.twitter:hover {
    @apply text-blue-400;
}
</style>