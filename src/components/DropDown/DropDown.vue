<template>
    <div class="dropdown">
        <ul class="right hide-on-small-and-down">
            <li>
                <a
                    class="dropdown-trigger black-text"
                    href="#"
                    data-target="dropdown"
                    ref="dropdown"
                >
                    Выберите дату
                    <i class="material-icons right">arrow_drop_down</i>
                </a>
                <ul id='dropdown' class='dropdown-content'>
                    <li v-for="item in dates" :key="item">
                        <a
                            href="#"
                            @click.prevent="selectDate(item)"
                            class="black-text"
                            :class="{active: item === currentDate}"
                        >
                            <i class="material-icons tiny">date_range</i>
                            {{item}}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <p class="dropdown__date">{{currentDate}}</p>
        <p class="dropdown__base">Базовый курс {{base}}</p>
    </div>
</template>
<script>
  import M from 'materialize-css';
  import {mapState} from 'vuex';

  export default {
    name: 'DropDown',
    props: {
      currentDate: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      dropdown: null
    }),
    mounted() {
      this.initDropDown()
    },
    computed: {
      ...mapState({
        base: state => state.base,
        dates: state => state.dates,
      })
    },
    methods: {
      initDropDown() {
        this.dropdown = M.Dropdown.init(
            this.$refs.dropdown, {
              constrainWidth: false
            });
      },
      selectDate(date) {
        this.$emit('selectDate', date);
      }
    },
    watch: {
 
    }
  }
</script>
<style scoped lang="scss">
    .dropdown {
        display: flex;
        align-items: center;
        
        &__date {
            padding-left: 20px;
            font-size: 20px;
        }
        
        .dropdown-content {
            
            .active {
                background: rgba(0, 0, 0, 0.2);
            }
        }
    
        &__base {
            font-size: 20px;
            margin-left: auto;
        }
    }
</style>
