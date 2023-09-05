const inquiryCategoryList = document.querySelector(".inquiry-category__list");
const inquiryModalClose = document.querySelector(".modal-inquiry .close");

var form = document.inquiryForm;
const inquirySelectorToggle = document.querySelector(".inquiry-category__selector");
const inquiryEmailInput = form.inquiryEmail;
const inquiryTitleInput = form.inquiryTitle;
const inquiryDetailInput = form.inquiryDetail;
var alertCategory = document.createElement('span');
var alertEmail = document.createElement('span');
var alertTitle = document.createElement('span');
var alertDetail = document.createElement('span');


inquiryModalClose.addEventListener('mousedown', () => {
    inquiryModalClose.addEventListener('mouseup', () => {
        designModal.style.display = "none";
        designModal.classList.remove("active");
        document.body.style.overflow = "visible";
    });
});

window.addEventListener('mousedown', (event) => {  // 모달 팝업 외부 클릭 시 이벤트 처리
    if (event.target == designModal) {
            event.target.style.display = "none";
            document.body.style.overflow = "visible";
    }
});
