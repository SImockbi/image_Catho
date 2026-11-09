/**
 * CELLULE CATH - GALERIE PHOTO HAUT DE GAMME
 * Script interactif : Animations au scroll, Visionneuse HD, Diaporama,
 * Grille dynamique, Recherche et Navigation tactile & clavier.
 */

// Liste exhaustive des 100 photographies officielles
const images = [
  "Lacina/IMG_20261106_195027_4.jpg",
  "Lacina/IMG_20261106_195032_1.jpg",
  "Lacina/IMG_20261106_195037_9.jpg",
  "Lacina/IMG_20261106_195558_8.jpg",
  "Lacina/IMG_20261106_195601_3.jpg",
  "Lacina/IMG_20261106_195608_5.jpg",
  "Lacina/IMG_20261106_195622_4.jpg",
  "Lacina/IMG_20261106_195634_5.jpg",
  "Lacina/IMG_20261106_195848_1.jpg",
  "Lacina/IMG_20261106_195852_4.jpg",
  "Lacina/IMG_20261106_195941_4.jpg",
  "Lacina/IMG_20261106_200016_2.jpg",
  "Lacina/IMG_20261106_200031_5.jpg",
  "Lacina/IMG_20261106_200038_9.jpg",
  "Lacina/IMG_20261106_200235_0.jpg",
  "Lacina/IMG_20261106_200452_1.jpg",
  "Lacina/IMG_20261106_200734_1.jpg",
  "Lacina/IMG_20261106_200800_6.jpg",
  "Lacina/IMG_20261106_200811_3.jpg",
  "Lacina/IMG_20261106_200903_1.jpg",
  "Lacina/IMG_20261106_200915_9.jpg",
  "Lacina/IMG_20261106_200929_2.jpg",
  "Lacina/IMG_20261106_200945_3.jpg",
  "Lacina/IMG_20261106_200956_8.jpg",
  "Lacina/IMG_20261106_201057_9.jpg",
  "Lacina/IMG_20261106_201444_5.jpg",
  "Lacina/IMG_20261106_201455_8.jpg",
  "Lacina/IMG_20261106_201457_8.jpg",
  "Lacina/IMG_20261106_201514_0.jpg",
  "Lacina/IMG_20261106_201552_4.jpg",
  "Lacina/IMG_20261106_201615_5.jpg",
  "Lacina/IMG_20261106_201635_3.jpg",
  "Lacina/IMG_20261106_201747_9.jpg",
  "Lacina/IMG_20261106_201937_8.jpg",
  "Lacina/IMG_20261106_202355_2.jpg",
  "Lacina/IMG_20261106_202442_4.jpg",
  "Lacina/IMG_20261106_202545_2.jpg",
  "Lacina/IMG_20261106_202546_9.jpg",
  "Lacina/IMG_20261106_202640_9.jpg",
  "Lacina/IMG_20261106_202821_4.jpg",
  "Lacina/IMG_20261106_203347_3.jpg",
  "Lacina/IMG_20261106_203353_5.jpg",
  "Lacina/IMG_20261106_203421_7.jpg",
  "Lacina/IMG_20261106_203512_5.jpg",
  "Lacina/IMG_20261106_203531_5.jpg",
  "Lacina/IMG_20261106_203749_0.jpg",
  "Lacina/IMG_20261106_203802_0.jpg",
  "Lacina/IMG_20261106_203942_5.jpg",
  "Lacina/IMG_20261106_203946_1.jpg",
  "Lacina/IMG_20261106_203956_2.jpg",
  "Lacina/IMG_20261106_204049_0.jpg",
  "Lacina/IMG_20261106_204051_4.jpg",
  "Lacina/IMG_20261106_204120_2.jpg",
  "Lacina/IMG_20261106_204140_7.jpg",
  "Lacina/IMG_20261106_204256_3.jpg",
  "Lacina/IMG_20261106_204436_3.jpg",
  "Lacina/IMG_20261106_204442_7.jpg",
  "Lacina/IMG_20261106_204721_6.jpg",
  "Lacina/IMG_20261106_204837_3.jpg",
  "Lacina/IMG_20261106_204849_1.jpg",
  "Lacina/IMG_20261106_204903_7.jpg",
  "Lacina/IMG_20261106_204950_6.jpg",
  "Lacina/IMG_20261106_205001_5.jpg",
  "Lacina/IMG_20261106_205055_0.jpg",
  "Lacina/IMG_20261106_205308_3.jpg",
  "Lacina/IMG_20261106_205713_2.jpg",
  "Lacina/IMG_20261106_205811_2.jpg",
  "Lacina/IMG_20261106_205823_9.jpg",
  "Lacina/IMG_20261106_205832_4.jpg",
  "Lacina/IMG_20261106_205838_7.jpg",
  "Lacina/IMG_20261106_205848_3.jpg",
  "Lacina/IMG_20261106_205855_7.jpg",
  "Lacina/IMG_20261106_205923_9.jpg",
  "Lacina/IMG_20261106_205938_3.jpg",
  "Lacina/IMG_20261106_205947_6.jpg",
  "Lacina/IMG_20261106_205958_4.jpg",
  "Lacina/IMG_20261106_210118_4.jpg",
  "Lacina/IMG_20261106_210132_6.jpg",
  "Lacina/IMG_20261106_210137_9.jpg",
  "Lacina/IMG_20261106_210150_1.jpg",
  "Lacina/IMG_20261106_210154_6.jpg",
  "Lacina/IMG_20261106_210200_3.jpg",
  "Lacina/IMG_20261106_210209_6.jpg",
  "Lacina/IMG_20261106_210225_5.jpg",
  "Lacina/IMG_20261106_210228_6.jpg",
  "Lacina/IMG_20261106_210327_3.jpg",
  "Lacina/IMG_20261106_210428_5.jpg",
  "Lacina/IMG_20261106_210547_8.jpg",
  "Lacina/IMG_20261106_210552_1.jpg",
  "Lacina/IMG_20261106_210614_9.jpg",
  "Lacina/IMG_20261106_210620_1.jpg",
  "Lacina/IMG_20261106_210753_2.jpg",
  "Lacina/IMG_20261106_210804_0.jpg",
  "Lacina/IMG_20261106_211203_5.jpg",
  "Lacina/IMG_20261106_212423_4.jpg",
  "Lacina/IMG_20261106_212432_6.jpg",
  "Lacina/IMG_20261106_212641_3.jpg",
  "Lacina/IMG_20261106_212646_9.jpg",
  "Lacina/IMG_20261106_212708_6.jpg",
  "Lacina/IMG_20261106_212844_8.jpg"
];

// État de l'application
let currentIndex = 0;
let isSlideshowPlaying = false;
let slideshowTimer = null;
let slideshowProgressTimer = null;
const SLIDESHOW_DURATION = 3800; // ms par photo

// Éléments du DOM
const navbar = document.getElementById("navbar");
const scrollProgressBar = document.getElementById("scrollProgressBar");
const backToTopBtn = document.getElementById("backToTopBtn");
const progressCircle = document.getElementById("progressCircle");

const viewerCard = document.getElementById("viewerCard");
const viewerStage = document.getElementById("viewerStage");
const carouselImage = document.getElementById("carouselImage");
const viewerLoader = document.getElementById("viewerLoader");
const imageCounter = document.getElementById("imageCounter");
const imageTitle = document.getElementById("imageTitle");
const downloadBtn = document.getElementById("downloadBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const filmstripTrack = document.getElementById("filmstripTrack");
const slideshowToggleBtn = document.getElementById("slideshowToggleBtn");
const slideshowBar = document.getElementById("slideshowBar");
const fullscreenToggleBtn = document.getElementById("fullscreenToggleBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const navSlideshowBtn = document.getElementById("navSlideshowBtn");

const photoGrid = document.getElementById("photoGrid");
const photoSearchInput = document.getElementById("photoSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const gridCountLabel = document.getElementById("gridCountLabel");
const densityComfort = document.getElementById("densityComfort");
const densityCompact = document.getElementById("densityCompact");
const toastContainer = document.getElementById("toastContainer");

// ==========================================================================
// 1. SYSTÈME D'ANIMATIONS AU SCROLL & PROGRESSION
// ==========================================================================

function initScrollAnimations() {
  const circleCircumference = 2 * Math.PI * 20; // r=20 -> ~125.66
  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circleCircumference}`;
    progressCircle.style.strokeDashoffset = `${circleCircumference}`;
  }

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) : 0;

    // Barre supérieure de progression
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${Math.min(scrollPercent * 100, 100)}%`;
    }

    // Effet navbar floutée au scroll
    if (navbar) {
      if (scrollTop > 35) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Bouton de retour en haut + anneau circulaire
    if (backToTopBtn && progressCircle) {
      if (scrollTop > 320) {
        backToTopBtn.classList.add("visible");
        const offset = circleCircumference - (scrollPercent * circleCircumference);
        progressCircle.style.strokeDashoffset = `${Math.max(offset, 0)}`;
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    // Effet parallaxe subtil sur les halos ambiants
    const ambient1 = document.querySelector(".ambient-glow-1");
    const ambient2 = document.querySelector(".ambient-glow-2");
    if (ambient1) ambient1.style.transform = `translateY(${scrollTop * 0.08}px)`;
    if (ambient2) ambient2.style.transform = `translateY(${-scrollTop * 0.05}px)`;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Clic retour en haut
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Intersection Observer pour les éléments avec la classe .scroll-reveal
  const revealElements = document.querySelectorAll(".scroll-reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

// ==========================================================================
// 2. VISIONNEUSE HAUTE DÉFINITION & CARROUSEL
// ==========================================================================

function updateCarousel(index, smooth = true) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  currentIndex = index;

  const currentUrl = images[currentIndex];
  const photoNumber = currentIndex + 1;

  // Animation de transition fluide de l'image
  if (smooth && carouselImage.src) {
    carouselImage.classList.add("fade-out");
  }

  // Affiche le spinner si le chargement prend un court instant
  let hasLoaded = false;
  const loaderTimeout = setTimeout(() => {
    if (!hasLoaded && viewerLoader) viewerLoader.classList.add("active");
  }, 120);

  const newImg = new Image();
  newImg.src = currentUrl;
  newImg.onload = () => {
    hasLoaded = true;
    clearTimeout(loaderTimeout);
    if (viewerLoader) viewerLoader.classList.remove("active");

    carouselImage.src = currentUrl;
    carouselImage.classList.remove("fade-out");

    // Préchargement immédiat de l'image suivante et précédente pour navigation instantanée
    preloadNeighbors(currentIndex);
  };

  // Si l'image est déjà en cache
  if (newImg.complete) {
    hasLoaded = true;
    clearTimeout(loaderTimeout);
    if (viewerLoader) viewerLoader.classList.remove("active");
    carouselImage.src = currentUrl;
    carouselImage.classList.remove("fade-out");
  }

  // Métadonnées & boutons
  if (imageCounter) {
    imageCounter.textContent = `Photo ${photoNumber} / ${images.length}`;
  }
  if (imageTitle) {
    imageTitle.textContent = `Photo #${photoNumber}`;
  }
  if (downloadBtn) {
    downloadBtn.href = currentUrl;
    downloadBtn.setAttribute("download", `cellule_cath_photo_${photoNumber}.jpg`);
  }

  // Synchronisation du filmstrip
  updateFilmstripActive(currentIndex);

  // Synchronisation de la grille
  updateGridActive(currentIndex);
}

function preloadNeighbors(idx) {
  const nextIdx = (idx + 1) % images.length;
  const prevIdx = (idx - 1 + images.length) % images.length;
  const imgNext = new Image();
  imgNext.src = images[nextIdx];
  const imgPrev = new Image();
  imgPrev.src = images[prevIdx];
}

// Navigation précédent / suivant
function prevPhoto() {
  resetSlideshowTimerIfPlaying();
  updateCarousel(currentIndex - 1);
}

function nextPhoto() {
  resetSlideshowTimerIfPlaying();
  updateCarousel(currentIndex + 1);
}

// ==========================================================================
// 3. DIAPORAMA AUTOMATIQUE AVEC JAUGE DE PROGRESSION
// ==========================================================================

function startSlideshow() {
  if (isSlideshowPlaying) return;
  isSlideshowPlaying = true;

  updateSlideshowButtonState(true);
  showToast("Diaporama lancé (3.8s par photo)");

  animateSlideshowBar();
  slideshowTimer = setInterval(() => {
    updateCarousel(currentIndex + 1);
    animateSlideshowBar();
  }, SLIDESHOW_DURATION);
}

function stopSlideshow() {
  if (!isSlideshowPlaying) return;
  isSlideshowPlaying = false;

  updateSlideshowButtonState(false);
  clearInterval(slideshowTimer);
  slideshowTimer = null;

  if (slideshowBar) {
    slideshowBar.style.transition = "none";
    slideshowBar.style.width = "0%";
  }
  showToast("Diaporama mis en pause");
}

function toggleSlideshow() {
  if (isSlideshowPlaying) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

function resetSlideshowTimerIfPlaying() {
  if (isSlideshowPlaying) {
    clearInterval(slideshowTimer);
    animateSlideshowBar();
    slideshowTimer = setInterval(() => {
      updateCarousel(currentIndex + 1);
      animateSlideshowBar();
    }, SLIDESHOW_DURATION);
  }
}

function animateSlideshowBar() {
  if (!slideshowBar) return;
  slideshowBar.style.transition = "none";
  slideshowBar.style.width = "0%";
  setTimeout(() => {
    slideshowBar.style.transition = `width ${SLIDESHOW_DURATION}ms linear`;
    slideshowBar.style.width = "100%";
  }, 20);
}

function updateSlideshowButtonState(isPlaying) {
  if (!slideshowToggleBtn) return;
  const playIcon = slideshowToggleBtn.querySelector(".play-icon");
  const pauseIcon = slideshowToggleBtn.querySelector(".pause-icon");
  const text = document.getElementById("slideshowText");

  if (isPlaying) {
    slideshowToggleBtn.classList.add("active");
    if (playIcon) playIcon.style.display = "none";
    if (pauseIcon) pauseIcon.style.display = "block";
    if (text) text.textContent = "Pause";
  } else {
    slideshowToggleBtn.classList.remove("active");
    if (playIcon) playIcon.style.display = "block";
    if (pauseIcon) pauseIcon.style.display = "none";
    if (text) text.textContent = "Diaporama";
  }
}

// ==========================================================================
// 4. BANDEAU DES MINIATURES (FILMSTRIP)
// ==========================================================================

function initFilmstrip() {
  if (!filmstripTrack) return;
  filmstripTrack.innerHTML = "";

  images.forEach((url, i) => {
    const thumb = document.createElement("img");
    thumb.src = url;
    thumb.alt = `Miniature ${i + 1}`;
    thumb.className = "filmstrip-item";
    thumb.loading = "lazy";
    thumb.decoding = "async";

    thumb.addEventListener("click", () => {
      resetSlideshowTimerIfPlaying();
      updateCarousel(i);
    });

    filmstripTrack.appendChild(thumb);
  });
}

function updateFilmstripActive(index) {
  if (!filmstripTrack) return;
  const thumbs = filmstripTrack.querySelectorAll(".filmstrip-item");
  thumbs.forEach((thumb, i) => {
    const isActive = i === index;
    thumb.classList.toggle("active", isActive);

    // Centrer la miniature active dans la bande
    if (isActive) {
      const trackWidth = filmstripTrack.offsetWidth;
      const thumbLeft = thumb.offsetLeft;
      const thumbWidth = thumb.offsetWidth;
      filmstripTrack.scrollTo({
        left: thumbLeft - trackWidth / 2 + thumbWidth / 2,
        behavior: "smooth"
      });
    }
  });
}

// ==========================================================================
// 5. GRILLE GLOBALE DES PHOTOS & ANIMATIONS CASCADING
// ==========================================================================

function initGalleryGrid() {
  if (!photoGrid) return;
  photoGrid.innerHTML = "";

  // Observer spécial pour l'apparition fluide en cascade des cartes photo au scroll
  const cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
  );

  images.forEach((url, i) => {
    const photoNumber = i + 1;
    const card = document.createElement("div");
    card.className = "photo-card loading";
    card.dataset.index = i;
    card.dataset.photoNumber = photoNumber;

    // Numéro de photo formaté (#001, #002...)
    const formattedNum = String(photoNumber).padStart(3, "0");

    card.innerHTML = `
      <span class="photo-card-badge">#${formattedNum}</span>
      <img src="${url}" alt="Cliché #${photoNumber}" class="photo-card-img" loading="lazy" decoding="async">
      <div class="photo-card-overlay">
        <div class="card-actions">
          <button class="card-action-btn card-action-view" data-action="view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span>Voir</span>
          </button>
          <a href="${url}" download="cellule_cath_photo_${photoNumber}.jpg" class="card-action-btn card-action-dl" data-action="download" title="Télécharger">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    `;

    // Retrait de la classe loading dès que l'image est prête
    const imgEl = card.querySelector(".photo-card-img");
    imgEl.addEventListener("load", () => {
      card.classList.remove("loading");
    });

    // Clic sur la carte : afficher dans la visionneuse avec défilement fluide
    card.addEventListener("click", (e) => {
      const dlBtn = e.target.closest('[data-action="download"]');
      if (dlBtn) {
        showToast(`Téléchargement de la photo #${photoNumber} lancé !`);
        return; // Laisser le téléchargement natif s'exécuter
      }

      resetSlideshowTimerIfPlaying();
      updateCarousel(i);

      // Défiler vers la visionneuse pour l'apprécier en grand
      const viewerSection = document.getElementById("visionneuse");
      if (viewerSection) {
        viewerSection.scrollIntoView({ behavior: "smooth" });
      }
    });

    photoGrid.appendChild(card);
    cardObserver.observe(card);
  });
}

function updateGridActive(index) {
  if (!photoGrid) return;
  const cards = photoGrid.querySelectorAll(".photo-card");
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

// ==========================================================================
// 6. RECHERCHE & FILTRAGE PAR NUMÉRO DE PHOTO
// ==========================================================================

function initSearchAndFilters() {
  if (!photoSearchInput || !photoGrid) return;

  function filterPhotos() {
    const query = photoSearchInput.value.trim();
    const cards = photoGrid.querySelectorAll(".photo-card");
    let matchCount = 0;

    if (clearSearchBtn) {
      clearSearchBtn.style.display = query ? "block" : "none";
    }

    if (!query) {
      cards.forEach((card) => {
        card.style.display = "";
      });
      if (gridCountLabel) {
        gridCountLabel.textContent = `Affichage de ${images.length} photos`;
      }
      return;
    }

    const targetNum = parseInt(query, 10);

    cards.forEach((card) => {
      const photoNum = parseInt(card.dataset.photoNumber, 10);
      const isMatch = photoNum === targetNum || String(photoNum).includes(query);

      if (isMatch) {
        card.style.display = "";
        matchCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (gridCountLabel) {
      gridCountLabel.textContent = `${matchCount} photo${matchCount > 1 ? "s" : ""} trouvée${matchCount > 1 ? "s" : ""}`;
    }

    // Si recherche exacte, sauter aussi dans la visionneuse
    if (targetNum >= 1 && targetNum <= images.length) {
      updateCarousel(targetNum - 1);
    }
  }

  photoSearchInput.addEventListener("input", filterPhotos);

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      photoSearchInput.value = "";
      filterPhotos();
      photoSearchInput.focus();
    });
  }

  // Densité de la grille : Confort vs Compact
  if (densityComfort && densityCompact) {
    densityComfort.addEventListener("click", () => {
      photoGrid.classList.remove("compact");
      densityComfort.classList.add("active");
      densityCompact.classList.remove("active");
    });

    densityCompact.addEventListener("click", () => {
      photoGrid.classList.add("compact");
      densityCompact.classList.add("active");
      densityComfort.classList.remove("active");
    });
  }
}

// ==========================================================================
// 7. PLEIN ÉCRAN, PARTAGE & GESTES TACTILES
// ==========================================================================

function initViewerInteractions() {
  // Mode plein écran
  if (fullscreenToggleBtn && viewerCard) {
    fullscreenToggleBtn.addEventListener("click", toggleFullscreen);
  }

  // Copier le lien / Partage
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", () => {
      const shareUrl = window.location.origin + window.location.pathname + `?photo=${currentIndex + 1}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast(`Lien vers la photo #${currentIndex + 1} copié dans le presse-papier !`);
        });
      } else {
        showToast(`Photo #${currentIndex + 1}`);
      }
    });
  }

  // Téléchargement depuis la visionneuse avec feedback
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      showToast(`Téléchargement de la photo #${currentIndex + 1} démarré...`);
    });
  }

  // Bouton Diaporama dans la barre supérieure de navigation
  if (navSlideshowBtn) {
    navSlideshowBtn.addEventListener("click", () => {
      const viewerSection = document.getElementById("visionneuse");
      if (viewerSection) {
        viewerSection.scrollIntoView({ behavior: "smooth" });
      }
      if (!isSlideshowPlaying) {
        startSlideshow();
      }
    });
  }

  // Bouton Diaporama dans la visionneuse
  if (slideshowToggleBtn) {
    slideshowToggleBtn.addEventListener("click", toggleSlideshow);
  }

  // Flèches de navigation
  if (prevBtn) prevBtn.addEventListener("click", prevPhoto);
  if (nextBtn) nextBtn.addEventListener("click", nextPhoto);

  // Gestes de balayage tactile (Swipe) sur mobile & tablette
  if (viewerStage) {
    let touchStartX = 0;
    let touchStartY = 0;

    viewerStage.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      },
      { passive: true }
    );

    viewerStage.addEventListener(
      "touchend",
      (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Seuil horizontal supérieur au vertical pour ne pas bloquer le défilement naturel
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
          if (diffX < 0) {
            nextPhoto();
          } else {
            prevPhoto();
          }
        }
      },
      { passive: true }
    );
  }

  // Raccourcis clavier (Flèches, Espace, F, Echap)
  document.addEventListener("keydown", (e) => {
    // Si l'utilisateur est en train d'écrire dans la barre de recherche, ne pas capturer
    if (document.activeElement === photoSearchInput) return;

    if (e.key === "ArrowLeft") {
      prevPhoto();
    } else if (e.key === "ArrowRight") {
      nextPhoto();
    } else if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      toggleSlideshow();
    } else if (e.key === "f" || e.key === "F") {
      toggleFullscreen();
    } else if (e.key === "Escape") {
      exitFullscreen();
    }
  });
}

function toggleFullscreen() {
  if (!viewerCard) return;

  const isFs = viewerCard.classList.contains("fullscreen-mode");
  if (!isFs) {
    viewerCard.classList.add("fullscreen-mode");
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    showToast("Mode plein écran activé (Touche Echap pour quitter)");
  } else {
    exitFullscreen();
  }
}

function exitFullscreen() {
  if (viewerCard && viewerCard.classList.contains("fullscreen-mode")) {
    viewerCard.classList.remove("fullscreen-mode");
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    showToast("Mode plein écran désactivé");
  }
}

// ==========================================================================
// 8. TOAST DE NOTIFICATION FLOTTANTE
// ==========================================================================

function showToast(message) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-gold); flex-shrink: 0;">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3200);
}

// ==========================================================================
// 9. INITIALISATION GLOBALE
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialiser le filmstrip et la visionneuse
  initFilmstrip();
  initGalleryGrid();
  initViewerInteractions();
  initSearchAndFilters();

  // 2. Initialiser les animations au défilement
  initScrollAnimations();

  // 3. Vérifier s'il y a un paramètre photo dans l'URL (ex: ?photo=15)
  const urlParams = new URLSearchParams(window.location.search);
  const photoParam = parseInt(urlParams.get("photo"), 10);
  const initialIndex = (!isNaN(photoParam) && photoParam >= 1 && photoParam <= images.length)
    ? photoParam - 1
    : 0;

  updateCarousel(initialIndex, false);
});
