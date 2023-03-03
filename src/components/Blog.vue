<script>
    export default {
        data() {
            return {
                blogId: -1,
                blogHeading: 'Loading blog title',
                blogContent: 'Loading blog content',
                blogDate: 'Loading blog date',
            }
        },
        mounted() {
            fetch("/blog")
            .then((response) => response.text())
            .then((data) => {
                this.blogHeading = data;
            });
        }
    }
</script>

<template>
    <h1 class="font-ibm text-5xl text-maize text-center">{{ blogHeading }}</h1>
</template>