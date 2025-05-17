document.addEventListener("DOMContentLoaded", () => {
  // 썸네일 이미지
  const thumbnails = document.querySelectorAll(".thumbnail")
  const mainImage = document.getElementById("mainImage")

  // 찜하기 버튼
  const btnWishlist = document.getElementById("btnWishlist")

  // 예약하기 버튼
  const btnReserve = document.getElementById("btnReserve")

  // 탭 요소
  const contentTabs = document.querySelectorAll(".content-tab")
  const tabContents = document.querySelectorAll(".tab-content")

  // 커리큘럼 더 보기 버튼
  const btnMoreCurriculum = document.getElementById("btnMoreCurriculum")

  // FAQ 아이템
  const faqItems = document.querySelectorAll(".faq-item")

  // 리뷰 필터 요소
  const reviewSort = document.getElementById("reviewSort")
  const filterPhotos = document.getElementById("filterPhotos")

  // 리뷰 페이지네이션
  const paginationButtons = document.querySelectorAll(".reviews-pagination .btn-page")

  // 주소 복사 버튼
  const btnCopyAddress = document.querySelector(".btn-copy-address")

  // 썸네일 이미지 클릭 이벤트
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // 모든 썸네일 비활성화
      thumbnails.forEach((t) => t.classList.remove("active"))

      // 현재 썸네일 활성화
      this.classList.add("active")

      // 메인 이미지 변경
      mainImage.src = this.dataset.src
    })
  })

  // 찜하기 버튼 클릭 이벤트
  btnWishlist.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      // 찜하기 토글
      btnWishlist.classList.toggle("active")
      const icon = btnWishlist.querySelector("i")

      if (btnWishlist.classList.contains("active")) {
        icon.className = "fas fa-heart"
        btnWishlist.textContent = " 찜함"
        btnWishlist.prepend(icon)
      } else {
        icon.className = "far fa-heart"
        btnWishlist.textContent = " 찜하기"
        btnWishlist.prepend(icon)
      }
    } else {
      // 로그인 모달 열기
      alert("로그인이 필요한 기능입니다.")
      window.location.href = "login.html"
    }
  })

  // 예약하기 버튼 클릭 이벤트
  btnReserve.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      // 예약 페이지로 이동 (실제 구현에서는 예약 페이지 또는 모달 열기)
      alert("예약 페이지로 이동합니다.")
      // 실제 구현에서는 아래 주석 해제
      // window.location.href = "reservation.html?class=테니스 레슨";
    } else {
      // 로그인 모달 열기
      alert("로그인이 필요한 기능입니다.")
      window.location.href = "login.html"
    }
  })

  // 탭 클릭 이벤트
  contentTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 모든 탭 비활성화
      contentTabs.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))

      // 현재 탭 활성화
      tab.classList.add("active")
      const tabId = tab.dataset.tab + "Tab"
      document.getElementById(tabId).classList.add("active")
    })
  })

  // 커리큘럼 더 보기 버튼 클릭 이벤트
  btnMoreCurriculum.addEventListener("click", () => {
    // 추가 커리큘럼 아이템 생성
    const curriculumList = document.querySelector(".curriculum-list")
    const newItems = [
      {
        title: "6회차: 스매시와 로브",
        duration: "120분",
        content: ["스매시 기본 자세", "스매시 연습", "로브 기본 자세", "로브 연습"],
      },
      {
        title: "7회차: 경기 전략과 포지셔닝",
        duration: "120분",
        content: ["코트 포지셔닝", "기본 경기 전략", "공격과 수비 전환", "실전 게임 연습"],
      },
      {
        title: "8회차: 실전 게임 및 종합 정리",
        duration: "120분",
        content: ["배운 기술 종합 정리", "실전 게임 진행", "개인별 피드백", "향후 연습 방향 제시"],
      },
    ]

    // 새 아이템 추가
    newItems.forEach((item) => {
      const newItem = document.createElement("div")
      newItem.className = "curriculum-item"
      newItem.innerHTML = `
                <div class="curriculum-header">
                    <h3>${item.title}</h3>
                    <span class="curriculum-duration">${item.duration}</span>
                </div>
                <div class="curriculum-content">
                    <ul>
                        ${item.content.map((line) => `<li>${line}</li>`).join("")}
                    </ul>
                </div>
            `
      curriculumList.appendChild(newItem)
    })

    // 더 보기 버튼 숨기기
    btnMoreCurriculum.style.display = "none"
  })

  // FAQ 아이템 클릭 이벤트
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      // 토글 활성화 상태
      item.classList.toggle("active")
    })
  })

  // 리뷰 정렬 변경 이벤트
  reviewSort.addEventListener("change", () => {
    // 실제 구현에서는 서버에서 정렬된 데이터 가져오기
    const sortBy = reviewSort.value
    console.log("Sort reviews by:", sortBy)

    // 임시 구현: 정렬 방식에 따라 리뷰 순서 변경
    const reviewsList = document.querySelector(".reviews-list")
    const reviews = Array.from(reviewsList.querySelectorAll(".review-item"))

    reviews.sort((a, b) => {
      const ratingA = Number.parseFloat(a.querySelector(".review-rating span").textContent)
      const ratingB = Number.parseFloat(b.querySelector(".review-rating span").textContent)
      const dateA = new Date(
        a.querySelector(".review-date").textContent.replace("년 ", "-").replace("월 ", "-").replace("일", ""),
      )
      const dateB = new Date(
        b.querySelector(".review-date").textContent.replace("년 ", "-").replace("월 ", "-").replace("일", ""),
      )

      if (sortBy === "recent") {
        return dateB - dateA
      } else if (sortBy === "highest") {
        return ratingB - ratingA
      } else if (sortBy === "lowest") {
        return ratingA - ratingB
      }
      return 0
    })

    // 정렬된 리뷰 다시 추가
    reviewsList.innerHTML = ""
    reviews.forEach((review) => {
      reviewsList.appendChild(review)
    })
  })

  // 사진 후기만 필터링 이벤트
  filterPhotos.addEventListener("change", () => {
    const reviewItems = document.querySelectorAll(".review-item")
    reviewItems.forEach((item) => {
      const hasImages = item.querySelector(".review-images") !== null
      if (filterPhotos.checked) {
        item.style.display = hasImages ? "block" : "none"
      } else {
        item.style.display = "block"
      }
    })
  })

  // 리뷰 페이지네이션 클릭 이벤트
  paginationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 모든 페이지 버튼 비활성화
      paginationButtons.forEach((btn) => btn.classList.remove("active"))

      // 현재 페이지 버튼 활성화
      this.classList.add("active")

      // 실제 구현에서는 서버에서 해당 페이지 데이터 가져오기
      const page = this.textContent
      console.log("Load reviews page:", page)
    })
  })

  // 주소 복사 버튼 클릭 이벤트
  btnCopyAddress.addEventListener("click", () => {
    const address = document.querySelector(".detail-item p").textContent
    navigator.clipboard
      .writeText(address)
      .then(() => {
        alert("주소가 클립보드에 복사되었습니다.")
      })
      .catch((err) => {
        console.error("클립보드 복사 실패:", err)
        alert("주소 복사에 실패했습니다.")
      })
  })

  // 리뷰 이미지 클릭 이벤트 (이미지 확대 보기)
  const reviewImages = document.querySelectorAll(".review-image")
  reviewImages.forEach((image) => {
    image.addEventListener("click", () => {
      // 이미지 확대 보기 모달 (실제 구현에서는 모달 추가)
      alert("이미지 확대 보기")
    })
  })

  // URL에서 수업 ID 또는 이름 가져오기
  function getClassIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get("id") || urlParams.get("name") || null
  }

  // 페이지 로드 시 수업 데이터 가져오기 (실제 구현에서는 서버에서 데이터 가져오기)
  function loadClassData() {
    const classId = getClassIdFromUrl()
    // 실제 구현에서는 classId를 사용하여 서버에서 데이터 가져오기
    console.log("Loading class data for ID:", classId)
  }

  // 페이지 로드 시 실행
  loadClassData()
})
