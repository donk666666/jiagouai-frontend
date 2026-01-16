// 模拟数据
const mockData = {
    products: [
        {
            id: 1,
            name: "智能蓝牙耳机 Pro",
            price: 299.99,
            originalPrice: 399.99,
            image: "https://picsum.photos/seed/earphones/300/300.jpg",
            sales: 15234,
            stock: 500,
            category: "数码产品",
            description: "高品质蓝牙耳机，支持主动降噪，续航长达30小时",
            supplier: "科技有限公司",
            rating: 4.8,
            reviews: 2341,
            isHot: true
        },
        {
            id: 2,
            name: "便携式充电宝 20000mAh",
            price: 89.99,
            originalPrice: 129.99,
            image: "https://picsum.photos/seed/powerbank/300/300.jpg",
            sales: 8921,
            stock: 1200,
            category: "数码配件",
            description: "大容量充电宝，支持快充，轻薄便携",
            supplier: "电子科技有限公司",
            rating: 4.6,
            reviews: 1523,
            isHot: true
        },
        {
            id: 3,
            name: "智能手环 5代",
            price: 199.99,
            originalPrice: 299.99,
            image: "https://picsum.photos/seed/smartband/300/300.jpg",
            sales: 12456,
            stock: 800,
            category: "智能穿戴",
            description: "健康监测，运动追踪，长续航智能手环",
            supplier: "智能设备公司",
            rating: 4.7,
            reviews: 1876,
            isHot: true
        },
        {
            id: 4,
            name: "无线充电器",
            price: 59.99,
            originalPrice: 89.99,
            image: "https://picsum.photos/seed/charger/300/300.jpg",
            sales: 6789,
            stock: 1500,
            category: "数码配件",
            description: "15W快充无线充电器，支持多种设备",
            supplier: "配件制造商",
            rating: 4.5,
            reviews: 987,
            isHot: false
        },
        {
            id: 5,
            name: "智能音箱 Mini",
            price: 149.99,
            originalPrice: 199.99,
            image: "https://picsum.photos/seed/speaker/300/300.jpg",
            sales: 9876,
            stock: 600,
            category: "智能家电",
            description: "AI语音助手，音质出色，智能家居控制中心",
            supplier: "音响设备公司",
            rating: 4.6,
            reviews: 1234,
            isHot: true
        },
        {
            id: 6,
            name: "车载手机支架",
            price: 29.99,
            originalPrice: 49.99,
            image: "https://picsum.photos/seed/carholder/300/300.jpg",
            sales: 4567,
            stock: 2000,
            category: "汽车配件",
            description: "稳固车载支架，360度旋转，适用各种车型",
            supplier: "汽车用品公司",
            rating: 4.4,
            reviews: 654,
            isHot: false
        }
    ],
    
    suppliers: [
        {
            id: 1,
            name: "科技有限公司",
            contact: "张经理",
            phone: "13800138000",
            email: "contact@techcompany.com",
            address: "北京市朝阳区科技园",
            products: 156,
            rating: 4.8,
            joinDate: "2023-03-15"
        },
        {
            id: 2,
            name: "电子科技有限公司",
            contact: "李总",
            phone: "13900139000",
            email: "info@electronics.com",
            address: "深圳市南山区高新技术园",
            products: 32,
            rating: 4.6,
            joinDate: "2023-03-20"
        },
        {
            id: 3,
            name: "智能设备公司",
            contact: "王经理",
            phone: "13700137000",
            email: "sales@smartdevice.com",
            address: "上海市浦东新区张江高科",
            products: 28,
            rating: 4.7,
            joinDate: "2023-02-10"
        }
    ],
    
    channels: [
        {
            id: 1,
            name: "示例贸易有限公司",
            contact: "陈总",
            phone: "13600136000",
            email: "business@trading.com",
            type: "线上线下结合",
            platform: "淘宝、京东、实体店",
            monthlySales: "100万以上",
            rating: 4.9,
            joinDate: "2023-01-20"
        },
        {
            id: 2,
            name: "电商运营公司",
            contact: "刘经理",
            phone: "13500135000",
            email: "operation@ecommerce.com",
            type: "线上渠道",
            platform: "拼多多、抖音电商",
            monthlySales: "50-100万",
            rating: 4.7,
            joinDate: "2023-04-15"
        }
    ],

    leaders: [
        {
            id: 1,
            name: "林团长",
            avatar: "https://picsum.photos/seed/leader1/120/120.jpg",
            leaderType: "社区团长",
            platforms: ["微信群", "社区"],
            region: "上海·浦东新区",
            audience: "1个小区，约1800户",
            focus: "日用百货、家清、零食",
            commissionRate: 12,
            last30dGmv: 180000,
            contact: "微信：lin_tz_01"
        },
        {
            id: 2,
            name: "贝贝宝妈",
            avatar: "https://picsum.photos/seed/leader2/120/120.jpg",
            leaderType: "私域团长",
            platforms: ["微信群", "小红书"],
            region: "广州·天河区",
            audience: "3个千人群，母婴为主",
            focus: "母婴、食品、个护",
            commissionRate: 15,
            last30dGmv: 520000,
            contact: "微信：beibei_mama"
        },
        {
            id: 3,
            name: "阿杰帮卖",
            avatar: "https://picsum.photos/seed/leader3/120/120.jpg",
            leaderType: "帮卖团长",
            platforms: ["快团团", "群接龙"],
            region: "杭州",
            audience: "团购平台分发+社群转发",
            focus: "数码配件、车品",
            commissionRate: 10,
            last30dGmv: 260000,
            contact: "微信：ajie_helper"
        },
        {
            id: 4,
            name: "橙子社区",
            avatar: "https://picsum.photos/seed/leader4/120/120.jpg",
            leaderType: "社区团长",
            platforms: ["微信群", "社区"],
            region: "北京·朝阳区",
            audience: "2个社区，约2600户",
            focus: "生鲜、零食、家清",
            commissionRate: 13,
            last30dGmv: 310000,
            contact: "微信：orange_shequ"
        }
    ],

    customers: [
        {
            id: 1,
            name: "张女士",
            city: "上海",
            tags: ["母婴", "数码"],
            lastOrderAt: "2025-12-28",
            totalOrders: 12,
            totalSpent: 3560
        },
        {
            id: 2,
            name: "王先生",
            city: "广州",
            tags: ["车品", "数码配件"],
            lastOrderAt: "2025-12-31",
            totalOrders: 8,
            totalSpent: 1820
        },
        {
            id: 3,
            name: "陈女士",
            city: "杭州",
            tags: ["家清", "零食"],
            lastOrderAt: "2026-01-03",
            totalOrders: 20,
            totalSpent: 4680
        }
    ]
};

const mockArticles = [
    {
        id: 1,
        title: 'AI 药物发现初创公司 Converge Bio 完成 2500 万美元 A 轮融资',
        category: 'AI 医疗',
        tags: ['AI 药物发现', '融资', 'Converge Bio'],
        date: '2026-01-15',
        readingMinutes: 4,
        source: 'n8n 工作流自动生成',
        excerpt: '人工智能药物发现初创公司 Converge Bio 宣布完成 2500 万美元 A 轮融资，由 Bessemer 领投，Meta、OpenAI 与 Wiz 高管参投，加速其 AI 驱动的药物研发平台以应对重大医疗挑战。',
        content: `人工智能药物发现初创公司 Converge Bio 近日宣布，已完成 2500 万美元的 A 轮融资。本轮融资由 Bessemer Venture Partners 领投，并获得了来自 Meta、OpenAI 以及 Wiz 公司高管的额外支持。这笔资金将用于加速其 AI 驱动的药物研发平台发展，以应对当前医疗领域的重大挑战。`
    },
    {
        id: 2,
        title: 'Mitti Labs 与大自然保护协会合作推广气候友好型水稻种植',
        category: '气候与农业',
        tags: ['Mitti Labs', '甲烷减排', '气候科技'],
        date: '2026-01-15',
        readingMinutes: 4,
        source: 'n8n 工作流自动生成',
        excerpt: 'Mitti Labs 正在印度推广气候友好型水稻种植方法，并利用自家 AI 技术验证甲烷排放减少量，帮助稻农在保障产量的同时降低温室气体排放。',
        content: `气候变化给全球农业带来严峻挑战，而水稻种植产生的甲烷排放是重要温室气体来源之一。现在，一家名为 Mitti Labs 的初创公司正与大自然保护协会合作，在印度推广气候友好型水稻种植方法。该公司利用其人工智能技术，来验证甲烷排放的减少量。这一创新举措，旨在帮助稻农在保障产量的同时，降低对环境的影响，为应对气候变化提供科技解决方案。`
    },
    {
        id: 3,
        title: '始终开启麦克风的智能眼镜引发隐私担忧',
        category: '硬件与隐私',
        tags: ['智能眼镜', '隐私', '可穿戴设备'],
        date: '2026-01-15',
        readingMinutes: 3,
        source: 'n8n 工作流自动生成',
        excerpt: '两名前哈佛学生在为 Meta 雷朋眼镜开发面部识别后，如今又创办公司推出始终监听用户对话的智能眼镜，再次引发对隐私和数据安全的强烈讨论。',
        content: `两名前哈佛学生，曾为 Meta 的雷朋眼镜开发面部识别应用并随意曝光他人信息，如今正创办一家初创公司，推出配备始终开启麦克风的智能眼镜。这款眼镜能持续监听并记录佩戴者的所有对话，引发了对隐私和数据安全的广泛担忧。`
    },
    {
        id: 4,
        title: 'Obvio 拟用停车标志摄像头提升美国街道行人安全',
        category: '城市与交通',
        tags: ['Obvio', '交通安全', '城市 AI'],
        date: '2026-01-15',
        readingMinutes: 3,
        source: 'n8n 工作流自动生成',
        excerpt: '美国街道对行人极不友好，初创公司 Obvio 计划在停车标志处部署 AI 摄像头识别不安全驾驶行为，在不构建“全景监控社会”的前提下改善道路安全。',
        content: `美国街道对行人来说极其危险。总部位于加利福尼亚州圣卡洛斯的一家初创公司 Obvio 认为，它可以通过在停车标志处安装摄像头来改变这一现状。该公司创始人表示，这一解决方案不会创造一个全景监控式的社会。这些摄像头利用人工智能技术，旨在识别出不安全的驾驶行为，从而提升道路安全。`
    },
    {
        id: 5,
        title: 'YouTube 将 AI 列为 2025 年四大重点投资领域之一',
        category: '大厂动向',
        tags: ['YouTube', '生成式 AI', '创作者工具'],
        date: '2026-01-15',
        readingMinutes: 4,
        source: 'n8n 工作流自动生成',
        excerpt: 'YouTube CEO Neal Mohan 在年度公开信中强调 AI 对平台未来的重要性，重点投入创作者 AI 工具，包括视频创意、缩略图生成和语言翻译功能。',
        content: `YouTube CEO Neal Mohan 在年度公开信中，将人工智能列为公司 2025 年的四大“重点投资领域”之一。他指出，YouTube 正在加大对创作者 AI 工具的投入，包括视频创意、缩略图和语言翻译等功能。其中，语言翻译功能将于本月向 YouTube 合作伙伴计划的所有创作者开放。`
    },
    {
        id: 6,
        title: 'Self Inspection 获 300 万美元融资，加速 AI 车辆检测',
        category: 'AI 工业',
        tags: ['Self Inspection', '车辆检测', '计算机视觉'],
        date: '2026-01-15',
        readingMinutes: 3,
        source: 'n8n 工作流自动生成',
        excerpt: '多家初创公司竞相用 AI 改造车辆检测流程，Self Inspection 宣称其服务在速度与成本上领先竞争对手，并获得 300 万美元资金支持。',
        content: `多家初创公司正竞相让车辆检测变得更快速、更便捷、更便宜。总部位于圣地亚哥的初创公司 Self Inspection 认为，其 AI 驱动的服务已超越所有对手，并成功说服了外部投资者。成立于 2021 年的 Self Inspection 将于周四宣布，已筹集 300 万美元资金。`
    },
    {
        id: 7,
        title: 'Meta 在数据中心建设热潮中重新押注太阳能',
        category: '能源与基础设施',
        tags: ['Meta', '数据中心', '太阳能'],
        date: '2026-01-15',
        readingMinutes: 3,
        source: 'n8n 工作流自动生成',
        excerpt: '为支撑雄心勃勃的 AI 战略和数据中心扩张，Meta 宣布将再次大规模采用太阳能，缓解能源与碳排放压力。',
        content: `Meta 公司宣布，在其数据中心建设热潮中，将再次转向太阳能。这一声明发布之际，Meta 首席执行官马克·扎克伯格正坚持公司雄心勃勃的人工智能战略，该战略将需要对数据中心进行大量资本投资。`
    },
    {
        id: 8,
        title: 'Salesforce 推出全新 AI 版 Slackbot，被称为“工作中的保时捷”',
        category: 'AI 办公',
        tags: ['Salesforce', 'Slackbot', '企业 AI'],
        date: '2026-01-15',
        readingMinutes: 6,
        source: 'n8n 工作流自动生成',
        excerpt: 'Salesforce 重构 Slackbot，将其打造为基于 Claude 的强大 AI 代理，可搜索企业数据、起草文档并执行操作，大幅提升员工效率。',
        content: `Salesforce 于周二推出了完全重建的 Slackbot 版本，将其从一个简单的通知工具转变为一个功能强大的 AI 代理。这个新的 Slackbot 现已面向 Business+ 和 Enterprise+ 客户全面推出，能够搜索企业数据、起草文档并代表员工执行操作。Salesforce 联合创始人兼 Slack 首席技术官 Parker Harris 形容，旧版 Slackbot 像一辆小三轮车，而新版则像一辆保时捷。新版 Slackbot 基于 Anthropic 的 Claude 大语言模型构建，并具备强大的搜索能力，可以访问 Salesforce 记录、Google Drive 文件、日历数据和多年的 Slack 对话记录。Salesforce 内部测试显示，在 8 万名员工中，三分之二已尝试使用新版 Slackbot，其中 80% 的用户持续使用，内部满意度高达 96%。员工报告每周可节省 2 至 20 小时。YouTube 明星 MrBeast 的公司 Beast Industries 作为试点客户之一，其员工表示每天至少节省 90 分钟。Slack 首席产品官 Rob Seaman 强调，Slackbot 的优势在于其便捷性和上下文理解能力，它直接集成在 Slack 中，无需设置即可理解用户的工作。`
    },
    {
        id: 9,
        title: 'Anthropic 推出 Cowork，把 Claude Code 能力扩展到非技术用户',
        category: 'AI 产品',
        tags: ['Anthropic', 'Cowork', 'Claude Code'],
        date: '2026-01-15',
        readingMinutes: 6,
        source: 'n8n 工作流自动生成',
        excerpt: 'Anthropic 新功能 Cowork 将 Claude Code 的能力带到日常办公场景，主打“帮你完成非技术任务的 AI 助理”，对标微软 Copilot 等生产力工具。',
        content: `人工智能公司 Anthropic 本周一发布了一项名为 Cowork 的新功能，将此前大获成功的 Claude Code 工具的能力扩展至非技术用户。据公司内部人士透露，团队仅用大约一周半时间就构建了整个功能，其中很大程度上使用了 Claude Code 本身。\n\nCowork 的推出标志着向主流用户提供实用 AI 智能体的竞赛进入一个重要转折点，使 Anthropic 不仅在对话式 AI 领域与 OpenAI 和谷歌竞争，更在快速增长的 AI 生产力工具市场与微软的 Copilot 展开直接较量。\n\n公司通过其官方 X 账号宣布：“Cowork 让你能够以类似开发者使用 Claude Code 的方式完成非技术任务。”该功能目前作为研究预览版，仅限每月 100 至 200 美元的 Claude Max 订阅用户通过 macOS 桌面应用程序使用。`
    },
    {
        id: 10,
        title: 'Nous Research 发布开源竞争性编程模型 NousCoder-14B',
        category: '开源模型',
        tags: ['NousCoder-14B', '开源模型', '竞争性编程'],
        date: '2026-01-15',
        readingMinutes: 7,
        source: 'n8n 工作流自动生成',
        excerpt: '由 Nous Research 推出的 NousCoder-14B 在 LiveCodeBench v6 中取得 67.87% 准确率，训练仅用四天，却在多项指标上对标甚至超越更大规模的专有系统。',
        content: `人工智能编程助手领域迎来重磅开源新成员。由加密风投 Paradigm 支持的开源 AI 初创公司 Nous Research，本周一发布了全新的竞争性编程模型 NousCoder-14B。公司宣称，该模型在多项指标上匹配甚至超越了规模更大的专有系统，而其训练时间仅用了四天，动用了 48 块英伟达最新的 B200 图形处理器。\n\n这一模型的发布正值一个关键节点：竞争对手 Anthropic 推出的 Claude Code 编程工具自新年伊始便主导了社交媒体讨论，开发者们对其能力赞不绝口。\n\n与此形成对比的是，Nous Research 押注于基于可验证问题训练的开源替代方案能够缩小差距，并认为模型构建过程的透明度与原始能力同等重要。`
    },
    {
        id: 11,
        title: 'Claude Code 负责人工作流引发开发者社区“生产力革命”讨论',
        category: '开发者实践',
        tags: ['Claude Code', '开发流程', '工程效率'],
        date: '2026-01-15',
        readingMinutes: 7,
        source: 'n8n 工作流自动生成',
        excerpt: 'Anthropic 工程负责人 Boris Cherny 分享的终端与工作流配置在开发者圈引发热议，被视为“一个人拥有小型工程部门生产力”的样板。',
        content: `当全球最先进编程智能体 Claude Code 的创造者开口，硅谷不仅倾听，还认真做笔记。过去一周，工程界都在疯狂解析 Anthropic 公司 Claude Code 负责人 Boris Cherny 在 X 平台上发布的一条长文。这起初只是他个人终端设置的分享，如今已演变成一场关于软件开发未来的病毒式宣言。\n\n这种兴奋源于一个悖论：Cherny 的工作流出奇地简单，却能让单个人类拥有相当于一个小型工程部门的产出能力。`
    },
    {
        id: 12,
        title: '美国 5 亿美元大型汽车经销园区并购案引发行业关注',
        category: '产业投资',
        tags: ['汽车零售', '并购', '商业地产'],
        date: '2026-01-15',
        readingMinutes: 3,
        source: 'n8n 工作流自动生成',
        excerpt: '位于美国俄亥俄州的一处大型汽车经销园区以约 5 亿美元成交，涵盖 14 个豪华及高端汽车品牌，引发汽车零售行业广泛关注。',
        content: `近日，美国俄亥俄州一处大型汽车经销园区完成交易，总收购价值高达约 5 亿美元。该园区汇集了 14 个汽车品牌，其中大部分为豪华及高端品牌，包括法拉利等知名厂商。此次大规模并购案引发了汽车零售行业的广泛关注。`
    }
];

const WP_CONFIG = {
    enabled: true,
    baseUrl: '',
    perPage: 10
};

const CONTENT_API_CONFIG = {
    enabled: true,
    baseUrl: ''
};

let articlesCache = mockArticles.slice();

function renderImagePreview(imageUrl, title) {
    if (!imageUrl) return '<div class="empty-state">暂无图片</div>';
    return `
        <div class="image-preview">
            <img src="${imageUrl}" alt="${escapeHtmlAttr(title || '图片')}" class="image-preview-img">
        </div>
    `;
}

function escapeHtmlAttr(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function readFileAsDataUrl(file) {
    return new Promise((resolve) => {
        if (!file || typeof File === 'undefined' || !(file instanceof File) || file.size === 0) {
            resolve(null);
            return;
        }

        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
    });
}

function closeListModal() {
    const modal = document.getElementById('list-modal');
    if (modal) modal.classList.remove('show');
}

function openCustomerService() {
    openListModal('customerService');
}

function openListModal(type, options = {}) {
    const modal = document.getElementById('list-modal');
    const titleEl = document.getElementById('list-modal-title');
    const bodyEl = document.getElementById('list-modal-body');
    if (!modal || !titleEl || !bodyEl) return;

    currentListModalType = type;
    currentListModalOptions = options;

    const favorites = getFavorites();
    const followedLeaders = getFollowedLeaders();
    const myHotProducts = getMyHotProducts();

    if (type === 'partners') {
        titleEl.textContent = '合作供应商';
        bodyEl.innerHTML = renderSupplierList(mockData.suppliers);
    } else if (type === 'agencyProducts') {
        titleEl.textContent = '代理商品';
        bodyEl.innerHTML = renderProductList(mockData.products, { showActions: true });
    } else if (type === 'customers') {
        titleEl.textContent = '终端客户';
        bodyEl.innerHTML = renderCustomerList(mockData.customers);
    } else if (type === 'hotProducts') {
        titleEl.textContent = '找爆品';
        bodyEl.innerHTML = renderProductList(mockData.products.filter(p => p.isHot), { showActions: true });
    } else if (type === 'myHotProducts') {
        titleEl.textContent = '我的爆品';
        bodyEl.innerHTML = renderProductList(myHotProducts, { showActions: true });
    } else if (type === 'favorites') {
        titleEl.textContent = '收藏的商品';
        bodyEl.innerHTML = renderProductList(favorites, { showActions: true });
    } else if (type === 'leaders') {
        titleEl.textContent = '找团长';
        bodyEl.innerHTML = renderLeaderList(mockData.leaders, { allowFollow: true });
    } else if (type === 'followedLeaders') {
        titleEl.textContent = '关注的团长';
        bodyEl.innerHTML = renderLeaderList(followedLeaders, { allowFollow: true, followedOnly: true });
    } else if (type === 'leaderDetails') {
        const leader = mockData.leaders.find(l => l.id === options.leaderId);
        titleEl.textContent = leader ? leader.name : '团长详情';
        bodyEl.innerHTML = leader ? renderLeaderDetails(leader) : '<div class="empty-state">未找到该团长</div>';
    } else if (type === 'customerService') {
        titleEl.textContent = '联系客服';
        bodyEl.innerHTML = renderCustomerService();
    } else if (type === 'imagePreview') {
        titleEl.textContent = options.title || '图片预览';
        bodyEl.innerHTML = renderImagePreview(options.imageUrl, options.title);
    } else if (type === 'login') {
        titleEl.textContent = '登录';
        bodyEl.innerHTML = renderLoginPanel(options.targetPage);
    } else if (type === 'userMenu') {
        titleEl.textContent = '账号';
        bodyEl.innerHTML = renderUserMenu();
    } else {
        titleEl.textContent = '列表';
        bodyEl.innerHTML = '<div class="empty-state">暂无数据</div>';
    }

    modal.classList.add('show');
}

function renderSupplierList(suppliers) {
    if (!suppliers || suppliers.length === 0) return '<div class="empty-state">暂无合作供应商</div>';
    return `
        <div class="list-grid">
            ${suppliers.map(s => `
                <div class="list-card" onclick="openSupplierDetails(${s.id})">
                    <div class="list-card-title">${s.name}</div>
                    <div class="list-card-meta">联系人：${s.contact}（${s.phone}）</div>
                    <div class="list-card-meta">地址：${s.address}</div>
                    <div class="list-card-meta">在售商品：${s.products} | 评分：${s.rating}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function openSupplierDetails(supplierId) {
    const s = mockData.suppliers.find(x => x.id === supplierId);
    const modal = document.getElementById('list-modal');
    const titleEl = document.getElementById('list-modal-title');
    const bodyEl = document.getElementById('list-modal-body');
    if (!modal || !titleEl || !bodyEl) return;
    if (!s) return;
    titleEl.textContent = s.name;
    bodyEl.innerHTML = `
        <div class="detail-block">
            <div class="detail-row"><strong>联系人：</strong>${s.contact}</div>
            <div class="detail-row"><strong>电话：</strong>${s.phone}</div>
            <div class="detail-row"><strong>邮箱：</strong>${s.email}</div>
            <div class="detail-row"><strong>地址：</strong>${s.address}</div>
            <div class="detail-row"><strong>在售商品数：</strong>${s.products}</div>
            <div class="detail-row"><strong>评分：</strong>${s.rating}</div>
            <div class="detail-row"><strong>入驻时间：</strong>${s.joinDate}</div>
            <div class="detail-actions">
                <button class="btn btn-primary btn-sm" onclick="startCooperate(${s.id})">发起合作</button>
                <button class="btn btn-secondary btn-sm" onclick="copyText('${s.phone}')">复制电话</button>
            </div>
        </div>
    `;
    modal.classList.add('show');
}

function renderProductList(products, { showActions } = {}) {
    if (!products || products.length === 0) return '<div class="empty-state">暂无商品</div>';
    return `
        <div class="list-grid">
            ${products.map(p => {
                const fav = isProductFavorited(p.id);
                return `
                    <div class="product-card" onclick="openProductDetailsFromList(${p.id})">
                        <img src="${p.image}" alt="${escapeHtmlAttr(p.name)}" class="product-image">
                        <div class="product-info">
                            <div class="product-name">${p.name}</div>
                            <div class="product-price">¥${p.price}</div>
                            <div class="product-sales">已售 ${p.sales.toLocaleString()} 件</div>
                            ${showActions ? `
                                <div class="inline-actions">
                                    <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); openProductDetailsFromList(${p.id})">代理</button>
                                    <button class="btn btn-secondary btn-sm ${fav ? 'btn-favorited' : ''}" onclick="event.stopPropagation(); toggleFavorite(${p.id}); refreshListModal()">
                                        ${fav ? '已收藏' : '收藏'}
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function openProductDetailsFromList(productId) {
    closeListModal();
    showProductDetails(productId);
}

function renderCustomerList(customers) {
    if (!customers || customers.length === 0) return '<div class="empty-state">暂无客户</div>';
    return `
        <div class="list-grid">
            ${customers.map(c => `
                <div class="list-card" onclick="openCustomerDetails(${c.id})">
                    <div class="list-card-title">${c.name}</div>
                    <div class="list-card-meta">城市：${c.city}</div>
                    <div class="list-card-meta">偏好：${c.tags.join('、')}</div>
                    <div class="list-card-meta">最近下单：${c.lastOrderAt}</div>
                    <div class="list-card-meta">累计订单：${c.totalOrders} | 累计消费：¥${c.totalSpent.toLocaleString()}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function openCustomerDetails(customerId) {
    const c = mockData.customers.find(x => x.id === customerId);
    const modal = document.getElementById('list-modal');
    const titleEl = document.getElementById('list-modal-title');
    const bodyEl = document.getElementById('list-modal-body');
    if (!modal || !titleEl || !bodyEl) return;
    if (!c) return;
    titleEl.textContent = c.name;
    bodyEl.innerHTML = `
        <div class="detail-block">
            <div class="detail-row"><strong>城市：</strong>${c.city}</div>
            <div class="detail-row"><strong>标签：</strong>${c.tags.join('、')}</div>
            <div class="detail-row"><strong>最近下单：</strong>${c.lastOrderAt}</div>
            <div class="detail-row"><strong>累计订单：</strong>${c.totalOrders}</div>
            <div class="detail-row"><strong>累计消费：</strong>¥${c.totalSpent.toLocaleString()}</div>
        </div>
    `;
    modal.classList.add('show');
}

function renderLeaderList(leaders, { allowFollow, followedOnly } = {}) {
    const list = leaders || [];
    if (list.length === 0) return `<div class="empty-state">${followedOnly ? '你还没有关注团长' : '暂无团长'}</div>`;
    return `
        <div class="list-grid">
            ${list.map(l => {
                const followed = isLeaderFollowed(l.id);
                return `
                    <div class="list-card" onclick="openLeaderDetails(${l.id})">
                        <div class="leader-list-title">
                            <img src="${l.avatar || 'https://picsum.photos/seed/leader_default/120/120.jpg'}" alt="${escapeHtmlAttr(l.name)}" class="leader-avatar-sm">
                            <div class="leader-list-title-text">
                                <div class="list-card-title">${l.name} <span class="mini-badge">${l.leaderType}</span></div>
                                <div class="follow-state-inline ${followed ? 'followed' : ''}">${followed ? '已关注' : '未关注'}</div>
                            </div>
                        </div>
                        <div class="list-card-meta">活跃平台：${l.platforms.join('、')}</div>
                        <div class="list-card-meta">区域：${l.region}</div>
                        <div class="list-card-meta">资源：${l.audience}</div>
                        <div class="list-card-meta">擅长：${l.focus}</div>
                        <div class="list-card-meta">近30天GMV：¥${l.last30dGmv.toLocaleString()} | 佣金：${l.commissionRate}%</div>
                        ${allowFollow ? `
                            <div class="inline-actions">
                                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); toggleFollowLeader(${l.id}); refreshListModal()">${followed ? '取消关注' : '关注'}</button>
                                <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); copyText('${l.contact}')">复制联系方式</button>
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderLeaderDetails(l) {
    const followed = isLeaderFollowed(l.id);
    return `
        <div class="detail-block">
            <div class="leader-detail-header">
                <img src="${l.avatar || 'https://picsum.photos/seed/leader_default/120/120.jpg'}" alt="${escapeHtmlAttr(l.name)}" class="leader-avatar-lg">
                <div class="leader-detail-title">
                    <div class="leader-detail-name">${l.name}</div>
                    <div class="follow-state-inline ${followed ? 'followed' : ''}">${followed ? '已关注' : '未关注'}</div>
                </div>
            </div>
            <div class="detail-row"><strong>团长类型：</strong>${l.leaderType}</div>
            <div class="detail-row"><strong>活跃平台：</strong>${l.platforms.join('、')}</div>
            <div class="detail-row"><strong>区域：</strong>${l.region}</div>
            <div class="detail-row"><strong>资源描述：</strong>${l.audience}</div>
            <div class="detail-row"><strong>擅长类目：</strong>${l.focus}</div>
            <div class="detail-row"><strong>佣金比例：</strong>${l.commissionRate}%</div>
            <div class="detail-row"><strong>近30天GMV：</strong>¥${l.last30dGmv.toLocaleString()}</div>
            <div class="detail-row"><strong>联系方式：</strong>${l.contact}</div>
            <div class="detail-actions">
                <button class="btn btn-primary btn-sm" onclick="toggleFollowLeader(${l.id}); openLeaderDetails(${l.id})">${followed ? '取消关注' : '关注'}</button>
                <button class="btn btn-secondary btn-sm" onclick="copyText('${l.contact}')">复制联系方式</button>
            </div>
        </div>
    `;
}

function refreshListModal() {
    if (!currentListModalType) return;
    openListModal(currentListModalType, currentListModalOptions || {});
}

function renderCustomerService() {
    return `
        <div class="detail-block">
            <div class="detail-row"><strong>在线客服：</strong>工作日 09:00-21:00</div>
            <div class="detail-row"><strong>客服电话：</strong>400-888-2048</div>
            <div class="detail-row"><strong>企业微信：</strong>HotGoods-CS</div>
            <div class="detail-row"><strong>邮箱：</strong>support@hotgoods.example</div>
            <div class="detail-actions">
                <button class="btn btn-primary btn-sm" onclick="copyText('400-888-2048')">复制电话</button>
                <button class="btn btn-secondary btn-sm" onclick="copyText('HotGoods-CS')">复制企微</button>
            </div>
        </div>
    `;
}

function startCooperate(supplierId) {
    const s = mockData.suppliers.find(x => x.id === supplierId);
    if (!s) return;
    alert(`已向 ${s.name} 发起合作邀请`);
}

function copyText(text) {
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => alert('已复制')).catch(() => alert(text));
    } else {
        alert(text);
    }
}

function getFavorites() {
    const ids = JSON.parse(localStorage.getItem('favorites') || '[]');
    return ids.map(id => mockData.products.find(p => p.id === id)).filter(Boolean);
}

function isProductFavorited(productId) {
    const ids = JSON.parse(localStorage.getItem('favorites') || '[]');
    return ids.includes(productId);
}

function toggleFavorite(productId) {
    const ids = JSON.parse(localStorage.getItem('favorites') || '[]');
    const idx = ids.indexOf(productId);
    if (idx > -1) ids.splice(idx, 1);
    else ids.push(productId);
    localStorage.setItem('favorites', JSON.stringify(ids));
    alert(idx > -1 ? '已取消收藏' : '已收藏');
}

function getFollowedLeaders() {
    const ids = JSON.parse(localStorage.getItem('followedLeaders') || '[]');
    return ids.map(id => mockData.leaders.find(l => l.id === id)).filter(Boolean);
}

function isLeaderFollowed(leaderId) {
    const ids = JSON.parse(localStorage.getItem('followedLeaders') || '[]');
    return ids.includes(leaderId);
}

function toggleFollowLeader(leaderId) {
    const ids = JSON.parse(localStorage.getItem('followedLeaders') || '[]');
    const idx = ids.indexOf(leaderId);
    if (idx > -1) ids.splice(idx, 1);
    else ids.push(leaderId);
    localStorage.setItem('followedLeaders', JSON.stringify(ids));
    loadLeadersGrid();
    alert(idx > -1 ? '已取消关注' : '已关注');
}

function getMyHotProducts() {
    const ids = JSON.parse(localStorage.getItem('myHotProducts') || '[]');
    if (ids.length === 0) {
        const defaults = mockData.products.filter(p => p.isHot).slice(0, 2).map(p => p.id);
        localStorage.setItem('myHotProducts', JSON.stringify(defaults));
        return defaults.map(id => mockData.products.find(p => p.id === id)).filter(Boolean);
    }
    return ids.map(id => mockData.products.find(p => p.id === id)).filter(Boolean);
}

// 全局变量
let currentPage = 'home';
let currentUser = null;
let editingProductId = null;
let currentListModalType = null;
let currentListModalOptions = null;
const SESSION_USER_KEY = 'currentUser';

let articleSearchQuery = '';
let selectedCategory = '';
let selectedTag = '';
let currentArticleId = null;

function setSessionUser(user) {
    currentUser = user;
    if (user) {
        localStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
    } else {
        localStorage.removeItem(SESSION_USER_KEY);
    }
    updateUserDisplay();
}

function loadSessionUser() {
    try {
        const raw = localStorage.getItem(SESSION_USER_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object') return null;
        if (!parsed.type || !parsed.name) return null;
        return { type: parsed.type, name: parsed.name };
    } catch {
        return null;
    }
}

function openUserMenu() {
    if (!currentUser) {
        openLoginModal();
        return;
    }
    openListModal('userMenu');
}

function openLoginModal(targetPage) {
    openListModal('login', { targetPage: targetPage || null });
}

function loginAs(type, name, targetPage) {
    setSessionUser({ type, name });
    closeListModal();
    if (targetPage) {
        showPage(targetPage);
        return;
    }
    showPage(type === 'supplier' ? 'supplier' : 'channel');
}

function logout() {
    setSessionUser(null);
    closeListModal();
    showPage('home');
}

function renderLoginPanel(targetPage) {
    const supplierName = '示例科技有限公司';
    const channelName = '示例贸易有限公司';
    const target = targetPage ? String(targetPage) : '';
    return `
        <div class="detail-block">
            <div class="detail-row"><strong>请选择身份登录</strong></div>
            <div class="detail-row" style="color:#666;">登录后将进入对应后台，可随时退出。</div>
            <div class="detail-actions">
                <button class="btn btn-primary btn-sm" onclick="loginAs('supplier','${escapeHtmlAttr(supplierName)}','${escapeHtmlAttr(target)}')">以供应商登录</button>
                <button class="btn btn-secondary btn-sm" onclick="loginAs('channel','${escapeHtmlAttr(channelName)}','${escapeHtmlAttr(target)}')">以渠道商登录</button>
            </div>
        </div>
    `;
}

function renderUserMenu() {
    const roleLabel = currentUser?.type === 'supplier' ? '供应商' : (currentUser?.type === 'channel' ? '渠道商' : '用户');
    return `
        <div class="detail-block">
            <div class="detail-row"><strong>当前账号：</strong>${escapeHtmlAttr(currentUser?.name || '')}</div>
            <div class="detail-row"><strong>身份：</strong>${roleLabel}</div>
            <div class="detail-actions">
                <button class="btn btn-secondary btn-sm" onclick="logout()">退出登录</button>
            </div>
        </div>
    `;
}

// 页面切换功能
function showPage(pageName) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        if (pageName === 'supplier' || pageName === 'channel') {
            if (!currentUser) {
                openLoginModal(pageName);
                return;
            }
        }
        targetPage.classList.add('active');
        currentPage = pageName;
        loadPageData(pageName);
    }
    // 更新导航栏状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });
    
    // 根据页面加载相应数据
    loadPageData(pageName);
}

// 加载页面数据
function loadPageData(pageName) {
    switch(pageName) {
        case 'home':
            loadHomeLatestArticles();
            break;
        case 'articles':
            initArticlesPage();
            break;
        case 'article':
            if (currentArticleId) {
                renderArticleDetail(currentArticleId);
            }
            break;
        case 'supplier':
            loadSupplierProducts();
            break;
        case 'channel':
            loadChannelProducts();
            loadLeadersGrid();
            break;
        case 'demo':
            loadDemoData();
            break;
    }
}

function safeText(value) {
    return String(value ?? '');
}

function formatArticleMeta(article) {
    const parts = [];
    if (article?.date) parts.push(article.date);
    if (article?.category) parts.push(article.category);
    if (Number.isFinite(article?.readingMinutes)) parts.push(`${article.readingMinutes} min`);
    return parts.join(' · ');
}

function getAllCategories() {
    const set = new Set(articlesCache.map(a => a.category).filter(Boolean));
    return Array.from(set);
}

function getAllTags() {
    const set = new Set();
    articlesCache.forEach(a => (a.tags || []).forEach(t => set.add(t)));
    return Array.from(set);
}

function matchesQuery(article, q) {
    const query = String(q || '').trim().toLowerCase();
    if (!query) return true;
    const hay = [article.title, article.excerpt, article.category, ...(article.tags || [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
    return hay.includes(query);
}

function filterArticles() {
    return articlesCache
        .slice()
        .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
        .filter(a => (selectedCategory ? a.category === selectedCategory : true))
        .filter(a => (selectedTag ? (a.tags || []).includes(selectedTag) : true))
        .filter(a => matchesQuery(a, articleSearchQuery));
}

function renderChip(text, active, onClick) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `chip${active ? ' active' : ''}`;
    btn.textContent = safeText(text);
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        onClick();
    });
    return btn;
}

function renderChipGroups() {
    const catEl = document.getElementById('category-chips');
    const tagEl = document.getElementById('tag-chips');
    if (catEl) {
        catEl.innerHTML = '';
        catEl.appendChild(renderChip('全部', !selectedCategory, () => {
            selectedCategory = '';
            renderArticles();
        }));
        getAllCategories().forEach(c => {
            catEl.appendChild(renderChip(c, selectedCategory === c, () => {
                selectedCategory = selectedCategory === c ? '' : c;
                renderArticles();
            }));
        });
    }
    if (tagEl) {
        tagEl.innerHTML = '';
        tagEl.appendChild(renderChip('全部', !selectedTag, () => {
            selectedTag = '';
            renderArticles();
        }));
        getAllTags().forEach(t => {
            tagEl.appendChild(renderChip(t, selectedTag === t, () => {
                selectedTag = selectedTag === t ? '' : t;
                renderArticles();
            }));
        });
    }
}

function renderArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.addEventListener('click', () => openArticle(article.id));

    const title = document.createElement('div');
    title.className = 'article-card-title';
    title.textContent = safeText(article.title);

    const excerpt = document.createElement('div');
    excerpt.className = 'article-card-excerpt';
    excerpt.textContent = safeText(article.excerpt);

    const meta = document.createElement('div');
    meta.className = 'article-card-meta';

    const left = document.createElement('div');
    left.className = 'meta-left';

    const cat = document.createElement('span');
    cat.className = 'meta-pill';
    cat.textContent = safeText(article.category);

    const date = document.createElement('span');
    date.textContent = safeText(article.date);

    left.appendChild(cat);
    left.appendChild(date);

    const right = document.createElement('div');
    right.textContent = (article.tags || []).slice(0, 3).map(safeText).join(' · ');

    meta.appendChild(left);
    meta.appendChild(right);

    card.appendChild(title);
    card.appendChild(excerpt);
    card.appendChild(meta);

    return card;
}

function renderArticles() {
    renderChipGroups();
    const listEl = document.getElementById('article-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    const list = filterArticles();
    if (list.length === 0) {
        listEl.innerHTML = '<div class="empty-state">暂无匹配的文章</div>';
        return;
    }
    list.forEach(a => listEl.appendChild(renderArticleCard(a)));
}

function initArticlesPage() {
    const input = document.getElementById('article-search');
    if (input && !input.dataset.bound) {
        input.dataset.bound = '1';
        input.addEventListener('input', () => {
            articleSearchQuery = safeText(input.value);
            renderArticles();
        });
    }
    renderArticles();
}

function resetArticleFilters() {
    articleSearchQuery = '';
    selectedCategory = '';
    selectedTag = '';
    const input = document.getElementById('article-search');
    if (input) input.value = '';
    renderArticles();
}

function loadHomeLatestArticles() {
    const container = document.getElementById('home-latest-articles');
    if (!container) return;
    container.innerHTML = '';
    articlesCache
        .slice()
        .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
        .slice(0, 3)
        .forEach(a => container.appendChild(renderArticleCard(a)));
}

function backToArticles() {
    showPage('articles');
}

function buildArticleUrl(articleId) {
    const url = new URL(window.location.href);
    url.hash = `article-${articleId}`;
    return url.toString();
}

function renderShareButtons(article) {
    const shareEl = document.getElementById('article-share');
    if (!shareEl) return;
    shareEl.innerHTML = '';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn btn-secondary btn-sm';
    copyBtn.innerHTML = '<i class="fas fa-link"></i> 复制链接';
    copyBtn.addEventListener('click', async () => {
        const url = buildArticleUrl(article.id);
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(url);
                alert('链接已复制');
                return;
            } catch {
                copyText(url);
            }
        } else {
            copyText(url);
        }
    });

    const nativeBtn = document.createElement('button');
    nativeBtn.className = 'btn btn-secondary btn-sm';
    nativeBtn.innerHTML = '<i class="fas fa-share"></i> 分享';
    nativeBtn.addEventListener('click', async () => {
        const url = buildArticleUrl(article.id);
        if (navigator.share) {
            try {
                await navigator.share({ title: article.title, text: article.excerpt, url });
                return;
            } catch {
                copyText(url);
            }
        } else {
            copyText(url);
        }
    });

    shareEl.appendChild(nativeBtn);
    shareEl.appendChild(copyBtn);
}

function renderRelatedArticles(article) {
    const container = document.getElementById('related-articles');
    if (!container) return;
    container.innerHTML = '';
    const candidates = articlesCache
        .filter(a => a.id !== article.id)
        .map(a => {
            const tagOverlap = (a.tags || []).filter(t => (article.tags || []).includes(t)).length;
            const catScore = a.category === article.category ? 1 : 0;
            return { a, score: tagOverlap * 10 + catScore * 3 };
        })
        .sort((x, y) => y.score - x.score)
        .slice(0, 3)
        .map(x => x.a);

    if (candidates.length === 0) {
        container.innerHTML = '<div class="empty-state">暂无相关文章</div>';
        return;
    }
    candidates.forEach(a => container.appendChild(renderArticleCard(a)));
}

function renderMarkdownTo(element, markdown) {
    if (!element) return;
    const content = safeText(markdown);
    if (looksLikeHtml(content)) {
        element.innerHTML = content;
    } else {
        const hasMarked = typeof marked !== 'undefined' && marked && typeof marked.parse === 'function';
        const html = hasMarked ? marked.parse(content) : content;
        element.innerHTML = html;
    }

    if (typeof hljs !== 'undefined' && hljs && typeof hljs.highlightElement === 'function') {
        element.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }
}

function renderArticleDetail(articleId) {
    const article = articlesCache.find(a => a.id === articleId);
    if (!article) {
        const bodyEl = document.getElementById('article-body');
        if (bodyEl) bodyEl.innerHTML = '<div class="empty-state">文章不存在</div>';
        return;
    }

    const titleEl = document.getElementById('article-title');
    const metaEl = document.getElementById('article-meta');
    const bodyEl = document.getElementById('article-body');

    if (titleEl) titleEl.textContent = safeText(article.title);
    if (metaEl) {
        const tagText = (article.tags || []).map(t => `#${safeText(t)}`).join(' ');
        metaEl.textContent = `${formatArticleMeta(article)}${tagText ? ` · ${tagText}` : ''}`;
    }
    const videoBlock = article.videoUrl
        ? `
            <div style="margin: 0.75rem 0 1.25rem;">
                <video controls preload="metadata" style="width: 100%; border-radius: 14px; border: 1px solid rgba(2, 6, 23, 0.12);" ${article.coverUrl ? `poster=\"${escapeHtmlAttr(article.coverUrl)}\"` : ''}>
                    <source src="${escapeHtmlAttr(article.videoUrl)}" type="video/mp4" />
                </video>
            </div>
        `
        : '';

    if (bodyEl) {
        if (videoBlock) {
            bodyEl.innerHTML = videoBlock;
            const wrapper = document.createElement('div');
            bodyEl.appendChild(wrapper);
            renderMarkdownTo(wrapper, article.content);
        } else {
            renderMarkdownTo(bodyEl, article.content);
        }
    }
    renderShareButtons(article);
    renderRelatedArticles(article);
}

function openArticle(articleId) {
    currentArticleId = articleId;
    try {
        window.location.hash = `article-${articleId}`;
    } catch {
    }
    showPage('article');
}

function parseHashRouting() {
    const hash = String(window.location.hash || '').replace('#', '');
    const m = hash.match(/^article-(\d+)$/);
    if (m) {
        const id = parseInt(m[1], 10);
        if (Number.isFinite(id)) {
            currentArticleId = id;
            showPage('article');
            return;
        }
    }
}

function stripHtml(html) {
    return String(html || '')
        .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function looksLikeHtml(text) {
    const s = String(text || '').trim();
    return s.startsWith('<') && /<\w+[\s>]/.test(s);
}

function extractFirstMatch(re, text) {
    const m = String(text || '').match(re);
    return m && m[1] ? String(m[1]) : '';
}

function parseWpVideoFromHtml(html) {
    const h = String(html || '');
    const sourceSrc = extractFirstMatch(/<source[^>]*?src=["']([^"']+)["'][^>]*?>/i, h);
    const videoSrc = extractFirstMatch(/<video[^>]*?src=["']([^"']+)["'][^>]*?>/i, h);
    const poster = extractFirstMatch(/<video[^>]*?poster=["']([^"']+)["'][^>]*?>/i, h);
    return {
        videoUrl: sourceSrc || videoSrc || '',
        posterUrl: poster || ''
    };
}

function normalizeWpPostToArticle(post) {
    const title = stripHtml(post?.title?.rendered || post?.title || '');
    const contentRendered = String(post?.content?.rendered || post?.content || '');
    const excerptRendered = String(post?.excerpt?.rendered || post?.excerpt || '');
    const { videoUrl, posterUrl } = parseWpVideoFromHtml(contentRendered);

    let coverUrl = posterUrl;
    const embeddedMedia = post?._embedded?.['wp:featuredmedia']?.[0];
    const embeddedMediaUrl = embeddedMedia?.source_url ? String(embeddedMedia.source_url) : '';
    if (!coverUrl) coverUrl = embeddedMediaUrl;

    const tagNames = (post?._embedded?.['wp:term'] || [])
        .flat()
        .filter(t => t && typeof t === 'object')
        .filter(t => String(t.taxonomy || '') === 'post_tag')
        .map(t => String(t.name || '').trim())
        .filter(Boolean);

    const catNames = (post?._embedded?.['wp:term'] || [])
        .flat()
        .filter(t => t && typeof t === 'object')
        .filter(t => String(t.taxonomy || '') === 'category')
        .map(t => String(t.name || '').trim())
        .filter(Boolean);

    const date = String(post?.date || '').slice(0, 10);
    const excerptText = stripHtml(excerptRendered);

    return {
        id: Number(post?.id),
        title,
        category: catNames[0] || '资讯',
        tags: tagNames,
        date,
        readingMinutes: undefined,
        source: 'WordPress',
        excerpt: excerptText,
        content: contentRendered,
        videoUrl,
        coverUrl
    };
}

async function fetchWordPressArticles() {
    if (!WP_CONFIG.enabled) return null;
    const base = String(WP_CONFIG.baseUrl || '').trim().replace(/\/$/, '');
    if (!base) return null;
    const url = `${base}/wp-json/wp/v2/posts?per_page=${encodeURIComponent(String(WP_CONFIG.perPage || 10))}&_embed=1&_fields=id,date,title,excerpt,content,_embedded`;
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
    const json = await res.json();
    if (!Array.isArray(json)) return [];
    return json.map(normalizeWpPostToArticle).filter(a => Number.isFinite(a.id));
}

function normalizeApiPostToArticle(post) {
    if (!post || typeof post !== 'object') return null;
    const id = Number(post.id);
    if (!Number.isFinite(id)) return null;

    const title = String(post.title || '').trim();
    const content = String(post.content || '');
    const excerpt = String(post.excerpt || '');
    const category = String(post.category || '资讯');
    const tags = Array.isArray(post.tags) ? post.tags.map(t => String(t || '').trim()).filter(Boolean) : [];
    const date = String(post.date || '').slice(0, 10);
    const videoUrl = post.videoUrl ? String(post.videoUrl) : '';
    const coverUrl = post.coverUrl ? String(post.coverUrl) : '';

    return {
        id,
        title,
        category,
        tags,
        date,
        readingMinutes: undefined,
        source: 'Cloudflare',
        excerpt,
        content,
        videoUrl,
        coverUrl
    };
}

async function fetchContentApiArticles() {
    if (!CONTENT_API_CONFIG.enabled) return null;
    const base = String(CONTENT_API_CONFIG.baseUrl || '').trim().replace(/\/$/, '');
    const url = `${base || ''}/api/posts`;
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) throw new Error(`Content API fetch failed: ${res.status}`);
    const json = await res.json();
    const list = Array.isArray(json) ? json : Array.isArray(json?.items) ? json.items : [];
    return list.map(normalizeApiPostToArticle).filter(Boolean);
}

async function ensureArticlesLoaded() {
    try {
        const listFromApi = await fetchContentApiArticles();
        if (listFromApi && listFromApi.length > 0) {
            articlesCache = listFromApi;
            return;
        }

        const listFromWp = await fetchWordPressArticles();
        if (listFromWp && listFromWp.length > 0) {
            articlesCache = listFromWp;
            return;
        }

        articlesCache = mockArticles.slice();
    } catch {
        articlesCache = mockArticles.slice();
    }
}

function loadLeadersGrid() {
    const container = document.getElementById('leaders-grid');
    if (!container) return;

    const leaders = mockData.leaders.slice(0, 3);
    const followedIds = new Set(JSON.parse(localStorage.getItem('followedLeaders') || '[]'));
    container.innerHTML = leaders.map(leader => `
        <div class="leader-card" onclick="openLeaderDetails(${leader.id})">
            <div class="leader-card-header">
                <div class="leader-header-left">
                    <img src="${leader.avatar || 'https://picsum.photos/seed/leader_default/120/120.jpg'}" alt="${escapeHtmlAttr(leader.name)}" class="leader-avatar">
                    <div class="leader-name">${leader.name}</div>
                </div>
                <div class="leader-badge">${leader.leaderType}</div>
            </div>
            <div class="follow-state ${followedIds.has(leader.id) ? 'followed' : ''}">
                ${followedIds.has(leader.id) ? '已关注' : '未关注'}
            </div>
            <div class="leader-meta">活跃平台：${leader.platforms.join('、')}</div>
            <div class="leader-meta">区域：${leader.region}</div>
            <div class="leader-meta">擅长：${leader.focus}</div>
            <div class="leader-meta">近30天GMV：¥${leader.last30dGmv.toLocaleString()}</div>
        </div>
    `).join('');
}

function openLeaderDetails(leaderId) {
    openListModal('leaderDetails', { leaderId });
}

// 加载热门商品
function loadHotProducts() {
    const container = document.getElementById('hot-products');
    if (!container) return;
    
    const hotProducts = mockData.products.filter(product => product.isHot);
    
    container.innerHTML = hotProducts.map(product => `
        <div class="product-card" onclick="showProductDetails(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">¥${product.price}</div>
                <div class="product-sales">已售 ${product.sales.toLocaleString()} 件</div>
                <div class="product-rating">
                    <i class="fas fa-star"></i> ${product.rating} (${product.reviews})
                </div>
            </div>
        </div>
    `).join('');
}

// 加载供应商商品
function loadSupplierProducts() {
    const container = document.getElementById('supplier-products');
    if (!container) return;

    container.innerHTML = mockData.products.map(product => `
        <tr>
            <td><img src="${product.image}" alt="${product.name}" class="product-img-thumb" onclick="openImagePreview('${escapeHtmlAttr(product.image)}','${escapeHtmlAttr(product.name)}')"></td>
            <td>${product.name}</td>
            <td>¥${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.sales}</td>
            <td>
                <span class="status-badge ${product.stock > 0 ? 'active' : 'inactive'}">
                    ${product.stock > 0 ? '在售' : '缺货'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm" onclick="editProduct(${product.id})">编辑</button>
                <button class="btn btn-sm" onclick="deleteProduct(${product.id})">删除</button>
            </td>
        </tr>
    `).join('');

    updateSupplierStats();
}

function updateSupplierStats() {
    const onSaleCountEl = document.getElementById('supplier-onsale-count');
    if (!onSaleCountEl) return;
    const onSaleCount = mockData.products.filter(p => (p.stock ?? 0) > 0).length;
    onSaleCountEl.textContent = onSaleCount.toLocaleString();
}

// 加载渠道商商品
function loadChannelProducts() {
    const container = document.getElementById('channel-products');
    if (!container) return;
    
    container.innerHTML = mockData.products.map(product => `
        <div class="product-card" onclick="showProductDetails(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">¥${product.price}</div>
                <div class="product-sales">已售 ${product.sales.toLocaleString()} 件</div>
                <div class="product-rating">
                    <i class="fas fa-star"></i> ${product.rating} (${product.reviews})
                </div>
                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); purchaseProduct(${product.id})">
                    代理商品
                </button>
            </div>
        </div>
    `).join('');
}

// 加载演示数据
function loadDemoData() {
    // 模拟实时数据更新
    updateDemoStats();
}

// 更新演示统计数据
function updateDemoStats() {
    const stats = [
        { label: '今日生成文章', value: `+${Math.floor(Math.random() * 10 + 8)}` },
        { label: '今日生成视频', value: `+${Math.floor(Math.random() * 10 + 8)}` },
        { label: '质检拦截', value: `+${Math.floor(Math.random() * 3)}` },
        { label: '多端发布成功率', value: `${Math.floor(Math.random() * 3 + 97)}%` }
    ];
    
    const demoStatsContainer = document.querySelector('.demo-stats');
    if (demoStatsContainer) {
        demoStatsContainer.innerHTML = stats.map(stat => `
            <div class="demo-stat-item">
                <div class="stat-label">${stat.label}</div>
                <div class="stat-value">${stat.value}</div>
            </div>
        `).join('');
    }
}

// 显示商品详情
function showProductDetails(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalName = document.getElementById('modal-product-name');
    const modalDetails = document.getElementById('modal-product-details');
    
    const fav = isProductFavorited(product.id);
    modalName.textContent = product.name;
    modalDetails.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; max-width: 400px; border-radius: 10px; margin-bottom: 1rem;">
            <div class="product-info-detail">
                <h3>商品信息</h3>
                <p><strong>价格：</strong>¥${product.price} <span style="text-decoration: line-through; color: #999;">¥${product.originalPrice}</span></p>
                <p><strong>库存：</strong>${product.stock} 件</p>
                <p><strong>销量：</strong>${product.sales.toLocaleString()} 件</p>
                <p><strong>评分：</strong><i class="fas fa-star" style="color: #ffd700;"></i> ${product.rating} (${product.reviews} 条评价)</p>
                <p><strong>分类：</strong>${product.category}</p>
                <p><strong>供应商：</strong>${product.supplier}</p>
                
                <h3>商品描述</h3>
                <p>${product.description}</p>
                
                <div class="product-actions" style="margin-top: 2rem;">
                    <button class="btn btn-primary" onclick="purchaseProduct(${product.id})">立即代理</button>
                    <button id="modal-fav-btn" data-product-id="${product.id}" class="btn btn-secondary ${fav ? 'btn-favorited' : ''}">${fav ? '已收藏' : '收藏'}</button>
                </div>
            </div>
        </div>
    `;

    const favBtn = document.getElementById('modal-fav-btn');
    if (favBtn) {
        favBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const id = parseInt(String(favBtn.dataset.productId || ''), 10);
            if (!Number.isFinite(id)) return;
            toggleFavoriteFromModal(id);
        });
    }
    
    modal.classList.add('show');
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('show');
}

// 显示添加商品模态框
function showAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    modal.classList.add('show');
}

// 关闭添加商品模态框
function closeAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    modal.classList.remove('show');
    
    // 重置表单
    const form = document.getElementById('add-product-form');
    if (form) {
        form.reset();
    }

    editingProductId = null;
}

// 代理商品
function purchaseProduct(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (!product) return;

    const ids = JSON.parse(localStorage.getItem('myHotProducts') || '[]');
    if (!ids.includes(productId)) {
        ids.push(productId);
        localStorage.setItem('myHotProducts', JSON.stringify(ids));
    }
    
    // 模拟代理操作
    alert(`成功代理商品：${product.name}\n供应商：${product.supplier}\n价格：¥${product.price}`);
    closeModal();
}

// 收藏商品
function addToFavorites(productId) {
    toggleFavorite(productId);
}

function toggleFavoriteFromModal(productId) {
    const ids = JSON.parse(localStorage.getItem('favorites') || '[]');
    const idx = ids.indexOf(productId);
    if (idx > -1) ids.splice(idx, 1);
    else ids.push(productId);
    localStorage.setItem('favorites', JSON.stringify(ids));

    const btn = document.getElementById('modal-fav-btn');
    if (!btn) return;
    const fav = ids.includes(productId);
    btn.textContent = fav ? '已收藏' : '收藏';
    btn.classList.toggle('btn-favorited', fav);
}

// 编辑商品
function editProduct(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (!product) return;

    editingProductId = productId;
    
    // 填充表单数据
    const form = document.getElementById('add-product-form');
    if (form) {
        form.querySelector('[name="product-name"]').value = product.name;
        form.querySelector('[name="product-price"]').value = product.price;
        form.querySelector('[name="product-stock"]').value = product.stock;
        form.querySelector('[name="product-description"]').value = product.description;
    }
    
    showAddProductModal();
}

// 删除商品
function deleteProduct(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (!product) return;
    
    if (confirm(`确定要删除商品"${product.name}"吗？`)) {
        // 模拟删除操作
        const index = mockData.products.findIndex(p => p.id === productId);
        if (index > -1) {
            mockData.products.splice(index, 1);
            loadSupplierProducts(); // 重新加载商品列表
            alert('商品删除成功！');
        }
    }
}

function openImagePreview(imageUrl, title) {
    openListModal('imagePreview', { imageUrl, title });
}

// 开始演示
function startDemo(type) {
    if (type === 'supplier') {
        loginAs('supplier', '示例科技有限公司', 'supplier');
    } else if (type === 'channel') {
        loginAs('channel', '示例贸易有限公司', 'channel');
    }
}

// 更新用户显示
function updateUserDisplay() {
    const userInfo = document.querySelector('.user-info span');
    if (!userInfo) return;
    userInfo.textContent = currentUser ? currentUser.name : '未登录';
}

// 入驻申请表单处理
function handleRegisterSubmit(event, formType) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (formType === 'channel') {
        const channelType = String(data.channelType || '').trim();
        if (!channelType) {
            alert('请选择渠道类型');
            return;
        }
    }

    const payload = {
        enterpriseName: data.enterpriseName || data.company || '',
        enterpriseType: data.enterpriseType || '',
        creditCode: data.creditCode || '',
        registeredAddress: data.registeredAddress || '',
        yearsEstablished: data.yearsEstablished || '',
        channelType: data.channelType || '',
        platform: data.platform || '',
        monthlySales: data.monthlySales || data['monthly-sales'] || '',
        contactName: data.contactName || data.contact || '',
        contactPosition: data.contactPosition || '',
        contactPhone: data.contactPhone || data.phone || '',
        companyEmail: data.companyEmail || data.email || '',
        wechat: data.wechat || ''
    };
    
    // 模拟提交处理
    console.log(`${formType}注册数据：`, payload);
    
    // 显示成功消息
    const successMessage = formType === 'supplier' 
        ? '供应商入驻申请已提交，我们将在1-3个工作日内审核您的申请。'
        : '渠道商入驻申请已提交，我们将在1-3个工作日内审核您的申请。';
    
    alert(successMessage);
    
    // 重置表单
    event.target.reset();

    if (formType === 'channel') {
        const grid = document.getElementById('channel-type-grid');
        const input = document.getElementById('channelType');
        if (grid) grid.querySelectorAll('.channel-type-card').forEach(c => c.classList.remove('active'));
        if (input) input.value = '';
    }
}

// 初始化应用
function initApp() {
    // 设置导航事件监听
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = item.dataset.page;
            if ((pageName === 'supplier' || pageName === 'channel') && !currentUser) {
                openLoginModal(pageName);
                return;
            }
            showPage(pageName);
        });
    });

    setSessionUser(loadSessionUser());
    
    // 设置入驻申请表单事件
    const supplierForm = document.getElementById('supplier-form');
    const channelForm = document.getElementById('channel-form');
    
    if (supplierForm) {
        supplierForm.addEventListener('submit', (e) => handleRegisterSubmit(e, 'supplier'));
    }
    
    if (channelForm) {
        channelForm.addEventListener('submit', (e) => handleRegisterSubmit(e, 'channel'));
    }
    
    // 设置入驻申请标签切换
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            
            // 更新标签状态
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 切换表单显示
            if (type === 'supplier') {
                document.getElementById('supplier-form').style.display = 'block';
                document.getElementById('channel-form').style.display = 'none';
            } else {
                document.getElementById('supplier-form').style.display = 'none';
                document.getElementById('channel-form').style.display = 'block';
            }

            const banner = document.getElementById('onboard-banner');
            const bannerTitle = document.getElementById('onboard-banner-title');
            const bannerSubtitle = document.getElementById('onboard-banner-subtitle');
            if (banner && bannerTitle && bannerSubtitle) {
                if (type === 'channel') {
                    banner.classList.add('onboard-banner--channel');
                    bannerTitle.textContent = '渠道商入驻';
                    bannerSubtitle.textContent = '发现爆品机会，开启选品之旅';
                } else {
                    banner.classList.remove('onboard-banner--channel');
                    bannerTitle.textContent = '供应商入驻';
                    bannerSubtitle.textContent = '开启爆款供应链合作之旅';
                }
            }
        });
    });

    const channelTypeGrid = document.getElementById('channel-type-grid');
    const channelTypeInput = document.getElementById('channelType');
    if (channelTypeGrid && channelTypeInput) {
        channelTypeGrid.querySelectorAll('.channel-type-card').forEach(card => {
            card.addEventListener('click', () => {
                const value = card.dataset.value || '';
                channelTypeInput.value = value;
                channelTypeGrid.querySelectorAll('.channel-type-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });
    }
    
    // 设置添加商品表单事件
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const uploadedFile = formData.get('product-image');
            const uploadedImageUrl = await readFileAsDataUrl(uploadedFile);

            const payload = {
                name: String(formData.get('product-name') || '').trim(),
                price: parseFloat(String(formData.get('product-price') || '0')),
                stock: parseInt(String(formData.get('product-stock') || '0'), 10),
                description: String(formData.get('product-description') || '').trim(),
                image: uploadedImageUrl || null
            };

            if (editingProductId) {
                const product = mockData.products.find(p => p.id === editingProductId);
                if (!product) return;
                product.name = payload.name || product.name;
                product.price = Number.isFinite(payload.price) ? payload.price : product.price;
                product.stock = Number.isFinite(payload.stock) ? payload.stock : product.stock;
                product.description = payload.description;
                if (payload.image) {
                    product.image = payload.image;
                }

                loadSupplierProducts();
                closeAddProductModal();
                alert('商品更新成功！');
                return;
            }

            const newProduct = {
                id: mockData.products.length ? Math.max(...mockData.products.map(p => p.id)) + 1 : 1,
                name: payload.name,
                price: payload.price,
                stock: payload.stock,
                description: payload.description,
                image: payload.image || `https://picsum.photos/seed/product${Date.now()}/300/300.jpg`,
                sales: 0,
                category: "新商品",
                supplier: currentUser?.name || "未知供应商",
                rating: 0,
                reviews: 0,
                isHot: false
            };

            mockData.products.push(newProduct);
            loadSupplierProducts();
            closeAddProductModal();
            alert('商品添加成功！');
        });
    }
    
    // 设置模态框外部点击关闭
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
    
    // 加载初始数据
    ensureArticlesLoaded().finally(() => {
        loadPageData('home');
        if (currentPage === 'articles') initArticlesPage();
    });

    parseHashRouting();

    window.addEventListener('hashchange', () => {
        parseHashRouting();
    });
    
    // 定期更新演示数据
    setInterval(() => {
        if (currentPage === 'demo') {
            updateDemoStats();
        }
    }, 5000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);

// 添加一些动画效果
function addAnimations() {
    // 数字递增动画
    const animateNumbers = () => {
        const numbers = document.querySelectorAll('.stat-number, .demo-stat-item .stat-value');
        numbers.forEach(num => {
            const finalValue = num.textContent;
            const isPercentage = finalValue.includes('%');
            const isCurrency = finalValue.includes('¥');
            const isPlus = finalValue.includes('+');
            
            let numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
            if (isNaN(numericValue)) return;
            
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(currentValue);
                if (finalValue.includes('.')) {
                    displayValue = currentValue.toFixed(1);
                }
                
                if (isCurrency) {
                    num.textContent = `¥${displayValue}${finalValue.includes('M') ? 'M' : ''}`;
                } else if (isPercentage) {
                    num.textContent = `${displayValue}%`;
                } else if (isPlus) {
                    num.textContent = `+${displayValue}`;
                } else {
                    num.textContent = displayValue.toLocaleString();
                }
            }, 30);
        });
    };
    
    // 页面切换时触发动画
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList.contains('active')) {
                    setTimeout(animateNumbers, 100);
                }
            }
        });
    });
    
    document.querySelectorAll('.page').forEach(page => {
        observer.observe(page, { attributes: true });
    });
}

// 添加页面滚动效果
function addScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动 - 隐藏导航栏
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动 - 显示导航栏
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 初始化动画和滚动效果
setTimeout(() => {
    addAnimations();
    addScrollEffects();
}, 100);
