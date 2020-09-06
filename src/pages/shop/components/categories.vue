<template>
  <div id="categories" class="scroll-nav-side">
    <goback :gotitle="'分类'" />
    <div class="nav_categories">
      <cube-scroll-nav
        ref="scrollnav"
        :side="true"  
        :data="pcategories"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <cube-scroll-nav-panel
          v-for="item in pcategories"
          :key="item.category.name"
          :label="item.category.name"
          :title="item.category.name">
          <ul>
            <router-link v-for="(food, index) in item.sub_category" :key="index" :to="{ path: '/product/categorychoose', query: { content: food.content, id: food.id, parent_id: food.parent_id, name: food.name } }" tag="li">
              <img :src="food.image">
              <p>{{food.name}}</p>
            </router-link>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
import { ajaxCategoryAll } from '@/api/shop.js'
import goback from '@/components/goback'
export default{
  name: 'Categories',
  components: {
    goback
  },
  data() {
    return {
      pcategories: [],
      current: ''
    }
  },
  mounted() {
    this.getCategory()
  },
  methods: {
    getCategory() {
      ajaxCategoryAll().then(response => {
        console.log(response)
        const data = response.data.data
        this.pcategories = data.filter((item, index) => {
          return item.sub_category.length > 0
        })
        console.log(this.pcategories)
        // this.pcategories = response.data.data
        this.current = this.pcategories[0].category.name
        this.$refs.scrollnav.refresh()
      }).catch(err => {
        console.log(err)
      })
    },
    changeHandler(label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler(current) {
      console.log('sticky-change', current)
    }
  }
}
</script>

<style lang="scss">
#categories{
  width: 100%;
  height: 100%;
}
.nav_categories{
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  bottom:0;
}
.scroll-nav-side{
  background-color: #fff;
  .cube-scroll-nav-main{
    background-color: #efeff4;
  }
  .cube-sticky-fixed{
    background-color: #efeff4;
  }
  .cube-scroll-nav-bar{
    width: 2.4rem;
    background-color: transparent;
  }
  .cube-scroll-nav-bar-item{
    padding: 15px 10px;
  }
  .cube-scroll-nav-bar-item_active{
    background-color: #fff;
  }
  .cube-scroll-nav-panels{
    background-color: #fff;
  }
  .cube-scroll-nav-panel{
    ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
//       padding-left: .64rem;
//       margin-right: -.08rem;
    }
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: .2rem .3rem;
      img{
        width: 1.81333rem;
        height: 1.81333rem;
        -webkit-transform: scale(.7);
        -ms-transform: scale(.7);
        transform: scale(.7);
      }
      p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: .10667rem;
        font-size: .32rem;
        color: #505050;
        letter-spacing: 0;
      }
    }
  }
  .cube-scroll-nav-panel-title{
    padding: 15px;
    font-size: 16px;
    background-color: #fff;
  }
}
.cube-scroll-wrapper {
  width: 100%;
}
.scroll-nav-side .cube-scroll-nav-bar-item_active{
  color: #f85959;
  border-left: .10667rem solid #f85959;
}
</style>