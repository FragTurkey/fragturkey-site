/* ============================================================
   FragTurkey — main.js
   ============================================================

   VIDEOS
   ------
   Videos are loaded automatically from YouTube. No manual updates
   needed. New videos appear on the site as soon as they go live
   on the channel.

   HOW TO ADD PHOTOS
   -----------------
   1. Place your screenshot files in the `photos/` folder.
   2. Add an object to the `photos` array below:
   {
     src: 'photos/your-filename.jpg',
     alt: 'A short description of the photo',
   }

   ============================================================ */


// ---- YOUTUBE API -------------------------------------------
// Videos are fetched via a server-side Cloudflare Pages Function
// at /api/videos — the API key never appears in client code.


// ---- RAIDER PHOTO ------------------------------------------
// Update src whenever your raider changes.
// Drop the file in the photos/ folder and update the filename below.
// Set to null to hide this section entirely.

const raiderPhoto = { src: 'photos/my-raider.jpg', alt: 'My current raider' };


// ---- PHOTOS ------------------------------------------------
// Add your screenshot objects here.

const photos = [
  { src: 'photos/ARC Raiders 2026.05.24 - 22.48.45.19- Edit.jpg', alt: 'Southern Blue Gate' },
  { src: 'photos/ARC Raiders 2026.05.23 - 02.48.14 - Edit.jpg', alt: 'Captured raider on top of the Control Tower' },
  { src: 'photos/ARC Raiders 2026.05.22 - 17.47.35 - Edit.jpg', alt: 'The southeast landscape of Buried City' },
  { src: 'photos/ARC Raiders 2026.05.21 - 22.14.39 - Edit.jpg', alt: 'The Practice Range' },
];


// ---- SOCIAL LINKS ------------------------------------------
// Update handles or URLs if they ever change.

const socialLinks = [
  {
    name:  'YouTube',
    url:   'https://www.youtube.com/@FragTurkey',
    icon:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  },
  {
    name:  'Twitch',
    url:   'https://www.twitch.tv/fragturkey',
    icon:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>`,
  },
  {
    name:  'Kick',
    url:   'https://kick.com/fragturkey',
    icon:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2h3.6v7.8L10.8 6H15l-5.4 5.4 5.85 6.6H11.1L6.6 12.6V18H3zm11.25 4H18l-3.75 4.35L18 14.25h-3.75L10.5 10z"/></svg>`,
  },
  {
    name:  'Steam',
    url:   'https://steamcommunity.com/profiles/76561198745511524/',
    icon:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.497 1.009 2.452-.397.957-1.494 1.41-2.454 1.015zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/></svg>`,
  },
  {
    name:  'Discord',
    url:   'https://discord.gg/PaDt2vfPQ',
    icon:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.033.05a19.83 19.83 0 0 0 5.993 3.03.079.079 0 0 0 .084-.026 14.09 14.09 0 0 0 1.226-1.994.075.075 0 0 0-.041-.104 13.07 13.07 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  },
  {
    name:  'Email',
    url:   'mailto:fragturkey@proton.me',
    icon:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  },
];


/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

async function fetchAndRenderVideos() {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;

  // Loading skeleton
  grid.innerHTML = Array(4).fill(`
    <div class="video-card video-skeleton">
      <div class="video-thumb skeleton-thumb"></div>
      <div class="video-info">
        <div class="skeleton-line skeleton-line-long"></div>
        <div class="skeleton-line skeleton-line-short"></div>
      </div>
    </div>`).join('');

  try {
    const url = '/api/videos';

    const res  = await fetch(url);
    if (!res.ok) throw new Error(`API responded with ${res.status}`);
    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      grid.innerHTML = `<div class="video-empty"><p>No videos yet. Check back soon.</p></div>`;
      return;
    }

    grid.innerHTML = data.items.map(item => {
      const { title, resourceId, thumbnails } = item.snippet;
      const videoId = resourceId.videoId;
      const thumb   = (thumbnails.maxres || thumbnails.high || thumbnails.medium || {}).url || '';
      return `
        <a class="video-card" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener">
          <div class="video-thumb">
            <img src="${thumb}" alt="${title}" loading="lazy" />
            <div class="video-play">
              <div class="video-play-icon">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
          <div class="video-info">
            <p class="video-title">${title}</p>
          </div>
        </a>`;
    }).join('');

  } catch (err) {
    console.error('YouTube API error:', err);
    grid.innerHTML = `
      <div class="video-empty">
        <p>Videos unavailable right now.</p>
        <p><a href="https://www.youtube.com/@FragTurkey" target="_blank" rel="noopener">Watch on YouTube &rarr;</a></p>
      </div>`;
  }
}


function renderPhotos() {
  const grid = document.getElementById('photoGrid');
  if (!grid) return;

  if (photos.length === 0) {
    grid.innerHTML = `
      <div class="photo-empty">
        <p>No photos yet.</p>
        <p>Add screenshots to the <code>photos/</code> folder and register them in <code>js/main.js</code>.</p>
      </div>`;
    return;
  }

  grid.innerHTML = photos.map((p, i) => `
    <div class="photo-item" data-index="${i}" role="button" tabindex="0" aria-label="View photo: ${p.alt}">
      <img src="${p.src}" alt="${p.alt}" loading="lazy" />
      ${p.alt ? `
        <div class="photo-overlay">
          <p class="photo-caption">${p.alt}</p>
        </div>` : ''}
    </div>
  `).join('');

  // Attach click handlers
  grid.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(parseInt(item.dataset.index));
    });
  });
}


function renderRaiderPhoto() {
  const container = document.getElementById('raiderPhotoContainer');
  if (!container) return;

  if (!raiderPhoto) {
    container.style.display = 'none';
    return;
  }

  container.innerHTML = `
    <div class="about-raider">
      <img src="${raiderPhoto.src}" alt="${raiderPhoto.alt}" loading="lazy" />
      <p class="about-raider-label">FragTurkey</p>
    </div>`;
}


function renderSocial() {
  const grid = document.getElementById('socialGrid');
  if (!grid) return;

  grid.innerHTML = socialLinks.map(s => `
    <a class="social-link" href="${s.url}" target="${s.url.startsWith('mailto') ? '_self' : '_blank'}" rel="noopener">
      ${s.icon}
      <span>${s.name}</span>
      <span class="social-arrow">&#8599;</span>
    </a>
  `).join('');
}


/* ============================================================
   LIGHTBOX
   ============================================================ */

let currentPhotoIndex = 0;

function openLightbox(index) {
  currentPhotoIndex = index;
  updateLightboxImage();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const photo = photos[currentPhotoIndex];
  document.getElementById('lightboxImg').src = photo.src;
  document.getElementById('lightboxImg').alt = photo.alt || '';
  document.getElementById('lightboxCaption').textContent = photo.alt || '';
}

function lightboxPrev() {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  updateLightboxImage();
}

function lightboxNext() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  updateLightboxImage();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', lightboxPrev);
document.getElementById('lightboxNext').addEventListener('click', lightboxNext);

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrev();
  if (e.key === 'ArrowRight') lightboxNext();
});


/* ============================================================
   NAV SCROLL BEHAVIOR
   ============================================================ */

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */

const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


/* ============================================================
   FOOTER YEAR
   ============================================================ */

document.getElementById('footerYear').textContent = new Date().getFullYear();


/* ============================================================
   INIT
   ============================================================ */

fetchAndRenderVideos();
renderPhotos();
renderRaiderPhoto();
renderSocial();
