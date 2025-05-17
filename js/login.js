document.addEventListener("DOMContentLoaded", () => {
  // 탭 요소
  const authTabs = document.querySelectorAll(".auth-tab")
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")

  // 비밀번호 표시/숨김 토글 버튼
  const togglePasswordBtns = document.querySelectorAll(".toggle-password")

  // 이메일 인증 버튼
  const verifyEmailBtn = document.querySelector(".btn-verify")

  // 로그인 폼
  const loginFormEl = loginForm.querySelector("form")

  // 회원가입 폼
  const registerFormEl = registerForm.querySelector("form")

  // 탭 클릭 이벤트
  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 모든 탭 비활성화
      authTabs.forEach((t) => t.classList.remove("active"))

      // 현재 탭 활성화
      tab.classList.add("active")

      // 해당 폼 표시
      const tabType = tab.dataset.tab
      if (tabType === "login") {
        loginForm.style.display = "block"
        registerForm.style.display = "none"
      } else {
        loginForm.style.display = "none"
        registerForm.style.display = "block"
      }
    })
  })

  // 비밀번호 표시/숨김 토글
  togglePasswordBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const passwordInput = btn.parentElement.querySelector("input")
      const icon = btn.querySelector("i")

      if (passwordInput.type === "password") {
        passwordInput.type = "text"
        icon.className = "far fa-eye-slash"
      } else {
        passwordInput.type = "password"
        icon.className = "far fa-eye"
      }
    })
  })

  // 이메일 인증 버튼 클릭 이벤트
  verifyEmailBtn.addEventListener("click", () => {
    const emailInput = document.getElementById("registerEmail")
    const email = emailInput.value.trim()

    if (!email) {
      alert("이메일을 입력해주세요.")
      return
    }

    if (!isValidEmail(email)) {
      alert("유효한 이메일 주소를 입력해주세요.")
      return
    }

    // 이메일 인증 요청 (실제 구현에서는 서버로 요청)
    alert(`${email}로 인증번호가 발송되었습니다.`)

    // 인증번호 입력 필드 활성화
    const verificationCodeInput = document.getElementById("verificationCode")
    const verifyCodeBtn = verificationCodeInput.nextElementSibling

    verificationCodeInput.disabled = false
    verifyCodeBtn.disabled = false

    // 인증번호 확인 버튼 이벤트
    verifyCodeBtn.addEventListener("click", () => {
      const code = verificationCodeInput.value.trim()

      if (!code) {
        alert("인증번호를 입력해주세요.")
        return
      }

      // 인증번호 확인 (실제 구현에서는 서버로 확인 요청)
      alert("이메일 인증이 완료되었습니다.")
      verifyCodeBtn.textContent = "인증됨"
      verifyCodeBtn.disabled = true
      verifyCodeBtn.style.backgroundColor = "#A5D6A7"
    })
  })

  // 로그인 폼 제출 이벤트
  loginFormEl.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("loginEmail").value.trim()
    const password = document.getElementById("loginPassword").value.trim()
    const rememberMe = document.getElementById("rememberMe").checked

    if (!email || !password) {
      alert("이메일과 비밀번호를 모두 입력해주세요.")
      return
    }

    if (!isValidEmail(email)) {
      alert("유효한 이메일 주소를 입력해주세요.")
      return
    }

    // 로그인 요청 (실제 구현에서는 서버로 요청)
    // 임시 구현: 이메일이 'test@example.com'이고 비밀번호가 'password'인 경우 로그인 성공
    if (email === "test@example.com" && password === "password") {
      // 로그인 성공 처리
      alert("로그인 성공!")

      // 로그인 상태 저장 (실제 구현에서는 토큰 등을 사용)
      if (rememberMe) {
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userEmail", email)
      } else {
        sessionStorage.setItem("isLoggedIn", "true")
        sessionStorage.setItem("userEmail", email)
      }

      // 메인 페이지로 이동
      window.location.href = "index.html"
    } else {
      // 로그인 실패 처리
      alert("이메일 또는 비밀번호가 올바르지 않습니다.")
    }
  })

  // 회원가입 폼 제출 이벤트
  registerFormEl.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("registerEmail").value.trim()
    const password = document.getElementById("registerPassword").value.trim()
    const confirmPassword = document.getElementById("confirmPassword").value.trim()
    const nickname = document.getElementById("nickname").value.trim()
    const agreeTerms = document.getElementById("agreeTerms").checked

    // 유효성 검사
    if (!email || !password || !confirmPassword || !nickname) {
      alert("모든 필수 항목을 입력해주세요.")
      return
    }

    if (!isValidEmail(email)) {
      alert("유효한 이메일 주소를 입력해주세요.")
      return
    }

    if (!isValidPassword(password)) {
      alert("비밀번호는 8~20자의 영문, 숫자, 특수문자를 조합하여 입력해주세요.")
      return
    }

    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
      return
    }

    if (!agreeTerms) {
      alert("이용약관 및 개인정보처리방침에 동의해주세요.")
      return
    }

    // 회원가입 요청 (실제 구현에서는 서버로 요청)
    alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.")

    // 로그인 탭으로 전환
    authTabs[0].click()
  })

  // 이메일 유효성 검사 함수
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // 비밀번호 유효성 검사 함수
  function isValidPassword(password) {
    // 8~20자, 영문, 숫자, 특수문자 조합
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
    return passwordRegex.test(password)
  }

  // 로그인 상태 확인 및 UI 업데이트
  function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || sessionStorage.getItem("isLoggedIn") === "true"

    if (isLoggedIn) {
      // 이미 로그인된 상태라면 메인 페이지로 리다이렉트
      window.location.href = "index.html"
    }
  }

  // 페이지 로드 시 로그인 상태 확인
  checkLoginStatus()
})
