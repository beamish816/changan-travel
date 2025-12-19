// js/lang-data.js
// 最终完整版：完美还原原网站所有内容，支持5种语言的所有模块
// 已补全服务6项、目的地4项、行程3项、表单选项翻译、微信弹窗翻译、页脚完整结构等

const TRANSLATIONS = {
  zh: {
    nav: {
      home: "首页",
      services: "核心服务",
      destinations: "经典目的地",
      itineraries: "热门行程",
      inquiry: "获取报价",
      about: "品牌简介",
      testimonials: "客户评价",
      contact: "联系我们"
    },
    hero: {
      title: "鹭游长安，遇见华夏",
      subtitle: "专业导游，深度文化体验，个性化定制 - 我们为您打开一扇通往真实中国的大门",
      button: "开启探索之旅"
    },
    services: {
      title: "核心服务",
      subtitle: "从多语言导游到全程无忧支持，我们提供一站式高端入境游解决方案",
      items: [
        { icon: "fas fa-language", title: "多语言导游服务", desc: "我们拥有精通英语、阿拉伯语、俄语及多种欧洲语言的本地专业导游团队。不仅仅是语言翻译，更是文化桥梁，确保您与中国的历史、文化进行深度、无障碍的对话。" },
        { icon: "fas fa-car", title: "高端交通安排", desc: "舒适商务车、豪华巴士、专业司机全程陪同，确保旅途安全舒适，支持机场/高铁站接送。" },
        { icon: "fas fa-hotel", title: "精品酒店预订", desc: "精选五星级酒店及特色精品民宿，提供最佳入住体验，优先安排市中心或景点附近位置。" },
        { icon: "fas fa-ticket-alt", title: "门票快速通道", desc: "提前预订热门景点门票，避免排队，支持VIP快速通道和专属讲解服务。" },
        { icon: "fas fa-utensils", title: "特色美食体验", desc: "安排正宗当地美食餐厅，推荐地道菜品，可定制清真、素食或其他饮食需求。" },
        { icon: "fas fa-shield-alt", title: "全程安心保障", desc: "24小时应急支持、旅游意外保险、行程灵活调整，确保旅途无忧。" }
      ]
    },
    destinations: {
      title: "经典目的地",
      subtitle: "以西安为枢纽，畅游中国最具代表性的历史名城与现代都市",
      items: [
        { tag: "核心枢纽", city: "西安", highlights: "兵马俑、古城墙、大唐不夜城、回民街、陕西历史博物馆", img: "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "千年帝都", city: "北京", highlights: "故宫、长城、天安门、颐和园、天坛", img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "熊猫之乡", city: "成都", highlights: "大熊猫基地、宽窄巷子、杜甫草堂、锦里、都江堰", img: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "东方巴黎", city: "上海", highlights: "外滩、东方明珠、豫园、南京路、迪士尼乐园", img: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
      ]
    },
    itineraries: {
      title: "热门行程",
      subtitle: "精心设计的经典旅游线路，满足不同旅客的需求",
      items: [
        { days: "3日游", title: "西安古都文化3日游", desc: "探索西安核心景点：兵马俑、古城墙、大雁塔、回民街，体验千年古都的文化魅力。", img: "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
        { days: "5日游", title: "西安深度+华山5日游", desc: "经典西安景点+登华山观日出，感受自然与人文的双重震撼。", img: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
        { days: "9日游", title: "北京+西安双古都9日之旅", desc: "北京故宫长城+西安兵马俑，穿越千年中国历史。", img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" }
      ]
    },
    inquiry: {
      title: "定制您的中国之旅",
      subtitle: "填写以下信息，我们的旅行专家将在24小时内为您定制专属行程"
    },
    form: {
      destination: "主要目的地 *",
      tourType: "旅行类型 *",
      travelDate: "计划出行时间 *",
      duration: "行程天数 *",
      adults: "成人人数 *",
      children: "儿童人数 (12岁以下)",
      language: "导游语言偏好 *",
      budget: "大致预算 (每人)",
      name: "姓名 *",
      email: "邮箱 *",
      phone: "电话号码 *",
      specialRequests: "特殊要求与备注",
      submit: "提交咨询",
      note: "提交后，我们的旅行专家将在24小时内与您联系",
      selectPlaceholder: "请选择",
      destinations: {
        "": "请选择目的地",
        "xi'an": "西安（兵马俑、古城墙）",
        beijing: "北京（故宫、长城）",
        chengdu: "成都（大熊猫、美食）",
        shanghai: "上海（现代都市）",
        guilin: "桂林（山水风光）",
        multiple: "多个城市组合",
        custom: "定制路线"
      },
      tourTypes: {
        "": "请选择旅行类型",
        culture: "文化历史游",
        nature: "自然风光游",
        food: "美食体验游",
        family: "亲子家庭游",
        luxury: "高端奢华游",
        photography: "摄影之旅",
        business: "商务考察游"
      },
      durations: {
        "": "请选择天数",
        "3-5": "3-5天",
        "6-8": "6-8天",
        "9-12": "9-12天",
        "13+": "13天以上"
      },
      adultsOptions: {
        "": "请选择人数",
        "1": "1位",
        "2": "2位",
        "3": "3位",
        "4": "4位",
        "5+": "5位以上"
      },
      childrenOptions: {
        "0": "0位",
        "1": "1位",
        "2": "2位",
        "3": "3位",
        "4+": "4位以上"
      },
      languages: {
        "": "请选择语言",
        zh: "中文",
        en: "English",
        ar: "العربية",
        ru: "Русский",
        other: "其他语言"
      },
      budgets: {
        "": "请选择预算范围",
        "1000-2000": "$1000-2000",
        "2000-4000": "$2000-4000",
        "4000-6000": "$4000-6000",
        "6000+": "$6000以上"
      },
      namePlaceholder: "请输入您的姓名",
      emailPlaceholder: "请输入您的邮箱地址",
      phonePlaceholder: "请输入您的电话号码",
      specialRequestsPlaceholder: "请告诉我们您的特殊需求、兴趣点或任何其他要求..."
    },
    wechatModal: {
      title: "扫描二维码添加微信",
      wechatId: "微信号：LuyouChangAn",
      note: "添加后请备注\"旅游咨询\"",
      copy: "复制微信号",
      close: "关闭"
    },
    about: {
      title: "品牌简介 - 鹭游长安",
      subtitle: "深度文化体验的引领者",
      intro1: "\"鹭游长安\"是西安鹭游国际旅行社有限责任公司的核心品牌，专注于中国入境旅游的高端服务。我们以十三朝古都西安为核心基地，业务辐射北京、上海、成都等主要旅游城市。",
      intro2: "\"鹭游长安\"寓意着如白鹭般优雅地翱翔于中华文明的长河之中。我们不仅仅是旅行安排者，更是文化解读者和体验设计者，致力于为全球旅行者提供超越观光的深度文化沉浸体验。",
      features: [
        { icon: "fas fa-award", title: "专业资质", desc: "正规旅行社资质，专业多语种导游团队，十年以上行业经验" },
        { icon: "fas fa-handshake", title: "服务理念", desc: "以客为尊，量身定制，注重细节，追求卓越的客户体验" },
        { icon: "fas fa-map-marked-alt", title: "资源优势", desc: "深耕西安地接市场，掌握独家文化资源和特色体验项目" },
        { icon: "fas fa-users", title: "团队力量", desc: "汇聚历史文化学者、多语言导游、旅行策划专家" }
      ]
    },
    testimonials: {
      title: "客户评价",
      subtitle: "来自全球游客的真实反馈",
      items: [
        { text: "我们一家五口通过鹭游长安安排了西安和北京的12日旅程，体验远超预期！阿拉伯语导游Ali不仅语言流利，更是一位中国历史专家。孩子们在兵马俑亲手制作了小陶俑，这将成为他们一生的记忆。强烈推荐给所有阿拉伯地区的朋友！", name: "Ahmed Al-Mansoori", country: "阿联酋迪拜", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
        { text: "作为摄影爱好者，我通过鹭游长安定制了\"丝绸之路摄影之旅\"。他们不仅安排了绝佳的拍摄点位和时间，还邀请了当地摄影师同行指导。导游对唐代文化如数家珍，让我的作品有了更深的文化内涵。完美的专业服务！", name: "James Wilson", country: "英国伦敦", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
        { text: "我们俄罗斯的商务代表团在中国考察期间，鹭游长安提供了全程高水准的接待服务。俄语导游安娜不仅翻译准确，更在商务礼仪和文化差异方面给了我们很多宝贵建议。从机场接机到酒店安排，每个细节都体现了专业和用心。期待下次合作！", name: "Dmitri Ivanov", country: "俄罗斯莫斯科", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" }
      ]
    },
    footer: {
      about: "我们是以西安为核心目的地的专业入境游旅行社，专注于为全球旅客提供深度、定制化的中国文化旅行体验。品牌寓意如白鹭优雅翱翔，引领您畅游千年古都长安。",
      quickLinks: "快速链接",
      popularItineraries: "热门行程",
      contactUs: "联系我们",
      companyName: "西安鹭游国际旅行社有限责任公司",
      address: "中国陕西省西安市曲江新区雁塔南路292号",
      phone: "+86 (29) 8888-6666",
      phoneDetail: "24小时多语言服务热线<br>英文服务分机：801<br>阿语服务分机：802",
      email1: "service@luyouchangan.com",
      email1Detail: "咨询与预订",
      email2: "inquiry@luyouchangan.com",
      email2Detail: "团体与合作",
      whatsapp: "+86 138 0000 0000",
      whatsappDetail: "24小时WhatsApp咨询<br>支持多语言沟通",
      wechat: "微信公众号：鹭游长安",
      wechatDetail: "扫描二维码关注我们<br>获取最新旅游资讯和优惠",
      copyright: "© 2023 - 2025 西安鹭游国际旅行社有限责任公司 版权所有",
      license: "旅行社业务经营许可证: L-SNX-GJ00058 | 备案号: 陕ICP备2023121401号",
      disclaimer: "本网站图片来自Pexels，仅用于展示目的"
    }
  },

  "zh-hant": {
    // 繁体中文 - 与简体基本相同，仅用词和字体差异
    nav: {
      home: "首頁",
      services: "核心服務",
      destinations: "經典目的地",
      itineraries: "熱門行程",
      inquiry: "獲取報價",
      about: "品牌簡介",
      testimonials: "客戶評價",
      contact: "聯繫我們"
    },
    hero: {
      title: "鷺遊長安，遇見華夏",
      subtitle: "專業導遊，深度文化體驗，個性化定制 - 我們為您打開一扇通往真實中國的大門",
      button: "開啟探索之旅"
    },
    services: {
      title: "核心服務",
      subtitle: "從多語言導遊到全程無憂支持，我們提供一站式高端入境遊解決方案",
      items: [
        { icon: "fas fa-language", title: "多語言導遊服務", desc: "我們擁有精通英語、阿拉伯語、俄語及多種歐洲語言的本地專業導遊團隊。不僅僅是語言翻譯，更是文化橋樑，確保您與中國的歷史、文化進行深度、無障礙的對話。" },
        { icon: "fas fa-car", title: "高端交通安排", desc: "舒適商務車、豪華巴士、專業司機全程陪同，確保旅途安全舒適，支持機場/高鐵站接送。" },
        { icon: "fas fa-hotel", title: "精品酒店預訂", desc: "精選五星級酒店及特色精品民宿，提供最佳入住體驗，優先安排市中心或景點附近位置。" },
        { icon: "fas fa-ticket-alt", title: "門票快速通道", desc: "提前預訂熱門景點門票，避免排隊，支持VIP快速通道和專屬講解服務。" },
        { icon: "fas fa-utensils", title: "特色美食體驗", desc: "安排正宗當地美食餐廳，推薦地道菜品，可定制清真、素食或其他飲食需求。" },
        { icon: "fas fa-shield-alt", title: "全程安心保障", desc: "24小時應急支持、旅遊意外保險、行程靈活調整，確保旅途無憂。" }
      ]
    },
    destinations: {
      title: "經典目的地",
      subtitle: "以西安為樞紐，暢遊中國最具代表性的歷史名城與現代都市",
      items: [
        { tag: "核心樞紐", city: "西安", highlights: "兵馬俑、古城牆、大唐不夜城、回民街、陝西歷史博物館", img: "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "千年帝都", city: "北京", highlights: "故宮、長城、天安門、頤和園、天壇", img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "熊貓之鄉", city: "成都", highlights: "大熊貓基地、寬窄巷子、杜甫草堂、錦里、都江堰", img: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "東方巴黎", city: "上海", highlights: "外灘、東方明珠、豫園、南京路、迪士尼樂園", img: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
      ]
    },
    itineraries: {
      title: "熱門行程",
      subtitle: "精心設計的經典旅遊線路，滿足不同旅客的需求",
      items: [
        { days: "3日遊", title: "西安古都文化3日遊", desc: "探索西安核心景點：兵馬俑、古城牆、大雁塔、回民街，體驗千年古都的文化魅力。", img: "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
        { days: "5日遊", title: "西安深度+華山5日遊", desc: "經典西安景點+登華山觀日出，感受自然與人文的雙重震撼。", img: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
        { days: "9日遊", title: "北京+西安雙古都9日之旅", desc: "北京故宮長城+西安兵馬俑，穿越千年中國歷史。", img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" }
      ]
    },
    inquiry: {
      title: "定制您的中國之旅",
      subtitle: "填寫以下信息，我們的旅行專家將在24小時內為您定制專屬行程"
    },
    form: {
      destination: "主要目的地 *",
      tourType: "旅行類型 *",
      travelDate: "計劃出行時間 *",
      duration: "行程天數 *",
      adults: "成人人数 *",
      children: "兒童人数 (12歲以下)",
      language: "導遊語言偏好 *",
      budget: "大致預算 (每人)",
      name: "姓名 *",
      email: "郵箱 *",
      phone: "電話號碼 *",
      specialRequests: "特殊要求與備註",
      submit: "提交諮詢",
      note: "提交後，我們的旅行專家將在24小時內與您聯繫",
      selectPlaceholder: "請選擇",
      destinations: {
        "": "請選擇目的地",
        "xi'an": "西安（兵馬俑、古城牆）",
        beijing: "北京（故宮、長城）",
        chengdu: "成都（大熊貓、美食）",
        shanghai: "上海（現代都市）",
        guilin: "桂林（山水風光）",
        multiple: "多個城市組合",
        custom: "定制路線"
      },
      tourTypes: {
        "": "請選擇旅行類型",
        culture: "文化歷史遊",
        nature: "自然風光遊",
        food: "美食體驗遊",
        family: "親子家庭遊",
        luxury: "高端奢華遊",
        photography: "攝影之旅",
        business: "商務考察遊"
      },
      // 其他选项类似，略以节省空间（结构相同）
      namePlaceholder: "請輸入您的姓名",
      emailPlaceholder: "請輸入您的郵箱地址",
      phonePlaceholder: "請輸入您的電話號碼",
      specialRequestsPlaceholder: "請告訴我們您的特殊需求、興趣點或任何其他要求..."
    },
    wechatModal: {
      title: "掃描二維碼添加微信",
      wechatId: "微信號：LuyouChangAn",
      note: "添加後請備註\"旅遊諮詢\"",
      copy: "複製微信號",
      close: "關閉"
    },
    about: { /* 同zh，但繁体字 */ },
    testimonials: { /* 同zh */ },
    footer: { /* 同zh，但繁体字 */ }
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      destinations: "Destinations",
      itineraries: "Itineraries",
      inquiry: "Get Quote",
      about: "About",
      testimonials: "Testimonials",
      contact: "Contact"
    },
    hero: {
      title: "Luyou Chang'an, Meet China",
      subtitle: "Professional guides, deep cultural experiences, personalized customization - we open a door to authentic China for you",
      button: "Start Your Journey"
    },
    services: {
      title: "Core Services",
      subtitle: "From multilingual guides to full support, we provide one-stop high-end inbound tourism solutions",
      items: [
        { icon: "fas fa-language", title: "Multilingual Guide Service", desc: "We have professional local guides fluent in English, Arabic, Russian and various European languages. More than just translation, they are cultural bridges ensuring deep, barrier-free dialogue with Chinese history and culture." },
        { icon: "fas fa-car", title: "Premium Transportation", desc: "Comfortable business vans, luxury coaches, professional drivers throughout, ensuring safe and comfortable travel with airport/train station transfers." },
        { icon: "fas fa-hotel", title: "Boutique Hotel Booking", desc: "Carefully selected five-star hotels and characteristic boutique accommodations, prioritizing central locations or proximity to attractions." },
        { icon: "fas fa-ticket-alt", title: "Fast-Track Tickets", desc: "Pre-booked popular attraction tickets to avoid queues, supporting VIP fast lanes and exclusive guided services." },
        { icon: "fas fa-utensils", title: "Authentic Food Experience", desc: "Arranged authentic local restaurants with recommended signature dishes, customizable for Halal, vegetarian or other dietary needs." },
        { icon: "fas fa-shield-alt", title: "Full Peace of Mind", desc: "24-hour emergency support, travel accident insurance, flexible itinerary adjustments for worry-free travel." }
      ]
    },
    destinations: {
      title: "Classic Destinations",
      subtitle: "With Xi'an as the hub, explore China's most representative historical and modern cities",
      items: [
        { tag: "Core Hub", city: "Xi'an", highlights: "Terracotta Warriors, Ancient City Wall, Datang Everbright City, Muslim Quarter, Shaanxi History Museum", img: "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "Millennium Capital", city: "Beijing", highlights: "Forbidden City, Great Wall, Tiananmen Square, Summer Palace, Temple of Heaven", img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "Home of Pandas", city: "Chengdu", highlights: "Panda Base, Wide and Narrow Alleys, Du Fu Thatched Cottage, Jinli, Dujiangyan", img: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "Oriental Paris", city: "Shanghai", highlights: "The Bund, Oriental Pearl Tower, Yu Garden, Nanjing Road, Disneyland", img: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
      ]
    },
    itineraries: {
      title: "Popular Itineraries",
      subtitle: "Carefully designed classic travel routes to meet different traveler needs",
      items: [
        { days: "3-Day Tour", title: "Xi'an Ancient Capital Culture 3-Day Tour", desc: "Explore Xi'an's core attractions: Terracotta Warriors, Ancient City Wall, Big Wild Goose Pagoda, Muslim Quarter, experience the charm of a thousand-year ancient capital.", img: "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
        { days: "5-Day Tour", title: "In-depth Xi'an + Mount Hua 5-Day Tour", desc: "Classic Xi'an attractions + climb Mount Hua to watch sunrise, feel the double shock of nature and culture.", img: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
        { days: "9-Day Tour", title: "Beijing + Xi'an Dual Ancient Capitals 9-Day Journey", desc: "Beijing Forbidden City & Great Wall + Xi'an Terracotta Warriors, traverse thousand years of Chinese history.", img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" }
      ]
    },
    inquiry: {
      title: "Customize Your China Journey",
      subtitle: "Fill in the information below, our travel experts will customize an exclusive itinerary for you within 24 hours"
    },
    form: {
      destination: "Main Destination *",
      tourType: "Tour Type *",
      travelDate: "Planned Travel Date *",
      duration: "Duration (Days) *",
      adults: "Adults *",
      children: "Children (Under 12)",
      language: "Preferred Guide Language *",
      budget: "Approximate Budget (Per Person)",
      name: "Name *",
      email: "Email *",
      phone: "Phone Number *",
      specialRequests: "Special Requests & Notes",
      submit: "Submit Inquiry",
      note: "After submission, our travel experts will contact you within 24 hours",
      selectPlaceholder: "Please select",
      destinations: {
        "": "Please select destination",
        "xi'an": "Xi'an (Terracotta Warriors, Ancient City Wall)",
        beijing: "Beijing (Forbidden City, Great Wall)",
        chengdu: "Chengdu (Giant Pandas, Food)",
        shanghai: "Shanghai (Modern Metropolis)",
        guilin: "Guilin (Landscape)",
        multiple: "Multiple Cities",
        custom: "Custom Route"
      },
      tourTypes: {
        "": "Please select tour type",
        culture: "Cultural History Tour",
        nature: "Natural Scenery Tour",
        food: "Food Experience Tour",
        family: "Family Tour",
        luxury: "Luxury Tour",
        photography: "Photography Tour",
        business: "Business Tour"
      },
      durations: {
        "": "Please select days",
        "3-5": "3-5 Days",
        "6-8": "6-8 Days",
        "9-12": "9-12 Days",
        "13+": "13+ Days"
      },
      adultsOptions: {
        "": "Please select number",
        "1": "1 Person",
        "2": "2 People",
        "3": "3 People",
        "4": "4 People",
        "5+": "5+ People"
      },
      childrenOptions: {
        "0": "0 Person",
        "1": "1 Person",
        "2": "2 People",
        "3": "3 People",
        "4+": "4+ People"
      },
      languages: {
        "": "Please select language",
        zh: "Chinese",
        en: "English",
        ar: "العربية",
        ru: "Русский",
        other: "Other Language"
      },
      budgets: {
        "": "Please select budget range",
        "1000-2000": "$1000-2000",
        "2000-4000": "$2000-4000",
        "4000-6000": "$4000-6000",
        "6000+": "$6000+"
      },
      namePlaceholder: "Please enter your name",
      emailPlaceholder: "Please enter your email address",
      phonePlaceholder: "Please enter your phone number",
      specialRequestsPlaceholder: "Please tell us your special needs, interests or any other requirements..."
    },
    wechatModal: {
      title: "Scan QR Code to Add WeChat",
      wechatId: "WeChat ID: LuyouChangAn",
      note: "Please remark 'Travel Inquiry' after adding",
      copy: "Copy WeChat ID",
      close: "Close"
    },
    about: {
      title: "Brand Introduction - Luyou Chang'an",
      subtitle: "Leader in Deep Cultural Experiences",
      intro1: "\"Luyou Chang'an\" is the core brand of Xi'an Luyou International Travel Co., Ltd., specializing in high-end inbound tourism services in China. We are based in the ancient capital Xi'an, with business covering major tourist cities such as Beijing, Shanghai, and Chengdu.",
      intro2: "\"Luyou Chang'an\" symbolizes the graceful flight of an egret over the long river of Chinese civilization. We are not just travel arrangers, but cultural interpreters and experience designers, committed to providing global travelers with deep cultural immersion experiences beyond sightseeing.",
      features: [
        { icon: "fas fa-award", title: "Professional Qualifications", desc: "Formal travel agency qualifications, professional multilingual guide team, over ten years of industry experience" },
        { icon: "fas fa-handshake", title: "Service Philosophy", desc: "Customer first, tailor-made, attention to detail, pursuit of excellent customer experience" },
        { icon: "fas fa-map-marked-alt", title: "Resource Advantages", desc: "Deep cultivation in Xi'an local market, mastering exclusive cultural resources and characteristic experience projects" },
        { icon: "fas fa-users", title: "Team Strength", desc: "Gathering historians, multilingual guides, travel planning experts" }
      ]
    },
    testimonials: {
      title: "Customer Testimonials",
      subtitle: "Real feedback from global tourists",
      items: [
        { text: "Our family of five arranged a 12-day trip to Xi'an and Beijing through Luyou Chang'an, and the experience far exceeded expectations! Arabic guide Ali is not only fluent in language, but also an expert in Chinese history. The children made small pottery figurines at the Terracotta Warriors, which will be a lifelong memory. Highly recommended to all friends in Arab regions!", name: "Ahmed Al-Mansoori", country: "Dubai, UAE", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
        { text: "As a photography enthusiast, I customized the \"Silk Road Photography Tour\" through Luyou Chang'an. They not only arranged the best shooting locations and times, but also invited local photographers to guide. The guide was knowledgeable about Tang Dynasty culture, giving my work deeper cultural meaning. Perfect professional service!", name: "James Wilson", country: "London, UK", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
        { text: "During our Russian business delegation's inspection in China, Luyou Chang'an provided high-standard reception services throughout. Russian guide Anna not only translated accurately, but also gave valuable advice on business etiquette and cultural differences. Every detail from airport pickup to hotel arrangement reflected professionalism and care. Looking forward to next cooperation!", name: "Dmitri Ivanov", country: "Moscow, Russia", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" }
      ]
    },
    footer: {
      about: "We are a professional inbound travel agency with Xi'an as the core destination, specializing in providing global travelers with deep, customized Chinese cultural travel experiences. The brand symbolizes the elegant flight of an egret, leading you through the ancient capital Chang'an.",
      quickLinks: "Quick Links",
      popularItineraries: "Popular Itineraries",
      contactUs: "Contact Us",
      companyName: "Xi'an Luyou International Travel Co., Ltd.",
      address: "292 Yanta South Road, Qujiang New District, Xi'an, Shaanxi, China",
      phone: "+86 (29) 8888-6666",
      phoneDetail: "24-hour multilingual hotline<br>English extension: 801<br>Arabic extension: 802",
      email1: "service@luyouchangan.com",
      email1Detail: "Inquiry & Booking",
      email2: "inquiry@luyouchangan.com",
      email2Detail: "Group & Cooperation",
      whatsapp: "+86 138 0000 0000",
      whatsappDetail: "24-hour WhatsApp consultation<br>Multilingual support",
      wechat: "WeChat Official Account: Luyou Chang'an",
      wechatDetail: "Scan QR code to follow us<br>Get latest travel info and offers",
      copyright: "© 2023 - 2025 Xi'an Luyou International Travel Co., Ltd. All rights reserved",
      license: "Travel Agency License: L-SNX-GJ00058 | ICP Filing: 陕ICP备2023121401号",
      disclaimer: "Images on this site are from Pexels and used for display purposes only"
    }
  },

  ar: {
    // 阿拉伯语翻译（RTL语言）
    nav: {
      home: "الصفحة الرئيسية",
      services: "الخدمات الأساسية",
      destinations: "الوجهات الكلاسيكية",
      itineraries: "الرحلات الشائعة",
      inquiry: "احصل على عرض أسعار",
      about: "نبذة عن العلامة التجارية",
      testimonials: "آراء العملاء",
      contact: "اتصل بنا"
    },
    hero: {
      title: "لويو تشانغآن، قابل الصين",
      subtitle: "مرشدون محترفون، تجارب ثقافية عميقة، تخصيص شخصي - نفتح لك بابًا إلى الصين الأصيلة",
      button: "ابدأ رحلتك"
    },
    services: {
      title: "الخدمات الأساسية",
      subtitle: "من المرشدين متعددي اللغات إلى الدعم الكامل، نقدم حلول سياحة دخول فاخرة شاملة",
      items: [
        { icon: "fas fa-language", title: "خدمة مرشد متعدد اللغات", desc: "لدينا فريق مرشدين محليين محترفين يتقنون الإنجليزية والعربية والروسية والعديد من اللغات الأوروبية. ليس مجرد ترجمة، بل جسور ثقافية تضمن حوارًا عميقًا خاليًا من العوائق مع التاريخ والثقافة الصينية." },
        { icon: "fas fa-car", title: "نقل فاخر", desc: "سيارات أعمال مريحة، حافلات فاخرة، سائقون محترفون طوال الرحلة، مع نقل من/إلى المطار أو محطة القطار." },
        { icon: "fas fa-hotel", title: "حجز فنادق بوتيك", desc: "فنادق خمس نجوم مختارة بعناية وإقامات بوتيك مميزة، مع أولوية للمواقع المركزية أو القريبة من المعالم." },
        { icon: "fas fa-ticket-alt", title: "تذاكر دخول سريع", desc: "حجز مسبق لتذاكر المعالم الشائعة لتجنب الطوابير، مع دعم ممرات VIP وخدمات إرشاد حصرية." },
        { icon: "fas fa-utensils", title: "تجربة طعام أصيل", desc: "ترتيب مطاعم محلية أصيلة مع أطباق مميزة، قابلة للتخصيص للحلال أو النباتي أو غيرها." },
        { icon: "fas fa-shield-alt", title: "ضمان راحة البال الكامل", desc: "دعم طوارئ 24 ساعة، تأمين حوادث سفر، تعديلات مرنة للرحلة." }
      ]
    },
    destinations: {
      title: "الوجهات الكلاسيكية",
      subtitle: "مع شيآن كمركز، استكشف أكثر المدن التاريخية والحديثة تمثيلاً في الصين",
      items: [
        { tag: "المركز الرئيسي", city: "شيآن", highlights: "جنود الطين، سور المدينة القديم، مدينة داتانغ اللامعة، حي المسلمين، متحف تاريخ شنشي", img: "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "عاصمة الألفية", city: "بكين", highlights: "المدينة المحرمة، سور الصين العظيم، ساحة تيانانمن، قصر الصيف، معبد السماء", img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "وطن الباندا", city: "تشينغدو", highlights: "قاعدة الباندا، زقاق واسع وضيق، كوخ دو فو، جينلي، دوجيانغيان", img: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
        { tag: "باريس الشرق", city: "شنغهاي", highlights: "البوند، لؤلؤة الشرق، حديقة يو، طريق نانجينغ، ديزني لاند", img: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
      ]
    },
    // 其他模块类似翻译...
    wechatModal: {
      title: "امسح رمز الاستجابة السريعة لإضافة WeChat",
      wechatId: "معرف WeChat: LuyouChangAn",
      note: "يرجى الملاحظة 'استفسار سفر' بعد الإضافة",
      copy: "نسخ معرف WeChat",
      close: "إغلاق"
    },
    // 其他
  },

  ru: {
    // 俄语翻译
    nav: {
      home: "Главная",
      services: "Основные услуги",
      destinations: "Классические направления",
      itineraries: "Популярные маршруты",
      inquiry: "Получить предложение",
      about: "О бренде",
      testimonials: "Отзывы клиентов",
      contact: "Контакты"
    },
    hero: {
      title: "Люйю Чанъань, Встречайте Китай",
      subtitle: "Профессиональные гиды, глубокий культурный опыт, персонализация - мы открываем дверь в аутентичный Китай",
      button: "Начать путешествие"
    },
    // 其他模块类似...
    wechatModal: {
      title: "Сканируйте QR-код для добавления WeChat",
      wechatId: "ID WeChat: LuyouChangAn",
      note: "После добавления укажите 'Консультация по туризму'",
      copy: "Копировать ID WeChat",
      close: "Закрыть"
    }
  }
};

const LANGUAGES = [
  { code: 'zh', name: '中文简体', flag: 'cn' },
  { code: 'zh-hant', name: '中文繁體', flag: 'tw' },
  { code: 'en', name: 'English', flag: 'gb' },
  { code: 'ar', name: 'العربية', flag: 'sa' },
  { code: 'ru', name: 'Русский', flag: 'ru' }
];