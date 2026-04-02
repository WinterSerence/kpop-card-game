// Kpop星光抽卡游戏 - 核心游戏逻辑

// ==================== 偶像数据库 ====================
const idolDatabase = [
    // BTS - 防弹少年团
    {
        id: 1,
        name: "金南俊 (RM)",
        group: "BTS",
        role: "队长/主Rapper",
        rarity: "legendary",
        avatar: "🎤",
        bio: "BTS的队长，才华横溢的Rapper和制作人，IQ高达148的天才。"
    },
    {
        id: 2,
        name: "金硕珍 (Jin)",
        group: "BTS",
        role: "主唱",
        rarity: "epic",
        avatar: "👑",
        bio: "BTS的门面担当，拥有迷人嗓音的主唱，烹饪达人。"
    },
    {
        id: 3,
        name: "闵玧其 (Suga)",
        group: "BTS",
        role: "主Rapper",
        rarity: "epic",
        avatar: "🐱",
        bio: "天才音乐制作人，酷酷的外表下有着温暖的内心。"
    },
    {
        id: 4,
        name: "田征国 (J-Hope)",
        group: "BTS",
        role: "主舞/Rapper",
        rarity: "epic",
        avatar: "🌞",
        bio: "BTS的舞蹈担当，永远的阳光少年，带来希望与快乐。"
    },
    {
        id: 5,
        name: "朴智旻 (Jimin)",
        group: "BTS",
        role: "主舞/主唱",
        rarity: "legendary",
        avatar: "🦋",
        bio: "优雅的舞蹈天才，独特的高音让人难以忘怀。"
    },
    {
        id: 6,
        name: "金泰亨 (V)",
        group: "BTS",
        role: "主唱",
        rarity: "legendary",
        avatar: "🦁",
        bio: "低音炮主唱，四次元魅力担当，演技也备受认可。"
    },
    {
        id: 7,
        name: "田柾国 (Jungkook)",
        group: "BTS",
        role: "主唱/主舞",
        rarity: "legendary",
        avatar: "🐰",
        bio: "黄金忙内，全能型艺人，唱歌跳舞样样精通。"
    },
    
    // BLACKPINK
    {
        id: 8,
        name: "Jisoo (金智秀)",
        group: "BLACKPINK",
        role: "主唱/门面",
        rarity: "epic",
        avatar: "🌸",
        bio: "BLACKPINK的门面担当，优雅的气质女神。"
    },
    {
        id: 9,
        name: "Jennie (金珍妮)",
        group: "BLACKPINK",
        role: "主Rapper/主唱",
        rarity: "legendary",
        avatar: "💎",
        bio: "人间香奈儿，独特的Rap风格和舞台魅力。"
    },
    {
        id: 10,
        name: "Rosé (朴彩英)",
        group: "BLACKPINK",
        role: "主唱",
        rarity: "epic",
        avatar: "🌹",
        bio: "蜜糖嗓音主唱，独特的音色让人一听难忘。"
    },
    {
        id: 11,
        name: "Lisa",
        group: "BLACKPINK",
        role: "主舞/Rapper",
        rarity: "legendary",
        avatar: "💃",
        bio: "世界级舞蹈机器，泰国籍国际巨星。"
    },
    
    // TWICE
    {
        id: 12,
        name: "林娜琏 (Nayeon)",
        group: "TWICE",
        role: "主唱/门面",
        rarity: "rare",
        avatar: "🐰",
        bio: "TWICE的兔牙担当，可爱的主唱。"
    },
    {
        id: 13,
        name: "俞定延 (Jeongyeon)",
        group: "TWICE",
        role: "主唱",
        rarity: "rare",
        avatar: "🦊",
        bio: "帅气的主唱担当，短发造型深入人心。"
    },
    {
        id: 14,
        name: "平井桃 (Momo)",
        group: "TWICE",
        role: "主舞/Rapper",
        rarity: "epic",
        avatar: "🍑",
        bio: "舞蹈机器，完美的舞蹈实力让人惊叹。"
    },
    {
        id: 15,
        name: "凑崎纱夏 (Sana)",
        group: "TWICE",
        role: "副唱",
        rarity: "epic",
        avatar: "🐹",
        bio: "可爱的日籍成员，沙奈酱魅力无限。"
    },
    {
        id: 16,
        name: "名井南 (Mina)",
        group: "TWICE",
        role: "副唱",
        rarity: "rare",
        avatar: "🐧",
        bio: "优雅的芭蕾舞者，高冷与可爱的完美结合。"
    },
    
    // EXO
    {
        id: 17,
        name: "金俊勉 (Suho)",
        group: "EXO",
        role: "队长/主唱",
        rarity: "rare",
        avatar: "🌟",
        bio: "EXO的温柔队长，完美领导力的代表。"
    },
    {
        id: 18,
        name: "边伯贤 (Baekhyun)",
        group: "EXO",
        role: "主唱",
        rarity: "legendary",
        avatar: "☀️",
        bio: "天才主唱，音色独特的实力派歌手。"
    },
    {
        id: 19,
        name: "朴灿烈 (Chanyeol)",
        group: "EXO",
        role: "主Rapper",
        rarity: "epic",
        avatar: "🎸",
        bio: "多才多艺的Rapper，乐器演奏样样精通。"
    },
    {
        id: 20,
        name: "都敬秀 (D.O.)",
        group: "EXO",
        role: "主唱",
        rarity: "epic",
        avatar: "🦉",
        bio: "实力派主唱，演技也备受认可的艺人。"
    },
    
    // NCT
    {
        id: 21,
        name: "李马克 (Mark)",
        group: "NCT",
        role: "主Rapper",
        rarity: "epic",
        avatar: "🎯",
        bio: "NCT的加拿大籍成员，稳定的Rap实力。"
    },
    {
        id: 22,
        name: "楷灿 (Haechan)",
        group: "NCT",
        role: "主唱",
        rarity: "rare",
        avatar: "🌙",
        bio: "充满感情的主唱，独特的音色。"
    },
    
    // aespa
    {
        id: 23,
        name: "柳智敏 (Karina)",
        group: "aespa",
        role: "队长/主舞/Rapper",
        rarity: "legendary",
        avatar: "🤖",
        bio: "aespa的AI概念队长，完美的全能型艺人。"
    },
    {
        id: 24,
        name: "金旼炡 (Winter)",
        group: "aespa",
        role: "主唱",
        rarity: "epic",
        avatar: "❄️",
        bio: "清澈嗓音的主唱，冷艳与可爱并存。"
    }
];

// ==================== 稀有度配置 ====================
const rarityConfig = {
    common: {
        name: "普通",
        stars: 1,
        probability: 0.60,
        color: "#718096"
    },
    rare: {
        name: "稀有",
        stars: 2,
        probability: 0.25,
        color: "#4299e1"
    },
    epic: {
        name: "史诗",
        stars: 3,
        probability: 0.12,
        color: "#9f7aea"
    },
    legendary: {
        name: "传说",
        stars: 4,
        probability: 0.03,
        color: "#ffd700"
    }
};

// ==================== 游戏状态 ====================
let gameState = {
    coins: 1000,
    collection: {},  // { idolId: count }
    totalCards: 0,
    recentCards: []
};

// ==================== 初始化 ====================
function init() {
    loadGameState();
    updateUI();
    renderRecentCards();
}

// ==================== 本地存储 ====================
function saveGameState() {
    localStorage.setItem('kpopGachaGame', JSON.stringify(gameState));
}

function loadGameState() {
    const saved = localStorage.getItem('kpopGachaGame');
    if (saved) {
        gameState = JSON.parse(saved);
    }
}

// ==================== 抽卡逻辑 ====================
function getRandomRarity() {
    const rand = Math.random();
    let cumulative = 0;
    
    // 按概率从低到高检查
    const rarities = ['legendary', 'epic', 'rare', 'common'];
    
    for (const rarity of rarities) {
        cumulative += rarityConfig[rarity].probability;
        if (rand < cumulative) {
            return rarity;
        }
    }
    
    return 'common';
}

function getIdolsByRarity(rarity) {
    return idolDatabase.filter(idol => idol.rarity === rarity);
}

function drawOneCard() {
    const rarity = getRandomRarity();
    const idolsOfRarity = getIdolsByRarity(rarity);
    const randomIndex = Math.floor(Math.random() * idolsOfRarity.length);
    return idolsOfRarity[randomIndex];
}

function drawCard(count) {
    const cost = count === 1 ? 100 : 900;
    
    if (gameState.coins < cost) {
        showNotification('💎 钻石不足！', 'error');
        return;
    }
    
    // 扣除钻石
    gameState.coins -= cost;
    
    // 抽卡动画
    const cardDisplay = document.getElementById('cardDisplay');
    cardDisplay.classList.add('drawing');
    
    setTimeout(() => {
        cardDisplay.classList.remove('drawing');
        
        if (count === 1) {
            // 单抽
            const card = drawOneCard();
            addCardToCollection(card);
            displaySingleCard(card);
            addToRecentCards(card);
        } else {
            // 十连抽
            const cards = [];
            for (let i = 0; i < count; i++) {
                cards.push(drawOneCard());
            }
            
            // 保底机制：如果没有稀有以上卡片，最后一张必定稀有
            const hasGoodCard = cards.some(card => card.rarity !== 'common');
            if (!hasGoodCard) {
                cards[count - 1] = drawOneCard();
                // 重抽直到获得稀有或以上
                while (cards[count - 1].rarity === 'common') {
                    cards[count - 1] = drawOneCard();
                }
            }
            
            cards.forEach(card => {
                addCardToCollection(card);
                addToRecentCards(card);
            });
            
            displayMultiCards(cards);
        }
        
        saveGameState();
        updateUI();
    }, 300);
}

// ==================== 收集系统 ====================
function addCardToCollection(card) {
    if (!gameState.collection[card.id]) {
        gameState.collection[card.id] = 0;
    }
    gameState.collection[card.id]++;
    gameState.totalCards++;
}

function addToRecentCards(card) {
    gameState.recentCards.unshift(card);
    if (gameState.recentCards.length > 10) {
        gameState.recentCards.pop();
    }
    renderRecentCards();
}

// ==================== UI 更新 ====================
function updateUI() {
    // 更新钻石数量
    document.getElementById('coinCount').textContent = gameState.coins;
    
    // 更新收集进度
    const ownedCount = Object.keys(gameState.collection).length;
    const totalCount = idolDatabase.length;
    document.getElementById('collectionCount').textContent = `${ownedCount}/${totalCount}`;
    
    // 检查按钮状态
    const singleBtn = document.querySelector('.gacha-btn.single');
    const tenBtn = document.querySelector('.gacha-btn.ten');
    
    singleBtn.disabled = gameState.coins < 100;
    tenBtn.disabled = gameState.coins < 900;
}

function displaySingleCard(card) {
    const cardDisplay = document.getElementById('cardDisplay');
    const isNew = gameState.collection[card.id] === 1;
    const stars = '⭐'.repeat(rarityConfig[card.rarity].stars);
    
    cardDisplay.innerHTML = `
        <div class="idol-card ${isNew ? 'new-card' : ''}" onclick="showCardDetail(${card.id})">
            <div class="card-inner ${card.rarity}">
                <span class="rarity-badge ${card.rarity}">${rarityConfig[card.rarity].name}</span>
                <div class="card-avatar">${card.avatar}</div>
                <div class="card-name">${card.name}</div>
                <div class="card-group">${card.group}</div>
                <div class="card-role">${card.role}</div>
                <div class="card-stars">${stars}</div>
                <div class="card-count">x${gameState.collection[card.id]}</div>
            </div>
        </div>
    `;
}

function displayMultiCards(cards) {
    const modal = document.getElementById('multiDrawModal');
    const grid = document.getElementById('multiCardsGrid');
    
    // 统计各稀有度数量
    const summary = {
        legendary: cards.filter(c => c.rarity === 'legendary').length,
        epic: cards.filter(c => c.rarity === 'epic').length,
        rare: cards.filter(c => c.rarity === 'rare').length,
        common: cards.filter(c => c.rarity === 'common').length
    };
    
    grid.innerHTML = cards.map(card => `
        <div class="multi-card-item mini-card ${card.rarity}" onclick="showCardDetail(${card.id})">
            <div class="mini-avatar">${card.avatar}</div>
            <div class="mini-name">${card.name.split(' ')[0]}</div>
            <div class="mini-stars">${'⭐'.repeat(rarityConfig[card.rarity].stars)}</div>
        </div>
    `).join('');
    
    // 生成摘要
    let summaryText = '';
    if (summary.legendary > 0) {
        summaryText += `🌟 传说 x${summary.legendary}！`;
    }
    if (summary.epic > 0) {
        summaryText += `💜 史诗 x${summary.epic} `;
    }
    if (summary.rare > 0) {
        summaryText += `💙 稀有 x${summary.rare} `;
    }
    summaryText += `⚪ 普通 x${summary.common}`;
    
    document.getElementById('drawSummary').textContent = summaryText;
    
    modal.classList.add('active');
}

function renderRecentCards() {
    const container = document.getElementById('recentCards');
    
    if (gameState.recentCards.length === 0) {
        container.innerHTML = '<p class="empty-tip">还没有抽到卡片，快去抽卡吧！</p>';
        return;
    }
    
    container.innerHTML = gameState.recentCards.map(card => `
        <div class="mini-card ${card.rarity}" onclick="showCardDetail(${card.id})">
            <div class="mini-avatar">${card.avatar}</div>
            <div class="mini-name">${card.name.split(' ')[0]}</div>
            <div class="mini-stars">${'⭐'.repeat(rarityConfig[card.rarity].stars)}</div>
        </div>
    `).join('');
}

// ==================== 图鉴系统 ====================
function showCollection() {
    const modal = document.getElementById('collectionModal');
    const grid = document.getElementById('collectionGrid');
    
    const ownedCount = Object.keys(gameState.collection).length;
    const totalCount = idolDatabase.length;
    
    document.getElementById('progressValue').textContent = `${ownedCount}/${totalCount}`;
    document.getElementById('totalCards').textContent = gameState.totalCards;
    
    grid.innerHTML = idolDatabase.map(idol => {
        const owned = gameState.collection[idol.id];
        const count = owned || 0;
        
        if (owned) {
            return `
                <div class="collection-item owned mini-card ${idol.rarity}" onclick="showCardDetail(${idol.id})">
                    <div class="mini-avatar">${idol.avatar}</div>
                    <div class="mini-name">${idol.name.split(' ')[0]}</div>
                    <div class="mini-stars">${'⭐'.repeat(rarityConfig[idol.rarity].stars)}</div>
                    <span class="owned-count">x${count}</span>
                </div>
            `;
        } else {
            return `
                <div class="collection-item not-owned">
                    <div class="silhouette">❓</div>
                    <div class="unknown-name">未解锁</div>
                </div>
            `;
        }
    }).join('');
    
    modal.classList.add('active');
}

function closeCollection() {
    document.getElementById('collectionModal').classList.remove('active');
}

function closeMultiDraw() {
    document.getElementById('multiDrawModal').classList.remove('active');
}

// ==================== 卡片详情 ====================
function showCardDetail(idolId) {
    const idol = idolDatabase.find(i => i.id === idolId);
    if (!idol) return;
    
    const modal = document.getElementById('cardDetailModal');
    const content = document.getElementById('detailCardContent');
    const stars = '⭐'.repeat(rarityConfig[idol.rarity].stars);
    const count = gameState.collection[idol.id] || 0;
    
    content.innerHTML = `
        <div class="card-inner ${idol.rarity}" style="padding: 30px; border-radius: 20px;">
            <div class="card-avatar">${idol.avatar}</div>
            <div class="card-name">${idol.name}</div>
            <div class="card-group">${idol.group}</div>
            <div class="card-role">${idol.role}</div>
            <div class="card-stars">${stars}</div>
            <div class="card-bio">${idol.bio}</div>
            <div class="owned-info">
                <p>已收集：<strong>${count}</strong> 张</p>
                <p>稀有度：<strong>${rarityConfig[idol.rarity].name}</strong></p>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeCardDetail() {
    document.getElementById('cardDetailModal').classList.remove('active');
}

// ==================== 通知系统 ====================
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 30px;
        border-radius: 30px;
        font-weight: 600;
        z-index: 2000;
        animation: slideDown 0.3s ease;
        ${type === 'error' ? 'background: linear-gradient(135deg, #ff6b6b, #ee5a5a);' : 
          type === 'success' ? 'background: linear-gradient(135deg, #51cf66, #40c057);' :
          'background: linear-gradient(135deg, #667eea, #764ba2);'}
        color: white;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    `;
    notification.textContent = message;
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // 3秒后移除
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== 每日奖励系统 ====================
function checkDailyReward() {
    const lastReward = localStorage.getItem('lastDailyReward');
    const today = new Date().toDateString();
    
    if (lastReward !== today) {
        // 发放每日奖励
        gameState.coins += 200;
        localStorage.setItem('lastDailyReward', today);
        saveGameState();
        updateUI();
        
        setTimeout(() => {
            showNotification('🎁 每日登录奖励：+200💎', 'success');
        }, 500);
    }
}

// ==================== 彩蛋功能 ====================
let clickCount = 0;
let clickTimer = null;

document.addEventListener('click', (e) => {
    // 检测连续点击logo
    if (e.target.closest('.logo')) {
        clickCount++;
        
        if (clickTimer) clearTimeout(clickTimer);
        
        clickTimer = setTimeout(() => {
            if (clickCount >= 5) {
                // 彩蛋：获得免费钻石
                gameState.coins += 100;
                saveGameState();
                updateUI();
                showNotification('🎉 发现彩蛋！+100💎', 'success');
            }
            clickCount = 0;
        }, 500);
    }
});

// ==================== 键盘快捷键 ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCollection();
        closeMultiDraw();
        closeCardDetail();
    }
    
    // 数字键快速抽卡
    if (e.key === '1' && !document.querySelector('.modal.active')) {
        drawCard(1);
    }
    if (e.key === '2' && !document.querySelector('.modal.active')) {
        drawCard(10);
    }
});

// ==================== 启动游戏 ====================
window.onload = function() {
    init();
    checkDailyReward();
    
    // 显示欢迎信息
    setTimeout(() => {
        showNotification('✨ 欢迎来到Kpop星光抽卡！', 'info');
    }, 300);
};