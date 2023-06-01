<template>
    <div>
        <MyName>
            <template v-slot:hjj>
                <h1>Here might be a page title</h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template #pjj>
                <p>Here's some contact info</p>
            </template>

        </MyName>
    </div>
</template>

<script>
import MyName from '../components/MyName.vue'
export default {
    components: {
        MyName
    }
}
</script>

<style></style>