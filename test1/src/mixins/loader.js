export function loader (props) {
  return {
    data: () => ({
      loader: false
    }),
    mounted () {
      this.addEventListener()
    },
    beforeDestroy () {
      this.removeEventListener()
    },
    methods: {
      addEventListener: function () {
        this.$root.$on('loading', (show) => {
          this.loader = show
        })
      },
      removeEventListener: function () {
        this.$root.$off('loading')
      }
    }
  }
}