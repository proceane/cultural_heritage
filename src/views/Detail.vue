<template>
  <v-container class="mt-3">
    <v-row
      justify="center"
      v-if="loading"
    >
    <v-progress-circular
      indeterminate
      color="gray"
    ></v-progress-circular>
    </v-row>
    <v-row
      justify="center"
      v-if="result"
    >
      <v-col
      cols="12"
      >
        <v-sheet>
          <div
            class="text-h6 font-weight-bold"
            style="text-align: center"
          >{{result.ccbamnm1}}</div>
          <div
            class="text-subtitle-1"
            style="text-align: center"
          >{{result.ccmaname}} {{result.crltsnonm}}호</div>
        </v-sheet>
      </v-col>
      <v-divider></v-divider>
      <v-col
      cols="12"
      md="6"
      >
        <v-carousel hide-delimiters class="mt-3">
          <v-carousel-item
            v-for="(key) in images"
            :key="key"
            :src="key.imageurl"
          >
            <div class="pa-3" style="text-align:center; color: white">{{key.ccimdesc}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col
      cols="12"
      md="6"
      style="align-self: center;"
      >
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>종목</td>
                <td>{{result.ccmaname}} {{result.crltsnonm}}호</td>
              </tr>
              <tr>
                <td>명칭</td>
                <td>{{result.ccbamnm1}}({{result.ccbamnm2}})</td>
              </tr>
              <tr>
                <td>분류</td>
                <td>{{result.gcodename}} / {{result.bcodename}} / {{result.mcodename}} / {{result.scodename}}</td>
                <!--순서는 g-b-m-scodename -->
              </tr>
              <tr>
                <td>수량/면적</td>
                <td>{{result.ccbaquan}}</td>
              </tr>
              <tr>
                <td>지정(등록)일</td>
                <td>{{result.ccbaasdt}}</td>
              </tr>
              <tr>
                <td>소재지</td>
                <td>{{result.ccbalcad}}</td>
              </tr>
              <tr>
                <td>시대</td>
                <td>{{result.cccename}}</td>
              </tr>
              <tr>
                <td>소유자(소유단체)</td>
                <td>{{result.ccbaposs}}</td>
              </tr>
              <tr>
                <td>관리(관리단체)</td>
                <td>{{result.ccbaadmin}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col
      cols="12"
      md="9"
      >
        <div
          class="text-subtitle-1 font-weight-bold"
        >설명</div>
        <v-divider class="mt-2 mb-3"></v-divider>
        <div
          class="text-body-1"
          v-html="content.replace(/(?:\r\n|\r|\n)/g, '<br />')"
        ></div>
      </v-col>
      <v-col
      cols="12"
      md="9"
      >
        <div
          class="text-subtitle-1 font-weight-bold"
        >
        나레이션
        </div>
        <v-divider class="mt-2 mb-3"></v-divider>
        <div class="text-center">
          <div>
            <v-btn class="ma-2">
              <v-img width="32px" height="32px" src="../assets/KR-flag-32.png"></v-img>
            </v-btn>
          </div>
          <v-btn class="ma-2">
            <v-img width="32px" height="32px" src="../assets/US-flag-32.png"></v-img>
          </v-btn>
          <v-btn class="ma-2">
            <v-img width="32px" height="32px" src="../assets/JP-flag-32.png"></v-img>
          </v-btn>
          <v-btn class="ma-2">
            <v-img width="32px" height="32px" src="../assets/CN-flag-32.png"></v-img>
          </v-btn>
        </div>
        <audio controls class="mt-2 mb-3" style="width: 100%">
          <source ref="narr_source" src="" type="audio/mpeg">
        </audio>
        <script type="application/javascript">
        </script>
      </v-col>
      <v-col
      cols="12"
      md="9"
      class="mb-5"
      >
        <div
          class="text-subtitle-1 font-weight-bold"
        >
        위치
        </div>
        <v-divider class="mt-2 mb-3"></v-divider>
        <div id="map" style="width:100%;height:400px;"></div>
        <script type="application/javascript">
          var container = document.getElementById('map');
          var options = {
            center: new kakao.maps.LatLng({{result.latitude}}, {{result.longitude}}),
            level: 3
          };
          var markerPosition  = new kakao.maps.LatLng({{result.latitude}}, {{result.longitude}}); 
          var marker = new kakao.maps.Marker({
            position: markerPosition
          });
          var map = new kakao.maps.Map(container, options);
          marker.setMap(map);
        </script>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import board from "../plugins/board"
export default {
  data () {
    return {
      content: ""
      , narr_tab: null
      , result: null
      , loading: true
      , images: []
      , audio: []
    }
  },
  created () {
    this.result = board.getDetail(this.$firebase, this.$route.query.kdcd, this.$route.query.ctcd, this.$route.query.asno)
    if (this.result !== null && typeof(this.result) !== 'undefined') {
      console.log(this.result)
      this.loading = false
      this.content = this.result.content
      for (var item in this.result.image) {
        this.images.push(this.result.image[item])
        // console.log(this.result.image[item])
      }
      for (var narr in this.result.audio) {
        console.log(this.result.audio[narr])
        this.audio.push(this.result.audio[narr])
      }
    }
  },
  methods: {
  }
};
</script>
