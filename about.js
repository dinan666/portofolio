// ==========================
//   LIVE LYRICS RESPONSIVE
// ==========================

// Timestamp aman (detik)
const lyricTimeline = [
  { time: 0,  text: "Listening…" },
  { time: 5,  text: "Lyrics Here…" },
  { time: 25,  text: "…" },
  { time: 44,  text: "I know a place…" },
  { time: 55,  text: "It's somewhere I go when I need to remember your face…" },
  { time: 64,  text: "We get married in our heads…" },
  { time: 75,  text: "Something to do while we try to recall how we met…" },

  { time: 84,  text: "Do you think I have forgotten?" },
  { time: 89,  text: "Do you think I have forgotten?" },
  { time: 94,  text: "Do you think I have forgotten about you?" },

  { time: 105, text: "You and I (don’t let go)" },
  { time: 110, text: "We're alive (don’t let go)" },
  { time: 115, text: "With nothing to do, I could lay and just look in your eyes…" },

  { time: 125, text: "Wait and pretend…" },
  { time: 134, text: "Hold on and hope that we'll find our way back in the end…" },

  { time: 145, text: "Do you think I have forgotten?" },
  { time: 150, text: "Do you think I have forgotten?" },
  { time: 154, text: "Do you think I have forgotten about you?" },
  { time: 165, text: "Do you think I have forgotten?" },
  { time: 170, text: "Do you think I have forgotten?" },
  { time: 174, text: "Do you think I have forgotten about you?" },

  { time: 185, text: "There was something about you that now I can't remember…" },
  { time: 190, text: "It's the same damn thing that made my heart surrender…" },
  { time: 195, text: "And I'll miss you on a train…" },
  { time: 197, text: "I'll miss you in the morning…" },
  { time: 200, text: "I never know what to think about, so I think about you…" },
  { time: 205, text: "(I think about you…)" },
  { time: 210, text: "About you…" },
  { time: 215, text: "Do you think I have forgotten about you?" },
  { time: 224, text: "About you…" },
  { time: 229, text: "About you…" },
  { time: 233, text: "Do you think I have forgotten about you?" },

  // Instrumental sampai 5:26 → no lyrics
];

// Element
const audio = document.getElementById("myAudio");
const lyricBox = document.getElementById("beatLyric");

// Fade-in helper
function applyFadeIn() {
  lyricBox.classList.remove("fadeInLyric");
  void lyricBox.offsetWidth; // trigger reflow supaya animasi bisa restart
  lyricBox.classList.add("fadeInLyric");
}

let currentLyric = -1;

// Update lyric by time
function updateLyrics() {
  const t = audio.currentTime;

  for (let i = lyricTimeline.length - 1; i >= 0; i--) {
    if (t >= lyricTimeline[i].time) {
      if (currentLyric !== i) {
        currentLyric = i;
        lyricBox.textContent = lyricTimeline[i].text;
        applyFadeIn();
      }
      break;
    }
  }
}

// Loop
audio.addEventListener("timeupdate", updateLyrics);
