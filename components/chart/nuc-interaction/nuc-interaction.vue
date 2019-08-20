<template>
    <div><slot /></div>
</template>
<script>
export default {
    name: 'nuc-interaction',
    methods: {
        setInteractionOptions (type, options) {
            this.$parent.setInteractionOptions({
                type,
                ...options
            })
        }
    }
}
</script>
