document.addEventListener("DOMContentLoaded", () => {
  // 데이터 - 실제 구현에서는 서버에서 가져올 데이터
  const classData = [
    {
      id: 1,
      title: "초보자를 위한 기타 클래스",
      location: "서울 강남구",
      instructor: "홍길동 강사",
      rating: 4.5,
      reviews: 120,
      price: 50000,
      image: "/placeholder.svg?height=200&width=300",
      tag: "인기",
      category: "음악/악기",
    },
    {
      id: 2,
      title: "홈 베이킹 마스터 클래스",
      location: "서울 마포구",
      instructor: "김베이커 강사",
      rating: 4.0,
      reviews: 85,
      price: 60000,
      image: "/placeholder.svg?height=200&width=300",
      tag: "신규",
      category: "요리/제빵",
    },
    {
      id: 3,
      title: "주말 테니스 레슨",
      location: "서울 송파구",
      instructor: "박코치 강사",
      rating: 5.0,
      reviews: 42,
      price: 70000,
      image: "/placeholder.svg?height=200&width=300",
      category: "운동/스포츠",
    },
    {
      id: 4,
      title: "디지털 드로잉 기초",
      location: "온라인",
      instructor: "이아트 강사",
      rating: 4.2,
      reviews: 56,
      price: 45000,
      image: "/placeholder.svg?height=200&width=300",
      category: "디자인/미술",
    },
    {
      id: 5,
      title: "생활 영어 회화",
      location: "온라인",
      instructor: "최영어 강사",
      rating: 4.3,
      reviews: 78,
      price: 40000,
      image: "/placeholder.svg?height=200&width=300",
      category: "언어/외국어",
    },
    {
      id: 6,
      title: "가죽 공예 원데이 클래스",
      location: "경기 일산",
      instructor: "정공예 강사",
      rating: 4.1,
      reviews: 63,
      price: 55000,
      image: "/placeholder.svg?height=200&width=300",
      category: "공예/만들기",
    },
    {
      id: 7,
      title: "여행 사진 촬영 기법",
      location: "서울 종로구",
      instructor: "김사진 강사",
      rating: 4.7,
      reviews: 92,
      price: 65000,
      image: "/placeholder.svg?height=200&width=300",
      category: "사진/영상",
    },
    {
      id: 8,
      title: "주말 등산 모임",
      location: "서울 근교",
      instructor: "산악회 강사",
      rating: 4.8,
      reviews: 105,
      price: 30000,
      image: "/placeholder.svg?height=200&width=300",
      category: "아웃도어/여행",
    },
    {
      id: 9,
      title: "프로그래밍 기초 강좌",
      location: "온라인",
      instructor: "박코딩 강사",
      rating: 4.6,
      reviews: 150,
      price: 80000,
      image: "/placeholder.svg?height=200&width=300",
      category: "컴퓨터/IT",
    },
  ]

  const groupData = [
    {
      id: 1,
      title: "서울 등산 동호회",
      members: 120,
      location: "서울 전역",
      description: "주말마다 서울 근교의 산을 함께 오르는 등산 동호회입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "아웃도어/여행",
    },
    {
      id: 2,
      title: "독서 토론 모임",
      members: 45,
      location: "서울 강남구",
      description: "매월 한 권의 책을 선정하여 함께 읽고 토론하는 모임입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "문화/예술",
    },
    {
      id: 3,
      title: "주말 축구 모임",
      members: 32,
      location: "서울 송파구",
      description: "매주 토요일 오전 함께 축구를 즐기는 모임입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "운동/스포츠",
    },
    {
      id: 4,
      title: "프로그래밍 스터디",
      members: 28,
      location: "서울 강남구",
      description: "함께 코딩 문제를 풀고 프로젝트를 진행하는 스터디 그룹입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "컴퓨터/IT",
    },
    {
      id: 5,
      title: "주말 베이킹 모임",
      members: 35,
      location: "서울 마포구",
      description: "함께 다양한 디저트와 빵을 만들어보는 모임입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "요리/제빵",
    },
    {
      id: 6,
      title: "기타 연주 동호회",
      members: 40,
      location: "서울 홍대",
      description: "함께 기타를 연주하고 공연도 준비하는 동호회입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "음악/악기",
    },
    {
      id: 7,
      title: "영어 회화 스터디",
      members: 25,
      location: "서울 강남구",
      description: "원어민과 함께하는 영어 회화 스터디 모임입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "언어/외국어",
    },
    {
      id: 8,
      title: "사진 촬영 모임",
      members: 38,
      location: "서울 전역",
      description: "함께 나가서 사진을 찍고 기술을 공유하는 모임입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "사진/영상",
    },
    {
      id: 9,
      title: "캘리그라피 모임",
      members: 30,
      location: "서울 종로구",
      description: "함께 캘리그라피를 배우고 작품을 만드는 모임입니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "공예/만들기",
    },
  ]

  const communityData = [
    {
      id: 1,
      title: "처음 시작하는 테니스, 어떤 라켓이 좋을까요?",
      author: "홍길동",
      category: "운동/스포츠",
      time: "3시간 전",
      excerpt:
        "테니스를 처음 시작하려고 하는데 라켓 추천 부탁드립니다. 가격대는 중요하지 않고 초보자가 사용하기 좋은 제품이면 좋겠습니다.",
      likes: 24,
      comments: 15,
      views: 142,
      profile: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "홈베이킹 초보를 위한 꿀팁 모음",
      author: "김베이커",
      category: "요리/제빵",
      time: "1일 전",
      excerpt:
        "홈베이킹을 시작하시는 분들을 위해 제가 실패를 통해 배운 꿀팁들을 공유합니다. 오븐 예열부터 반죽 팁까지!",
      likes: 56,
      comments: 23,
      views: 310,
      profile: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      title: "제주도 혼자 여행 3박 4일 코스 공유",
      author: "박여행",
      category: "아웃도어/여행",
      time: "2일 전",
      excerpt:
        "지난 주에 다녀온 제주도 혼자 여행 코스를 공유합니다. 렌트카 없이 대중교통으로만 다녀온 알찬 일정이에요.",
      likes: 89,
      comments: 34,
      views: 452,
      profile: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      title: "클래식 기타 독학 가능할까요?",
      author: "이기타",
      category: "음악/악기",
      time: "3일 전",
      excerpt: "클래식 기타를 배우고 싶은데 독학으로 가능할지 고민입니다. 좋은 교재나 온라인 강의 추천 부탁드립니다.",
      likes: 32,
      comments: 28,
      views: 215,
      profile: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      title: "영어 회화 스터디원 모집합니다",
      author: "최영어",
      category: "언어/외국어",
      time: "4일 전",
      excerpt: "주 2회 강남역에서 진행하는 영어 회화 스터디원을 모집합니다. 중급 이상 실력자 환영합니다.",
      likes: 45,
      comments: 19,
      views: 278,
      profile: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      title: "가죽 공예 시작하기 위한 기본 도구 추천",
      author: "정공예",
      category: "공예/만들기",
      time: "5일 전",
      excerpt:
        "가죽 공예를 시작하려고 하는데 필요한 기본 도구들을 추천해주세요. 초보자가 구매하기 좋은 제품 위주로 부탁드립니다.",
      likes: 38,
      comments: 21,
      views: 195,
      profile: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      title: "포트폴리오 사진 촬영 팁",
      author: "김사진",
      category: "사진/영상",
      time: "6일 전",
      excerpt: "포트폴리오용 사진 촬영 시 알아두면 좋은 팁들을 공유합니다. 조명, 구도, 편집까지 상세히 설명해드릴게요.",
      likes: 67,
      comments: 29,
      views: 342,
      profile: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      title: "프로그래밍 독학 로드맵",
      author: "박코딩",
      category: "컴퓨터/IT",
      time: "7일 전",
      excerpt:
        "프로그래밍을 독학하시는 분들을 위한 로드맵을 공유합니다. 단계별로 필요한 지식과 추천 자료를 정리했어요.",
      likes: 95,
      comments: 42,
      views: 520,
      profile: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 9,
      title: "수채화 기초 연습법",
      author: "이미술",
      category: "디자인/미술",
      time: "8일 전",
      excerpt: "수채화를 처음 시작하시는 분들을 위한 기초 연습법을 공유합니다. 물감 선택부터 기본 기법까지 알려드려요.",
      likes: 52,
      comments: 18,
      views: 230,
      profile: "/placeholder.svg?height=40&width=40",
    },
  ]

  // 카테고리 카드 클릭 이벤트
  const categoryCards = document.querySelectorAll(".category-card")
  const selectedCategoryTitle = document.querySelector("#selectedCategory h2")

  // Swiper 선언
  const Swiper = window.Swiper

  // 초기 데이터 로드 (전체 카테고리)
  loadCategoryData("all")

  // 카테고리 카드 클릭 이벤트 설정
  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      // 선택된 카테고리 스타일 적용
      categoryCards.forEach((c) => c.classList.remove("active"))
      this.classList.add("active")

      // 선택된 카테고리 가져오기
      const category = this.dataset.category

      // 선택된 카테고리 제목 업데이트
      if (category === "all") {
        selectedCategoryTitle.textContent = "전체 카테고리"
      } else {
        selectedCategoryTitle.textContent = category
      }

      // 선택된 카테고리에 따라 데이터 로드
      loadCategoryData(category)
    })
  })

  // 카테고리에 따라 데이터 로드하는 함수
  function loadCategoryData(category) {
    // 필터링된 데이터
    let filteredClasses = classData
    let filteredGroups = groupData
    let filteredCommunity = communityData

    // 전체가 아닌 경우 필터링
    if (category !== "all") {
      filteredClasses = classData.filter((item) => item.category === category)
      filteredGroups = groupData.filter((item) => item.category === category)
      filteredCommunity = communityData.filter((item) => item.category === category)
    }

    // 데이터 렌더링
    renderClassCards(filteredClasses)
    renderGroupCards(filteredGroups)
    renderCommunityCards(filteredCommunity)

    // 스와이퍼 업데이트
    initSwipers()
  }

  // 수업 카드 렌더링 함수
  function renderClassCards(classes) {
    const classWrapper = document.getElementById("classWrapper")
    classWrapper.innerHTML = ""

    // 데이터가 없는 경우
    if (classes.length === 0) {
      classWrapper.innerHTML = `
                <div class="swiper-slide">
                    <div class="no-data">
                        <p>해당 카테고리의 수업이 없습니다.</p>
                    </div>
                </div>
            `
      return
    }

    // 데이터 렌더링
    classes.forEach((classItem) => {
      const slide = document.createElement("div")
      slide.className = "swiper-slide"

      // 별점 HTML 생성
      let starsHtml = ""
      const fullStars = Math.floor(classItem.rating)
      const hasHalfStar = classItem.rating % 1 !== 0

      for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>'
      }

      if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>'
      }

      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
      for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>'
      }

      // 카드 HTML
      slide.innerHTML = `
                <div class="class-card">
                    <div class="class-image">
                        <img src="${classItem.image}" alt="${classItem.title}">
                        ${classItem.tag ? `<span class="class-tag">${classItem.tag}</span>` : ""}
                    </div>
                    <div class="class-content">
                        <h3>${classItem.title}</h3>
                        <p class="class-info"><i class="fas fa-map-marker-alt"></i> ${classItem.location}</p>
                        <p class="class-info"><i class="fas fa-user"></i> ${classItem.instructor}</p>
                        <div class="class-rating">
                            ${starsHtml}
                            <span>${classItem.rating} (${classItem.reviews})</span>
                        </div>
                        <p class="class-price">${classItem.price.toLocaleString()}원 / 회</p>
                        <button class="btn-class-detail" data-id="${classItem.id}">자세히 보기</button>
                    </div>
                </div>
            `

      classWrapper.appendChild(slide)
    })

    // 자세히 보기 버튼 이벤트 추가
    document.querySelectorAll(".btn-class-detail").forEach((button) => {
      button.addEventListener("click", function () {
        const classId = this.dataset.id
        alert(`수업 ID: ${classId} 상세 페이지로 이동합니다.`)
        // 실제 구현에서는 아래 주석 해제
        // window.location.href = `class-detail.html?id=${classId}`;
      })
    })
  }

  // 모임 카드 렌더링 함수
  function renderGroupCards(groups) {
    const groupWrapper = document.getElementById("groupWrapper")
    groupWrapper.innerHTML = ""

    // 데이터가 없는 경우
    if (groups.length === 0) {
      groupWrapper.innerHTML = `
                <div class="swiper-slide">
                    <div class="no-data">
                        <p>해당 카테고리의 모임이 없습니다.</p>
                    </div>
                </div>
            `
      return
    }

    // 데이터 렌더링
    groups.forEach((group) => {
      const slide = document.createElement("div")
      slide.className = "swiper-slide"

      slide.innerHTML = `
                <div class="group-card">
                    <div class="group-image">
                        <img src="${group.image}" alt="${group.title}">
                    </div>
                    <div class="group-content">
                        <h3>${group.title}</h3>
                        <p class="group-info"><i class="fas fa-users"></i> 회원 ${group.members}명</p>
                        <p class="group-info"><i class="fas fa-map-marker-alt"></i> ${group.location}</p>
                        <p class="group-description">${group.description}</p>
                        <button class="btn-secondary" data-id="${group.id}">가입하기</button>
                    </div>
                </div>
            `

      groupWrapper.appendChild(slide)
    })

    // 가입하기 버튼 이벤트 추가
    document.querySelectorAll(".btn-secondary").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()

        const groupId = this.dataset.id

        // 로그인 상태 확인 (임시 구현)
        const isLoggedIn =
          document.getElementById("userProfile") && document.getElementById("userProfile").style.display === "block"

        if (isLoggedIn) {
          // 모임 이름 가져오기
          const groupName = this.closest(".group-content").querySelector("h3").textContent
          alert(`${groupName}에 가입 신청되었습니다.`)
          this.textContent = "가입 신청됨"
          this.disabled = true
          this.style.backgroundColor = "#A5D6A7"
          this.style.color = "white"
          this.style.borderColor = "#A5D6A7"
        } else {
          // 로그인 모달 열기
          document.getElementById("loginModal").style.display = "flex"
        }
      })
    })
  }

  // 커뮤니티 카드 렌더링 함수
  function renderCommunityCards(posts) {
    const communityWrapper = document.getElementById("communityWrapper")
    communityWrapper.innerHTML = ""

    // 데이터가 없는 경우
    if (posts.length === 0) {
      communityWrapper.innerHTML = `
                <div class="swiper-slide">
                    <div class="no-data">
                        <p>해당 카테고리의 게시글이 없습니다.</p>
                    </div>
                </div>
            `
      return
    }

    // 데이터 렌더링
    posts.forEach((post) => {
      const slide = document.createElement("div")
      slide.className = "swiper-slide"

      slide.innerHTML = `
                <div class="community-card" data-id="${post.id}">
                    <div class="community-header">
                        <img src="${post.profile}" alt="프로필" class="community-profile">
                        <div class="community-info">
                            <h4>${post.author}</h4>
                            <p>${post.category} · ${post.time}</p>
                        </div>
                    </div>
                    <h3 class="community-title">${post.title}</h3>
                    <p class="community-excerpt">${post.excerpt}</p>
                    <div class="community-footer">
                        <span><i class="far fa-heart"></i> ${post.likes}</span>
                        <span><i class="far fa-comment"></i> ${post.comments}</span>
                        <span><i class="far fa-eye"></i> ${post.views}</span>
                    </div>
                </div>
            `

      communityWrapper.appendChild(slide)
    })

    // 커뮤니티 카드 클릭 이벤트
    document.querySelectorAll(".community-card").forEach((card) => {
      card.addEventListener("click", function () {
        const postId = this.dataset.id
        const postTitle = this.querySelector(".community-title").textContent
        alert(`게시글 ID: ${postId}, 제목: ${postTitle} 상세 페이지로 이동합니다.`)
        // 실제 구현에서는 아래 주석 해제
        // window.location.href = `community-post.html?id=${postId}`;
      })
    })

    // 좋아요 버튼 이벤트
    document.querySelectorAll(".community-footer i.fa-heart").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation() // 카드 클릭 이벤트 전파 방지

        // 로그인 상태 확인 (임시 구현)
        const isLoggedIn =
          document.getElementById("userProfile") && document.getElementById("userProfile").style.display === "block"

        if (isLoggedIn) {
          // 좋아요 토글
          if (this.classList.contains("far")) {
            this.classList.remove("far")
            this.classList.add("fas")
            this.style.color = "#EF5350"

            // 좋아요 수 증가
            const countElement = this.parentNode
            const count = Number.parseInt(countElement.textContent.split(" ")[1]) + 1
            countElement.innerHTML = `<i class="fas fa-heart" style="color: #EF5350;"></i> ${count}`
          } else {
            this.classList.remove("fas")
            this.classList.add("far")
            this.style.color = ""

            // 좋아요 수 감소
            const countElement = this.parentNode
            const count = Number.parseInt(countElement.textContent.split(" ")[1]) - 1
            countElement.innerHTML = `<i class="far fa-heart"></i> ${count}`
          }
        } else {
          // 로그인 모달 열기
          document.getElementById("loginModal").style.display = "flex"
        }
      })
    })
  }

  // 스와이퍼 초기화 함수
  function initSwipers() {
    // 히어로 슬라이더 초기화
    const heroSwiper = new Swiper(".hero-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".hero-swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".hero-swiper .swiper-button-next",
        prevEl: ".hero-swiper .swiper-button-prev",
      },
    })

    // 수업 슬라이더 초기화
    const classSwiper = new Swiper(".class-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".class-swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".class-swiper .swiper-button-next",
        prevEl: ".class-swiper .swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    })

    // 모임 슬라이더 초기화
    const groupSwiper = new Swiper(".group-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".group-swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".group-swiper .swiper-button-next",
        prevEl: ".group-swiper .swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    })

    // 커뮤니티 슬라이더 초기화
    const communitySwiper = new Swiper(".community-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".community-swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".community-swiper .swiper-button-next",
        prevEl: ".community-swiper .swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    })
  }

  // 앱 다운로드 버튼 이벤트
  const appButtons = document.querySelectorAll(".app-button")
  appButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      alert("앱 다운로드 페이지로 이동합니다.")
    })
  })

  // 스크롤 애니메이션
  function revealOnScroll() {
    const elements = document.querySelectorAll(".category-card, .class-card, .group-card, .community-card")
    const windowHeight = window.innerHeight

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // 초기 스타일 설정
  const animatedElements = document.querySelectorAll(".category-card, .class-card, .group-card, .community-card")
  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // 스크롤 이벤트 리스너
  window.addEventListener("scroll", revealOnScroll)

  // 초기 실행
  revealOnScroll()

  // 첫 번째 카테고리 카드를 활성화 상태로 설정
  categoryCards[0].classList.add("active")
})
