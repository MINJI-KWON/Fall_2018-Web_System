<template>
    <div class="view_main_feed">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <StickyHeader/>
        <UserInfo/>

        <div class="view_main_page_menu">
            <vs-tabs :color="point" vs-alignment="center">
                <vs-tab vs-label="개인 피드">
                    <div>
                        <FeedPage/>
                    </div>
                </vs-tab>
                <vs-tab vs-label="전체 피드">
                    <div>
                        <FeedPage/>
                    </div>
                </vs-tab>
                <vs-tab vs-label="게시판">
                    <div>
                        <FreeBoard/>
                    </div>
                </vs-tab>
            </vs-tabs>
        </div>

        <footer class="footer">
            권민지 김필선 이정관 이계보 ⓒ 2018 Fit Factory
        </footer>
    </div>
</template>

<script>
  import UserInfo from "../components/UserInfo"
  import StickyHeader from "../components/StickyHeader"
  import PostMsg from "../components/PostMsg"
  import FeedPage from "../components/FeedPage";
  import FreeBoard from "../components/FreeBoard"
  export default {
      name: "ViewMainFeed",
      components: {
          FeedPage,
          PostMsg,
          UserInfo,
          StickyHeader,
          FreeBoard
      },
      data() {
          return {
              colorx: '#808080',
              point: '#25b7d3'
          }
      }
  }
</script>

<style scoped>
    .view_main_feed {
        text-align: center;
    }
    .view_main_page_menu{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .footer {
       font-size: 12px;
       font-weight: bold;
       color: lightgray;
       margin-top: 30px;
       margin-bottom: 30px;
    }
</style>