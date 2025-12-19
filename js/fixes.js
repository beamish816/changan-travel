/**
 * 鹭游长安 - 移动端紧急修复补丁
 * 将此文件放在scripts.js之后引用
 */

(function() {
    'use strict';
    
    // 等待页面完全加载
    window.addEventListener('load', function() {
        console.log('应用移动端修复补丁...');
        
        // 确保移动端菜单遮罩层存在
        const ensureOverlayExists = function() {
            let overlay = document.querySelector('.mobile-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'mobile-menu-overlay';
                document.body.appendChild(overlay);
                
                // 点击遮罩层关闭菜单
                overlay.addEventListener('click', function() {
                    const navLinks = document.querySelector('.nav-links');
                    const mobileToggle = document.getElementById('mobileToggle');
                    
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        this.style.opacity = '0';
                        this.style.visibility = 'hidden';
                        
                        if (mobileToggle) {
                            mobileToggle.classList.remove('active');
                            const icon = mobileToggle.querySelector('i');
                            if (icon) {
                                icon.classList.remove('fa-times');
                                icon.classList.add('fa-bars');
                            }
                        }
                        
                        document.body.style.overflow = '';
                        document.body.classList.remove('menu-open');
                    }
                });
            }
            return overlay;
        };
        
        // 修复移动端导航链接点击
        const fixNavLinksClick = function() {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                // 移除旧的事件监听器
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                // 添加新的事件监听器
                newLink.addEventListener('click', function(e) {
                    // 如果是页面链接，关闭移动菜单
                    const href = this.getAttribute('href');
                    if (href && !href.startsWith('http') && !href.startsWith('#') && href !== '#!') {
                        if (window.closeMobileMenu) {
                            window.closeMobileMenu();
                        }
                    }
                });
            });
        };
        
        // 修复汉堡菜单可见性
        const fixMobileToggleVisibility = function() {
            const mobileToggle = document.getElementById('mobileToggle');
            const navLinks = document.querySelector('.nav-links');
            
            if (!mobileToggle || !navLinks) return;
            
            function updateVisibility() {
                if (window.innerWidth <= 992) {
                    mobileToggle.style.display = 'flex';
                    navLinks.style.display = 'none';
                } else {
                    mobileToggle.style.display = 'none';
                    navLinks.style.display = 'flex';
                }
            }
            
            updateVisibility();
            window.addEventListener('resize', updateVisibility);
        };
        
        // 修复iOS触摸问题
        const fixIOSIssues = function() {
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            
            if (isIOS) {
                // 防止双击缩放
                document.addEventListener('touchstart', function(e) {
                    if (e.touches.length > 1) {
                        e.preventDefault();
                    }
                }, { passive: false });
                
                // 修复弹性滚动
                document.querySelectorAll('.nav-links').forEach(el => {
                    el.style.webkitOverflowScrolling = 'touch';
                });
            }
        };
        
        // 执行所有修复
        ensureOverlayExists();
        fixNavLinksClick();
        fixMobileToggleVisibility();
        fixIOSIssues();
        
        console.log('移动端修复补丁应用完成');
    });
})();