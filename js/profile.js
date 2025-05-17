document.addEventListener("DOMContentLoaded", () => {
  // 프로필 탭 요소
  const profileTabs = document.querySelectorAll(".profile-tab")
  const tabContents = document.querySelectorAll(".profile-tab-content")

  // 필터 요소
  const tabFilters = document.querySelectorAll(".tab-filter")

  // 프로필 편집 모달 요소
  const editProfileBtn = document.querySelector(".btn-edit-profile")
  const editProfileModal = document.getElementById("editProfileModal")
  const closeModal = document.querySelector(".close-modal")
  const editProfileForm = document.querySelector(".edit-profile-form")
  const uploadImageBtn = document.querySelector(".btn-upload-image")
  const profileImageUpload = document.getElementById("profileImageUpload")

  // 프로필 이미지 변경 버튼
  const changeImageBtn = document.querySelector(".btn-change-image")

  // 설정 폼 요소
  const settingsForms = document.querySelectorAll(".settings-form")
  const dangerBtn = document.querySelector(".btn-danger")

  // 탭 클릭 이벤트
  profileTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 모든 탭 비활성화
      profileTabs.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => (c.style.display = "none"))

      // 현재 탭 활성화
      tab.classList.add("active")
      const tabId = tab.dataset.tab + "Tab"
      document.getElementById(tabId).style.display = "block"
    })
  })

  // 필터 클릭 이벤트
  tabFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // 같은 필터 그룹 내의 모든 필터 비활성화
      const filterGroup = this.parentElement
      filterGroup.querySelectorAll(".tab-filter").forEach((f) => f.classList.remove("active"))

      // 현재 필터 활성화
      this.classList.add("active")

      // 필터링 로직 (실제 구현에서는 서버에서 데이터 가져오기)
      const filterType = this.dataset.filter
      const tabContent = filterGroup.parentElement

      // 수업 필터링
      if (tabContent.id === "classesTab") {
        filterClasses(filterType)
      }
      // 모임 필터링
      else if (tabContent.id === "groupsTab") {
        filterGroups(filterType)
      }
      // 게시글 필터링
      else if (tabContent.id === "postsTab") {
        filterPosts(filterType)
      }
    })
  })

  // 프로필 편집 버튼 클릭 이벤트
  editProfileBtn.addEventListener("click", () => {
    editProfileModal.style.display = "flex"
  })

  // 프로필 이미지 변경 버튼 클릭 이벤트
  changeImageBtn.addEventListener("click", () => {
    editProfileModal.style.display = "flex"
    // 이미지 업로드 버튼에 포커스
    uploadImageBtn.focus()
  })

  // 이미지 업로드 버튼 클릭 이벤트
  uploadImageBtn.addEventListener("click", () => {
    profileImageUpload.click()
  })

  // 이미지 파일 선택 이벤트
  profileImageUpload.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        // 모달 내 이미지 미리보기 업데이트
        document.querySelector(".edit-profile-image").src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  })

  // 모달 닫기 버튼 클릭 이벤트
  closeModal.addEventListener("click", () => {
    editProfileModal.style.display = "none"
  })

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target === editProfileModal) {
      editProfileModal.style.display = "none"
    }
  })

  // 프로필 편집 폼 제출 이벤트
  editProfileForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // 폼 데이터 수집
    const name = document.getElementById("editName").value
    const bio = document.getElementById("editBio").value
    const interests = document.getElementById("editInterests").value

    // 프로필 업데이트 (실제 구현에서는 서버로 데이터 전송)
    document.querySelector(".profile-name").textContent = name

    // 프로필 이미지 업데이트 (파일이 선택된 경우)
    if (profileImageUpload.files.length > 0) {
      const reader = new FileReader()
      reader.onload = (e) => {
        document.querySelector(".profile-image").src = e.target.result
      }
      reader.readAsDataURL(profileImageUpload.files[0])
    }

    // 모달 닫기
    editProfileModal.style.display = "none"

    // 성공 메시지 표시
    alert("프로필이 업데이트되었습니다.")
  })

  // 설정 폼 제출 이벤트
  settingsForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // 폼 데이터 수집 및 처리 (실제 구현에서는 서버로 데이터 전송)

      // 성공 메시지 표시
      alert("설정이 저장되었습니다.")
    })
  })

  // 계정 삭제 버튼 클릭 이벤트
  dangerBtn.addEventListener("click", () => {
    if (confirm("정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      // 계정 삭제 처리 (실제 구현에서는 서버로 요청)
      alert("계정이 삭제되었습니다. 로그인 페이지로 이동합니다.")
      window.location.href = "login.html"
    }
  })

  // 수업 필터링 함수
  function filterClasses(filterType) {
    const classCards = document.querySelectorAll(".classes-grid .class-card")

    classCards.forEach((card) => {
      const tag = card.querySelector(".class-tag")
      if (!tag) return

      if (filterType === "all") {
        card.style.display = "block"
      } else if (filterType === "upcoming" && !tag.classList.contains("past") && !tag.classList.contains("wishlist")) {
        card.style.display = "block"
      } else if (filterType === "past" && tag.classList.contains("past")) {
        card.style.display = "block"
      } else if (filterType === "wishlist" && tag.classList.contains("wishlist")) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  }

  // 모임 필터링 함수
  function filterGroups(filterType) {
    const groupCards = document.querySelectorAll(".groups-grid .group-card")

    groupCards.forEach((card) => {
      const status = card.querySelector(".group-status")
      if (!status) return

      if (filterType === "all") {
        card.style.display = "block"
      } else if (filterType === "joined" && status.classList.contains("joined")) {
        card.style.display = "block"
      } else if (filterType === "created" && status.classList.contains("created")) {
        card.style.display = "block"
      } else if (filterType === "wishlist" && status.classList.contains("wishlist")) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  }

  // 게시글 필터링 함수
  function filterPosts(filterType) {
    const postItems = document.querySelectorAll(".posts-list .post-item")

    postItems.forEach((item) => {
      const actions = item.querySelector(".post-actions")
      const status = actions.querySelector(".post-status")
      const editBtn = actions.querySelector(".btn-post-edit")

      if (filterType === "all") {
        item.style.display = "flex"
      } else if (filterType === "my-posts" && editBtn) {
        item.style.display = "flex"
      } else if (filterType === "comments" && status && status.textContent === "댓글 남김") {
        item.style.display = "flex"
      } else if (filterType === "likes" && status && status.textContent === "좋아요 함") {
        item.style.display = "flex"
      } else {
        item.style.display = "none"
      }
    })
  }

  // 수업 상세 보기 버튼 클릭 이벤트
  document.querySelectorAll(".btn-class-detail").forEach((btn) => {
    btn.addEventListener("click", function () {
      const className = this.closest(".class-content").querySelector("h3").textContent
      alert(`${className} 상세 페이지로 이동합니다.`)
      // 실제 구현에서는 아래 주석 해제
      // window.location.href = `class-detail.html?name=${encodeURIComponent(className)}`;
    })
  })

  // 모임 상세 보기 버튼 클릭 이벤트
  document.querySelectorAll(".btn-group-detail").forEach((btn) => {
    btn.addEventListener("click", function () {
      const groupName = this.closest(".group-content").querySelector("h3").textContent
      alert(`${groupName} 상세 페이지로 이동합니다.`)
      // 실제 구현에서는 아래 주석 해제
      // window.location.href = `moim-detail.html?name=${encodeURIComponent(groupName)}`;
    })
  })

  // 게시글 수정 버튼 클릭 이벤트
  document.querySelectorAll(".btn-post-edit").forEach((btn) => {
    btn.addEventListener("click", function () {
      const postTitle = this.closest(".post-item").querySelector(".post-title").textContent
      alert(`${postTitle} 게시글 수정 페이지로 이동합니다.`)
      // 실제 구현에서는 아래 주석 해제
      // window.location.href = `post-edit.html?title=${encodeURIComponent(postTitle)}`;
    })
  })

  // 게시글 삭제 버튼 클릭 이벤트
  document.querySelectorAll(".btn-post-delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      const postTitle = this.closest(".post-item").querySelector(".post-title").textContent
      if (confirm(`${postTitle} 게시글을 삭제하시겠습니까?`)) {
        // 게시글 삭제 처리 (실제 구현에서는 서버로 요청)
        this.closest(".post-item").remove()
        alert("게시글이 삭제되었습니다.")
      }
    })
  })

  // 게시글 보기 버튼 클릭 이벤트
  document.querySelectorAll(".btn-post-view").forEach((btn) => {
    btn.addEventListener("click", function () {
      const postTitle = this.closest(".post-item").querySelector(".post-title").textContent
      alert(`${postTitle} 게시글 상세 페이지로 이동합니다.`)
      // 실제 구현에서는 아래 주석 해제
      // window.location.href = `post-detail.html?title=${encodeURIComponent(postTitle)}`;
    })
  })

  // 로그인 상태 확인 및 UI 업데이트
  function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (!isLoggedIn) {
      // 로그인되지 않은 상태라면 로그인 페이지로 리다이렉트
      alert("로그인이 필요한 페이지입니다.")
      window.location.href = "login.html"
    }
  }

  // 페이지 로드 시 로그인 상태 확인
  checkLoginStatus()
})
