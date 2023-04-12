# project1 직메추

<br><br>
<div align="center">
<img width="329" alt="image" src="https://user-images.githubusercontent.com/119913471/231360601-cff9578f-46e2-4a0a-a402-6daced3ad5e5.png">
<br><br>
</div>

<br><br>

# 🙆🏻‍♀️ 프로젝트 팀원

<br><br>

 <div align = "center">
 
 <table>

  <tr align="center">
    <td width="150px"><a href="https://github.com/kittty0520">이지영<br>(@kittty0520)</a></td>
    <td width="150px"><a href="https://github.com/sunonepage">장혜원<br>(@sunonepage)</a></td>
    <td width="150px"><a href="https://github.com/jin-grace">김유진<br>(@jin-grace)</a></td>
    <td width="150px"><a href="https://m.blog.naver.com/PostList.naver?blogId=0823jh">전지혜<br>(@0823jh)</a></td>
  </tr>

  <tr align="center">
    <td><img src="https://user-images.githubusercontent.com/119913471/231390504-4a4aa67f-de3f-4bc2-9ce8-87939f951933.png" align="center" width="64px"/></td>
    <td><img src="https://user-images.githubusercontent.com/119913471/231390489-8bf61734-d6c8-4bad-a2fe-0f07f41d95e7.png" align="center" width="64px"/></td>
    <td><img src="https://user-images.githubusercontent.com/119913471/231390503-516d69a1-54af-4e36-b951-7db9b93569c1.png" align="center" width="64px"/></td>
    <td><img src="https://user-images.githubusercontent.com/119913471/231403186-4eef34be-facd-41e3-9668-b96ee27f3b95.png" align="center" width="64px"/></td>
  </tr>

  <tr align="center">
  <td>팀장</td>
  <td>팀원</td>
  <td>팀원</td>
  <td>팀원</td>
  </tr>
  
  <tr align="center">
  <td>개발 총괄책임</td>
  <td>개발, 세부기획</td>
  <td>개발, 디자인기획</td>
  <td>메인 디자이너</td>
  </tr>

</table>
   
</div>  

<br><br>

---
# 1. 프로젝트 소개 

<br>

 ## ✔ 프로젝트 주제
 <br>
   
 > 직장인을 위한 메뉴추천
 
 <br> 
   
 ## ✔ 기획 의도
 <br>   

> 한국인들은 '금강산도 식후경', '밥값 해야한다','다 먹고 살자고 하는 짓'등의 말을 쓰고,<br>
> 심지어 안부인사 조차도 '밥 먹었니?'라고 물어볼 정도로 밥에 진심인 민족이다.<br>
> 그러나 우리는 늘 점심시간만 되면 메뉴에 대한 고민에 빠진다.<br>
> '오늘은 점심은 뭘 먹지?'라는 물음에서 이 프로젝트는 출발했다.
     

<br><br>

---
# 2. 프로젝트 구성
 
<br>

## ✔ 스택(Stacks)

### : 프로젝트를 바닐라 자바스크립트로 완성

<br>

### Environment&Development

![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=GitHub&logoColor=white)
![Visual Studio](https://img.shields.io/badge/Visual%20Studio-007ACC?style=for-the-badge&logo=visual%20studio&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SASS&logoColor=white)

<br>

### Config&Communication

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google_Sheets-0F9D58?style=for-the-badge&logo=google-sheets&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)


<br>

## ✔ 핵심기능

<br>

### ⭐ 랜덤추천 바로가기

* 데이터 값을 랜덤함수를 통해 반환

<br>

### ⭐ 데이터 필터링을 통한 맞춤추천

* 사용자 선택에 의한 값을 필터링함수를 통해 배열로 누적
* JSON 파일의 데이터를 프로미스함수로 받아 누적된 결과를 출력

<br>

### ⭐ 재추천 및 테스트 돌아가기

* 소트메서드를 통해 출력된 값을 혼합
* 쉬프트메서드로 결과값의 중복 출력을 방지하여 재추천 
* 재출력할 값이 더이상 없을 경우 테스트 시작점으로 복귀
<br>

## ✔ 디렉토리 구조

<br>
   
   ````
   
    ├─.vscode
    ├─assets
    │  ├─css
    │  ├─data
    │  ├─img
    │  │  ├─cartoon
    │  │  └─food_img
    │  ├─js
    │  └─scss
    ├─new_test_file
    │  ├─test_html
    │  └─test_js
    ├─QR code
    └─test

   ````
<br><br> 

---
# 3. 프로젝트 결과
<br>

## ✔ 화면구성

<br>

</br>

<div align="center">

|<p align="center">랜덤 추천</p>|<p align="center">맞춤추천</p>|
|------|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/121416269/231562536-bdd4cbfe-4912-4ae3-b89a-e50e6afe4fae.gif" width="250px"/></p> |<p align="center"><img src="https://user-images.githubusercontent.com/121416269/231566511-8e516ace-9ad9-4355-a8e5-838127446e51.gif" width="250px"/></p> |

|<p align="center">재추천</p>|<p align="center">테스트 돌아가기</p>|
|------|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/.gif" width=60%/></p> |<p align="center"><img src="https://user-images.githubusercontent.com/.gif" width=60%/></p> |

</div>

<br>

### 기능 구현 영상 <br>
![전체기능](https://user-images.githubusercontent.com/.gif) <br>

## ✔ 코드설명
### ⭐ 노션 링크(상세설명)
* https://north-nebula-d88.notion.site/c0ba553b89e4457f8c6a3dbb89386230

<br><br>

---
# 4. 외부 리소스 

<div align="center">
<br>

### 도메인 http://mechu.dothome.co.kr/
<br>
<img width="329" alt="image" src="https://user-images.githubusercontent.com/119913471/231413106-794e0044-d761-43c1-9c30-e4541fe28863.jpg">
</div>


