/* 내부 폼형 */
const inquiryModal = document.querySelector(".modal-inquiry");            
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

alertBlankInput = (inquiryInput, alertText) => {
    inquiryInput.insertAdjacentElement("afterend", alertText);
    alertText.style.cssText = `display: block; width: 100%; height: 2em; line-height: 2em; margin-bottom: calc(${window.getComputedStyle(inquiryInput).getPropertyValue('margin-bottom')} - 1.5em); text-indent: 0.5em; color: red; font-size: 12px`;
    inquiryInput.style.cssText = "margin-bottom: 0";
}

(() => {alertBlankInput(inquirySelectorToggle, alertCategory);})();
(() => {alertBlankInput(inquiryEmailInput, alertEmail);})();
(() => {alertBlankInput(inquiryTitleInput, alertTitle);})();
(() => {alertBlankInput(inquiryDetailInput, alertDetail);})();


const inquiryModalOpen = () => {
    inquiryModal.style.display = "block";
    inquiryModal.classList.add("active");
    document.body.style.overflow = "hidden";
};

inquiryModalClose.addEventListener('mousedown', () => {
    inquiryModalClose.addEventListener('mouseup', () => {
        inquiryModal.style.display = "none";
        inquiryModal.classList.remove("active");
        document.body.style.overflow = "visible";
    });
});

window.addEventListener('mousedown', (event) => {  // 모달 팝업 외부 클릭 시 이벤트 처리
    if (event.target == inquiryModal) {
            event.target.style.display = "none";
            document.body.style.overflow = "visible";
    }
});

const inquiryInputList = [inquiryEmailInput, inquiryTitleInput, inquiryDetailInput];

inquiryInputList.forEach((e) => {
    if (e.value) {
        e.nextElementSibling.innerText = "";
    }
});

const emailRegexp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

inquiryEmailInput.addEventListener('focus', (event) => {
    event.target.addEventListener('blur', (event) => {
        if(!inquiryEmailInput.value) {
            alertEmail.innerText = "";
            return true;
        } else {
            if (emailRegexp.test(event.target.value)) {
                alertEmail.innerText = "";
                return true;
            } else {
                alertEmail.innerText = "※이메일 형식에 맞게 입력해 주세요.";
            }
        }
    });
});

textEmailRegexp = () => {

}

// 선택한 카테고리 선언
var selectedCategory;

// submit 내용 체크
function checkSubmit () {    
    if(selectedCategory === undefined) {
        if(!alertCategory.innerText) {
            alertCategory.innerText = "※유형을 선택해 주세요.";
        }
        inquirySelectorToggle.focus();
        return false;
    }
    if(!inquiryEmailInput.value) {
        alertEmail.innerText = "※이메일을 입력해 주세요.";
        inquiryEmailInput.focus();
        return false;
    } else if (inquiryEmailInput.value && emailRegexp.test(inquiryEmailInput.value)){
        alertEmail.innerText = "※이메일 형식에 맞게 입력해 주세요.";
    }
    if(!inquiryTitleInput.value) {
        if(!alertTitle.innerText) {
            alertTitle.innerText = "※제목을 입력해 주세요.";
        }
        inquiryTitleInput.focus();
        return false; 
    }
    if(!inquiryDetailInput.value) {
        if(!alertDetail.innerText) {
            alertDetail.innerText = "※내용을 입력해 주세요.";
        }
        inquiryDetailInput.focus();
        return false;
    }

    alertCategory.innerText = '';
    alertEmail.innerText = '';
    alertTitle.innerText = '';
    alertDetail.innerText = '';
    form.submit();
    inquiryModal.classList.remove("active");
    return true;
};

// 문의 유형 카테고리
const inquiryCategory = document.querySelectorAll("li.inquiry-category__item");

// 문의 유형 토글
function inquirySelector(event) {
    if (inquiryCategoryList.style.display === "none") {
        inquiryCategoryList.style.display = "flex";
        document.documentElement.style.setProperty('--toggle-degree', '180deg');
    } else if (inquiryCategoryList.style.display !== "none") {
        inquiryCategoryList.style.display = "none"
        if (event.classList.contains("active") == false) {                                        
            event.innerText = selectedCategory.innerText;
        }
        document.documentElement.style.setProperty('--toggle-degree', '0deg');
    }
};

// 문의 유형 선택
function inquiryTypeChoice(event) {
    document.documentElement.style.setProperty('--toggle-degree', '0deg');
    Array.from(inquiryCategory).forEach((category) => {
        category.classList.remove("active");
    });
    event.classList.add("active");
    inquirySelectorToggle.classList.remove("active");
    inquirySelectorToggle.innerText = "";
    inquirySelectorToggle.insertAdjacentHTML("beforeend", `${event.innerText}<span></span>`);
    inquirySelectorToggle.nextElementSibling.innerText = "";
    inquiryCategoryList.style.display = "none";
    selectedCategory = document.querySelector(".inquiry-category__item.active");                
};

// 문의 유형 가리기 최초 선언
(function(){
    inquiryCategoryList.style.display = "none";
})();

window.addEventListener("keydown", pressEsc, false); 
function pressEsc(e){
    if(e.keyCode === 27) {
        console.log(activedModal = document.querySelector(".modal-inquiry.active"))
        var activedModal = document.querySelector(".modal-inquiry.active");
        if (activedModal) {
            if (document.body.style.overflow == "hidden") {
                document.body.style.overflow == "visible";
            }                    
            activedModal.style.display = "none";
            activedModal.classList.remove("active");
        }
    }
}


