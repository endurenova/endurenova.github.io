$(document).ready(function(){
    let swipeItemWidth = document.querySelector(".web-publishing .project-film").clientWidth;
    
    
    // count 만큼 스와이프 해주는 함수
    const swipeItem = function (cur, prev) {
        if (cur > prev) {
            while (cur > prev){
                $(".web-publishing .project-list").animate({left:"-=" + swipeItemWidth},"fast",function(){
                    $(".web-publishing .project-list").css("left", (swipeItemWidth));
                    $(".web-publishing .project-film").first().appendTo($(".web-publishing .project-list"));
                });
                prev++;
            }
        } else if (cur < prev) {
            while (cur < prev){
                $(".web-publishing .project-list").animate({left:"+=" + swipeItemWidth},"fast",function(){
                    $(".web-publishing .project-list").css("left", (swipeItemWidth));
                    $(".web-publishing .project-film").last().prependTo($(".web-publishing .project-list"));
                });
                prev--;
            }
        }
    }
    // 백그라운드 체인지
    backgroundChager = () => {
        
    }
    

    // 슬라이드 버튼
    $("span.direction").on("click",function(){
        if ($(this).hasClass("next-right")) {
            $(".web-publishing .project-list").stop().animate({left:"+=" + swipeItemWidth},"slow",function(){
                $(".web-publishing .project-list").css("left", (swipeItemWidth));
                $(".web-publishing .project-film").last().prependTo($(".web-publishing .project-list"));
                paginateActive();
            });
        } else if ($(this).hasClass("prev-left")) {
            $(".web-publishing .project-list").stop().animate({left:"-=" + swipeItemWidth},"slow",function(){
                $(".web-publishing .project-list").css("left", (swipeItemWidth));
                $(".web-publishing .project-film").first().appendTo($(".web-publishing .project-list"));
                paginateActive();
            });
        }

    });
    
    $(".web-publishing .project-film").last().prependTo($(".web-publishing .project-list"));
    $(".web-publishing .project-list").css("left", (swipeItemWidth));
    
    // 페이지 자동 액티브
    let itemIdx = document.querySelector(".web-publishing .project-list").children[1].dataset.itemIndex;
    function paginateActive() {
        itemIdx = document.querySelector(".web-publishing .project-list").children[1].dataset.itemIndex;
        $(".pagination-list li").siblings().removeClass("active");
        $(".pagination-list li").eq(itemIdx).addClass("active");
    }

    
    const filmBg = [
        "url(../images/publishing-1.gif)",
        "url(../images/publishing-2.png)",
        "url(../images/publishing-3.png)"
    ];
    
    $(".pagination-list li").on("click",function(){
        let pageIdx = $(this).index();
        let prevActive = document.querySelector(".pagination-list li.active").dataset.pageIndex;
        itemIdx = document.querySelector(".web-publishing .project-list").children[1].dataset.itemIndex;        
        if(!$(this).hasClass("active")) {
            $(".pagination-list li").siblings().removeClass("active");
            $(".pagination-list li").eq(pageIdx).addClass("active");
            swipeItem(pageIdx, prevActive);
            $(".web-publishing").css("background", filmBg[pageIdx]);
        } 
    });
});
