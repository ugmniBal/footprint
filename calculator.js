function calculate() {
  const tumbler = parseInt(document.getElementById('tumbler').value) || 0;
  const bag = parseInt(document.getElementById('bag').value) || 0;
  const plastic = parseInt(document.getElementById('plastic').value) || 0;

  const score = tumbler * 2 + bag * 3 + plastic * 1;

  let message = '';
  if (score >= 30) {
    message = "🌍 훌륭해요! 당신의 실천은 지구를 웃게 합니다!";
  } else if (score >= 15) {
    message = "😊 좋아요! 조금만 더 노력해봐요!";
  } else {
    message = "💡 시작이 반입니다! 지금부터 함께해요!";
  }

  document.getElementById('result').textContent = `당신의 실천 점수는 ${score}점입니다. ${message}`;
}
