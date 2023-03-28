const slideIndex = ref(0)
const slideInterval = ref()
const slideLength = ref()

function startInterval () {
  slideInterval.value = setTimeout(() => {
    handleNext()
  }, 3000)
}

function stopInterval () {
  clearInterval(slideInterval.value)
}

function handleNext () {
  if (slideIndex.value + 1 >= slideLength.value) {
    slideIndex.value = 0
  } else {
    slideIndex.value += 1
  }
  stopInterval()
  startInterval()
}

function handlePrevious () {
  if (slideIndex.value - 1 < 0) {
    slideIndex.value = slideLength.value - 1
  } else {
    slideIndex.value -= 1
  }
  stopInterval()
  startInterval()
}

export default (length = 0) => {

  slideLength.value = length
  startInterval()

  return {
    slideIndex,
    slideInterval,
    startInterval,
    stopInterval,
    handleNext,
    handlePrevious
  }
}