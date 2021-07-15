# cultural_heritage
문화재 정보를 웹사이트를 통해 구현해보는 프로젝트입니다.  
처음부터 다시 진행예정
## 진행상황
### 데이터 수집
데이터 출처<br>
https://www.cha.go.kr/html/HtmlPage.do?pg=/publicinfo/pbinfo3_0201.jsp&mn=NS_04_04_02

데이터 구조<br>
```
  firebase도메인
    ㄴ data
        ㄴ 종목코드
            ㄴ 지역코드
                ㄴ 문화재 고유 지정번호
                    ㄴ 상세데이터, 이미지, 동영상
```
|날짜|내용|
|-----------|----|
|2021.02.26 | 파이썬으로 데이터 수집 코드 작성후 오후 10시경 수집 시작|
|2021.02.27 | 오후 1:30 문화재 검색목록 데이터 수집 완료, 상세데이터 수집코드 작성후 수집 시작|
|2021.02.28 | 오전에 문화재 이미지, 동영상, 나레이션데이터를 한꺼번에 요청하여 dictionary에 담은후 firebase에 등록하는 코드 작성후 수집 시작, 오후시간 수집완료|
|2021.05.27| vuetify 프로젝트 세팅, 메인 페이지 레이아웃 구성|
|2021.05.31| 리스트, 상세페이지 레이아웃 구성|
|2021.05.31| 소재지 상세, 소유자 데이터 추가|
|2021.06.06| 상세데이터 조회 메소드 추가, 정상조회 확인|
|2021.06.07| 상세페이지 구현|


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
