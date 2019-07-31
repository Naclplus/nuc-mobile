<template>
    <div id="app">
        <basic-header />
        <basic-slider-menu />
        <basic-doc-content />
        <emulator-wrapper />
    </div>
</template>

<script>
import BasicHeader from './components/BasicHeader'
import BasicSliderMenu from './components/BasicSliderMenu'
import BasicDocContent from './components/BasicDocContent'
import EmulatorWrapper from './components/EmulatorWrapper'
export default {
    name: 'app',
    components: {
        BasicHeader,
        BasicSliderMenu,
        BasicDocContent,
        EmulatorWrapper
    }
}
</script>
