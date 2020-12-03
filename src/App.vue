<template>
    <div id="app" class="app-container">
        <div class="container">
            <Loader v-if="loading" :isLoading="loading"/>
            <template v-else-if="rates.length && base">
                <DropDown
                    :currentDate="currentDate"
                    @selectDate="selectDate"
                />
                <Currency
                    :rate="rates[index]"
                    :currentDate="currentDate"
                />
                <LineChart
                    v-for="(item, i) in chartData"
                    :key="i"
                    :labels="dates"
                    :datasets="item"
                />
            </template>
            <div v-else>
                Что то пошло не так... Перезагрузите страницу!
            </div>
        </div>
    </div>
</template>
<script>
  import { mapState} from 'vuex';

  import DropDown from './components/DropDown/DropDown';
  import Currency from './components/Currency.vue'
  import Loader from './components/Loader/Loader'
  import LineChart from './components/Chart/LineChart'
  
  export default {
    name: 'App',
    components: {Currency, Loader, LineChart, DropDown},
    data: () => ({
      currentDate: '',
      index: 2,
      chartData: []
    }),
    computed: {
      ...mapState({
        loading: state => state.isLoading,
        rates: state => state.rates,
        dates: state => state.dates,
        base: state => state.base,
        error: state => state.error.error,
      }),
    },
    async mounted() {
      await this.$store.dispatch('GET_INFO')
      if (!this.error) {
        this.$message('Пользуйтес на здоровье, все работает исправно!)')
        this.currentDate = this.dates[this.dates.length - 1]
      }
      this.renderChartData()
    },
    methods: {
      selectDate(date) {
        this.currentDate = date
        this.$message('Дата изменена')
      },
      findIndex() {
        this.index = this.dates.findIndex(item => item === this.currentDate)
      },
      renderChartData() {
        this.chartData = [
          {
            label: 'Курс валюты EUR',
            borderColor: '#f87979',
            borderWidth: 2,
            fill: false,
            data: this.rates.map(item => item['EUR'])
          },
          {
            label: 'Курс валюты USD',
            borderColor: '#6f4fcc',
            borderWidth: 2,
            fill: false,
            data: this.rates.map(item => item['USD'])
          },
          {
            label: 'Курс валюты RUB',
            borderColor: '#ffda1a',
            borderWidth: 2,
            fill: false,
            data: this.rates.map(item => item['RUB'])
          }
        ]
      }
    },
    watch: {
      currentDate: {
        handler(value) {
          this.currentDate = value
          this.findIndex()
        }
      },
      error(apiError) {
        this.$error(apiError)
      }
    }
  }
</script>
<style lang="scss">
    @import '~materialize-css/dist/css/materialize.min.css';
    
    .app-container {
        margin: 5vw 0;
    }
</style>
