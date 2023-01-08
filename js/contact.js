/* 체크박스 체크시 버튼 활성화 ------------------------------------- */
const $checkbox = document.querySelector('.form_checkbox');
const $servicebtn = document.querySelector('.service_btn');

console.log($checkbox);
console.log($servicebtn);

$checkbox.addEventListener('click', () => {
    if ($checkbox.checked) {
        $servicebtn.disabled = false;
    } else {
        $servicebtn.disabled = true;
    }
});

/* 지도 마커 표시하는 방법 ----------------------------------------- */
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.526968778968936, 126.92801518145679), // 지도의 중심좌표 헥톤 프로젝트 위치 좌표
        level: 6, // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.

var imageSrc = 'https://hectonproject.com/img/pin.png', // 마커이미지의 주소입니다.
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다.
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다.
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.526968778968936, 126.92801518145679); // 마커가 표시될 위치입니다.

// 마커를 생성합니다.
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정합니다.
marker.setMap(map);
