const languages = [
  {
    id: "telugu",
    name: "Telugu",
    songs: [
      {
        id: "telugu-1",
        title: "Aamchi Mumbai",
        artists: "Ranjith Govind, Rahul, Naveen Madhav, Aalaap Raju",
        image: "./assets/icons/Telugu/Businessman.jpeg",
        audio: "./assets/songs/Telugu/Aamchi Mumbai.mp3",
      },
      {
        id: "telugu-2",
        title: "Naanaa Hyraanaa",
        artists: "Shreya Ghoshal, Karthik, Thaman S, Ramajogayya Sastry",
        image: "/assets/icons/Telugu/Game Changer.jpeg",
        audio: "./assets/songs/Telugu/Naanaa Hyraanaa.mp3",
      },
      {
        id: "telugu-3",
        title: "Bhoome Gundramga",
        artists: "Richard, Ranina Reddy",
        image: "./assets/icons/Telugu/Dhada.jpeg",
        audio: "./assets/songs/Telugu/Bhoome Gundramga.mp3",
      },
      {
        id: "telugu-4",
        title: "Hamsaro",
        artists: "A.R. Rahman, Arjun Chandy, Haricharan, Jonita Gandhi",
        image: "./assets/icons/Telugu/Cheliya.jpeg",
        audio: "./assets/songs/Telugu/Hamsaro.mp3",
      },
      {
        id: "telugu-5",
        title: "Ney Veyrey",
        artists: "Karthik, Shreyas Puranik, Anantha Sreeram",
        image: "./assets/icons/Telugu/Animal.jpeg",
        audio: "./assets/songs/Telugu/Ney Veyrey.mp3",
      },
      {
        id: "telugu-6",
        title: "Vinaraa",
        artists: "Ravi Basrur, Krishna Kanth, Sachin Basrur",
        image: "./assets/icons/Telugu/Salaar.jpeg",
        audio: "./assets/songs/Telugu/Vinaraa.mp3",
      },
      {
        id: "telugu-7",
        title: "Krishna Krishna",
        artists: "Satha Yamini",
        image: "./assets/icons/Telugu/Radhe Shyam.jpeg",
        audio: "./assets/songs/Telugu/Krishna Krishna.mp3",
      },
      {
        id: "telugu-8",
        title: "Kiss Me Baby",
        artists: "Thaman S",
        image: "./assets/icons/Telugu/Mahanubhavudu.jpeg",
        audio: "./assets/songs/Telugu/Kiss Me Baby.mp3",
      },
      {
        id: "telugu-9",
        title: "Ammayi",
        artists: "Raghav Chaitanya, Anantha Sreeram, Pritam",
        image: "./assets/icons/Telugu/Animal.jpeg",
        audio: "./assets/songs/Telugu/Ammayi.mp3",
      },
      {
        id: "telugu-10",
        title: "Thanu",
        artists: "Mickey J. Meyer, Anirudh Ravichander, Raghav",
        image: "./assets/icons/Telugu/HIT-3.jpeg",
        audio: "./assets/songs/Telugu/Thanu.mp3",
      },
      {
        id: "telugu-11",
        title: "Baby He Loves You",
        artists: "Devi Sri Prasad",
        image: "./assets/icons/Telugu/Aarya-2.jpeg",
        audio: "./assets/songs/Telugu/Baby He Loves You.mp3",
      },
      {
        id: "telugu-12",
        title: "Businessman Theme",
        artists: "Mahesh Babu, Thaman S, Puri Jagannadh",
        image: "./assets/icons/Telugu/Businessman.jpeg",
        audio: "./assets/songs/Telugu/Businessman Theme.mp3",
      },
      {
        id: "telugu-13",
        title: "Cheliya Cheliya",
        artists: "Anirudh Ravichander, Ranjith",
        image: "./assets/icons/Telugu/Nenu Rowdy Ne.jpeg",
        audio: "./assets/songs/Telugu/Cheliya Cheliya.mp3",
      },
      {
        id: "telugu-14",
        title: "Vachinda Megham",
        artists: "A.R Rahman, Adnan Sami, Sujatha, Veturi Sundararama Murthy",
        image: "./assets/icons/Telugu/Yuva.jpeg",
        audio: "./assets/songs/Telugu/Vachinda Megham.mp3",
      },
      {
        id: "telugu-15",
        title: "Hello Hello",
        artists: "Nikhil D'Souza, Neha Bhasin",
        image: "./assets/icons/Telugu/Dhada.jpeg",
        audio: "./assets/songs/Telugu/Hello Hello.mp3",
      },
      {
        id: "telugu-16",
        title: "Evaree Ammayee Ani",
        artists: "Haricharan",
        image: "./assets/icons/Telugu/Nene Ambani.jpeg",
        audio: "./assets/songs/Telugu/Evaree Ammayani Adiga.mp3",
      },
      {
        id: "telugu-17",
        title: "Andhame Athivai Vasthe",
        artists: "Prudhvi Chandra, Krishna Kanth",
        image: "./assets/icons/Telugu/Sultan.jpeg",
        audio: "./assets/songs/Telugu/Andhame Athivai Vasthe.mp3",
      },
    ],
  },
  {
    id: "hindi",
    name: "Hindi",
    songs: [
      {
        id: "hindi-1",
        title: "Tere Pyaar Mein",
        artists: "Arijit Singh, Pritam, Amitabh Bhattacharya, Nikitha Gandhi",
        image: "./assets/icons/Hindi/Tu Jhoothi Main Makkaar.jpeg",
        audio: "./assets/songs/Hindi/Tere Pyaar Mein.mp3",
      },
      {
        id: "hindi-2",
        title: "Saadda Haq",
        artists: "Mohit Chauhan",
        image: "./assets/icons/Hindi/Rockstar.jpeg",
        audio: "./assets/songs/Hindi/Saadda Haq.mp3",
      },
      {
        id: "hindi-3",
        title: "Vaaste",
        artists: "Dhvani Bhanushali, Nikhil Dsouza, Tanishk Bagchi",
        image: "./assets/icons/Hindi/Vaaste.jpeg",
        audio: "./assets/songs/Hindi/Vaaste.mp3",
      },
      {
        id: "hindi-4",
        title: "Bye",
        artists: "Aditya Bardwaj",
        image: "./assets/icons/Hindi/Bye.jpeg",
        audio: "./assets/songs/Hindi/Bye.mp3",
      },
      {
        id: "hindi-5",
        title: "Hasi (Male Version)",
        artists: "Amit Mishra, Kunaal Vermaa",
        image: "./assets/icons/Hindi/Hamari Adhuri Kahani.jpeg",
        audio: "./assets/songs/Hindi/Hasi.mp3",
      },
      {
        id: "hindi-6",
        title: "Tujhe Bhula Diya",
        artists:
          "Vishal-Shekhar, Mohit Chauhan, Shekar Ravjiani, Shruti Pathak",
        image: "./assets/icons/Hindi/Anjaana Anjaani.jpeg",
        audio: "./assets/songs/Hindi/Tujhe Bhula Diya.mp3",
      },
      {
        id: "hindi-7",
        title: "Bulleya",
        artists: "Pritam, Amit Mishra, Shilpa Rao",
        image: "./assets/icons/Hindi/Ae Dil Hai Mushkil.jpeg",
        audio: "./assets/songs/Hindi/Bulleya.mp3",
      },
      {
        id: "hindi-8",
        title: "Jab Tak",
        artists: "Arman Malik, Amaal Mallik, Manoj Muntashir",
        image: "./assets/icons/Hindi/M. S. Dhoni.jpeg",
        audio: "./assets/songs/Hindi/Jab Tak.mp3",
      },
      {
        id: "hindi-9",
        title: "Kabira",
        artists: "Pritam, Tochi Raina, Rekha Bhardwaj",
        image: "./assets/icons/Hindi/Yeh Jawani Hai Deewani.jpeg",
        audio: "./assets/songs/Hindi/Kabira.mp3",
      },
      {
        id: "hindi-10",
        title: "BADA",
        artists: "Karma, KSHMR",
        image: "./assets/icons/Hindi/BADA.jpeg",
        audio: "./assets/songs/Hindi/Bada - Karma X KSHMR.mp3",
      },
      {
        id: "hindi-11",
        title: "Zaalima",
        artists: "Arijit Singh, Harshdeep Kaur",
        image: "./assets/icons/Hindi/Raees.jpeg",
        audio: "./assets/songs/Hindi/Zaalima.mp3",
      },
      {
        id: "hindi-12",
        title: "Husn",
        artists: "Anuv Jain",
        image: "./assets/icons/Hindi/Husn.jpeg",
        audio: "./assets/songs/Hindi/Husn.mp3",
      },
      {
        id: "hindi-13",
        title: "Dil Bechara",
        artists: "A.R. Rahman",
        image: "./assets/icons/Hindi/Dil Bechara.jpeg",
        audio: "./assets/songs/Hindi/Dil Bechara.mp3",
      },
      {
        id: "hindi-14",
        title: "Pyaar Hota Kayi Baar Hai",
        artists: "Arijit Singh, Pritam, Amitabh Bhattacharya, Charan",
        image: "./assets/icons/Hindi/Tu Jhoothi Main Makkaar.jpeg",
        audio: "./assets/songs/Hindi/Pyaar Hota Kayi Baar Hai.mp3",
      },
      {
        id: "hindi-15",
        title: "Bekhayali",
        artists: "Sachet Tandon, Sachet-Parampara",
        image: "./assets/icons/Hindi/Kabir Singh.jpeg",
        audio: "./assets/songs/Hindi/Bekhayali.mp3",
      },
      {
        id: "hindi-16",
        title: "Raataan Lambiyan",
        artists: "Tanishk Bagchi, Jubin Nautiyal, Asees Kaur",
        image: "./assets/icons/Hindi/Shershaah.jpeg",
        audio: "./assets/songs/Hindi/Raataan Lambiyan.mp3",
      },
      {
        id: "hindi-17",
        title: "Channa Mereya",
        artists: "Pritam, Arijit Singh",
        image: "./assets/icons/Hindi/Ae Dil Hai Mushkil.jpeg",
        audio: "./assets/songs/Hindi/Channa Mereya.mp3",
      },
    ],
  },
  {
    id: "tamil",
    name: "Tamil",
    songs: [
      {
        id: "tamil-1",
        title: "So Baby",
        artists: "Anirudh Ravichander, Ananthakrrishnan",
        image: "./assets/icons/Tamil/Doctor.jpeg",
        audio: "./assets/songs/Tamil/So Baby.mp3",
      },
      {
        id: "tamil-2",
        title: "Bad Eyes Villain Theme",
        artists: "Anirudh Ravichander",
        image: "./assets/icons/Tamil/Kathi.jpeg",
        audio: "./assets/songs/Tamil/Bad Eyes Villain Theme.mp3",
      },
      {
        id: "tamil-3",
        title: "Ey Inge Paaru",
        artists: "Anirudh Ravichander",
        image: "./assets/icons/Tamil/VIP.jpeg",
        audio: "./assets/songs/Tamil/Ey Inga Paaru.mp3",
      },
      {
        id: "tamil-4",
        title: "Vaathi Raid",
        artists: "Anirudh Ravichander, Arivu",
        image: "./assets/icons/Tamil/Master.jpeg",
        audio: "./assets/songs/Tamil/Vaathi Raid.mp3",
      },
      {
        id: "tamil-5",
        title: "Pathikichu",
        artists: "Anirudh Ravichander, Yogi Sekar, Amogh Balaji",
        image: "./assets/icons/Tamil/Vidaamuyarchi.jpeg",
        audio: "./assets/songs/Tamil/Pathikichu.mp3",
      },
      {
        id: "tamil-6",
        title: "Hukum",
        artists: "Anirudh Ravichander, Super Subu",
        image: "./assets/icons/Tamil/Jailer.jpeg",
        audio: "./assets/songs/Tamil/Hukum.mp3",
      },
      {
        id: "tamil-7",
        title: "Bujji",
        artists: "Santhosh Narayanan, Anirudh Ravichander",
        image: "./assets/icons/Tamil/Jagame Thandhiram.jpeg",
        audio: "./assets/songs/Tamil/Bujji.mp3",
      },
      {
        id: "tamil-8",
        title: "Hunter Vantaar",
        artists: "Anirudh Ravichander, Siddharth Basrur, Arivu",
        image: "./assets/icons/Tamil/Vettaiyan.jpeg",
        audio: "./assets/songs/Tamil/Hunter Vantaar.mp3",
      },
      {
        id: "tamil-9",
        title: "Bae",
        artists: "Anirudh Ravichander, Adithya RK",
        image: "./assets/icons/Tamil/DON.jpeg",
        audio: "./assets/songs/Tamil/Bae.mp3",
      },
      {
        id: "tamil-10",
        title: "Marana Mass",
        artists: "Anirudh Ravichander, S.P. Balasubrahmanyam",
        image: "./assets/icons/Tamil/Petta.jpeg",
        audio: "./assets/songs/Tamil/Marana Mass.mp3",
      },
      {
        id: "tamil-11",
        title: "Evanda Enaku Custody",
        artists: "Santhosh Narayanan",
        image: "./assets/icons/Tamil/Mahaan.jpeg",
        audio: "./assets/songs/Tamil/Evanda Enakk Custody.mp3",
      },
      {
        id: "tamil-12",
        title: "Badass",
        artists: "Anirudh Ravichander",
        image: "./assets/icons/Tamil/LEO.jpeg",
        audio: "./assets/songs/Tamil/Badass.mp3",
      },
      {
        id: "tamil-13",
        title: "Rakita Rakita Rakita",
        artists: "Santhosh Narayanan, Dhanush, Dhee",
        image: "./assets/icons/Tamil/Jagame Thandhiram.jpeg",
        audio: "./assets/songs/Tamil/Rakita Rakita Rakita.mp3",
      },
      {
        id: "tamil-14",
        title: "Missing Me",
        artists: "Santhosh Narayanan, Dhruv Vikram",
        image: "./assets/icons/Tamil/Mahaan.jpeg",
        audio: "./assets/songs/Tamil/Missing Me.mp3",
      },
      {
        id: "tamil-15",
        title: "Don'u Don'u Don'u",
        artists: "Anirudh Ravichander, Alisha Thomas",
        image: "./assets/icons/Tamil/Maari.jpeg",
        audio: "./assets/songs/Tamil/Don'u Don'u Don'u.mp3",
      },
      {
        id: "tamil-16",
        title: "Petta Parak",
        artists: "Anirudh Ravichander",
        image: "./assets/icons/Tamil/Petta.jpeg",
        audio: "./assets/songs/Tamil/Petta Paraak.mp3",
      },
      {
        id: "tamil-17",
        title: "Aluma Doluma",
        artists: "Anirudh Ravichander, Badhshah",
        image: "./assets/icons/Tamil/Vedalam.jpeg",
        audio: "./assets/songs/Tamil/Aaluma Doluma.mp3",
      },
    ],
  },
  {
    id: "english",
    name: "English",
    songs: [
      {
        id: "english-1",
        title: "Shape of You",
        artists: "Ed Sheeran",
        image: "./assets/icons/English/Shape Of You.jpeg",
        audio: "./assets/songs/English/Shape Of You.mp3",
      },
      {
        id: "english-2",
        title: "Let Me Love You",
        artists: "DJ Snake, Justin Bieber",
        image: "./assets/icons/English/Let Me Love You.jpeg",
        audio: "./assets/songs/English/Let Me Love You.mp3",
      },
      {
        id: "english-3",
        title: "MONEY",
        artists: "LISA",
        image: "./assets/icons/English/MONEY.jpeg",
        audio: "./assets/songs/English/MONEY.mp3",
      },
      {
        id: "english-4",
        title: "Big Dawgs",
        artists: "Hanumankind, Kalmi",
        image: "./assets/icons/English/Big Dawgs.jpeg",
        audio: "./assets/songs/English/Big Dawgs.mp3",
      },
      {
        id: "english-5",
        title: "Treat You Better",
        artists: "Shawn Mendes",
        image: "./assets/icons/English/Treat You Better.jpeg",
        audio: "./assets/songs/English/Treat You Better.mp3",
      },
      {
        id: "english-6",
        title: "i hate u, i love u",
        artists: "gnash, Olivia O'Brien",
        image: "./assets/icons/English/I hate u, I love u.jpeg",
        audio: "./assets/songs/English/IHateYouILoveYou.mp3",
      },
      {
        id: "english-7",
        title: "Kylie",
        artists: "Akcent",
        image: "./assets/icons/English/Kylie.jpeg",
        audio: "./assets/songs/English/Kylie.mp3",
      },
      {
        id: "english-8",
        title: "Venom",
        artists: "Eminem",
        image: "./assets/icons/English/Venom.jpeg",
        audio: "./assets/songs/English/Venom.mp3",
      },
      {
        id: "english-9",
        title: "Butter",
        artists: "BTS",
        image: "./assets/icons/English/Butter.jpeg",
        audio: "./assets/songs/English/Butter.mp3",
      },
      {
        id: "english-10",
        title: "FRIENDS",
        artists: "Marshmello, Anne-Marie",
        image: "./assets/icons/English/FRIENDS.jpeg",
        audio: "./assets/songs/English/Friends.mp3",
      },
      {
        id: "english-11",
        title: "Anyone",
        artists: "Justin Bieber",
        image: "./assets/icons/English/Anyone.jpeg",
        audio: "./assets/songs/English/Anyone.mp3",
      },
      {
        id: "english-12",
        title: "Animals",
        artists: "Maroon 5",
        image: "./assets/icons/English/Animals.jpeg",
        audio: "./assets/songs/English/Animals.mp3",
      },
      {
        id: "english-13",
        title: "Heat Waves",
        artists: "Glass Animals",
        image: "./assets/icons/English/Heat Waves.jpeg",
        audio: "./assets/songs/English/Heat Waves.mp3",
      },
      {
        id: "english-14",
        title: "Perfect",
        artists: "Ed Sheeran",
        image: "./assets/icons/English/Perfect.jpeg",
        audio: "./assets/songs/English/Perfect.mp3",
      },
      {
        id: "english-15",
        title: "Steal My Girl",
        artists: "One Direction",
        image: "./assets/icons/English/Steal My Girl.jpeg",
        audio: "./assets/songs/English/Steal My Girl.mp3",
      },
      {
        id: "english-16",
        title: "Run It Up",
        artists: "Hanumankind",
        image: "./assets/icons/English/Run It Up.jpeg",
        audio: "./assets/songs/English/Run It Up.mp3",
      },
      {
        id: "english-17",
        title: "INDUSTRY BABY",
        artists: "Lil Nas X, Jack Harlow",
        image: "./assets/icons/English/Industry Baby.jpeg",
        audio: "./assets/songs/English/Industry Baby.mp3",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".section-name");
  const typeButtons = document.querySelectorAll(".type");
  const homeIcon = document.getElementById("home-icon");
  const homeButton = document.getElementById("home-btn");
  const albumContainer1 = document.getElementById("album-container-1");
  const albumContainer2 = document.getElementById("album-container-2");
  const albumContainer3 = document.getElementById("album-container-3");
  const episodeContainer = document.getElementById("episodes-container");
  const shuffleAlbums = document.getElementById("shuffle-all");

  const playIcon = document.querySelector(".play-icon");
  const playerPlayButton = playIcon;
  const songNameDisplay = document.querySelector(".song-name");
  const songCastDisplay = document.querySelector(".song-cast");
  const songImageDisplay = document.querySelector(".song-image");

  const currentTimeDisplay = document.getElementById("current-time");
  const totalDurationDisplay = document.getElementById("total-duration");
  const playedProgress = document.getElementById("played-progress");

  const subTenButton = document.getElementById("sub-ten-btn");
  const backwardButton = document.getElementById("backward-btn");
  const forwardButton = document.getElementById("forward-btn");
  const addTenButton = document.getElementById("add-ten-btn");

  const progressBar = document.getElementById("progress-bar");
  const volumeSlider = document.getElementById("volume-slider");
  const volumeLevel = document.getElementById("volume-level");
  const volumeIcon = document.getElementById("volume-icon");

  const playingGif = document.getElementById("playing-gif");
  const pausedGif = document.getElementById("paused-gif");

  const audioElement = new Audio();
  let currentRandomSongs = [];
  let lastRenderedSongs = [];
  let playingItem = { title: null, type: null };

  function clearNavStates() {
    navButtons.forEach((btn) => btn.classList.remove("active-button"));
    homeIcon.classList.remove("active-button");
  }

  function clearTypeStates() {
    typeButtons.forEach((btn) => btn.classList.remove("active-button"));
  }

  function showShuffleIfHome(button) {
    shuffleAlbums.style.display = button.id === "home-btn" ? "flex" : "none";
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearNavStates();
      clearTypeStates();
      button.classList.add("active-button");
      if (button.id === "home-btn") {
        homeIcon.classList.add("active-button");
        displayRandomSongs();
      }
      showShuffleIfHome(button);
    });
  });

  typeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      clearTypeStates();
      clearNavStates();
      button.classList.add("active-button");
      showShuffleIfHome({ id: "" });
      displaySongs(button.id);
    });
  });

  homeButton.classList.add("active-button");
  homeIcon.classList.add("active-button");

  function updateBottomPlayerUI(song) {
    audioElement.src = song.audio;
    audioElement.play();
    songNameDisplay.textContent = song.title;
    songCastDisplay.textContent = song.artists;
    songImageDisplay.src = song.image;
    playIcon.textContent = "pause_circle";
  }

  function resetPlayButtons(exceptElement = null, type = null) {
    document.querySelectorAll(".album").forEach((album) => {
      album
        .querySelector(".play-button i")
        .classList.replace("fa-pause", "fa-play");
      album.querySelector(".play-button").classList.remove("playing");
      album.classList.remove("playclicked");
    });

    document.querySelectorAll(".episode").forEach((episode) => {
      episode
        .querySelector(".play-episode-button i")
        .classList.replace("fa-pause", "fa-play");
      episode
        .querySelector(".play-episode-button")
        .classList.remove("episode-playing");
      episode.classList.remove("play-episode-clicked");
    });

    playingItem = { title: null, type: null };

    if (exceptElement) {
      const songTitle =
        exceptElement.querySelector(".album-name")?.textContent ||
        exceptElement.querySelector(".episode-text")?.textContent;

      const foundSong = lastRenderedSongs.find(
        (song) => song.title === songTitle
      );
      if (foundSong) {
        updateBottomPlayerUI(foundSong);
        playingItem = { title: songTitle, type };
        playingGif.style.display = "block";
        pausedGif.style.display = "none";
      }

      if (type === "album") {
        exceptElement
          .querySelector(".play-button i")
          .classList.replace("fa-play", "fa-pause");
        exceptElement.querySelector(".play-button").classList.add("playing");
        exceptElement.classList.add("playclicked");
      } else if (type === "episode") {
        exceptElement
          .querySelector(".play-episode-button i")
          .classList.replace("fa-play", "fa-pause");
        exceptElement
          .querySelector(".play-episode-button")
          .classList.add("episode-playing");
        exceptElement.classList.add("play-episode-clicked");
      }
    } else {
      audioElement.pause();
      playingGif.style.display = "none";
      pausedGif.style.display = "block";
      playIcon.textContent = "play_circle";
    }
  }

  function addAlbumClickEvents() {
    document.querySelectorAll(".album").forEach((album) => {
      album.addEventListener("click", () => {
        const icon = album.querySelector(".play-button i");
        const isPlaying = icon.classList.contains("fa-pause");
        const songTitle = album.querySelector(".album-name").textContent;

        if (isPlaying) {
          // If clicked the currently playing song, pause and reset UI
          if (playingItem.title === songTitle && playingItem.type === "album") {
            audioElement.pause();
            audioElement.currentTime = 0;
            resetPlayButtons();
            songNameDisplay.textContent = "";
            songCastDisplay.textContent = "";
            songImageDisplay.src = "";
            totalDurationDisplay.textContent = "";
            currentTimeDisplay.textContent = "";
            playedProgress.style.width = "0%";
          } else {
            // If some other album playing, just reset and play this one
            resetPlayButtons(album, "album");
          }
        } else {
          resetPlayButtons(album, "album");
        }
      });
    });
  }

  function addEpisodeClickEvents() {
    document.querySelectorAll(".episode").forEach((episode) => {
      episode.addEventListener("click", () => {
        const icon = episode.querySelector(".play-episode-button i");
        const isPlaying = icon.classList.contains("fa-pause");
        const songTitle = episode.querySelector(".episode-text").textContent;

        if (isPlaying) {
          // If clicked the currently playing episode, pause and reset UI
          if (
            playingItem.title === songTitle &&
            playingItem.type === "episode"
          ) {
            audioElement.pause();
            audioElement.currentTime = 0;
            resetPlayButtons();
            songNameDisplay.textContent = "";
            songCastDisplay.textContent = "";
            songImageDisplay.src = "";
            totalDurationDisplay.textContent = "";
            currentTimeDisplay.textContent = "";
            playedProgress.style.width = "0%";
          } else {
            // If some other episode playing, just reset and play this one
            resetPlayButtons(episode, "episode");
          }
        } else {
          resetPlayButtons(episode, "episode");
        }
      });
    });
  }

  function createAlbumElement(song) {
    const album = document.createElement("div");
    album.classList.add("album");
    album.innerHTML = `
      <img src="${song.image}" alt="Album Cover" class="album-image" />
      <p class="album-name">${song.title}</p>
      <div class="play-button ${
        playingItem.title === song.title ? "playing" : ""
      }">
        <i class="fa ${
          playingItem.title === song.title ? "fa-pause" : "fa-play"
        }"></i>
      </div>`;
    if (playingItem.title === song.title) album.classList.add("playclicked");
    return album;
  }

  function createEpisodeElement(song) {
    const episode = document.createElement("div");
    episode.classList.add("episode");
    episode.innerHTML = `
      <img src="${song.image}" alt="Episode Cover" />
      <div class="play-episode-button ${
        playingItem.title === song.title ? "episode-playing" : ""
      }">
        <i class="fa ${
          playingItem.title === song.title ? "fa-pause" : "fa-play"
        }"></i>
      </div>
      <div class="episode-text-box">
        <p class="episode-text">${song.title}</p>
      </div>`;
    if (playingItem.title === song.title)
      episode.classList.add("play-episode-clicked");
    return episode;
  }

  function renderSongs(songs) {
    lastRenderedSongs = songs;
    albumContainer1.innerHTML = "";
    albumContainer2.innerHTML = "";
    albumContainer3.innerHTML = "";
    episodeContainer.innerHTML = "";

    songs
      .slice(0, 4)
      .forEach((song) => albumContainer1.appendChild(createAlbumElement(song)));
    songs
      .slice(4, 7)
      .forEach((song) => albumContainer2.appendChild(createAlbumElement(song)));
    songs
      .slice(7, 11)
      .forEach((song) => albumContainer3.appendChild(createAlbumElement(song)));
    songs
      .slice(11, 17)
      .forEach((song) =>
        episodeContainer.appendChild(createEpisodeElement(song))
      );

    addAlbumClickEvents();
    addEpisodeClickEvents();
  }

  function randomSongsGenerator(languages, count) {
    const allSongs = languages.flatMap((lang) =>
      lang.songs.map((song) => ({ ...song, language: lang.id }))
    );
    for (let i = allSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allSongs[i], allSongs[j]] = [allSongs[j], allSongs[i]];
    }
    return allSongs.slice(0, count);
  }

  function displaySongs(languageId) {
    const languageData = languages.find((lang) => lang.id === languageId);
    if (languageData) renderSongs(languageData.songs);
  }

  function displayRandomSongs() {
    const cached = localStorage.getItem("randomSongs");
    currentRandomSongs = cached
      ? JSON.parse(cached)
      : randomSongsGenerator(languages, 17);
    if (!cached)
      localStorage.setItem("randomSongs", JSON.stringify(currentRandomSongs));
    renderSongs(currentRandomSongs);
  }

  playerPlayButton.addEventListener("click", () => {
    if (!playingItem.title) return;

    if (audioElement.paused) {
      // Fix: when resuming from pause, just play the current audio without resetting UI again
      audioElement.play();
      playIcon.textContent = "pause_circle";
      playingGif.style.display = "block";
      pausedGif.style.display = "none";
    } else {
      audioElement.pause();
      playIcon.textContent = "play_circle";
      playingGif.style.display = "none";
      pausedGif.style.display = "block";
    }

    document
      .querySelectorAll(".play-button i, .play-episode-button i")
      .forEach((icon) => {
        const container = icon.closest(".album, .episode");
        const title = container.querySelector(
          ".album-name, .episode-text"
        )?.textContent;
        if (title === playingItem.title) {
          icon.classList.toggle("fa-play", audioElement.paused);
          icon.classList.toggle("fa-pause", !audioElement.paused);
        } else {
          // Ensure other icons show play state
          icon.classList.remove("fa-pause");
          icon.classList.add("fa-play");
          container.classList.remove("playclicked", "play-episode-clicked");
          icon.parentElement.classList.remove("playing", "episode-playing");
        }
      });
  });

  // Skip backward 10 seconds
  subTenButton.addEventListener("click", () => {
    if (!isNaN(audioElement.duration)) {
      audioElement.currentTime = Math.max(0, audioElement.currentTime - 10);
    }
  });

  // Skip forward 10 seconds
  addTenButton.addEventListener("click", () => {
    if (!isNaN(audioElement.duration)) {
      audioElement.currentTime = Math.min(
        audioElement.duration,
        audioElement.currentTime + 10
      );
    }
  });

  function getCurrentSongIndex() {
    return lastRenderedSongs.findIndex(
      (song) => song.title === playingItem.title
    );
  }

  function playSongByIndex(index) {
    if (index >= 0 && index < lastRenderedSongs.length) {
      const song = lastRenderedSongs[index];
      const allItems = [
        ...document.querySelectorAll(".album"),
        ...document.querySelectorAll(".episode"),
      ];
      const matchingElement = allItems.find((el) => {
        const text = el.querySelector(
          ".album-name, .episode-text"
        )?.textContent;
        return text === song.title;
      });
      const type = matchingElement?.classList.contains("album")
        ? "album"
        : "episode";
      resetPlayButtons(matchingElement, type);
    }
  }

  backwardButton.addEventListener("click", () => {
    const currentIndex = getCurrentSongIndex();
    if (currentIndex > 0) {
      playSongByIndex(currentIndex - 1);
    }
  });

  forwardButton.addEventListener("click", () => {
    const currentIndex = getCurrentSongIndex();
    if (currentIndex < lastRenderedSongs.length - 1) {
      playSongByIndex(currentIndex + 1);
    }
  });

  audioElement.volume = 0.7;
  volumeSlider.value = 0.7;
  volumeLevel.textContent = "70%";
  volumeSlider.addEventListener("input", () => {
    const volume = parseFloat(volumeSlider.value);
    audioElement.volume = volume;
    volumeLevel.textContent = `${Math.round(volume * 100)}%`;
    volumeIcon.textContent = volume === 0 ? "volume_off" : "volume_up";
  });

  volumeIcon.addEventListener("click", () => {
    if (audioElement.volume > 0) {
      audioElement.volume = 0;
      volumeSlider.value = 0;
      volumeIcon.textContent = "volume_off";
      volumeLevel.textContent = "0%";
    } else {
      audioElement.volume = 0.7;
      volumeSlider.value = 0.7;
      volumeIcon.textContent = "volume_up";
      volumeLevel.textContent = "70%";
    }
  });

  audioElement.addEventListener("timeupdate", () => {
    currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
    playedProgress.style.width = `${
      (audioElement.currentTime / audioElement.duration) * 100
    }%`;
  });

  audioElement.addEventListener("loadedmetadata", () => {
    totalDurationDisplay.textContent = formatTime(audioElement.duration);
  });

  let isDragging = false;
  progressBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateProgress(e);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) updateProgress(e);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  function updateProgress(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = Math.min(
      1,
      Math.max(0, (e.clientX - rect.left) / rect.width)
    );
    audioElement.currentTime = percent * audioElement.duration;
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  audioElement.addEventListener("ended", () => {
    if (!lastRenderedSongs.length) return;
    const idx = lastRenderedSongs.findIndex(
      (s) => s.title === playingItem.title
    );
    const next = lastRenderedSongs[(idx + 1) % lastRenderedSongs.length];
    const nextIndex = (idx + 1) % lastRenderedSongs.length;
    resetPlayButtons();

    // Determine type based on index
    const nextType = nextIndex < 11 ? "album" : "episode";
    const elements = document.querySelectorAll(
      nextType === "album" ? ".album" : ".episode"
    );
    const nextElement = Array.from(elements).find((el) => {
      const title = el.querySelector(".album-name, .episode-text")?.textContent;
      return title === next.title;
    });

    if (nextElement) resetPlayButtons(nextElement, nextType);
  });

  shuffleAlbums.addEventListener("click", () => {
    resetPlayButtons();
    playingItem = { title: null, type: null };
    currentRandomSongs = randomSongsGenerator(languages, 17);
    localStorage.setItem("randomSongs", JSON.stringify(currentRandomSongs));
    renderSongs(currentRandomSongs);
    playingGif.style.display = "none";
    pausedGif.style.display = "none";
    songNameDisplay.textContent = "";
    songCastDisplay.textContent = "";
    songImageDisplay.src = "";
    totalDurationDisplay.textContent = "";
    currentTimeDisplay.textContent = "";
    playedProgress.style.width = "0%";
  });

  showShuffleIfHome(homeButton);
  displayRandomSongs();
});
