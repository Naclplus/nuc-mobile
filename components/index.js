import Button from './button'
import Flexbox from './flexbox'
import PageContainer from './page-container'
import Header from './header'
import Tabbar from './tabbar'
import Tab from './tab'
import Icon from './icon-font'
import Carousel from './carousel'
import Chart from './chart'

const FlexboxItem = Flexbox.Item
const TabbarItem = Tabbar.Item
const TabItem = Tab.Item
const CarouselItem = Carousel.Item
// Chart
const Coord = Chart.Coord
const Geom = Chart.Geom
const Axis = Chart.Axis
const Legend = Chart.Legend
const Tooltip = Chart.Tooltip
const Guide = Chart.Guide
const Interaction = Chart.Interaction
const ScrollBar = Chart.ScrollBar

const GuideLine = Guide.Line
const GuideText = Guide.Text
const GuidePoint = Guide.Point
const GuideTag = Guide.Tag
const GuideRect = Guide.Rect
const GuideHtml = Guide.Html
const GuideArc = Guide.Arc
const GuideRegionFilter = Guide.RegionFilter
const InteractionPieSelect = Interaction.PieSelect
const InteractionIntervalSelect = Interaction.IntervalSelect
const InteractionPan = Interaction.Pan
const InteractionPinch = Interaction.Pinch
const InteractionSwipe = Interaction.Swipe

const components = {
    Button,
    Flexbox,
    FlexboxItem,
    PageContainer,
    Header,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    Icon,
    Carousel,
    CarouselItem,
    Chart,
    Coord,
    Geom,
    Axis,
    Legend,
    Tooltip,
    Guide,
    GuideLine,
    GuideText,
    GuidePoint,
    GuideTag,
    GuideRect,
    GuideHtml,
    GuideArc,
    GuideRegionFilter,
    Interaction,
    InteractionPieSelect,
    InteractionIntervalSelect,
    InteractionPan,
    InteractionPinch,
    InteractionSwipe,
    ScrollBar
}

const install = function (Vue) {
    if (!Vue || install.installed) {
        return
    }
    // Register global components
    const componentsNames = Object.keys(components)
    componentsNames.forEach((name) => {
        const component = components[name]
        if (component.name) {
            Vue.component(component.name, component) // kebab-case
        }
    })
}

components.install = install

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    Button,
    Flexbox,
    PageContainer,
    Header,
    Tabbar,
    Tab,
    Icon,
    Carousel,
    Chart
}

export default components
