let selectedVotes = [];

function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(`page${pageNumber}`).classList.add('active');
}

function saveLetterAndNext() {
  const name = document.getElementById('userName').value.trim();
  const letter = document.getElementById('userLetter').value.trim();

  if (!name || !letter) {
    alert("Harap isi nama dan surat terlebih dahulu!");
    return;
  }

  // Tampilkan ke History Message Box
  const historyBox = document.getElementById('historyBox');
  const historyContent = document.getElementById('historyContent');
  historyContent.innerHTML = `<strong>Dari: ${name}</strong><br>"${letter}"`;
  historyBox.style.display = 'block';

  setTimeout(() => {
    goToPage(2);
  }, 1200);
}

function selectVote(element, voteValue) {
  if (element.classList.contains('selected')) {
    // Batalkan pilihan jika diklik lagi
    element.classList.remove('selected');
    selectedVotes = selectedVotes.filter(item => item !== voteValue);
  } else {
    // Batasi maksimal 2 pilihan
    if (selectedVotes.length < 2) {
      element.classList.add('selected');
      selectedVotes.push(voteValue);
    } else {
      alert("Kamu hanya bisa memilih 2 opsi voting!");
    }
  }

  const btnVoteNext = document.getElementById('btnVoteNext');
  if (selectedVotes.length === 2) {
    btnVoteNext.disabled = false;
  } else {
    btnVoteNext.disabled = true;
  }
}

function startTimerPage() {
  const impression = document.getElementById('firstImpression').value.trim();
  if (!impression) {
    alert("Harap isi First Impression terlebih dahulu!");
    return;
  }

  goToPage(4);

  let count = 5;
  const timerDisplay = document.getElementById('timerDisplay');
  const interactiveArea = document.getElementById('interactiveArea');

  const countdown = setInterval(() => {
    count--;
    if (count > 0) {
      timerDisplay.innerText = count;
    } else {
      clearInterval(countdown);
      timerDisplay.style.display = 'none';
      interactiveArea.style.display = 'block';
    }
  }, 1000);
}

function revealName() {
  const finalName = document.getElementById('finalName');
  finalName.style.display = 'block';
}