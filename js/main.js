
$(document).ready(function(){

    //foote list
    $('.sub_co_lst > li').mouseEvent(function(){
        $(this).addClass('active');
    })
    .mouseLeave(function(){
        $(this).removeClass('active');
    });

    //각 section의 위부터 거리를 알아옴

    var pos = []; //변수 pos는 배열(array)

    for(var i = 1; i<7 ; i++){
        pos.push( $(`#section${i}`).offset().top);
    }
    console.log(pos);

    $(window).scroll(function(){
        var scrollH = $(window).scrollTop(); //스크롤 된 거리를 변수에
        $('.s_num').text(scrollH); //스크롤 된 거리를 빈 화면에 나오게
    })

    $('#remote a').on('click', function(e){
        e.preventDefault();
        var ttt = this.hash;  //클릭한 #(hash)값을 변수에 넣는다, hash는 자바라서 제이쿼리 타겟 지정방식은 안먹힘
        console.log(`클릭한 remote의 해쉬 값은? ${ttt}`);

        var thisSecH = $(ttt).offset().top; //클릭한 section이 얼마 떨어져있는지 알아온다

        $('html, body').animate({scrollTop:thisSecH},500,'swing')
    });

    //각 section 안에 있는 btnDown 버튼을 누르면 아래 section으로 화면 이동

    $('section .btnDown').on('click', function(){
        var aa = $(this).parents('section').index();
        $('html, body').animate({scrollTop:pos[aa+1]},500,'swing')
    })



});



/*
A.offset().top - ㅁ가 브라우저의 제일 위에서부터 얼마나 떨어져있는지 구하는 메소드
A.push(B)
for(초기값; 조건식; 증감식){
    실행구
}
A.index() - 몇 번째 요소인지 알아오는 것 (0부터 시작)
*/
