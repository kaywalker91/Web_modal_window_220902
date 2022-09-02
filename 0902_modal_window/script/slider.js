$(document).ready(function(){

    // 우리가 보고있는 슬라이드의 번호 : cur
    // 현재 상황은 0번 슬라이드를 보고 있는 상황
    // .item의 개수를 미리 파악 : len
    var slen = $(".slider").length;
    var cur = [];
    var len = [];
    for(i=0; i<slen; i++){
        cur[i] = 0;
        len[i] = $(".slider").eq(i).children(".item").length;
    }

    // sliding이라는 작업은 다음과 같다. (이때 재료는 dir, nth이라고 하자)
        // 다짜고짜 cur[nth]를 dir만큼 증가/감소 시켜서 다음 볼 슬라이드의 번호를 만들자
        // 혹시 그렇게 증가한 cur[nth]가 5 이상인가?
            // cur[nth]를 0으로 바꿔치기
        // 그게아니라면 혹시 그렇게 감소한 cur[nth]가 0보다 작은가?
            // cur[nth]를 마지막번호(len[nth] - 1)로 바꿔치기
        // .slider중에서도 nth번째의 자식 .item들의 스타일중 left의 값을 100%으로 만들기
        // .slider중에서도 nth번째의 자식 .item중에 cur번째의 스타일중 left의 값을 0으로 만들기
    function sliding(dir, nth){
        var current = cur[nth];
        current = current + dir;
        if(current >= len[nth]){
            current = 0;
        }else if(current < 0){
            current = len[nth] - 1;
        }
        $(".slider").eq(nth).children(".item").css("left", "100%");
        $(".slider").eq(nth).children(".item").eq(current).css("left", "0%");
    }


    // .prev가 눌렸을때
        // 방금눌린버튼의 조상중에 .slider라고 부르는 슬라이더컨테이너가 몇번째 인가? : n
        // sliding 계획을 실행한다.(이때 재료는 -1, n번째슬라이더에게 하는말이다)
    // .next가 눌렸을때
        // 방금눌린버튼의 조상중에 .slider라고 부르는 슬라이더컨테이너가 몇번째 인가? : n
        // sliding 계획을 실행한다.(이때 재료는 1, n번째슬라이더에게 하는말이다)
    $(".next").click(function(){
        var n = $(this).parents(".slider").index(".slider");
        sliding(1, n);
    });
    $(".prev").click(function(){
        var n = $(this).parents(".slider").index(".slider");
        sliding(-1, n);
    });



});