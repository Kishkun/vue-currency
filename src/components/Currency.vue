<template>
    <div class="row m6">
        <div class="col12">
            <div class="currency">
                <table class="currency__table">
                    <thead>
                    <tr>
                        <th>Валюта</th>
                        <th>Курс</th>
                        <th>Дата</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="cur in currencies"
                        :key="cur"
                    >
                        <td>{{ cur }}</td>
                        <td>{{ rate[cur] | currency(cur) }}</td>
                        <td>{{ currentDate }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Currency',
    props: {
      rate: {
        type: Object,
        default: () => ({})
      },
      currentDate: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      currencies: ['EUR', 'USD', 'RUB']
    }),
    computed: {},
    mounted() {
    },
    methods: {}
  }
</script>
<style scoped lang='scss'>
    .currency {
        $self: &;
        margin-top: 3.5vw;
        
        &__table {
            border: 1px solid red;
            
            tr {
                border: 1px solid rgba(0, 0, 0, 0.12);
            }
            
            td, th {
                text-align: center;
            }
        }
        
        #{$self}__cur {
            width: auto;
            text-align: center;
            max-width: 60px;
            padding: 0 5px;
        }
    }
</style>
