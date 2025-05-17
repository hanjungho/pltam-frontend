document.addEventListener("DOMContentLoaded", () => {
  // 좋아요 버튼
  const btnLike = document.getElementById("btnLike")
  // 북마크 버튼
  const btnBookmark = document.getElementById("btnBookmark")
  // 공유 버튼
  const btnShare = document.getElementById("btnShare")
  // 신고 버튼
  const btnReport = document.getElementById("btnReport")
  // 팔로우 버튼
  const btnFollow = document.querySelector(".btn-follow")
  // 댓글 제출 버튼
  const btnSubmitComment = document.querySelector(".btn-submit-comment")
  // 댓글 입력 필드
  const commentInput = document.querySelector(".comment-input")
  // 더 보기 버튼
  const btnLoadMore = document.querySelector(".btn-load-more")
  // 댓글 좋아요 버튼
  const commentLikeButtons = document.querySelectorAll(".btn-comment-action i.fa-heart")
  // 댓글 답글 버튼
  const commentReplyButtons = document.querySelectorAll(".btn-comment-action i.fa-comment")
  // 관련 게시글
  const relatedPosts = document.querySelectorAll(".related-post")

  // 공유 모달
  const shareModal = document.getElementById("shareModal")
  // 신고 모달
  const reportModal = document.getElementById("reportModal")
  // 모달 닫기 버튼
  const closeModalButtons = document.querySelectorAll(".close-modal")
  // 공유 옵션 버튼
  const shareOptions = document.querySelectorAll(".share-option")
  // 신고 폼
  const reportForm = document.querySelector(".report-form")
  // 기타 사유 라디오 버튼
  const otherReasonRadio = document.querySelector('input[value="other"]')
  // 기타 사유 그룹
  const otherReasonGroup = document.getElementById("otherReasonGroup")

  // 좋아요 버튼 클릭 이벤트
  btnLike.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      // 좋아요 토글
      btnLike.classList.toggle("active")
      const icon = btnLike.querySelector("i")
      const count = btnLike.querySelector(".reaction-count")
      const currentCount = Number.parseInt(count.textContent)

      if (btnLike.classList.contains("active")) {
        icon.className = "fas fa-heart"
        count.textContent = currentCount + 1
      } else {
        icon.className = "far fa-heart"
        count.textContent = currentCount - 1
      }
    } else {
      // 로그인 모달 열기
      alert("로그인이 필요한 기능입니다.")
      window.location.href = "login.html"
    }
  })

  // 북마크 버튼 클릭 이벤트
  btnBookmark.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      // 북마크 토글
      btnBookmark.classList.toggle("active")
      const icon = btnBookmark.querySelector("i")
      const count = btnBookmark.querySelector(".reaction-count")
      const currentCount = Number.parseInt(count.textContent)

      if (btnBookmark.classList.contains("active")) {
        icon.className = "fas fa-bookmark"
        count.textContent = currentCount + 1
      } else {
        icon.className = "far fa-bookmark"
        count.textContent = currentCount - 1
      }
    } else {
      // 로그인 모달 열기
      alert("로그인이 필요한 기능입니다.")
      window.location.href = "login.html"
    }
  })

  // 공유 버튼 클릭 이벤트
  btnShare.addEventListener("click", () => {
    shareModal.style.display = "flex"
  })

  // 신고 버튼 클릭 이벤트
  btnReport.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      reportModal.style.display = "flex"
    } else {
      // 로그인 모달 열기
      alert("로그인이 필요한 기능입니다.")
      window.location.href = "login.html"
    }
  })

  // 팔로우 버튼 클릭 이벤트
  btnFollow.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      // 팔로우 토글
      btnFollow.classList.toggle("following")
      if (btnFollow.classList.contains("following")) {
        btnFollow.textContent = "팔로잉"
      } else {
        btnFollow.textContent = "팔로우"
      }
    } else {
      // 로그인 모달 열기
      alert("로그인이 필요한 기능입니다.")
      window.location.href = "login.html"
    }
  })

  // 댓글 제출 버튼 클릭 이벤트
  btnSubmitComment.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      const commentText = commentInput.value.trim()
      if (commentText) {
        // 새 댓글 추가 (실제 구현에서는 서버로 데이터 전송)
        addNewComment(commentText)
        commentInput.value = ""
      } else {
        alert("댓글 내용을 입력해주세요.")
      }
    } else {
      // 로그인 모달 열기
      alert("로그인이 필요한 기능입니다.")
      window.location.href = "login.html"
    }
  })

  // 더 보기 버튼 클릭 이벤트
  btnLoadMore.addEventListener("click", () => {
    // 더 많은 댓글 로드 (실제 구현에서는 서버에서 데이터 가져오기)
    loadMoreComments()
  })

  // 댓글 좋아요 버튼 클릭 이벤트
  commentLikeButtons.forEach((button) => {
    button.parentElement.addEventListener("click", function (e) {
      e.preventDefault()

      // 로그인 상태 확인 (임시 구현)
      const isLoggedIn =
        localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

      if (isLoggedIn) {
        // 좋아요 토글
        const icon = this.querySelector("i")
        const text = this.textContent.trim()
        const count = Number.parseInt(text.split(" ")[1])

        if (icon.classList.contains("far")) {
          icon.classList.remove("far")
          icon.classList.add("fas")
          icon.style.color = "#f44336"
          this.innerHTML = `<i class="fas fa-heart" style="color: #f44336;"></i> 좋아요 ${count + 1}`
        } else {
          icon.classList.remove("fas")
          icon.classList.add("far")
          icon.style.color = ""
          this.innerHTML = `<i class="far fa-heart"></i> 좋아요 ${count - 1}`
        }
      } else {
        // 로그인 모달 열기
        alert("로그인이 필요한 기능입니다.")
        window.location.href = "login.html"
      }
    })
  })

  // 댓글 답글 버튼 클릭 이벤트
  commentReplyButtons.forEach((button) => {
    button.parentElement.addEventListener("click", function (e) {
      e.preventDefault()

      // 로그인 상태 확인 (임시 구현)
      const isLoggedIn =
        localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

      if (isLoggedIn) {
        // 답글 입력 폼 토글
        const comment = this.closest(".comment")
        let replyForm = comment.querySelector(".reply-form")

        if (replyForm) {
          // 이미 폼이 있으면 제거
          replyForm.remove()
        } else {
          // 폼 생성
          replyForm = document.createElement("div")
          replyForm.className = "reply-form"
          replyForm.innerHTML = `
                        <div class="comment-form" style="margin-top: 15px;">
                            <img src="/placeholder.svg?height=40&width=40" alt="사용자 프로필" class="user-avatar">
                            <div class="comment-input-container">
                                <textarea class="comment-input" placeholder="답글을 남겨보세요"></textarea>
                                <button class="btn-submit-comment">등록</button>
                            </div>
                        </div>
                    `

          // 답글 폼 추가
          const commentContent = comment.querySelector(".comment-content")
          const replies = commentContent.querySelector(".replies")

          if (replies) {
            replies.appendChild(replyForm)
          } else {
            const newReplies = document.createElement("div")
            newReplies.className = "replies"
            newReplies.appendChild(replyForm)
            commentContent.appendChild(newReplies)
          }

          // 답글 등록 버튼 이벤트
          const replySubmitBtn = replyForm.querySelector(".btn-submit-comment")
          const replyInput = replyForm.querySelector(".comment-input")

          replySubmitBtn.addEventListener("click", () => {
            const replyText = replyInput.value.trim()
            if (replyText) {
              // 새 답글 추가 (실제 구현에서는 서버로 데이터 전송)
              addNewReply(comment, replyText)
              replyForm.remove()
            } else {
              alert("답글 내용을 입력해주세요.")
            }
          })
        }
      } else {
        // 로그인 모달 열기
        alert("로그인이 필요한 기능입니다.")
        window.location.href = "login.html"
      }
    })
  })

  // 관련 게시글 클릭 이벤트
  relatedPosts.forEach((post) => {
    post.addEventListener("click", function () {
      const title = this.querySelector(".related-post-title").textContent
      alert(`관련 게시글 "${title}"로 이동합니다.`)
      // 실제 구현에서는 아래 주석 해제
      // window.location.href = `post-detail.html?title=${encodeURIComponent(title)}`;
    })
  })

  // 모달 닫기 버튼 클릭 이벤트
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal")
      modal.style.display = "none"
    })
  })

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target === shareModal) {
      shareModal.style.display = "none"
    } else if (event.target === reportModal) {
      reportModal.style.display = "none"
    }
  })

  // 공유 옵션 클릭 이벤트
  shareOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const platform = this.dataset.platform
      const postUrl = window.location.href
      const postTitle = document.querySelector(".post-title").textContent

      // 공유 플랫폼에 따른 처리 (실제 구현에서는 각 플랫폼 API 사용)
      if (platform === "kakao") {
        alert("카카오톡으로 공유합니다.")
      } else if (platform === "facebook") {
        alert("페이스북으로 공유합니다.")
      } else if (platform === "twitter") {
        alert("트위터로 공유합니다.")
      } else if (platform === "link") {
        // 클립보드에 링크 복사
        navigator.clipboard
          .writeText(postUrl)
          .then(() => {
            alert("링크가 클립보드에 복사되었습니다.")
          })
          .catch((err) => {
            console.error("클립보드 복사 실패:", err)
            alert("링크 복사에 실패했습니다.")
          })
      }

      // 모달 닫기
      shareModal.style.display = "none"
    })
  })

  // 기타 사유 라디오 버튼 변경 이벤트
  otherReasonRadio.addEventListener("change", function () {
    if (this.checked) {
      otherReasonGroup.style.display = "block"
    } else {
      otherReasonGroup.style.display = "none"
    }
  })

  // 다른 라디오 버튼 변경 이벤트
  document.querySelectorAll('input[name="reportReason"]:not([value="other"])').forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        otherReasonGroup.style.display = "none"
      }
    })
  })

  // 신고 폼 제출 이벤트
  reportForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // 신고 사유 가져오기
    const reason = document.querySelector('input[name="reportReason"]:checked').value
    let detailReason = ""

    if (reason === "other") {
      detailReason = document.getElementById("otherReason").value.trim()
      if (!detailReason) {
        alert("기타 사유를 입력해주세요.")
        return
      }
    }

    // 신고 처리 (실제 구현에서는 서버로 데이터 전송)
    alert("신고가 접수되었습니다. 검토 후 조치하겠습니다.")

    // 모달 닫기
    reportModal.style.display = "none"
  })

  // 새 댓글 추가 함수
  function addNewComment(text) {
    const commentsList = document.querySelector(".comments-list")
    const newComment = document.createElement("div")
    newComment.className = "comment"

    // 현재 날짜 포맷팅
    const now = new Date()
    const formattedDate = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`

    newComment.innerHTML = `
            <img src="/placeholder.svg?height=40&width=40" alt="댓글 작성자" class="comment-avatar">
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">사용자</span>
                    <span class="comment-date">${formattedDate}</span>
                </div>
                <p class="comment-text">${text}</p>
                <div class="comment-actions">
                    <button class="btn-comment-action">
                        <i class="far fa-heart"></i> 좋아요 0
                    </button>
                    <button class="btn-comment-action">
                        <i class="far fa-comment"></i> 답글
                    </button>
                </div>
            </div>
        `

    // 댓글 목록 맨 위에 추가
    commentsList.insertBefore(newComment, commentsList.firstChild)

    // 댓글 수 업데이트
    updateCommentCount(1)

    // 새 댓글의 좋아요 버튼 이벤트 추가
    const likeButton = newComment.querySelector(".btn-comment-action i.fa-heart").parentElement
    likeButton.addEventListener("click", function (e) {
      e.preventDefault()

      // 좋아요 토글
      const icon = this.querySelector("i")
      const text = this.textContent.trim()
      const count = Number.parseInt(text.split(" ")[1])

      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        icon.style.color = "#f44336"
        this.innerHTML = `<i class="fas fa-heart" style="color: #f44336;"></i> 좋아요 ${count + 1}`
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        icon.style.color = ""
        this.innerHTML = `<i class="far fa-heart"></i> 좋아요 ${count - 1}`
      }
    })

    // 새 댓글의 답글 버튼 이벤트 추가
    const replyButton = newComment.querySelector(".btn-comment-action i.fa-comment").parentElement
    replyButton.addEventListener("click", function (e) {
      e.preventDefault()

      // 답글 입력 폼 토글
      const comment = this.closest(".comment")
      let replyForm = comment.querySelector(".reply-form")

      if (replyForm) {
        // 이미 폼이 있으면 제거
        replyForm.remove()
      } else {
        // 폼 생성
        replyForm = document.createElement("div")
        replyForm.className = "reply-form"
        replyForm.innerHTML = `
                    <div class="comment-form" style="margin-top: 15px;">
                        <img src="/placeholder.svg?height=40&width=40" alt="사용자 프로필" class="user-avatar">
                        <div class="comment-input-container">
                            <textarea class="comment-input" placeholder="답글을 남겨보세요"></textarea>
                            <button class="btn-submit-comment">등록</button>
                        </div>
                    </div>
                `

        // 답글 폼 추가
        const commentContent = comment.querySelector(".comment-content")
        const replies = commentContent.querySelector(".replies")

        if (replies) {
          replies.appendChild(replyForm)
        } else {
          const newReplies = document.createElement("div")
          newReplies.className = "replies"
          newReplies.appendChild(replyForm)
          commentContent.appendChild(newReplies)
        }

        // 답글 등록 버튼 이벤트
        const replySubmitBtn = replyForm.querySelector(".btn-submit-comment")
        const replyInput = replyForm.querySelector(".comment-input")

        replySubmitBtn.addEventListener("click", () => {
          const replyText = replyInput.value.trim()
          if (replyText) {
            // 새 답글 추가
            addNewReply(comment, replyText)
            replyForm.remove()
          } else {
            alert("답글 내용을 입력해주세요.")
          }
        })
      }
    })
  }

  // 새 답글 추가 함수
  function addNewReply(comment, text) {
    // 현재 날짜 포맷팅
    const now = new Date()
    const formattedDate = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`

    // 답글 요소 생성
    const newReply = document.createElement("div")
    newReply.className = "comment reply"
    newReply.innerHTML = `
            <img src="/placeholder.svg?height=40&width=40" alt="답글 작성자" class="comment-avatar">
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">사용자</span>
                    <span class="comment-date">${formattedDate}</span>
                </div>
                <p class="comment-text">${text}</p>
                <div class="comment-actions">
                    <button class="btn-comment-action">
                        <i class="far fa-heart"></i> 좋아요 0
                    </button>
                    <button class="btn-comment-action">
                        <i class="far fa-comment"></i> 답글
                    </button>
                </div>
            </div>
        `

    // 답글 추가
    const commentContent = comment.querySelector(".comment-content")
    let replies = commentContent.querySelector(".replies")

    if (!replies) {
      replies = document.createElement("div")
      replies.className = "replies"
      commentContent.appendChild(replies)
    }

    replies.appendChild(newReply)

    // 댓글 수 업데이트
    updateCommentCount(1)

    // 새 답글의 좋아요 버튼 이벤트 추가
    const likeButton = newReply.querySelector(".btn-comment-action i.fa-heart").parentElement
    likeButton.addEventListener("click", function (e) {
      e.preventDefault()

      // 좋아요 토글
      const icon = this.querySelector("i")
      const text = this.textContent.trim()
      const count = Number.parseInt(text.split(" ")[1])

      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        icon.style.color = "#f44336"
        this.innerHTML = `<i class="fas fa-heart" style="color: #f44336;"></i> 좋아요 ${count + 1}`
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        icon.style.color = ""
        this.innerHTML = `<i class="far fa-heart"></i> 좋아요 ${count - 1}`
      }
    })

    // 새 답글의 답글 버튼 이벤트 추가
    const replyButton = newReply.querySelector(".btn-comment-action i.fa-comment").parentElement
    replyButton.addEventListener("click", (e) => {
      e.preventDefault()
      alert("답글에는 답글을 달 수 없습니다.")
    })
  }

  // 더 많은 댓글 로드 함수
  function loadMoreComments() {
    // 실제 구현에서는 서버에서 추가 댓글 가져오기
    // 임시 구현: 더미 댓글 추가
    const commentsList = document.querySelector(".comments-list")
    const dummyComments = [
      {
        author: "정여행",
        date: "2023년 10월 8일",
        text: "제주도 여행 계획 중인데 정말 유익한 정보 감사합니다! 우도에서 자전거 대여는 어디서 하셨나요?",
        likes: 3,
      },
      {
        author: "한제주",
        date: "2023년 10월 9일",
        text: "저도 지난달에 제주도 다녀왔는데, 우도는 못 가봤네요. 다음에 갈 때는 꼭 가봐야겠어요!",
        likes: 2,
      },
      {
        author: "김맛집",
        date: "2023년 10월 10일",
        text: "혹시 제주도에서 가장 맛있게 드신 음식은 무엇인가요? 다음 달에 제주도 여행 예정인데 맛집 추천 부탁드립니다!",
        likes: 5,
      },
    ]

    // 더미 댓글 추가
    dummyComments.forEach((comment) => {
      const newComment = document.createElement("div")
      newComment.className = "comment"
      newComment.innerHTML = `
                <img src="/placeholder.svg?height=40&width=40" alt="댓글 작성자" class="comment-avatar">
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-date">${comment.date}</span>
                    </div>
                    <p class="comment-text">${comment.text}</p>
                    <div class="comment-actions">
                        <button class="btn-comment-action">
                            <i class="far fa-heart"></i> 좋아요 ${comment.likes}
                        </button>
                        <button class="btn-comment-action">
                            <i class="far fa-comment"></i> 답글
                        </button>
                    </div>
                </div>
            `

      commentsList.appendChild(newComment)

      // 좋아요 버튼 이벤트 추가
      const likeButton = newComment.querySelector(".btn-comment-action i.fa-heart").parentElement
      likeButton.addEventListener("click", function (e) {
        e.preventDefault()

        // 로그인 상태 확인 (임시 구현)
        const isLoggedIn =
          localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

        if (isLoggedIn) {
          // 좋아요 토글
          const icon = this.querySelector("i")
          const text = this.textContent.trim()
          const count = Number.parseInt(text.split(" ")[1])

          if (icon.classList.contains("far")) {
            icon.classList.remove("far")
            icon.classList.add("fas")
            icon.style.color = "#f44336"
            this.innerHTML = `<i class="fas fa-heart" style="color: #f44336;"></i> 좋아요 ${count + 1}`
          } else {
            icon.classList.remove("fas")
            icon.classList.add("far")
            icon.style.color = ""
            this.innerHTML = `<i class="far fa-heart"></i> 좋아요 ${count - 1}`
          }
        } else {
          // 로그인 모달 열기
          alert("로그인이 필요한 기능입니다.")
          window.location.href = "login.html"
        }
      })

      // 답글 버튼 이벤트 추가
      const replyButton = newComment.querySelector(".btn-comment-action i.fa-comment").parentElement
      replyButton.addEventListener("click", function (e) {
        e.preventDefault()

        // 로그인 상태 확인 (임시 구현)
        const isLoggedIn =
          localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

        if (isLoggedIn) {
          // 답글 입력 폼 토글
          const comment = this.closest(".comment")
          let replyForm = comment.querySelector(".reply-form")

          if (replyForm) {
            // 이미 폼이 있으면 제거
            replyForm.remove()
          } else {
            // 폼 생성
            replyForm = document.createElement("div")
            replyForm.className = "reply-form"
            replyForm.innerHTML = `
                            <div class="comment-form" style="margin-top: 15px;">
                                <img src="/placeholder.svg?height=40&width=40" alt="사용자 프로필" class="user-avatar">
                                <div class="comment-input-container">
                                    <textarea class="comment-input" placeholder="답글을 남겨보세요"></textarea>
                                    <button class="btn-submit-comment">등록</button>
                                </div>
                            </div>
                        `

            // 답글 폼 추가
            const commentContent = comment.querySelector(".comment-content")
            const replies = commentContent.querySelector(".replies")

            if (replies) {
              replies.appendChild(replyForm)
            } else {
              const newReplies = document.createElement("div")
              newReplies.className = "replies"
              newReplies.appendChild(replyForm)
              commentContent.appendChild(newReplies)
            }

            // 답글 등록 버튼 이벤트
            const replySubmitBtn = replyForm.querySelector(".btn-submit-comment")
            const replyInput = replyForm.querySelector(".comment-input")

            replySubmitBtn.addEventListener("click", () => {
              const replyText = replyInput.value.trim()
              if (replyText) {
                // 새 답글 추가
                addNewReply(comment, replyText)
                replyForm.remove()
              } else {
                alert("답글 내용을 입력해주세요.")
              }
            })
          }
        } else {
          // 로그인 모달 열기
          alert("로그인이 필요한 기능입니다.")
          window.location.href = "login.html"
        }
      })
    })

    // 댓글 수 업데이트
    updateCommentCount(dummyComments.length)

    // 더 보기 버튼 숨기기 (모든 댓글을 로드했다고 가정)
    btnLoadMore.style.display = "none"
  }

  // 댓글 수 업데이트 함수
  function updateCommentCount(increment) {
    const commentCountEl = document.querySelector(".comment-count")
    const currentCount = Number.parseInt(commentCountEl.textContent)
    commentCountEl.textContent = currentCount + increment
  }

  // URL에서 게시글 ID 또는 제목 가져오기
  function getPostIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get("id") || urlParams.get("title") || null
  }

  // 페이지 로드 시 게시글 데이터 가져오기 (실제 구현에서는 서버에서 데이터 가져오기)
  function loadPostData() {
    const postId = getPostIdFromUrl()
    // 실제 구현에서는 postId를 사용하여 서버에서 데이터 가져오기
    console.log("Loading post data for ID:", postId)
  }

  // 페이지 로드 시 실행
  loadPostData()
})
