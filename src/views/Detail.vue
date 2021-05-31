<template>
  <v-container class="mt-3">
    <v-row
      justify="center"
    >
      <v-col
      cols="12"
      >
        <v-sheet>
          <div
            class="text-h6 font-weight-bold"
            style="text-align: center"
          >서울 숭례문</div>
          <div
            class="text-subtitle-1"
            style="text-align: center"
          >국보 1호</div>
        </v-sheet>
      </v-col>
      <v-divider></v-divider>
      <v-col
      cols="12"
      md="6"
      >
        <v-carousel hide-delimiters class="mt-3">
          <v-carousel-item
          src="http://www.cha.go.kr/unisearch/images/national_treasure/2685609.jpg"
          >
            <div class="pa-3" style="text-align:center; color: white">봄 숭례문(2015)</div>
          </v-carousel-item>
          <v-carousel-item
          src="http://www.cha.go.kr/unisearch/images/national_treasure/2685619.jpg"
          >
            <div class="pa-3" style="text-align: center; color: white">숭례문(1882)</div>
          </v-carousel-item>
          <v-carousel-item
          src="http://www.cha.go.kr/unisearch/images/national_treasure/2685622.jpg"
          >
            <div class="pa-3" style="text-align: center; color: white">남대문 시장과 숭례문(1904)</div>
          </v-carousel-item>
          <v-carousel-item
          src="http://www.cha.go.kr/unisearch/images/national_treasure/2685626.jpg"
          >
            <div class="pa-3" style="text-align: center; color: white">숭례문과 숭례문 성곽(1904)</div>
          </v-carousel-item>
          <v-carousel-item
          src="http://www.cha.go.kr/unisearch/images/national_treasure/2685630.jpg"
          >
            <div class="pa-3" style="text-align: center; color: white">전찻길이 놓인 숭례문(1905)</div>
          </v-carousel-item>
          <v-carousel-item
          src="http://www.cha.go.kr/unisearch/images/national_treasure/2685633.jpg"
          >
            <div class="pa-3" style="text-align: center; color: white">일제 강점기 숭례문(1915년 추정)</div>
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
                <td>국보 1호</td>
              </tr>
              <tr>
                <td>명칭</td>
                <td>서울 숭례문(서울 崇禮門)</td>
              </tr>
              <tr>
                <td>분류</td>
                <td>유적건조물 / 정치국방 / 성 / 성곽시설</td>
                <!--순서는 g-b-m-scodename -->
              </tr>
              <tr>
                <td>수량/면적</td>
                <td>1동</td>
              </tr>
              <tr>
                <td>지정(등록)일</td>
                <td>19621220</td>
              </tr>
              <tr>
                <td>소재지</td>
                <td>서울 중구 세종대로 40 (남대문로4가)(데이터 안넣음)</td>
              </tr>
              <tr>
                <td>시대</td>
                <td>조선 태조 7년(1398)</td>
              </tr>
              <tr>
                <td>소유자(소유단체)</td>
                <td>국유 (데이터 안넣음)</td>
              </tr>
              <tr>
                <td>관리(관리단체)</td>
                <td>문화재청 덕수궁관리소</td>
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
          <v-btn class="ma-2">
            <v-img width="32px" height="32px" src="../assets/KR-flag-32.png"></v-img>
          </v-btn>
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
          <source src="http://116.67.83.213/media/voice/krVoice/11/kr-11-00010000-11.mp3" type="audio/mpeg">
        </audio>
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
            center: new kakao.maps.LatLng(37.559975221378, 126.975312652739),
            level: 3
          };
          var markerPosition  = new kakao.maps.LatLng(37.559975221378, 126.975312652739); 
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
export default {
  data () {
    return {
      content: "조선시대 한양도성의 정문으로 남쪽에 있다고 해서 남대문이라고도 불렀다. 현재 서울에 남아 있는 목조 건물 중 가장 오래된 것으로 태조 5년(1396)에 짓기 시작하여 태조 7년(1398)에 완성하였다. 이 건물은 세종 30년(1448)에 고쳐 지은 것인데 1961∼1963년 해체·수리 때 성종 10년(1479)에도 큰 공사가 있었다는 사실이 밝혀졌다. 이후, 2008년 2월 10일 숭례문 방화 화재로 누각 2층 지붕이 붕괴되고 1층 지붕도 일부 소실되는 등 큰 피해를 입었으며, 5년 2개월에 걸친 복원공사 끝에 2013년 5월 4일 준공되어 일반에 공개되고 있다.\n 이 문은 돌을 높이 쌓아 만든 석축 가운데에 무지개 모양의 홍예문을 두고, 그 위에 앞면 5칸·옆면 2칸 크기로 지은 누각형 2층 건물이다. 지붕은 앞면에서 볼 때 사다리꼴 형태를 하고 있는데, 이러한 지붕을 우진각지붕이라 한다. 지붕 처마를 받치기 위해 기둥 위부분에 장식하여 짠 구조가 기둥 위뿐만 아니라 기둥 사이에도 있는 다포 양식으로, 그 형태가 곡이 심하지 않고 짜임도 건실해 조선 전기의 특징을 잘 보여주고 있다.\n 『지봉유설』의 기록에는 ‘숭례문’이라고 쓴 현판을 양녕대군이 썼다고 한다. 지어진 연대를 정확히 알 수 있는 서울 성곽 중에서 제일 오래된 목조 건축물이다.\nㅇ 숭례문 방화 화재(2008.2.10)\n - 2008년 숭례문 방화 사건(崇禮門放火事件)은 2008년 2월 10일 ~ 2월 11일 숭례문 건물이 방화로 타 무너진 사건이다. 화재는 2008년 2월 10일 오후 8시 40분 전후에 발생하여 다음날인 2008년 2월 11일 오전 0시 40분경 숭례문의 누각 2층 지붕이 붕괴하였고 이어 1층에도 불이 붙어 화재 5시간 만인 오전 1시 55분쯤 석축을 제외한 건물이 훼손되었다."
      , narr_tab: null
    }
  }
};
</script>
