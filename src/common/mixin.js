import { debounce } from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListLoad: null,
      refresh :null

    }
  },
  mounted() {
   this.refresh = debounce(this.$refs.scroll.refresh, 50)
    this.getThemeTopY = () => {
      this.refresh()
    }
    this.$bus.$on('itemImgLoad', this.getThemeTopY)
  }
}
