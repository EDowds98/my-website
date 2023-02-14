<script lang="js">
import Projects from './Projects.vue'
import Contact from './Contact.vue'
export default {
    components: {
        Projects,
        Contact,
    },
    data() {
        return {
            renderProjects: false,
            renderContact: false,
        }
    },
    methods: {
        toggleView(view) {
            for (const property in this.$data) {
                if(property === view) {
                    this.$data[property] = !this.$data[property];
                } else {
                    this.$data[property] = false;
                }
            }
        }
    }
}
</script>

<template>
    <nav class="grid grid-cols-3 py-4 px-4 text-center bg-davys-gray text-beige font-ibm">
        <RouterLink to="/projects" class="py-4 px-4 hover:bg-glaucous">My Projects</RouterLink>
        <RouterLink to="/contact" class="py-4 px-4 hover:bg-glaucous">Get in touch!</RouterLink>
        <RouterLink to="/blog" class="py-4 px-4 hover:bg-glaucous">Blog</RouterLink>
        <img />
    </nav>

</template>
