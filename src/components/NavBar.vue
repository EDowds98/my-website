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
    <nav class="grid grid-cols-2 py-4 px-4 text-center bg-davys-gray text-beige font-ibm">
        <a class="py-4 px-4 hover:bg-glaucous" @click="toggleView('renderProjects')">My Projects</a>
        <a class="py-4 px-4 hover:bg-glaucous" @click="toggleView('renderContact')">Get in touch!</a>
        <img />
    </nav>

    <Teleport to="#app">
        <Projects v-if="renderProjects" />
        <Contact v-if="renderContact" />
    </Teleport>

</template>
