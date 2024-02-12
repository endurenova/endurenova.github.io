const bookLayer = document.querySelector('.book-binder__box');
const bookExit = bookLayer.querySelector('.exit-layer');
const bookView = bookLayer.querySelector('.book-viewer');
const bookBinder = bookLayer.querySelector('.book-binder');
const bookSlider = bookLayer.querySelector('.book-slider');
const bookSliderToggle = bookSlider.querySelector('.range-slider');
const bookCoverFr = bookBinder.querySelector('.book-cover.Fr');
const bookCoverRr = bookBinder.querySelector('.book-cover.Rr');
const bookCoverList = [bookCoverFr, bookCoverRr];
const bookSideTp = bookBinder.querySelector('.book-side__face--top');
const bookSideBt = bookBinder.querySelector('.book-side__face--bottom');
const bookBinderList = Array.from(bookBinder.children).slice(1, undefined);
const bookSide = bookBinder.querySelector('.book-side .cr-Side');
const bookPageList = bookBinder.querySelector('.book-page-list');
const bookPages = bookPageList.querySelectorAll('.binder__page');
let bookLeftPages = [];
let bookRightPages = [];
let bookPageWidth = Number(
  getComputedStyle(document.documentElement).getPropertyValue('--book-page-width').split('vmin')[0],
);
let pageIndex;

(() => {
  Array.from(bookPages).forEach((e, i) => {
    e.style.cssText = `z-index: ${bookBinderList.length - i};`;
  });
  bookSliderToggle.setAttribute('max', bookPages.length);
  const bookSideCount = getComputedStyle(document.documentElement).getPropertyValue('--book-side-radius-face-count');
  const bookSideDegree = 360 / bookSideCount;
  for (var i = 0; i < bookSideCount / 2; i++) {
    bookSide.insertAdjacentHTML('beforeend', `<span class="face side s${i}"></span>`);
  }

  let bookSideElement = bookSide.querySelectorAll('.side');
  Array.from(bookSideElement).forEach((e, i) => {
    if (i === 0) {
      e.style.cssText = `transform: rotateY(${
        -bookSideDegree / 2
      }deg) translate3D(0, 0, calc(var(--book-cover-thick)));`;
    } else {
      e.style.cssText = `transform: rotateY(${
        -i * bookSideDegree - bookSideDegree / 2
      }deg) translate3D(0, 0, calc(var(--book-cover-thick)));`;
    }
  });
})();

resetPageSequence = () => {
  // 오른편 페이지들 재정렬
  const children = Array.from(bookPageList.children);
  children.sort((a, b) => {
    const indexA = parseInt(a.dataset.pageIndex);
    const indexB = parseInt(b.dataset.pageIndex);
    return indexA - indexB;
  });
  children.forEach(child => bookPageList.appendChild(child));
  Array.from(bookPages).forEach(e => {
    e.querySelector('.page-odd').classList.add('upper');
    e.querySelector('.page-even').classList.remove('upper');
  });
};

closeCoverPages = () => {
  Array.from(bookPages).forEach((e, i) => {
    e.style.cssText = `
        z-index: ${bookPages.length - i};
        width: ${bookPageWidth}vmin;
        `;
  });
  bookSliderToggle.setAttribute('value', 0);
};

refreshRight = () => {
  // 오른편 페이지들 재정렬
  bookRightPages = document.querySelectorAll('.binder__page.right'); // 페이지 플립 후의 오른쪽 페이지 양
  Array.from(bookRightPages).forEach((e, i) => {
    e.style.cssText = `z-index: ${bookRightPages.length - i}; width: ${
      i * 0.2 + bookPageWidth - bookPages.length * 0.2
    }vmin;`;
  });
};

refreshLeft = () => {
  // 왼편 페이지들 재정렬
  bookLeftPages = document.querySelectorAll('.binder__page.left'); // 페이지 플립 후의 왼쪽 페이지 양
  Array.from(bookLeftPages).forEach((e, i) => {
    e.style.cssText = `z-index: ${i}; width: ${
      (bookLeftPages.length - i) * 0.2 + bookPageWidth - bookPages.length * 0.2
    }vmin;`;
  });
};

resetBook = () => {
  bookCoverFr.classList.remove('flipOpen');
  bookCoverRr.classList.remove('flipClose');
  bookBinder.classList.remove('open');
  bookLayer.classList.remove('open');
  bookSlider.classList.remove('active');
  bookCoverFr.removeEventListener(clickEventType, statusBookCover);
  bookCoverRr.removeEventListener(clickEventType, statusBookCover);
  Array.from(bookPages).forEach(e => {
    // 페이지 넘기는 함수
    if (e.classList.contains('left')) {
      e.classList.remove('flipPageLeft', 'left');
      e.classList.add('flipPageRight', 'right');
    }
  });
  resetPageSequence();
};

setTimeout(() => {
  bookExit.addEventListener(clickEventType, resetBook);
}, 300);

statusBookCover = () => {
  bookLeftPages = document.querySelectorAll('.binder__page.left');
  bookRightPages = document.querySelectorAll('.binder__page.right');
  if (bookLeftPages.length === 0) {
    // 앞 커버일 때
    if (bookCoverFr.classList.contains('flipOpen')) {
      // 앞 커버가 열려 있을 때
      bookCoverFr.classList.remove('flipOpen');
      bookBinder.classList.remove('open');
      bookSlider.classList.remove('active');
      closeCoverPages();
    } else {
      // 앞 커버가 닫혀 있을 때
      bookCoverFr.classList.add('flipOpen');
      bookBinder.classList.add('open');
      bookSlider.classList.add('active');
      refreshRight();
    }
  } else if (bookRightPages.length === 0) {
    // 뒷 커버일 때
    if (bookCoverRr.classList.contains('flipClose')) {
      // 뒷 커버가 닫혀 있을 때
      bookCoverRr.classList.remove('flipClose');
      bookBinder.classList.remove('close');
      refreshLeft();
    } else {
      // 뒷 커버가 열려 있을 때
      bookCoverRr.classList.add('flipClose');
      bookBinder.classList.add('close');
      closeCoverPages();
    }
  }
};
let clickEventType = 'click';
bookCoverFr.addEventListener('click', statusBookCover);
bookCoverRr.addEventListener('click', statusBookCover);

flipLeft = page => {
  // Left <- Right
  page.classList.add('flipPageLeft', 'left');
  setTimeout(() => {
    page.classList.remove('flipPageRight', 'right');
    refreshRight();
    refreshLeft();
    setTimeout(() => {
      if (page.querySelector('.flag-tag')) {
        page.querySelector('.flag-tag').classList.remove('upper');
      }
      page.querySelector('.page-odd').classList.remove('upper');
      page.querySelector('.page-even').classList.add('upper');
      bookRightPages.length < 1
        ? bookCoverRr.addEventListener(clickEventType, statusBookCover)
        : bookCoverRr.removeEventListener(clickEventType, statusBookCover);
    }, 50);
  }, 50);
};
flipRight = page => {
  // Left -> Right
  page.classList.add('flipPageRight', 'right');
  refreshRight();
  setTimeout(() => {
    page.classList.remove('flipPageLeft', 'left');
    refreshLeft();
    setTimeout(() => {
      if (page.querySelector('.flag-tag')) {
        page.querySelector('.flag-tag').classList.add('upper');
      }
      page.querySelector('.page-odd').classList.add('upper');
      page.querySelector('.page-even').classList.remove('upper');
      bookLeftPages.length < 1
        ? bookCoverFr.addEventListener(clickEventType, statusBookCover)
        : bookCoverFr.removeEventListener(clickEventType, statusBookCover);
    }, 50);
  }, 50);
};

let currentPage = parseInt(bookSliderToggle.getAttribute('value'));
Array.from(bookPages).forEach(e => {
  // 페이지 넘기는 함수
  e.addEventListener(clickEventType, event => {
    event.preventDefault();
    if (e.classList.contains('right')) {
      // 해당 페이지 위치가 오른쪽인지
      flipLeft(e);
      bookLeftPages = document.querySelectorAll('.binder__page.left');
      bookSliderToggle.setAttribute('value', bookLeftPages.length + 1);
    } else if (e.classList.contains('left')) {
      // 왼쪽 인지 확인
      flipRight(e);
      bookLeftPages = document.querySelectorAll('.binder__page.left');
      bookSliderToggle.setAttribute('value', bookLeftPages.length + 1);
    }
    console.log(bookLeftPages.length + 'left');
    console.log(bookRightPages.length + 'right');
  });
  return (currentPage = parseInt(bookSliderToggle.getAttribute('value')));
});

let sliderClicked = false;
bookSliderToggle.addEventListener('mousedown', () => {
  sliderClicked = true;
});

let countFlipRight;
let countFlipLeft;
let changedValue;
bookSliderToggle.addEventListener('mousemove', e => {
  if (sliderClicked) {
    countFlip = Math.abs(changedValue - currentPage);
    changedValue = parseInt(e.target.getAttribute('value'));
    if (currentPage < changedValue) {
      e.preventDefault();
      bookRightPages = document.querySelectorAll('.binder__page.right');
      if (bookRightPages.length > 0) {
        flipLeft(bookRightPages[0]); // Left -> Right
        bookSliderToggle.setAttribute('value', e.target.value);
        currentPage = parseInt(bookSliderToggle.getAttribute('value'));
        refreshRight();
        refreshLeft();
      }
    } else if (currentPage > changedValue) {
      e.preventDefault();
      bookLeftPages = document.querySelectorAll('.binder__page.left');
      if (bookLeftPages.length > 0) {
        flipRight(bookLeftPages[bookLeftPages.length - 1]); // Left <- Right
        bookSliderToggle.setAttribute('value', e.target.value);
        currentPage = parseInt(bookSliderToggle.getAttribute('value'));
        refreshRight();
        refreshLeft();
      }
    }
    console.log(bookLeftPages.length + 'left');
    console.log(bookRightPages.length + 'right');
    bookSliderToggle.setAttribute('value', e.target.value);
  }
});

bookSliderToggle.addEventListener('mouseup', () => {
  sliderClicked = false;
  currentPage = bookSliderToggle.getAttribute('value');
});
const indexMain = 'C8C3B3';
// const singleMain = '31AF79';
const singleMain = '6C5F5B';
const pintMain = '7DBBAD';
const overMain = '794C4C';
const dotoriMain = '50661E';
const calMain = 'B8A292';
const bnMain = '040214';
// const fairyMain = '646496';
const fairyMain = '706233';

const mainHexColor = [indexMain, singleMain, pintMain, overMain, dotoriMain, calMain, bnMain, fairyMain];

hex2dec = hexString => {
  let r = hexString[0] + hexString[1];
  let g = hexString[2] + hexString[3];
  let b = hexString[4] + hexString[5];
  let rgb = [r, g, b];
  const RGB = [];
  for (i = 0; i < rgb.length; i++) {
    RGB.push(parseInt(rgb[i], 16));
  }
  return RGB;
};

hexListToRGB = hexList => {
  let RGBIndex = 0;
  let convertedRGBList = [];
  while (RGBIndex < hexList.length) {
    convertedRGBList.push(hex2dec(hexList[RGBIndex]));
    console.log(hex2dec(hexList[RGBIndex]));
    RGBIndex++;
  }
  console.log(convertedRGBList);
  return convertedRGBList;
};

autoPostColor = RGBList => {
  var convertedIndex = 0;
  var convertedContents = 0;
  while (convertedContents < RGBList.length) {
    let rI = RGBList[convertedContents][0];
    let gI = RGBList[convertedContents][1];
    let bI = RGBList[convertedContents][2];

    var contentsCoverColor = bookBinder.querySelectorAll('.contents-color')[convertedIndex];
    var flagColor = bookBinder.querySelectorAll('.flag-tag__name')[convertedIndex];

    flagColor.style.backgroundColor = `rgba(${rI}, ${gI}, ${bI}, 0.95)`;
    contentsCoverColor.style.backgroundColor = `rgba(${rI}, ${gI}, ${bI}, 1)`;

    convertedIndex++;
    convertedContents++;
  }
  var convertedIndex = 0;
  var convertedContents = 1;
  while (convertedContents < RGBList.length) {
    var gradientOpacity = 0.6;
    let rC = RGBList[convertedContents][0];
    let gC = RGBList[convertedContents][1];
    let bC = RGBList[convertedContents][2];

    var postIndex = bookBinder.querySelectorAll('.post-it')[convertedIndex];
    let postGradient = 'linear-gradient(180deg,';

    while (gradientOpacity < 1) {
      var RGBA;
      if (gradientOpacity >= 0.9) {
        RGBA = `rgba(${rC}, ${gC}, ${bC}, ${gradientOpacity}))`;
      } else {
        RGBA = `rgba(${rC}, ${gC}, ${bC}, ${gradientOpacity}),`;
      }
      postGradient += RGBA;
      gradientOpacity += 0.1;
    }

    postIndex.style.background = postGradient;

    convertedIndex++;
    convertedContents++;
  }
};
autoPostColor(hexListToRGB(mainHexColor));
