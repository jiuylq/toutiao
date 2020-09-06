<template>
  <div id>
    <app-header/>
    <div class="ly-h">11111</div>
    <btns color="#000">按钮1</btns>
    <div class="xxx" @click="ccck">{{ xxx }}</div>
    <btn color="blue">按钮2</btn>
		<svg-icon icon-class="bofang" class-name="bofang" />
    <!-- <video width="100%" controls>
      <source src="http://cdn.toxicjohann.com/lostStar.mp4" type="video/mp4">
    </video> -->
    <div id="videos"></div>
    <div ref="xgplayer" id="xgplayer"></div>
    <router-link to="/tab5">tab5</router-link>
  </div>
</template>

<script>
import appHeader from '@/components/header'
import btns from '@/components/button/btn.vue'
import ChimeeMobilePlayer from 'chimee-mobile-player'
import '../../node_modules/chimee-mobile-player/lib/chimee-mobile-player.browser.css'
import Xgplayer from 'xgplayer'

export default {
  name: '',
  components: {
    appHeader,
    btns
  },
  data () {
    return {
      color: '#00ff00',
      xxx: ''
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      // alert(navigator.userAgent)
      // this.initplay()
      // this.initXgplayer()
    })
  },
  methods: {
    ccck () {
      this.xxx = 'click'
      console.log(this.xxx)
    },
    initplay () {
      const wrapper = document.createElement('div')
      document.getElementById('app').appendChild(wrapper)
      new ChimeeMobilePlayer({
        wrapper: wrapper, // video dom容器
        src: 'http://cdn.toxicjohann.com/lostStar.mp4',
        autoplay: false,
        controls: true,
        poster: '//s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
        playsInline: true,
        preload: 'auto',
        x5VideoPlayerFullscreen: true,
        x5VideoOrientation: 'landscape|portrait',
        xWebkitAirplay: true,
        muted: true,
        removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState'] // 需要移除的插件
      })
    },
    initXgplayer () {
      const _self = this.$refs.xgplayer
      const player = new Xgplayer({
        el: _self, // document.getElementById('xgplayer'),
        url: [
          {
            src: 'http://cdn.toxicjohann.com/lostStar.mp4',
            type: 'video/mp4'
          }
        ],
        fluid: true,
        poster: '//s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
        // playbackRate: [0.5, 0.75, 1, 1.5, 2],
        whitelist: ['']
      })
      player.emit('resourceReady', [
        { name: '高清', url: 'http://cdn.toxicjohann.com/lostStar.mp4' },
        { name: '超清', url: 'http://chimee.org/vod/1.mp4' }
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.ly-h {
  margin-top: 45px;
}
#videos {
  width: 100%;
  // height:200px;
}
#xgplayer {
  width: 100%;
}
.xxx{
  width: 100px;
  height: 50px;
}
</style>
