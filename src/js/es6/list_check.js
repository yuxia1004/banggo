$(".procheck_1").hover(
    function(){
        $(".procheck_1").css({"border":"1px solid red","margin":"-1px"});

    },
    function(){
        $(".procheck_1").css({"border":"none","margin":"0px"});
    }
)
$(".procheck_2").hover(
    function(){
        $(".procheck_2").css({"border":"1px solid red","margin":"-1px"});
        $(".pro_1").css({"opacity":"0","position":"absolute"});
        $(".pro_2").css({"opacity":"1","position":"relative"});

    },
    function(){
        $(".procheck_2").css({"border":"none","margin":"0px"});
        $(".pro_1").css({"opacity":"1","position":"relative"});
        $(".pro_2").css({"opacity":"0","position":"absolute"});
        
    }
)
$(".procheck_3").hover(
    function(){
        $(".procheck_3").css({"border":"1px solid red","margin":"-1px"});
        $(".pro_1").css({"opacity":"0","position":"absolute"});
        $(".pro_3").css({"opacity":"1","position":"relative"});

    },
    function(){
        $(".procheck_3").css({"border":"none","margin":"0px"});
        $(".pro_1").css({"opacity":"1","position":"relative"});
        $(".pro_3").css({"opacity":"0","position":"absolute"});
    }
)
$(".procheck_4").hover(
    function(){
        $(".procheck_4").css({"border":"1px solid red","margin":"-1px"});
        $(".pro_1").css({"opacity":"0","position":"absolute"});
        $(".pro_4").css({"opacity":"1","position":"relative"});

    },
    function(){
        $(".procheck_4").css({"border":"none","margin":"0px"});
        $(".pro_1").css({"opacity":"1","position":"relative"});
        $(".pro_4").css({"opacity":"0","position":"absolute"});
    }
)
