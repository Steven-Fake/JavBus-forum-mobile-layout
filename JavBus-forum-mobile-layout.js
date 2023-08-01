// ==UserScript==
// @name         JavBus论坛移动端界面适配
// @namespace    https://github.com/Steven-Fake/JavBus-forum-mobileLayout
// @homepageURL  https://sleazyfork.org/zh-CN/users/1140711-steven-fake
// @version      1.0
// @description  使司机社(JavBus)的论坛适应移动端界面
// @author       Steven-Fake
// @icon         https://www.javbus.com/favicon.ico
// @match        https://www.javbus.com/forum*
// @match        https://www.cdnbus.lol/forum*
// @match        https://www.dmmbus.lol/forum*
// @match        https://www.busfan.cfd/forum*
// @grant        none
// ==/UserScript==


(function () {
    //使用adjust变量来判断是否需要调整为移动端布局，并添加监听事件
    const adjust = window.innerHeight > window.innerWidth && window.innerWidth < 1600;
    if (adjust) {
        console.log("JavBus论坛手机界面适配v1.0: 启用移动端布局");

        const pageType = ((url) => {
            if (url.includes("tid=")) { return "post"; }
            else if (url.includes("uid=")) { return "profile"; }
            else if (url.includes("action=login")) { return "login"; }
            else { return "index"; }
        })(window.location.href);

        document.getElementsByClassName("bcpic2")[0].style.display = "none";//隐藏页面顶端的横幅广告

        /* 注入自适应调整的meta标签 */
        var appendMeta = document.createElement("meta");
        appendMeta.name = "viewport";
        appendMeta.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no";
        document.getElementsByTagName("head")[0].appendChild(appendMeta);

        /*调整顶栏*/
        document.getElementsByClassName("jav-logo")[0].style.display = "none";//隐藏logo
        var nav = document.getElementById("toptb");
        var nav_ul = nav.firstElementChild.firstElementChild.firstElementChild;
        var search_div = document.getElementsByClassName("jav-form-group")[0];
        nav.style.width = "100%"; nav.style.minWidth = 0; nav.style.padding = 0;
        //隐藏除搜索框之外的所有li
        for (let i = 0; i < nav_ul.childElementCount; i++) {
            if (i != 1) { nav_ul.children[i].style.display = "none"; }
        }
        //调整搜索框大小
        search_div.style.width = "35%"; search_div.style.minWidth = 0;
        search_div.children[0].style.width = "50%"; search_div.children[0].placeholder = ""; search_div.children[0].style.marginLeft = "5%";
        search_div.children[1].style.minWidth = "50px"; search_div.children[1].style.marginRight = 0;
        search_div.outerHTML = '<li>' + search_div.outerHTML + '</li>';
        //将个人信息按钮移动到nav中
        var info_li = document.createElement("li");
        info_li.appendChild(document.getElementsByClassName("login-wrap y")[0]);
        nav_ul.appendChild(info_li);

        /*调整主要内容*/
        var main_wrapper_div = document.getElementById("wp");
        var main_div = document.getElementsByClassName("mn")[0];
        //隐藏层级导航栏
        if (pageType == "post") {
            document.getElementById("pt").children[0].style.display = "none";
        } else if (pageType == "index") {
            document.getElementById("pt").children[1].style.display = "none";
            document.getElementById("chart").children[1].style.float = "left";//调整部分选项为右浮动
        }
        //宽度调整
        main_wrapper_div.style.width = "100%"; main_wrapper_div.style.minWidth = 0;
        main_div.style.width = "100%"; main_div.style.minWidth = 0;

        //轮播图片框和帖子推荐列表
        if (pageType == "index") {
            main_wrapper_div.style.width = "100%"; main_wrapper_div.style.minWidth = 0;//调整宽度
            main_div.style.width = "100%"; main_div.style.minWidth = 0;//调整宽度
            var carousel_div = main_div.firstElementChild;
            carousel_div.style.width = "100%"; carousel_div.style.height = "auto"; carousel_div.style.minWidth = 0; carousel_div.style.padding = 0;//调整宽度
            var carousel_left_div = carousel_div.children[0]; //调整轮播图片框
            carousel_left_div.style.float = "none"; carousel_left_div.style.width = "100%"; carousel_left_div.style.height = "auto";
            var carousel_right_div = carousel_div.children[1];
            carousel_right_div.style.margin = 0; carousel_right_div.marginTop = "10px"; carousel_right_div.style.width = "100%"; carousel_right_div.style.height = "auto";
            //帖子推荐列表
            var post_list_div = document.getElementsByClassName("sideMenu");
            for (let i = 0; i < post_list_div.length; i++) {
                let sideMenu = post_list_div[i];
                for (let j = 0; j < sideMenu.childElementCount; j++) {
                    sideMenu.children[j].style.width = "100%";
                    //将<em>换成<b>
                    var em = sideMenu.children[j].firstChild;
                    var b = document.createElement("b");
                    b.innerHTML = em.innerHTML;
                    b.innerText += ": ";
                    sideMenu.children[j].replaceChild(b, em);
                }
            }
            //两个分区板块
            var comprehensive_tbody = document.getElementsByClassName("fl_tb")[0].firstElementChild;
            var welfare_tbody = document.getElementsByClassName("fl_tb")[1].firstElementChild;
            for (let i = 0; i < comprehensive_tbody.childElementCount; i++) {//调整“综合交流区”布局
                let area_tr = comprehensive_tbody.children[i]; //分区(tr)
                for (let j = 0; j < area_tr.childElementCount; j++) {
                    let area_td = area_tr.children[j]; //分区的各项描述信息td
                    if (j != 0 && j != 1) {//j=0是分区的图标,j=1是其他信息的目标td
                        area_tr.children[1].innerHTML += area_td.outerHTML;
                        area_td.style.display = "none";
                    }
                }
            }
            for (let i = 0; i < welfare_tbody.childElementCount; i++) {//调整“福利讨论分区”布局
                let area_tr = welfare_tbody.children[i]; //分区(tr)
                for (let j = 0; j < area_tr.childElementCount; j++) {
                    let area_td = area_tr.children[j]; //分区的各项描述信息td
                    if (j != 0 && j != 1) {//j=0是分区的图标,j=1是其他信息的目标td
                        area_tr.children[1].innerHTML += area_td.outerHTML;
                        area_td.style.display = "none";
                    }
                }
            }
        };

        //调整帖子和回复中的图片尺寸
        if (pageType == "post") {
            var post_td = document.getElementsByClassName("t_f");
            for (let i = 0; i < post_td.length; i++) {
                var imgs = post_td[i].getElementsByTagName("img");
                for (let j = 0; j < imgs.length; j++) {
                    if (!imgs[j].src.includes("/static/image/smiley/")) {//不调整表情图片
                        imgs[j].style.width = "100%";
                        imgs[j].style.height = "auto";
                    }
                }
            }
        }

        //调整个人信息页的发帖表格布局
        if (pageType == "profile") {
            if (document.getElementsByClassName("th").length > 0) {
                var post_table = document.getElementsByClassName("th")[0];
                //按照1:4:2:1:2的比例调整各列宽度
                post_table.children[0].style.width = "10%";
                post_table.children[1].style.width = "40%";
                post_table.children[2].style.width = "20%";
                post_table.children[3].style.width = "10%";
                post_table.children[4].style.width = "20%";
            }
        }

        //调整登录界面
        if (pageType == "login") {
            document.getElementById("ct").style.width = "100%";//调整浮窗的宽度
            let floatWindow = document.getElementsByClassName("biaoqi_dl");
            let floatWindowInfo_div = document.getElementsByClassName("rfm");
            let buttonWrappers_div = document.getElementsByClassName("rfm bw0");
            let buttons = document.getElementsByClassName("pn pnc");
            for (let i = 0; i < floatWindow.length; i++) {//调整浮窗的边距
                floatWindow[i].style.marginLeft = 0;
                floatWindow[i].style.marginRight = 0;
            }
            for (let i = 0; i < floatWindowInfo_div.length; i++) {//调整浮窗中各条信息的边距
                floatWindowInfo_div[i].style.width = "100%";
                floatWindowInfo_div[i].style.paddingLeft = "5%";
            }
            for (let i = 0; i < buttonWrappers_div.length; i++) {
                buttonWrappers_div[i].style.width = "auto";//调整按钮的宽度
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.width = "auto";//调整按钮的宽度
            }
            document.getElementsByClassName("f_c altw")[0].style.padding = 0; //跳转显示框
        }
        /*侧边栏*/
        if (pageType == "index") {
            let sidebar_div = document.getElementById("sd");
            var sidebarHotTopics_div = sidebar_div.firstElementChild;
            var sidebarChoice_div = sidebar_div.children[1];
            //调整宽度
            sidebar_div.style.width = "100%"; sidebar_div.style.minWidth = 0;
            sidebarHotTopics_div.style.width = "100%"; sidebarHotTopics_div.style.minWidth = 0;
            sidebarChoice_div.style.width = "100%"; sidebarChoice_div.style.minWidth = 0;
            var hotTopicsContainer_div = document.getElementsByClassName("main-right-zuixin")[0];
            for (let i = 0; i < hotTopicsContainer_div.childElementCount; i++) {
                let post_li = hotTopicsContainer_div.children[i];
                post_li.firstElementChild.firstElementChild.width = "100%";
            }
            //显示“热门主题”完整的标题
            var hotTopicsTitle_div = document.getElementsByClassName("comment-post");
            for (let i = 0; i < hotTopicsTitle_div.length; i++) {
                hotTopicsTitle_div[i].firstElementChild.textContent = hotTopicsTitle_div[i].firstElementChild.title;
            }
            //显示“精选内容”完整的标题
            var selectedTitle_div = document.getElementsByClassName("main-right-tw")[0];
            selectedTitle_div.firstElementChild.children[1].firstElementChild.textContent = selectedTitle_div.firstElementChild.children[1].firstElementChild.title;
            document.getElementsByClassName("main-right-tw-txt")[0].style.width = "100%";
        } else if (pageType == "post") {
            let sidebar_div = document.getElementsByClassName("sd sd_allbox")[0];
            var selectedContent_div = document.getElementsByClassName("main-right-box cl");
            var selectTheme_div = document.getElementsByClassName("main-right-zuixin")[0];
            //调整宽度
            sidebar_div.style.width = "100%"; sidebar_div.style.minWidth = 0;
            for (let i = 0; i < selectedContent_div.length; i++) {
                selectedContent_div[i].style.width = "100%"; selectedContent_div[i].style.minWidth = 0;
            }
            //调整“精选主题”每个li的宽度
            for (let i = 0; i < selectTheme_div.childElementCount; i++) {
                let post_li = selectTheme_div.children[i];
                post_li.firstElementChild.firstElementChild.width = "100%";
            }
        }
        /* 调整回到页首按钮的位置 */
        var backToTop_div = document.getElementsByClassName("biaoqi-fix-area")[0];
        backToTop_div.style.left = 0; backToTop_div.style.marginLeft = "80%";
        backToTop_div.firstElementChild.style.bottom = "10%";
        /*调整页脚*/
        var footer = document.getElementsByClassName("jav-footer")[0];
        footer.style.width = "100%"; footer.style.minWidth = 0;
        footer.style.padding = 0;
        footer.firstElementChild.style.padding = "10px";
    } else {
        let tip = "JavBus论坛手机界面适配v1.0: 未启用移动端布局，原因: ";
        if (window.innerWidth >= 1600) {
            if (window.innerWidth >= window.innerHeight) { console.log(tip + "当前屏幕宽度大于1600px, 且不为竖屏。"); }
            else { console.log(tip + "当前屏幕宽度大于1600px。"); }
        } else {
            if (window.innerWidth >= window.innerHeight) { console.log(tip + "当前屏幕不为竖屏。"); }
            else { console.log(tip + "未知原因。"); }
        }
        console.log("width:", window.innerWidth, "height:", window.innerHeight);
    }
})();