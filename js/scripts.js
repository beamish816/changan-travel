/**
 * 鹭游长安网站 - 修复版主JavaScript文件
 * 包含所有页面的功能 - 已修复移动端导航问题
 */

// ========== 1. 全局变量和DOM加载 ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('鹭游长安网站初始化...');
    
    // 页面加载完成后淡入效果
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 初始化通用功能 - 修复顺序
    initNavigation();
    initLanguageSwitcher();
    initMobileMenu(); // 修复的移动端菜单
    
    // 根据页面内容初始化特定功能
    if (document.querySelector('.hero-slider')) initSlider();
    if (document.querySelector('.testimonial-slider')) initTestimonials();
    if (document.getElementById('inquiryForm')) initForm();
    if (document.getElementById('wechatButton')) initWechatModal();
    
    // 设置表单默认日期
    setDefaultTravelDate();
    
    // 页面加载完成后高亮当前导航项
    highlightCurrentNavItem();
    
    // 预加载重要图片
    preloadImportantImages();
    
    // 修复iOS Safari的100vh问题
    fixIOSViewportHeight();
    
    // 初始移动端菜单可见性检查
    checkMobileMenuVisibility();
});

// ========== 2. 导航功能 ==========
function initNavigation() {
    // 滚动时固定导航栏效果
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
        
        // 初始检查
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        }
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') return;
            
            // 如果是页面内锚点
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // 关闭移动端菜单
                    closeMobileMenu();
                    
                    // 计算滚动位置
                    const headerHeight = header ? header.offsetHeight : 90;
                    const targetPosition = targetElement.offsetTop - headerHeight + 10;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function highlightCurrentNavItem() {
    // 获取当前页面文件名
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 简单的页面映射
    const pageMap = {
        'index.html': '#home',
        'services.html': '#services',
        'destinations.html': '#destinations',
        'itineraries.html': '#itineraries',
        'inquiry.html': '#inquiry',
        'about.html': '#about',
        'testimonials.html': '#testimonials',
        'contact.html': '#contact'
    };
    
    // 如果当前页面在映射中，高亮对应的导航项
    if (pageMap[currentPage]) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === pageMap[currentPage]) {
                link.classList.add('active');
            }
        });
    }
}

// ========== 3. 修复版移动端菜单 - 完全重写 ==========
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.getElementById('header');
    
    if (!mobileToggle || !navLinks || !header) {
        console.error('移动端菜单元素未找到');
        return;
    }
    
    // 创建菜单遮罩层
    const createOverlay = () => {
        // 如果已存在遮罩层，先移除
        const existingOverlay = document.querySelector('.mobile-menu-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
        
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
        return overlay;
    };
    
    const overlay = createOverlay();
    let isMenuOpen = false;
    
    // 更新菜单位置
    const updateMenuPosition = () => {
        if (window.innerWidth > 992) return;
        
        const headerHeight = header.offsetHeight;
        navLinks.style.top = `${headerHeight}px`;
        navLinks.style.height = `calc(100vh - ${headerHeight}px)`;
        
        // iOS特殊处理
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            const visualViewport = window.visualViewport;
            if (visualViewport) {
                navLinks.style.height = `calc(${visualViewport.height}px - ${headerHeight}px)`;
            }
        }
    };
    
    // 打开菜单
    const openMenu = () => {
        if (isMenuOpen) return;
        
        updateMenuPosition();
        
        // 显示菜单
        navLinks.classList.add('active');
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        
        // 更新汉堡菜单图标
        const icon = mobileToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
        mobileToggle.classList.add('active');
        
        // 防止页面滚动
        document.body.style.overflow = 'hidden';
        document.body.classList.add('menu-open');
        
        // 关闭语言选择器
        const languageList = document.getElementById('languageList');
        if (languageList && languageList.classList.contains('show')) {
            languageList.classList.remove('show');
        }
        
        isMenuOpen = true;
    };
    
    // 关闭菜单
    const closeMenu = () => {
        if (!isMenuOpen) return;
        
        // 隐藏菜单和遮罩
        navLinks.classList.remove('active');
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        
        // 恢复汉堡菜单图标
        const icon = mobileToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        mobileToggle.classList.remove('active');
        
        // 恢复页面滚动
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
        
        isMenuOpen = false;
    };
    
    // 切换菜单
    const toggleMenu = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };
    
    // 设置导航链接点击事件
    const setupNavLinks = () => {
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // 延迟关闭菜单，确保点击事件完成
                setTimeout(closeMenu, 300);
            });
        });
    };
    
    // 事件监听器设置
    const setupEventListeners = () => {
        // 汉堡菜单点击
        mobileToggle.addEventListener('click', toggleMenu);
        
        // 遮罩层点击
        overlay.addEventListener('click', closeMenu);
        
        // 导航链接点击
        setupNavLinks();
        
        // 窗口大小变化
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateMenuPosition();
                
                // 如果窗口变宽，关闭移动菜单
                if (window.innerWidth > 992 && isMenuOpen) {
                    closeMenu();
                }
                
                // 更新菜单可见性
                checkMobileMenuVisibility();
            }, 250);
        });
        
        // ESC键关闭菜单
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        });
        
        // 语言选择器点击时关闭菜单
        const languageSelector = document.querySelector('.language-selector');
        if (languageSelector) {
            languageSelector.addEventListener('click', () => {
                if (isMenuOpen) {
                    closeMenu();
                }
            });
        }
    };
    
    // 初始化设置
    const init = () => {
        updateMenuPosition();
        setupEventListeners();
        
        // 确保初始状态正确
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
        // 监听header高度变化
        const observer = new MutationObserver(() => {
            if (isMenuOpen) {
                setTimeout(updateMenuPosition, 50);
            }
        });
        
        observer.observe(header, { attributes: true });
    };
    
    // 初始化
    init();
    
    // 暴露给全局
    window.closeMobileMenu = closeMenu;
    window.openMobileMenu = openMenu;
}

// ========== 4. 检查移动端菜单可见性 ==========
function checkMobileMenuVisibility() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileToggle || !navLinks) return;
    
    if (window.innerWidth <= 992) {
        // 移动端：显示汉堡菜单，隐藏桌面导航
        mobileToggle.style.display = 'flex';
        navLinks.style.display = 'none';
    } else {
        // 桌面端：隐藏汉堡菜单，显示桌面导航
        mobileToggle.style.display = 'none';
        navLinks.style.display = 'flex';
    }
}

// ========== 5. 语言切换功能 ==========
function initLanguageSwitcher() {
    const languageSelector = document.getElementById('currentLanguage');
    const languageList = document.getElementById('languageList');
    const currentLangName = document.getElementById('currentLangName');
    const currentFlag = document.getElementById('currentFlag');
    const languageItems = document.querySelectorAll('.language-item');
    
    if (!languageSelector || !languageList) return;
    
    // 显示/隐藏语言列表
    languageSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        languageList.classList.toggle('show');
        
        // 在移动端，关闭导航菜单
        if (window.innerWidth <= 992) {
            closeMobileMenu();
        }
    });
    
    // 点击语言项切换语言
    languageItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const lang = this.getAttribute('data-lang');
            const flag = this.getAttribute('data-flag');
            
            // 更新当前语言显示
            if (currentLangName) {
                currentLangName.textContent = this.querySelector('span').textContent;
            }
            if (currentFlag) {
                currentFlag.style.backgroundImage = `url('https://flagcdn.com/w40/${flag}.png')`;
            }
            
            // 切换语言
            switchLanguage(lang);
            
            // 关闭语言列表
            languageList.classList.remove('show');
        });
    });
    
    // 点击页面其他区域关闭语言列表
    document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target) && !languageList.contains(e.target)) {
            languageList.classList.remove('show');
        }
    });
    
    // 从本地存储加载语言偏好
    loadLanguagePreference();
}

function switchLanguage(lang) {
    // 更新body的data-lang属性
    document.body.setAttribute('data-lang', lang);
    
    // 保存语言选择到本地存储
    localStorage.setItem('preferred-language', lang);
    
    // 显示语言切换提示
    showLanguageChangeToast(lang);
    
    // 更新页面文本内容
    updateTextContent(lang);
}

function loadLanguagePreference() {
    const savedLang = localStorage.getItem('preferred-language') || 'zh';
    const currentLangName = document.getElementById('currentLangName');
    const currentFlag = document.getElementById('currentFlag');
    const langItem = document.querySelector(`.language-item[data-lang="${savedLang}"]`);
    
    if (langItem && currentLangName && currentFlag) {
        const flag = langItem.getAttribute('data-flag');
        currentLangName.textContent = langItem.querySelector('span').textContent;
        currentFlag.style.backgroundImage = `url('https://flagcdn.com/w40/${flag}.png')`;
        
        // 设置语言
        document.body.setAttribute('data-lang', savedLang);
        updateTextContent(savedLang);
    }
}

function updateTextContent(lang) {
    // 更新导航栏文本（示例）
    const navTexts = {
        zh: ["首页", "核心服务", "经典目的地", "热门行程", "获取报价", "品牌简介", "客户评价", "联系我们"],
        "zh-hant": ["首頁", "核心服務", "經典目的地", "熱門行程", "獲取報價", "品牌簡介", "客戶評價", "聯繫我們"],
        en: ["Home", "Services", "Destinations", "Itineraries", "Get Quote", "About", "Testimonials", "Contact"],
        ar: ["الرئيسية", "الخدمات", "الوجهات", "الجولات", "طلب عرض", "عنّا", "آراء العملاء", "اتصل بنا"],
        ru: ["Главная", "Услуги", "Направления", "Маршруты", "Получить цену", "О нас", "Отзывы", "Контакты"]
    };
    
    const navLinks = document.querySelectorAll('.nav-link');
    if (navTexts[lang]) {
        navLinks.forEach((link, index) => {
            if (navTexts[lang][index]) {
                link.textContent = navTexts[lang][index];
            }
        });
    }
}

function showLanguageChangeToast(lang) {
    const messages = {
        zh: "语言已切换为中文简体",
        "zh-hant": "語言已切換為中文繁體",
        en: "Language changed to English",
        ar: "تم تغيير اللغة إلى العربية",
        ru: "Язык изменен на русский"
    };
    
    // 创建提示元素
    const toast = document.createElement('div');
    toast.className = 'language-toast';
    toast.textContent = messages[lang] || messages['en'];
    
    document.body.appendChild(toast);
    
    // 显示提示
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 10);
    
    // 3秒后隐藏并移除提示
    setTimeout(() => {
        if (document.body.getAttribute('data-lang') === 'ar') {
            toast.style.transform = 'translateX(-150%)';
        } else {
            toast.style.transform = 'translateX(150%)';
        }
        
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 500);
    }, 3000);
}

// ========== 6. 轮播图功能 ==========
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const sliderDots = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    
    if (!slides.length || !sliderDots) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    // 创建轮播点
    if (sliderDots.children.length === 0) {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.setAttribute('data-slide', i);
            if (i === 0) dot.classList.add('active');
            sliderDots.appendChild(dot);
        }
    }
    
    const dots = document.querySelectorAll('.dot');
    
    // 初始化轮播
    function updateSlider() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000);
    }
    
    // 设置初始状态
    updateSlider();
    
    // 自动轮播
    slideInterval = setInterval(nextSlide, 7000);
    
    // 事件监听
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // 点击指示点切换
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
    
    // 鼠标悬停暂停轮播
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 7000);
        });
    }
    
    // 键盘控制
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

// ========== 7. 客户评价轮播 ==========
function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (!testimonials.length) return;
    
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    showTestimonial(0);
    setInterval(nextTestimonial, 10000);
}

// ========== 8. 表单功能 ==========
function initForm() {
    const inquiryForm = document.getElementById('inquiryForm');
    if (!inquiryForm) return;
    
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            destination: document.getElementById('destination')?.value || '',
            tourType: document.getElementById('tour-type')?.value || '',
            travelDate: document.getElementById('travel-date')?.value || '',
            duration: document.getElementById('duration')?.value || '',
            adults: document.getElementById('adults')?.value || '',
            children: document.getElementById('children')?.value || '',
            language: document.getElementById('language')?.value || '',
            budget: document.getElementById('budget')?.value || '',
            name: document.getElementById('name')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            specialRequests: document.getElementById('special-requests')?.value || ''
        };
        
        // 验证表单
        if (!formData.destination || !formData.tourType || !formData.travelDate || 
            !formData.duration || !formData.adults || !formData.language || 
            !formData.name || !formData.email || !formData.phone) {
            
            showNotification('请填写所有必填字段（标有*）', 'error');
            return;
        }
        
        // 显示成功消息
        const currentLang = document.body.getAttribute('data-lang');
        let successMessage = '';
        
        if (currentLang === 'en') {
            successMessage = `Thank you ${formData.name} for your inquiry!\nOur travel experts will contact you within 24 hours via ${formData.email}.\n\nYour travel preferences: ${formData.destination} - ${formData.tourType} for ${formData.adults} adults`;
        } else if (currentLang === 'ar') {
            successMessage = `شكرًا ${formData.name} على استفسارك!\nسيتواصل معك خبراء السفر لدينا خلال 24 ساعة عبر ${formData.email}.\n\nتفضيلات سفرك: ${formData.destination} - ${formData.tourType} لـ ${formData.adults} بالغين`;
        } else if (currentLang === 'zh-hant') {
            successMessage = `感謝 ${formData.name} 提交咨詢！\n我們的旅行專家將在24小時內通過 ${formData.email} 與您聯繫。\n\n您的行程偏好：${formData.destination} - ${formData.tourType}，${formData.adults}位成人`;
        } else if (currentLang === 'ru') {
            successMessage = `Спасибо ${formData.name} за ваш запрос!\nНаши эксперты по путешествиям свяжутся с вами в течение 24 часов через ${formData.email}.\n\nВаши предпочтения в путешествии: ${formData.destination} - ${formData.tourType} для ${formData.adults} взрослых`;
        } else {
            successMessage = `感谢 ${formData.name} 提交咨询！\n我们的旅行专家将在24小时内通过 ${formData.email} 与您联系。\n\n您的行程偏好：${formData.destination} - ${formData.tourType}，${formData.adults}位成人`;
        }
        
        showNotification(successMessage, 'success');
        inquiryForm.reset();
        setDefaultTravelDate();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setDefaultTravelDate() {
    const dateInput = document.getElementById('travel-date');
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedDate = tomorrow.toISOString().split('T')[0];
        dateInput.value = formattedDate;
        dateInput.min = formattedDate;
    }
}

// ========== 9. 通知系统 ==========
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        if (document.body.getAttribute('data-lang') === 'ar') {
            notification.style.transform = 'translateX(-150%)';
        } else {
            notification.style.transform = 'translateX(150%)';
        }
        
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 5000);
}

// ========== 10. 微信弹窗功能 ==========
function initWechatModal() {
    const wechatButton = document.getElementById('wechatButton');
    const wechatModal = document.getElementById('wechatModal');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    if (!wechatButton || !wechatModal) return;
    
    // 显示微信弹窗
    wechatButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openWechatModal();
    });
    
    // 打开微信弹窗
    function openWechatModal() {
        wechatModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
        
        // 关闭移动端菜单
        if (window.innerWidth <= 992) {
            closeMobileMenu();
        }
    }
    
    // 关闭微信弹窗
    function closeWechatModal() {
        wechatModal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
    }
    
    // 关闭按钮事件
    if (closeModal) closeModal.addEventListener('click', closeWechatModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeWechatModal);
    
    // 点击遮罩层关闭
    wechatModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeWechatModal();
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && wechatModal.classList.contains('active')) {
            closeWechatModal();
        }
    });
}

// ========== 11. 性能优化 ==========
function preloadImportantImages() {
    const imageUrls = [
        'https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg',
        'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
        'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// ========== 12. 修复iOS Safari的100vh问题 ==========
function fixIOSViewportHeight() {
    if (!/iPhone|iPad|iPod/.test(navigator.userAgent)) return;
    
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.height = `calc(var(--vh, 1vh) * 100)`;
        }
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
}

// ========== 13. 页面加载完成后初始化 ==========
window.addEventListener('load', () => {
    console.log('页面加载完成');
    
    // 最终检查移动端菜单
    if (window.innerWidth <= 992) {
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.querySelector('.nav-links');
        if (mobileToggle && navLinks) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
    
    // 添加窗口大小变化监听器
    window.addEventListener('resize', checkMobileMenuVisibility);
});