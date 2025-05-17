document.addEventListener("DOMContentLoaded", () => {
  // 모임 데이터 (실제 구현에서는 서버에서 가져올 데이터)
  const moimData = [
    {
      id: 1,
      title: "서울 등산 동호회",
      members: 120,
      location: "서울 전역",
      description: "주말마다 서울 근교의 산을 함께 오르는 등산 동호회입니다. 초보자부터 경험자까지 모두 환영합니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "아웃도어/여행",
      type: "정기모임",
      day: "주말",
      isPopular: true,
      memberAvatars: [
        "/placeholder.svg?height=24&width=24",
        "/placeholder.svg?height=24&width=24",
        "/placeholder.svg?height=24&width=24",
      ],
    },
    {
      id: 2,
      title: "독서 토론 모임",
      members: 45,
      location: "서울 강남구",
      description: "매월 한 권의 책을 선정하여 함께 읽고 토론하는 모임입니다. 다양한 장르의 책을 읽고 의견을 나눕니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "문화/예술",
      type: "정기모임",
      day: "주말",
      isNew: true,
      memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    },
    {
      id: 3,
      title: "주말 축구 모임",
      members: 32,
      location: "서울 송파구",
      description:
        "매주 토요일 오전 함께 축구를 즐기는 모임입니다. 실력에 상관없이 축구를 좋아하는 분들 모두 환영합니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "운동/스포츠",
      type: "정기모임",
      day: "주말",
      memberAvatars: [
        "/placeholder.svg?height=24&width=24",
        "/placeholder.svg?height=24&width=24",
        "/placeholder.svg?height=24&width=24",
      ],
    },
    {
      id: 4,
      title: "프로그래밍 스터디",
      members: 28,
      location: "서울 강남구",
      description: "함께 코딩 문제를 풀고 프로젝트를 진행하는 스터디 그룹입니다. 주로 웹 개발과 알고리즘을 다룹니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "컴퓨터/IT",
      type: "정기모임",
      day: "평일",
      memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    },
    {
      id: 5,
      title: "주말 베이킹 모임",
      members: 35,
      location: "서울 마포구",
      description: "함께 다양한 디저트와 빵을 만들어보는 모임입니다. 초보자도 쉽게 따라할 수 있는 레시피로 진행합니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "요리/제빵",
      type: "정기모임",
      day: "주말",
      isNew: true,
      memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    },
    {
      id: 6,
      title: "기타 연주 동호회",
      members: 40,
      location: "서울 홍대",
      description: "함께 기타를 연주하고 공연도 준비하는 동호회입니다. 어쿠스틱, 일렉트릭 모두 환영합니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "음악/악기",
      type: "정기모임",
      day: "주말",
      memberAvatars: [
        "/placeholder.svg?height=24&width=24",
        "/placeholder.svg?height=24&width=24",
        "/placeholder.svg?height=24&width=24",
      ],
    },
    {
      id: 7,
      title: "영어 회화 스터디",
      members: 25,
      location: "서울 강남구",
      description:
        "원어민과 함께하는 영어 회화 스터디 모임입니다. 다양한 주제로 자유롭게 대화하며 영어 실력을 향상시킵니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "언어/외국어",
      type: "정기모임",
      day: "평일",
      memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    },
    {
      id: 8,
      title: "사진 촬영 모임",
      members: 38,
      location: "서울 전역",
      description: "함께 나가서 사진을 찍고 기술을 공유하는 모임입니다. 매월 다른 장소에서 촬영 모임을 가집니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "사진/영상",
      type: "정기모임",
      day: "주말",
      isPopular: true,
      memberAvatars: [
        "/placeholder.svg?height=24&width=24",
        "/placeholder.svg?height=24&width=24",
        "/placeholder.svg?height=24&width=24",
      ],
    },
    {
      id: 9,
      title: "캘리그라피 모임",
      members: 30,
      location: "서울 종로구",
      description: "함께 캘리그라피를 배우고 작품을 만드는 모임입니다. 초보자도 쉽게 배울 수 있는 기초부터 시작합니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "공예/만들기",
      type: "정기모임",
      day: "주말",
      memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    },
    {
      id: 10,
      title: "주말 등산 원데이 모임",
      members: 15,
      location: "경기 가평",
      description: "가평 명지산을 함께 등반하는 원데이 모임입니다. 등산 후 맛있는 식사도 함께해요.",
      image: "/placeholder.svg?height=200&width=300",
      category: "아웃도어/여행",
      type: "원데이",
      day: "주말",
      memberAvatars: ["/placeholder.svg?height=24&width=24"],
    },
    {
      id: 11,
      title: "디자인 씽킹 워크숍",
      members: 20,
      location: "서울 강남구",
      description: "디자인 씽킹 방법론을 배우고 실습하는 원데이 워크숍입니다. 창의적 문제 해결 능력을 키워보세요.",
      image: "/placeholder.svg?height=200&width=300",
      category: "직무/커리어",
      type: "원데이",
      day: "주말",
      isNew: true,
      memberAvatars: ["/placeholder.svg?height=24&width=24", "/placeholder.svg?height=24&width=24"],
    },
    {
      id: 12,
      title: "수채화 그리기 모임",
      members: 18,
      location: "서울 서초구",
      description: "함께 수채화를 그리고 기법을 공유하는 모임입니다. 초보자도 환영합니다.",
      image: "/placeholder.svg?height=200&width=300",
      category: "디자인/미술",
      type: "정기모임",
      day: "주말",
      memberAvatars: ["/placeholder.svg?height=24&width=24"],
    },
  ]

  // 필터 요소
  const categoryFilter = document.getElementById("categoryFilter")
  const locationFilter = document.getElementById("locationFilter")
  const typeFilter = document.getElementById("typeFilter")
  const dayFilter = document.getElementById("dayFilter")
  const filterApplyBtn = document.querySelector(".btn-filter-apply")
  const filterTags = document.getElementById("filterTags")

  // 정렬 요소
  const sortOption = document.getElementById("sortOption")

  // 모임 그리드 요소
  const moimGrid = document.getElementById("moimGrid")

  // 페이지네이션 요소
  const pagination = document.getElementById("pagination")

  // 모임 생성 모달 요소
  const createMoimButton = document.getElementById("createMoimButton")
  const createMoimModal = document.getElementById("createMoimModal")
  const closeModal = document.querySelector(".close-modal")
  const createMoimForm = document.querySelector(".create-moim-form")

  // 현재 페이지와 페이지당 아이템 수
  let currentPage = 1
  const itemsPerPage = 9

  // 초기 데이터 로드
  loadMoimData()

  // 필터 적용 버튼 클릭 이벤트
  filterApplyBtn.addEventListener("click", () => {
    currentPage = 1
    applyFilters()
  })

  // 정렬 옵션 변경 이벤트
  sortOption.addEventListener("change", () => {
    currentPage = 1
    applyFilters()
  })

  // 모임 생성 버튼 클릭 이벤트
  createMoimButton.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn =
      document.getElementById("userProfile") && document.getElementById("userProfile").style.display === "block"

    if (isLoggedIn) {
      createMoimModal.style.display = "flex"
    } else {
      // 로그인 모달 열기
      document.getElementById("loginModal").style.display = "flex"
    }
  })

  // 모달 닫기 버튼 클릭 이벤트
  closeModal.addEventListener("click", () => {
    createMoimModal.style.display = "none"
  })

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target === createMoimModal) {
      createMoimModal.style.display = "none"
    }
  })

  // 모임 생성 폼 제출 이벤트
  createMoimForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // 폼 데이터 수집
    const title = document.getElementById("moimTitle").value
    const category = document.getElementById("moimCategory").value
    const location = document.getElementById("moimLocation").value
    const type = document.getElementById("moimType").value
    const description = document.getElementById("moimDescription").value

    // 실제 구현에서는 서버로 데이터 전송
    alert(`모임 "${title}"이(가) 생성되었습니다!`)

    // 모달 닫기
    createMoimModal.style.display = "none"

    // 폼 초기화
    createMoimForm.reset()
  })

  // 검색 기능
  const searchBar = document.querySelector(".search-bar input")
  const searchButton = document.querySelector(".search-bar button")

  searchButton.addEventListener("click", () => {
    currentPage = 1
    applyFilters()
  })

  searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      currentPage = 1
      applyFilters()
    }
  })

  // 모임 데이터 로드 함수
  function loadMoimData() {
    renderMoimCards(moimData)
    renderPagination(moimData.length)
  }

  // 필터 적용 함수
  function applyFilters() {
    const category = categoryFilter.value
    const location = locationFilter.value
    const type = typeFilter.value
    const day = dayFilter.value
    const searchTerm = searchBar.value.toLowerCase().trim()

    // 필터 태그 업데이트
    updateFilterTags(category, location, type, day)

    // 모임 카드 필터링
    const filteredMoims = moimData.filter((moim) => {
      const categoryMatch = !category || moim.category === category
      const locationMatch = !location || moim.location.includes(location)
      const typeMatch = !type || moim.type === type
      const dayMatch = !day || moim.day === day
      const searchMatch =
        !searchTerm ||
        moim.title.toLowerCase().includes(searchTerm) ||
        moim.description.toLowerCase().includes(searchTerm) ||
        moim.category.toLowerCase().includes(searchTerm)

      return categoryMatch && locationMatch && typeMatch && dayMatch && searchMatch
    })

    // 정렬 적용
    sortMoims(filteredMoims)

    // 필터링된 모임 렌더링
    renderMoimCards(filteredMoims)
    renderPagination(filteredMoims.length)
  }

  // 필터 태그 업데이트 함수
  function updateFilterTags(category, location, type, day) {
    // 기존 태그 제거
    filterTags.innerHTML = ""

    // 카테고리 태그
    if (category) {
      addFilterTag("카테고리: " + category, function () {
        categoryFilter.value = ""
        this.remove()
        applyFilters()
      })
    }

    // 지역 태그
    if (location) {
      addFilterTag("지역: " + location, function () {
        locationFilter.value = ""
        this.remove()
        applyFilters()
      })
    }

    // 모임 형태 태그
    if (type) {
      addFilterTag("모임 형태: " + type, function () {
        typeFilter.value = ""
        this.remove()
        applyFilters()
      })
    }

    // 요일 태그
    if (day) {
      addFilterTag("요일: " + day, function () {
        dayFilter.value = ""
        this.remove()
        applyFilters()
      })
    }

    // 검색어 태그
    const searchTerm = searchBar.value.trim()
    if (searchTerm) {
      addFilterTag("검색: " + searchTerm, function () {
        searchBar.value = ""
        this.remove()
        applyFilters()
      })
    }
  }

  // 필터 태그 추가 함수
  function addFilterTag(text, clickHandler) {
    const tag = document.createElement("div")
    tag.className = "filter-tag"
    tag.innerHTML = text + ' <i class="fas fa-times"></i>'

    tag.querySelector("i").addEventListener("click", () => {
      clickHandler.call(tag)
    })

    filterTags.appendChild(tag)
  }

  // 모임 정렬 함수
  function sortMoims(moims) {
    const sortBy = sortOption.value

    moims.sort((a, b) => {
      if (sortBy === "recommended") {
        // 추천순 (임의 구현)
        return 0.5 - Math.random()
      } else if (sortBy === "popular") {
        // 인기순 (isPopular 태그 기준)
        if (a.isPopular && !b.isPopular) return -1
        if (!a.isPopular && b.isPopular) return 1
        return b.members - a.members
      } else if (sortBy === "recent") {
        // 최신순 (isNew 태그 기준)
        if (a.isNew && !b.isNew) return -1
        if (!a.isNew && b.isNew) return 1
        return b.id - a.id
      } else if (sortBy === "members") {
        // 회원 많은순
        return b.members - a.members
      } else if (sortBy === "rating") {
        // 평점순 (임의 구현)
        return 0.5 - Math.random()
      }
      return 0
    })
  }

  // 모임 카드 렌더링 함수
  function renderMoimCards(moims) {
    moimGrid.innerHTML = ""

    // 페이지네이션 적용
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedMoims = moims.slice(startIndex, endIndex)

    if (paginatedMoims.length === 0) {
      moimGrid.innerHTML = `
                <div class="no-results">
                    <p>검색 결과가 없습니다.</p>
                </div>
            `
      return
    }

    paginatedMoims.forEach((moim) => {
      const card = document.createElement("div")
      card.className = "moim-card"

      // 멤버 아바타 HTML 생성
      let avatarsHtml = ""
      moim.memberAvatars.forEach((avatar) => {
        avatarsHtml += `<img src="${avatar}" alt="멤버" class="member-avatar">`
      })

      // 태그 HTML 생성
      let tagHtml = ""
      if (moim.isPopular) {
        tagHtml = '<span class="moim-tag" style="background-color: #FF9800;">인기</span>'
      } else if (moim.isNew) {
        tagHtml = '<span class="moim-tag" style="background-color: #4CAF50;">신규</span>'
      }

      card.innerHTML = `
                <div class="moim-image">
                    <img src="${moim.image}" alt="${moim.title}">
                    ${tagHtml}
                </div>
                <div class="moim-content">
                    <h3>${moim.title}</h3>
                    <p class="moim-info"><i class="fas fa-map-marker-alt"></i> ${moim.location}</p>
                    <p class="moim-info"><i class="fas fa-users"></i> 회원 ${moim.members}명</p>
                    <p class="moim-info"><i class="fas fa-calendar-alt"></i> ${moim.type} (${moim.day})</p>
                    <p class="moim-description">${moim.description}</p>
                    <div class="moim-footer">
                        <div class="moim-members">
                            <div class="member-avatars">
                                ${avatarsHtml}
                            </div>
                            <span class="member-count">+${moim.members}</span>
                        </div>
                        <button class="btn-join" data-id="${moim.id}">가입하기</button>
                    </div>
                </div>
            `

      moimGrid.appendChild(card)
    })

    // 가입하기 버튼 이벤트 추가
    document.querySelectorAll(".btn-join").forEach((button) => {
      button.addEventListener("click", function () {
        const moimId = this.dataset.id

        // 로그인 상태 확인 (임시 구현)
        const isLoggedIn =
          document.getElementById("userProfile") && document.getElementById("userProfile").style.display === "block"

        if (isLoggedIn) {
          // 모임 이름 가져오기
          const moimName = this.closest(".moim-content").querySelector("h3").textContent
          alert(`${moimName}에 가입 신청되었습니다.`)
          this.textContent = "가입 신청됨"
          this.disabled = true
          this.style.backgroundColor = "#A5D6A7"
          this.style.color = "white"
        } else {
          // 로그인 모달 열기
          document.getElementById("loginModal").style.display = "flex"
        }
      })
    })
  }

  // 페이지네이션 렌더링 함수
  function renderPagination(totalItems) {
    pagination.innerHTML = ""

    const totalPages = Math.ceil(totalItems / itemsPerPage)

    if (totalPages <= 1) {
      return
    }

    // 이전 페이지 버튼
    if (currentPage > 1) {
      const prevButton = document.createElement("button")
      prevButton.className = "btn-page-prev"
      prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>'
      prevButton.addEventListener("click", () => {
        currentPage--
        applyFilters()
      })
      pagination.appendChild(prevButton)
    }

    // 페이지 버튼
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageButton = document.createElement("button")
      pageButton.className = i === currentPage ? "btn-page active" : "btn-page"
      pageButton.textContent = i
      pageButton.addEventListener("click", () => {
        currentPage = i
        applyFilters()
      })
      pagination.appendChild(pageButton)
    }

    // 다음 페이지 버튼
    if (currentPage < totalPages) {
      const nextButton = document.createElement("button")
      nextButton.className = "btn-page-next"
      nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>'
      nextButton.addEventListener("click", () => {
        currentPage++
        applyFilters()
      })
      pagination.appendChild(nextButton)
    }
  }
})
