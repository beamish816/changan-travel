// js/main.js
// 最终优化版：完美匹配原网站功能与体验

function initApp() {
  initLanguageSelector();
  initHeroSlider();
  initMobileMenu();
  initForm();
  initScrollEffects();
  initWechatModalClose();
  setDefaultTravelDate();
  preloadImages();

  // 页面淡入动画
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.8s ease';
}

function initLanguageSelector() {
  const languageList = document.getElementById('languageList');
  
  languageList.innerHTML = LANGUAGES.map(lang => `
    <li class="language-item" data-lang="${lang.code}" data-flag="${lang.flag}">
      <div class="language-flag" style="background-image: url('https://flagcdn.com/w40/${lang.flag}.png')"></div>
      <span>${lang.name}</span>
    </li>
  `).join('');

  document.querySelectorAll('.language-item').forEach(item => {
    item.addEventListener('click', function() {
      const langCode = this.dataset.lang;
      const flag = this.dataset.flag;
      
      document.getElementById('currentFlag').style.backgroundImage = `url('https://flagcdn.com/w40/${flag}.png')`;
      document.getElementById('currentLangName').textContent = this.querySelector('span').textContent;
      
      document.body.setAttribute('data-lang', langCode);
      document.documentElement.setAttribute('lang', langCode === 'zh-hant' ? 'zh-TW' : langCode === 'zh' ? 'zh-CN' : langCode);
      document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
      
      componentRenderer.setLanguage(langCode);
      
      document.getElementById('languageList').classList.remove('show');
      
      localStorage.setItem('preferred-language', langCode);
      
      showLanguageToast(langCode);
      
      setTimeout(() => {
        componentRenderer.fixNavigationLayout();
        updateSliderArrows();
      }, 100);
    });
  });

  document.getElementById('currentLanguage').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('languageList').classList.toggle('show');
  });

  document.addEventListener('click', () => {
    document.getElementById('languageList').classList.remove('show');
  });

  const savedLang = localStorage.getItem('preferred-language') || 'zh';
  const savedLangItem = LANGUAGES.find(l => l.code === savedLang);
  if (savedLangItem) {
    document.getElementById('currentFlag').style.backgroundImage = `url('https://flagcdn.com/w40/${savedLangItem.flag}.png')`;
    document.getElementById('currentLangName').textContent = savedLangItem.name;
    document.body.setAttribute('data-lang', savedLang);
    document.documentElement.setAttribute('lang', savedLang === 'zh-hant' ? 'zh-TW' : savedLang === 'zh' ? 'zh-CN' : savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    componentRenderer.setLanguage(savedLang);
  }
}

function showLanguageToast(lang) {
  const messages = {
    zh: "语言已切换为中文简体",
    "zh-hant": "語言已切換為中文繁體",
    en: "Language changed to English",
    ar: "تم تغيير اللغة إلى العربية",
    ru: "Язык изменен на русский"
  };

  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; top: 100px; right: 30px; background: rgba(255,255,255,0.98);
    backdrop-filter: blur(15px); padding: 15px 25px; border-radius: 16px;
    box-shadow: 0 12px 40px rgba(31,38,135,0.25); z-index: 10000;
    transform: translateX(150%); transition: transform 0.5s ease;
    font-weight: 600; color: #2c3e50; text-align: center; max-width: 300px;
  `;
  
  if (document.body.getAttribute('data-lang') === 'ar') {
    toast.style.right = 'auto';
    toast.style.left = '30px';
    toast.style.transform = 'translateX(-150%)';
  }
  
  toast.textContent = messages[lang] || messages.en;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.style.transform = 'translateX(0)', 10);
  setTimeout(() => {
    toast.style.transform = document.body.getAttribute('data-lang') === 'ar' ? 'translateX(-150%)' : 'translateX(150%)';
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  let currentSlide = 0;
  let interval;

  if (slides.length === 0) return;

  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.dataset.slide = i;
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function update() {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    update();
  }

  function prev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    update();
  }

  prevBtn.onclick = prev;
  nextBtn.onclick = next;
  dots.forEach(dot => dot.onclick = () => {
    currentSlide = parseInt(dot.dataset.slide);
    update();
    clearInterval(interval);
    startInterval();
  });

  function startInterval() {
    interval = setInterval(next, 7000);
  }

  startInterval();

  document.querySelector('.hero-slider').addEventListener('mouseenter', () => clearInterval(interval));
  document.querySelector('.hero-slider').addEventListener('mouseleave', startInterval);

  updateSliderArrows();
  window.slideInterval = interval;
}

function updateSliderArrows() {
  const isRTL = document.body.getAttribute('data-lang') === 'ar';
  const prevIcon = document.querySelector('#prevSlide i');
  const nextIcon = document.querySelector('#nextSlide i');
  if (prevIcon && nextIcon) {
    prevIcon.className = isRTL ? 'fas fa-chevron-right' : 'fas fa-chevron-left';
    nextIcon.className = isRTL ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
  }
}

function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggle.querySelector('i').classList.toggle('fa-bars');
    toggle.querySelector('i').classList.toggle('fa-times');
  });

  navLinks.addEventListener('click', e => {
    if (e.target.classList.contains('nav-link')) {
      navLinks.classList.remove('active');
      toggle.querySelector('i').classList.remove('fa-times');
      toggle.querySelector('i').classList.add('fa-bars');
    }
  });
}

function initForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const lang = document.body.getAttribute('data-lang') || 'zh';

    const messages = {
      zh: `感谢 ${name} 提交咨询！\n我们的旅行专家将在24小时内与您联系。`,
      "zh-hant": `感謝 ${name} 提交諮詢！\n我們的旅行專家將在24小時內與您聯繫。`,
      en: `Thank you ${name} for your inquiry!\nOur travel experts will contact you within 24 hours.`,
      ar: `شكراً ${name} على استفسارك!\nسيتواصل معك خبراء السفر لدينا خلال 24 ساعة.`,
      ru: `Спасибо ${name} за ваш запрос!\nНаши эксперты по путешествиям свяжутся с вами в течение 24 часов.`
    };

    showNotification(messages[lang] || messages.zh, 'success');
    form.reset();
    setDefaultTravelDate();
  });
}

function setDefaultTravelDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split('T')[0];
  const input = document.getElementById('travel-date');
  if (input) {
    input.value = dateStr;
    input.min = dateStr;
  }
}

function showNotification(message, type = 'success') {
  const noti = document.createElement('div');
  noti.style.cssText = `
    position:fixed;top:100px;right:30px;background:${type==='error'?'#e74c3c':'#2ecc71'};
    color:white;padding:20px 30px;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,0.2);
    z-index:10000;transform:translateX(150%);transition:transform 0.5s ease;
    max-width:400px;font-weight:600;white-space:pre-line;
  `;
  if (document.body.getAttribute('data-lang') === 'ar') {
    noti.style.right = 'auto';
    noti.style.left = '30px';
    noti.style.transform = 'translateX(-150%)';
  }
  noti.textContent = message;
  document.body.appendChild(noti);
  setTimeout(() => noti.style.transform = 'translateX(0)', 10);
  setTimeout(() => {
    noti.style.transform = document.body.getAttribute('data-lang') === 'ar' ? 'translateX(-150%)' : 'translateX(150%)';
    setTimeout(() => noti.remove(), 500);
  }, 5000);
}

function initScrollEffects() {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('header-scrolled', window.scrollY > 100);

    // 导航高亮
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
}

function initWechatModalClose() {
  const modal = document.getElementById('wechatModal');
  if (!modal) return;

  const close = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  document.getElementById('closeModal')?.addEventListener('click', close);
  document.getElementById('closeModalBtn')?.addEventListener('click', close);
  modal.addEventListener('click', e => e.target === modal && close());

  document.getElementById('copyWechatId')?.addEventListener('click', () => {
    navigator.clipboard.writeText('LuyouChangAn').then(() => {
      const btn = document.getElementById('copyWechatId');
      const original = btn.textContent;
      btn.textContent = componentRenderer.getTranslation('wechatModal.copy');
      btn.style.background = '#4CAF50';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '#07c160';
      }, 2000);
    });
  });
}

function preloadImages() {
  const urls = [
    'https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg',
    'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
    'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg',
    'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg',
    'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg'
  ];
  urls.forEach(url => new Image().src = url + '?auto=compress&cs=tinysrgb&w=1920');
}

document.addEventListener('languageChanged', updateSliderArrows);
document.addEventListener('DOMContentLoaded', initApp);