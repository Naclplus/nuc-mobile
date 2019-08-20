<template>
    <div><slot /></div>
</template>
<script>
export default {
    name: 'nuc-guide',
    methods: {
        setGuideOptions (type, options) {
            this.$parent.setGuideOptions({
                type,
                ...options
            })
        }
    }
}
</script>
