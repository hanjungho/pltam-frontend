document.addEventListener("DOMContentLoaded", () => {
  // 게시글 데이터 (실제 구현에서는 서버에서 가져올 데이터)
  const postData = [
    {
      id: 1,
      title: "처음 시작하는 테니스, 어떤 라켓이 좋을까요?",
      author: "홍길동",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "운동/스포츠",
      time: "3시간 전",
      content:
        "테니스를 처음 시작하려고 하는데 라켓 추천 부탁드립니다. 가격대는 중요하지 않고 초보자가 사용하기 좋은 제품이면 좋겠습니다. 그립감이 좋고 무게가 적당한 제품을 찾고 있어요. 추천해주시면 감사하겠습니다!",
      image: "/placeholder.svg?height=300&width=600",
      likes: 24,
      comments: 15,
      views: 142,
      tags: ["테니스", "라켓", "초보자", "스포츠용품"],
    },
    {
      id: 2,
      title: "홈베이킹 초보를 위한 꿀팁 모음",
      author: "김베이커",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "요리/제빵",
      time: "1일 전",
      content:
        "홈베이킹을 시작하시는 분들을 위해 제가 실패를 통해 배운 꿀팁들을 공유합니다. 오븐 예열부터 반죽 팁까지! 특히 초보자들이 자주 실수하는 부분들을 중심으로 정리했어요.",
      likes: 56,
      comments: 23,
      views: 310,
      tags: ["베이킹", "홈베이킹", "제빵", "요리팁"],
    },
    {
      id: 3,
      title: "제주도 혼자 여행 3박 4일 코스 공유",
      author: "박여행",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "아웃도어/여행",
      time: "2일 전",
      content:
        "지난 주에 다녀온 제주도 혼자 여행 코스를 공유합니다. 렌트카 없이 대중교통으로만 다녀온 알찬 일정이에요. 숙소와 맛집 정보도 함께 공유합니다!",
      image: "/placeholder.svg?height=300&width=600",
      likes: 89,
      comments: 34,
      views: 452,
      tags: ["제주도", "혼자여행", "여행코스", "국내여행"],
    },
    {
      id: 4,
      title: "클래식 기타 독학 가능할까요?",
      author: "이기타",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "음악/악기",
      time: "3일 전",
      content:
        "클래식 기타를 배우고 싶은데 독학으로 가능할지 고민입니다. 좋은 교재나 온라인 강의 추천 부탁드립니다. 기초부터 차근차근 배우고 싶어요.",
      likes: 32,
      comments: 28,
      views: 215,
      tags: ["클래식기타", "기타", "독학", "악기"],
    },
    {
      id: 5,
      title: "영어 회화 스터디원 모집합니다",
      author: "최영어",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "언어/외국어",
      time: "4일 전",
      content:
        "주 2회 강남역에서 진행하는 영어 회화 스터디원을 모집합니다. 중급 이상 실력자 환영합니다. 매주 다양한 주제로 토론하며 영어 실력을 향상시키는 것이 목표입니다.",
      likes: 45,
      comments: 19,
      views: 278,
      tags: ["영어", "스터디", "회화", "강남"],
    },
    {
      id: 6,
      title: "가죽 공예 시작하기 위한 기본 도구 추천",
      author: "정공예",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "공예/만들기",
      time: "5일 전",
      content:
        "가죽 공예를 시작하려고 하는데 필요한 기본 도구들을 추천해주세요. 초보자가 구매하기 좋은 제품 위주로 부탁드립니다. 지갑이나 간단한 소품부터 만들어보고 싶어요.",
      likes: 38,
      comments: 21,
      views: 195,
      tags: ["가죽공예", "공예", "취미", "도구"],
    },
    {
      id: 7,
      title: "포트폴리오 사진 촬영 팁",
      author: "김사진",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "사진/영상",
      time: "6일 전",
      content:
        "포트폴리오용 사진 촬영 시 알아두면 좋은 팁들을 공유합니다. 조명, 구도, 편집까지 상세히 설명해드릴게요. 특히 자연광을 활용하는 방법과 간단한 조명 세팅에 대해 알려드립니다.",
      image: "/placeholder.svg?height=300&width=600",
      likes: 67,
      comments: 29,
      views: 342,
      tags: ["사진", "포트폴리오", "촬영팁", "사진편집"],
    },
    {
      id: 8,
      title: "프로그래밍 독학 로드맵",
      author: "박코딩",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "컴퓨터/IT",
      time: "7일 전",
      content:
        "프로그래밍을 독학하시는 분들을 위한 로드맵을 공유합니다. 단계별로 필요한 지식과 추천 자료를 정리했어요. 웹 개발, 앱 개발, 데이터 분석 등 분야별 학습 경로를 제시합니다.",
      likes: 95,
      comments: 42,
      views: 520,
      tags: ["프로그래밍", "코딩", "독학", "개발자"],
    },
    {
      id: 9,
      title: "수채화 기초 연습법",
      author: "이미술",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "디자인/미술",
      time: "8일 전",
      content:
        "수채화를 처음 시작하시는 분들을 위한 기초 연습법을 공유합니다. 물감 선택부터 기본 기법까지 알려드려요. 간단한 풍경화부터 시작해볼 수 있는 단계별 연습법을 소개합니다.",
      image: "/placeholder.svg?height=300&width=600",
      likes: 52,
      comments: 18,
      views: 230,
      tags: ["수채화", "그림", "미술", "취미"],
    },
    {
      id: 10,
      title: "등산 초보자를 위한 장비 추천",
      author: "김등산",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "아웃도어/여행",
      time: "9일 전",
      content:
        "등산을 처음 시작하는 분들을 위한 필수 장비 추천 리스트입니다. 배낭, 등산화, 의류 등 꼭 필요한 장비와 구매 시 고려할 점을 정리했습니다.",
      likes: 78,
      comments: 31,
      views: 405,
      tags: ["등산", "아웃도어", "장비", "초보자가이드"],
    },
  ]

  // 카테고리 탭 요소
  const categoryTabs = document.querySelectorAll("#categoryTabs .tab")

  // 필터 및 정렬 요소
  const sortOption = document.getElementById("sortOption")
  const periodOption = document.getElementById("periodOption")

  // 게시글 컨테이너
  const postContainer = document.getElementById("postContainer")

  // 페이지네이션 요소
  const pagination = document.getElementById("pagination")

  // 글쓰기 모달 요소
  const writePostBtn = document.getElementById("writePostBtn")
  const writePostModal = document.getElementById("writePostModal")
  const closeModal = document.querySelector(".close-modal")
  const writePostForm = document.querySelector(".write-post-form")

  // 현재 페이지와 페이지당 아이템 수
  let currentPage = 1
  const itemsPerPage = 5

  // 현재 선택된 카테고리
  let selectedCategory = "all"

  // 초기 데이터 로드
  loadPostData()

  // 카테고리 탭 클릭 이벤트
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // 이전 선택 해제
      categoryTabs.forEach((t) => t.classList.remove("active"))

      // 현재 탭 선택
      this.classList.add("active")

      // 선택된 카테고리 저장
      selectedCategory = this.dataset.category

      // 페이지 초기화
      currentPage = 1

      // 데이터 필터링 및 렌더링
      applyFilters()
    })
  })

  // 정렬 옵션 변경 이벤트
  sortOption.addEventListener("change", () => {
    currentPage = 1
    applyFilters()
  })

  // 기간 옵션 변경 이벤트
  periodOption.addEventListener("change", () => {
    currentPage = 1
    applyFilters()
  })

  // 글쓰기 버튼 클릭 이벤트
  writePostBtn.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn =
      document.getElementById("userProfile") && document.getElementById("userProfile").style.display === "block"

    if (isLoggedIn) {
      writePostModal.style.display = "flex"
    } else {
      // 로그인 모달 열기
      document.getElementById("loginModal").style.display = "flex"
    }
  })

  // 모달 닫기 버튼 클릭 이벤트
  closeModal.addEventListener("click", () => {
    writePostModal.style.display = "none"
  })

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target === writePostModal) {
      writePostModal.style.display = "none"
    }
  })

  // 글쓰기 폼 제출 이벤트
  writePostForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // 폼 데이터 수집
    const title = document.getElementById("postTitle").value
    const category = document.getElementById("postCategory").value
    const content = document.getElementById("postContent").value
    const tags = document
      .getElementById("postTags")
      .value.split(",")
      .map((tag) => tag.trim())

    // 실제 구현에서는 서버로 데이터 전송
    alert(`게시글 "${title}"이(가) 작성되었습니다!`)

    // 모달 닫기
    writePostModal.style.display = "none"

    // 폼 초기화
    writePostForm.reset()

    // 새 게시글 추가 (실제 구현에서는 서버에서 받은 데이터로 처리)
    const newPost = {
      id: postData.length + 1,
      title: title,
      author: "현재 사용자", // 실제 구현에서는 로그인한 사용자 정보
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: category,
      time: "방금 전",
      content: content,
      likes: 0,
      comments: 0,
      views: 0,
      tags: tags,
    }

    // 데이터 배열 앞에 추가
    postData.unshift(newPost)

    // 데이터 다시 로드
    applyFilters()
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

  // 게시글 데이터 로드 함수
  function loadPostData() {
    renderPostCards(postData)
    renderPagination(postData.length)
  }

  // 필터 적용 함수
  function applyFilters() {
    const sort = sortOption.value
    const period = periodOption.value
    const searchTerm = searchBar.value.toLowerCase().trim()

    // 카테고리 필터링
    let filteredPosts = postData
    if (selectedCategory !== "all") {
      filteredPosts = filteredPosts.filter((post) => post.category === selectedCategory)
    }

    // 검색어 필터링
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.content.toLowerCase().includes(searchTerm) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
      )
    }

    // 기간 필터링 (임의 구현)
    if (period !== "all") {
      // 실제 구현에서는 날짜 비교 로직 추가
    }

    // 정렬 적용
    sortPosts(filteredPosts, sort)

    // 필터링된 게시글 렌더링
    renderPostCards(filteredPosts)
    renderPagination(filteredPosts.length)
  }

  // 게시글 정렬 함수
  function sortPosts(posts, sortBy) {
    posts.sort((a, b) => {
      if (sortBy === "recent") {
        // 최신순 (임의 구현)
        return b.id - a.id
      } else if (sortBy === "popular") {
        // 인기순 (좋아요 기준)
        return b.likes - a.likes
      } else if (sortBy === "comments") {
        // 댓글 많은순
        return b.comments - a.comments
      } else if (sortBy === "views") {
        // 조회수순
        return b.views - a.views
      }
      return 0
    })
  }

  // 게시글 카드 렌더링 함수
  function renderPostCards(posts) {
    postContainer.innerHTML = ""

    // 페이지네이션 적용
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedPosts = posts.slice(startIndex, endIndex)

    if (paginatedPosts.length === 0) {
      postContainer.innerHTML = `
                <div class="no-results">
                    <p>검색 결과가 없습니다.</p>
                </div>
            `
      return
    }

    paginatedPosts.forEach((post) => {
      const card = document.createElement("div")
      card.className = "post-card"

      // 태그 HTML 생성
      let tagsHtml = ""
      if (post.tags && post.tags.length > 0) {
        tagsHtml = `
                    <div class="post-tags">
                        ${post.tags.map((tag) => `<a href="#" class="post-tag">#${tag}</a>`).join("")}
                    </div>
                `
      }

      // 이미지 HTML 생성
      let imageHtml = ""
      if (post.image) {
        imageHtml = `<img src="${post.image}" alt="${post.title}" class="post-image">`
      }

      card.innerHTML = `
                <div class="post-header">
                    <img src="${post.authorAvatar}" alt="${post.author}" class="post-avatar">
                    <div class="post-info">
                        <h4 class="post-author">${post.author}</h4>
                        <p class="post-meta">${post.time} <span class="post-category">${post.category}</span></p>
                    </div>
                </div>
                <h3 class="post-title"><a href="post-detail.html?id=${post.id}">${post.title}</a></h3>
                <p class="post-content">${post.content}</p>
                ${imageHtml}
                ${tagsHtml}
                <div class="post-footer">
                    <div class="post-actions">
                        <div class="post-action" data-action="like" data-id="${post.id}">
                            <i class="far fa-heart"></i> ${post.likes}
                        </div>
                        <div class="post-action" data-action="comment" data-id="${post.id}">
                            <i class="far fa-comment"></i> ${post.comments}
                        </div>
                        <div class="post-action">
                            <i class="far fa-eye"></i> ${post.views}
                        </div>
                    </div>
                    <div class="post-share">
                        <i class="fas fa-share-alt"></i>
                    </div>
                </div>
            `

      postContainer.appendChild(card)
    })

    // 좋아요 버튼 이벤트 추가
    document.querySelectorAll(".post-action[data-action='like']").forEach((button) => {
      button.addEventListener("click", function () {
        // 로그인 상태 확인 (임시 구현)
        const isLoggedIn =
          document.getElementById("userProfile") && document.getElementById("userProfile").style.display === "block"

        if (isLoggedIn) {
          const postId = this.dataset.id
          const post = postData.find((p) => p.id == postId)

          if (this.classList.contains("liked")) {
            // 좋아요 취소
            this.classList.remove("liked")
            this.querySelector("i").className = "far fa-heart"
            post.likes--
          } else {
            // 좋아요 추가
            this.classList.add("liked")
            this.querySelector("i").className = "fas fa-heart"
            post.likes++
          }

          this.innerHTML = `<i class="${this.classList.contains("liked") ? "fas" : "far"} fa-heart"></i> ${post.likes}`
        } else {
          // 로그인 모달 열기
          document.getElementById("loginModal").style.display = "flex"
        }
      })
    })

    // 댓글 버튼 이벤트 추가
    document.querySelectorAll(".post-action[data-action='comment']").forEach((button) => {
      button.addEventListener("click", function () {
        const postId = this.dataset.id
        window.location.href = `post-detail.html?id=${postId}#comments`
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

  // 인기 태그 클릭 이벤트
  document.querySelectorAll(".tag").forEach((tag) => {
    tag.addEventListener("click", function (e) {
      e.preventDefault()
      const tagText = this.textContent.substring(1) // # 제거
      searchBar.value = tagText
      currentPage = 1
      applyFilters()
    })
  })
})
