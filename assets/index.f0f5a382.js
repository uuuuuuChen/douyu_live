import{s as d,p as e,b as m,r as a,j as o,V as p,d as i,E as h,g}from"./index.b90462de.js";const f=d.div`
    /* overflow: scroll; */
    .video-list {
        /* padding-left: 5px;
        height: calc(100vh -100px);
        overflow-y: scroll;
        padding-top: 110px; */
        .HomeLive-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            /* padding: 0 5px; */
            width: 100%;
            height: ${e(42)};
        }
        
        .HomeLive-titleLive {
            padding-left: ${e(30)};
            height: 100%;
            line-height: ${e(42)};
            color: #333;
            font-size: ${e(15)};
            background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-live_88adc06.png) no-repeat;
            background-size: ${e(20)} ${e(12)};
            background-position: 0;
        }
        .HomeLive-titleNum {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            line-height: ${e(42)};
        }
        .HomeLive-titleNumText {
            display: block;
            height: 100%;
            font-size: ${e(13)};
            color: #999;
        }
        .HomeLive-titleNumText.mark {
        color: #f70;
        }
        .icon-right {
        margin: 0 ${e(5)};
        font-size: ${e(13)};
        float: right;
        color: rgb(210,210,210);
        }
        .HomeFooter {
            width: 100%;
            overflow: hidden;
        }
        .HomeFooter .HomeFooter-goTop {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: ${e(56)};
        }
        .HomeFooter-goTopIcon {
            display: block;
            margin-right: ${e(5)};
            width: ${e(15)};
            height: ${e(16)};
            background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon-v2_ed53f03.png) -190px 0 no-repeat;
            background-size: ${e(245)} ${e(20)};
        }
        .HomeFooter-goTopText {
            display: block;
            line-height: 1.15;
            font-size: ${e(13)};
            color: #666;
        }
        .HomeFooter-officialDescription {
            width: 100%;
            padding-bottom: ${e(70)};
        }
        .HomeFooter-officialDescriptionText {
            line-height: ${e(17)};
            text-align: center;
            color: #999;
            font-size: ${e(9)};
        }
        .DownloadBtn {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            -webkit-border-radius: 10em;
            -moz-border-radius: 10em;
            border-radius: 10em;
            line-height: ${e(36)};
            background: linear-gradient(90deg,#ff6a00,#ff6a00,#ff4823);
            margin: 0 ${e(15)} ${e(15)};
            color: #fff;
            text-align: center;
            z-index: 999;
            font-size: ${e(14)};
            font-weight: 600;
        }
        .ListPage-contentTitle {
        box-sizing: border-box;
        padding-left: ${e(25)};
        width: 100%;
        height: ${e(42)};
        line-height: ${e(42)};
        font-size: ${e(12)};
        color: #424242;
        background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/icon_play_e54a507.png) 5px no-repeat;
        background-size: ${e(15)} ${e(15)};
    }
    }
`,x=t=>{const{hotlist:r,loading:n}=t;a.exports.useEffect(()=>{},[]);const l=()=>{window.scrollTo(0,0)},c=o("div",{className:"ListPage-contentTitle",children:"\u70ED\u95E8\u6E38\u620F"}),u=r.map(s=>o(p,{video:s,showStatistics:!0},s.rid+Math.random()*1e5));return o(f,{children:i("div",{className:"video-list clear",children:[n?"":c,n?o(h,{style:{padding:"64px 0"},imageStyle:{width:375},description:"\u6682\u65E0\u6570\u636E"}):u,i("div",{className:"HomeFooter",children:[i("div",{className:"HomeFooter-goTop",onClick:l,children:[o("i",{className:"HomeFooter-goTopIcon"}),o("span",{className:"HomeFooter-goTopText",children:"\u8FD4\u56DE\u9876\u90E8"})]}),i("div",{className:"HomeFooter-officialDescription",children:[o("p",{className:"HomeFooter-officialDescriptionText",children:"\u5BA2\u670D\u70ED\u7EBF\uFF1A027-87750710"}),o("p",{className:"HomeFooter-officialDescriptionText",children:"\u6B66\u6C49\u6597\u9C7C\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8"}),o("p",{className:"HomeFooter-officialDescriptionText",children:"\u6E56\u5317\u7701\u6B66\u6C49\u5E02\u4E1C\u6E56\u5F00\u53D1\u533A\u5149\u8C37\u8F6F\u4EF6\u56EDF4\u680B8\u697C"}),o("p",{className:"HomeFooter-officialDescriptionText",children:"\u7248\u6743\u6240\u6709 \xA9 www.douyu.com \u9102ICP\u590715011961\u53F7-1"})]}),o("a",{className:"DownloadBtn",children:"\u6253\u5F00\u6597\u9C7CApp\uFF0C\u770B\u66F4\u591A\u7CBE\u5F69\u5185\u5BB9"})]})]})})},F=t=>({hotlist:t.homedata.hotlist,loading:t.homedata.loading}),b=t=>({getHomeDataActionDispatch(){t(g())}}),v=m(F,b)(a.exports.memo(x));export{v as default};
