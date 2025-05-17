document.addEventListener("DOMContentLoaded", () => {
  // 캘린더 요소
  const calendarEl = document.getElementById("calendar")
  const calendarTitle = document.getElementById("calendarTitle")
  const todayBtn = document.getElementById("todayBtn")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const viewBtns = document.querySelectorAll(".btn-view")

  // 필터 요소
  const filterClass = document.getElementById("filterClass")
  const filterMoim = document.getElementById("filterMoim")
  const filterPersonal = document.getElementById("filterPersonal")

  // 모달 요소
  const addEventBtn = document.getElementById("addEventBtn")
  const addEventModal = document.getElementById("addEventModal")
  const eventDetailModal = document.getElementById("eventDetailModal")
  const closeModalBtns = document.querySelectorAll(".close-modal")
  const addEventForm = document.querySelector(".add-event-form")
  const editEventBtn = document.getElementById("editEventBtn")
  const deleteEventBtn = document.getElementById("deleteEventBtn")

  // 이벤트 타입 선택 요소
  const eventTypeSelect = document.getElementById("eventType")
  const eventColorSelect = document.getElementById("eventColor")

  // 이벤트 데이터 (실제 구현에서는 서버에서 가져올 데이터)
  let events = [
    {
      id: 1,
      title: "테니스 레슨",
      start: "2023-10-15T14:00:00",
      end: "2023-10-15T16:00:00",
      color: "#4CAF50",
      type: "class",
      location: "서울 송파구 테니스장",
      description: "초보자를 위한 테니스 레슨입니다.",
    },
    {
      id: 2,
      title: "독서 모임",
      start: "2023-10-18T19:00:00",
      end: "2023-10-18T21:00:00",
      color: "#2196F3",
      type: "moim",
      location: "강남 카페",
      description: "이번 달 선정 도서: '사피엔스'에 대해 토론합니다.",
    },
    {
      id: 3,
      title: "병원 예약",
      start: "2023-10-20T10:30:00",
      end: "2023-10-20T11:30:00",
      color: "#FF9800",
      type: "personal",
      location: "서울대학병원",
      description: "정기 건강 검진",
    },
    {
      id: 4,
      title: "베이킹 클래스",
      start: "2023-10-22",
      end: "2023-10-22",
      allDay: true,
      color: "#4CAF50",
      type: "class",
      location: "마포구 베이킹 스튜디오",
      description: "크로와상 만들기 원데이 클래스",
    },
    {
      id: 5,
      title: "등산 모임",
      start: "2023-10-28T08:00:00",
      end: "2023-10-28T16:00:00",
      color: "#2196F3",
      type: "moim",
      location: "북한산",
      description: "가을 단풍 등산. 도시락과 등산화 필수!",
    },
  ]

  // 현재 편집 중인 이벤트 ID
  let currentEventId = null

  // FullCalendar 선언
  const FullCalendar = window.FullCalendar

  // 캘린더 초기화
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    headerToolbar: false, // 커스텀 툴바 사용
    locale: "ko",
    firstDay: 0, // 일요일부터 시작
    height: "100%",
    events: events,
    eventClick: handleEventClick,
    dateClick: handleDateClick,
    datesSet: handleDatesSet,
  })

  // 캘린더 렌더링
  calendar.render()

  // 초기 캘린더 제목 설정
  updateCalendarTitle()

  // 다가오는 일정 목록 업데이트
  updateUpcomingEvents()

  // 오늘 버튼 클릭 이벤트
  todayBtn.addEventListener("click", () => {
    calendar.today()
    updateCalendarTitle()
  })

  // 이전 버튼 클릭 이벤트
  prevBtn.addEventListener("click", () => {
    calendar.prev()
    updateCalendarTitle()
  })

  // 다음 버튼 클릭 이벤트
  nextBtn.addEventListener("click", () => {
    calendar.next()
    updateCalendarTitle()
  })

  // 뷰 버튼 클릭 이벤트
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 이전 활성화 버튼 비활성화
      viewBtns.forEach((b) => b.classList.remove("active"))

      // 현재 버튼 활성화
      btn.classList.add("active")

      // 캘린더 뷰 변경
      const view = btn.dataset.view
      if (view === "month") {
        calendar.changeView("dayGridMonth")
      } else if (view === "week") {
        calendar.changeView("timeGridWeek")
      } else if (view === "day") {
        calendar.changeView("timeGridDay")
      }
    })
  })

  // 필터 변경 이벤트
  filterClass.addEventListener("change", applyFilters)
  filterMoim.addEventListener("change", applyFilters)
  filterPersonal.addEventListener("change", applyFilters)

  // 일정 추가 버튼 클릭 이벤트
  addEventBtn.addEventListener("click", () => {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn =
      document.getElementById("userProfile") && document.getElementById("userProfile").style.display === "block"

    if (isLoggedIn) {
      // 폼 초기화
      addEventForm.reset()
      currentEventId = null

      // 오늘 날짜로 기본값 설정
      const today = new Date()
      const formattedDate = formatDateForInput(today)
      document.getElementById("eventStartDate").value = formattedDate
      document.getElementById("eventEndDate").value = formattedDate

      // 이벤트 타입에 따른 색상 설정
      updateEventColor()

      // 모달 열기
      addEventModal.style.display = "flex"
    } else {
      // 로그인 모달 열기
      document.getElementById("loginModal").style.display = "flex"
    }
  })

  // 이벤트 타입 변경 시 색상 업데이트
  eventTypeSelect.addEventListener("change", updateEventColor)

  // 모달 닫기 버튼 클릭 이벤트
  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      addEventModal.style.display = "none"
      eventDetailModal.style.display = "none"
    })
  })

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target === addEventModal) {
      addEventModal.style.display = "none"
    } else if (event.target === eventDetailModal) {
      eventDetailModal.style.display = "none"
    }
  })

  // 일정 추가 폼 제출 이벤트
  addEventForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // 폼 데이터 수집
    const title = document.getElementById("eventTitle").value
    const type = document.getElementById("eventType").value
    const startDate = document.getElementById("eventStartDate").value
    const startTime = document.getElementById("eventStartTime").value
    const endDate = document.getElementById("eventEndDate").value
    const endTime = document.getElementById("eventEndTime").value
    const location = document.getElementById("eventLocation").value
    const description = document.getElementById("eventDescription").value
    const color = document.getElementById("eventColor").value
    const allDay = document.getElementById("eventAllDay").checked

    // 시작 및 종료 시간 생성
    let start = startDate
    let end = endDate

    if (!allDay) {
      start = startDate + "T" + (startTime || "00:00:00")
      end = endDate + "T" + (endTime || "23:59:59")
    }

    // 새 이벤트 객체 생성
    const newEvent = {
      id: currentEventId || Date.now(), // 편집 중이면 기존 ID 사용, 아니면 새 ID 생성
      title,
      start,
      end,
      allDay,
      color,
      type,
      location,
      description,
    }

    // 이벤트 추가 또는 업데이트
    if (currentEventId) {
      // 기존 이벤트 업데이트
      events = events.map((event) => (event.id === currentEventId ? newEvent : event))
    } else {
      // 새 이벤트 추가
      events.push(newEvent)
    }

    // 캘린더 이벤트 업데이트
    calendar.getEventSources().forEach((source) => source.remove())
    calendar.addEventSource(events)

    // 다가오는 일정 목록 업데이트
    updateUpcomingEvents()

    // 모달 닫기
    addEventModal.style.display = "none"

    // 성공 메시지 표시
    alert(currentEventId ? "일정이 수정되었습니다." : "새 일정이 추가되었습니다.")
  })

  // 이벤트 수정 버튼 클릭 이벤트
  editEventBtn.addEventListener("click", () => {
    // 현재 선택된 이벤트 가져오기
    const event = events.find((e) => e.id === currentEventId)
    if (!event) return

    // 폼에 이벤트 데이터 채우기
    document.getElementById("eventTitle").value = event.title
    document.getElementById("eventType").value = event.type
    document.getElementById("eventLocation").value = event.location || ""
    document.getElementById("eventDescription").value = event.description || ""
    document.getElementById("eventColor").value = event.color
    document.getElementById("eventAllDay").checked = event.allDay || false

    // 날짜 및 시간 설정
    const startDate = new Date(event.start)
    const endDate = new Date(event.end || event.start)

    document.getElementById("eventStartDate").value = formatDateForInput(startDate)
    document.getElementById("eventEndDate").value = formatDateForInput(endDate)

    if (!event.allDay) {
      document.getElementById("eventStartTime").value = formatTimeForInput(startDate)
      document.getElementById("eventEndTime").value = formatTimeForInput(endDate)
    } else {
      document.getElementById("eventStartTime").value = ""
      document.getElementById("eventEndTime").value = ""
    }

    // 상세 모달 닫기
    eventDetailModal.style.display = "none"

    // 추가/수정 모달 열기
    addEventModal.style.display = "flex"
  })

  // 이벤트 삭제 버튼 클릭 이벤트
  deleteEventBtn.addEventListener("click", () => {
    if (confirm("정말로 이 일정을 삭제하시겠습니까?")) {
      // 이벤트 삭제
      events = events.filter((event) => event.id !== currentEventId)

      // 캘린더 이벤트 업데이트
      calendar.getEventSources().forEach((source) => source.remove())
      calendar.addEventSource(events)

      // 다가오는 일정 목록 업데이트
      updateUpcomingEvents()

      // 모달 닫기
      eventDetailModal.style.display = "none"

      // 성공 메시지 표시
      alert("일정이 삭제되었습니다.")
    }
  })

  // 캘린더 제목 업데이트 함수
  function updateCalendarTitle() {
    const date = calendar.getDate()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    calendarTitle.textContent = `${year}년 ${month}월`
  }

  // 날짜 클릭 이벤트 핸들러
  function handleDateClick(info) {
    // 로그인 상태 확인 (임시 구현)
    const isLoggedIn =
      document.getElementById("userProfile") && document.getElementById("userProfile").style.display === "block"

    if (isLoggedIn) {
      // 폼 초기화
      addEventForm.reset()
      currentEventId = null

      // 선택한 날짜로 기본값 설정
      const selectedDate = formatDateForInput(info.date)
      document.getElementById("eventStartDate").value = selectedDate
      document.getElementById("eventEndDate").value = selectedDate

      // 이벤트 타입에 따른 색상 설정
      updateEventColor()

      // 모달 열기
      addEventModal.style.display = "flex"
    } else {
      // 로그인 모달 열기
      document.getElementById("loginModal").style.display = "flex"
    }
  }

  // 이벤트 클릭 이벤트 핸들러
  function handleEventClick(info) {
    const eventId = Number.parseInt(info.event.id)
    currentEventId = eventId

    // 이벤트 데이터 가져오기
    const event = events.find((e) => e.id === eventId)
    if (!event) return

    // 이벤트 상세 정보 설정
    document.getElementById("detailTitle").textContent = event.title

    // 이벤트 타입에 따른 라벨 설정
    let typeLabel = "개인 일정"
    if (event.type === "class") {
      typeLabel = "수업"
    } else if (event.type === "moim") {
      typeLabel = "모임"
    }
    document.getElementById("detailType").textContent = typeLabel

    // 날짜 및 시간 포맷팅
    const startDate = new Date(event.start)
    const endDate = new Date(event.end || event.start)
    const dateStr = formatDateForDisplay(startDate)

    let timeStr = ""
    if (event.allDay) {
      timeStr = "종일"
    } else {
      timeStr = `${formatTimeForDisplay(startDate)} - ${formatTimeForDisplay(endDate)}`
    }

    document.getElementById("detailDate").textContent = dateStr
    document.getElementById("detailTime").textContent = timeStr
    document.getElementById("detailLocation").textContent = event.location || "위치 정보 없음"
    document.getElementById("detailDescription").textContent = event.description || "설명 없음"

    // 이벤트 타입에 따른 스타일 설정
    const detailType = document.getElementById("detailType")
    if (event.type === "class") {
      detailType.style.backgroundColor = "#E8F5E9"
      detailType.style.color = "#4CAF50"
    } else if (event.type === "moim") {
      detailType.style.backgroundColor = "#E3F2FD"
      detailType.style.color = "#2196F3"
    } else {
      detailType.style.backgroundColor = "#FFF3E0"
      detailType.style.color = "#FF9800"
    }

    // 모달 열기
    eventDetailModal.style.display = "flex"
  }

  // 날짜 변경 이벤트 핸들러
  function handleDatesSet() {
    updateCalendarTitle()
  }

  // 필터 적용 함수
  function applyFilters() {
    const showClass = filterClass.checked
    const showMoim = filterMoim.checked
    const showPersonal = filterPersonal.checked

    // 모든 이벤트 가져오기
    const calendarEvents = calendar.getEvents()

    // 필터링 적용
    calendarEvents.forEach((event) => {
      const eventType = event.extendedProps.type
      let visible = false

      if (eventType === "class" && showClass) {
        visible = true
      } else if (eventType === "moim" && showMoim) {
        visible = true
      } else if (eventType === "personal" && showPersonal) {
        visible = true
      }

      if (visible) {
        event.setProp("display", "auto")
      } else {
        event.setProp("display", "none")
      }
    })

    // 다가오는 일정 목록 업데이트
    updateUpcomingEvents()
  }

  // 이벤트 타입에 따른 색상 업데이트 함수
  function updateEventColor() {
    const type = eventTypeSelect.value
    let color = "#4CAF50" // 기본 색상 (수업)

    if (type === "moim") {
      color = "#2196F3"
    } else if (type === "personal") {
      color = "#FF9800"
    }

    eventColorSelect.value = color
  }

  // 다가오는 일정 목록 업데이트 함수
  function updateUpcomingEvents() {
    const upcomingEventsList = document.getElementById("upcomingEventsList")
    upcomingEventsList.innerHTML = ""

    // 현재 날짜
    const now = new Date()

    // 필터 상태 확인
    const showClass = filterClass.checked
    const showMoim = filterMoim.checked
    const showPersonal = filterPersonal.checked

    // 다가오는 이벤트 필터링 (7일 이내)
    const upcomingEvents = events
      .filter((event) => {
        const eventDate = new Date(event.start)
        const diffDays = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24))
        return diffDays >= 0 && diffDays <= 7
      })
      .filter((event) => {
        if (event.type === "class" && showClass) return true
        if (event.type === "moim" && showMoim) return true
        if (event.type === "personal" && showPersonal) return true
        return false
      })
      .sort((a, b) => new Date(a.start) - new Date(b.start))

    // 최대 5개만 표시
    const limitedEvents = upcomingEvents.slice(0, 5)

    if (limitedEvents.length === 0) {
      upcomingEventsList.innerHTML = '<p class="no-events">다가오는 일정이 없습니다.</p>'
      return
    }

    // 이벤트 목록 생성
    limitedEvents.forEach((event) => {
      const eventItem = document.createElement("div")
      eventItem.className = "event-item"
      eventItem.dataset.id = event.id

      const eventDate = new Date(event.start)
      const timeStr = event.allDay ? "종일" : formatTimeForDisplay(eventDate)

      eventItem.innerHTML = `
                <div class="event-color" style="background-color: ${event.color};"></div>
                <div class="event-details">
                    <h5 class="event-title">${event.title}</h5>
                    <p class="event-time">${formatDateForDisplay(eventDate)} ${timeStr}</p>
                </div>
            `

      // 이벤트 클릭 시 상세 정보 표시
      eventItem.addEventListener("click", () => {
        currentEventId = Number.parseInt(event.id)
        const calendarEvent = calendar.getEventById(event.id)
        if (calendarEvent) {
          calendar.gotoDate(calendarEvent.start)
          handleEventClick({ event: calendarEvent })
        }
      })

      upcomingEventsList.appendChild(eventItem)
    })
  }

  // 날짜 포맷팅 함수 (input 요소용)
  function formatDateForInput(date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  // 시간 포맷팅 함수 (input 요소용)
  function formatTimeForInput(date) {
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    return `${hours}:${minutes}`
  }

  // 날짜 포맷팅 함수 (표시용)
  function formatDateForDisplay(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"]
    const weekday = weekdays[date.getDay()]
    return `${year}년 ${month}월 ${day}일 (${weekday})`
  }

  // 시간 포맷팅 함수 (표시용)
  function formatTimeForDisplay(date) {
    const hours = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const ampm = hours < 12 ? "오전" : "오후"
    const displayHours = hours % 12 || 12
    return `${ampm} ${displayHours}:${minutes}`
  }
})
