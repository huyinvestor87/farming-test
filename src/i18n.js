let lang = localStorage.getItem('wb-lang') || 'vi';
export const getLang = () => lang;
export function setLang(l) { lang = l === 'en' ? 'en' : 'vi'; localStorage.setItem('wb-lang', lang) }

// Localized display name for any data entry that carries {name, name_vi}.
export function nameOf(obj) { if (!obj) return ''; return (lang === 'vi' && obj.name_vi) ? obj.name_vi : obj.name }

const S = {
  vi: {
    tagline: 'Gieo trồng chút hạnh phúc', loadTip: 'Đang gieo hoa dại…', loadTipReady: 'Nông trại của bạn đã sẵn sàng!',
    menuContinue: 'Tiếp tục', menuNew: 'Nông trại mới', menuSettings: 'Cài đặt', menuImport: 'Nhập file lưu', menuCredits: 'Giới thiệu',
    labelLevel: 'CẤP', toolQuests: 'Nhiệm vụ', toolOrders: 'Đơn hàng', toolSettings: 'Cài đặt',
    tutGot: 'Đã hiểu', tutSkip: 'Bỏ qua',
    dockFarm: 'Nông trại', dockPlant: 'Trồng', dockAnimals: 'Vật nuôi', dockCraft: 'Chế biến', dockFish: 'Câu cá', dockMarket: 'Chợ', dockInventory: 'Kho', dockBuild: 'Xây dựng',
    placementHint: 'Chạm vào ô trống để đặt', placementRotate: 'Xoay', placementCancel: 'Hủy',
    panelSeeds: 'Túi Hạt Giống', panelAnimals: 'Vật Nuôi Vui Vẻ', panelCraft: 'Bếp Nông Trại', panelFish: 'Ao Liễu', panelMarket: 'Sạp Chợ', panelInventory: 'Kho Của Bạn', panelBuild: 'Thợ Mộc & Trang Trí', panelQuests: 'Nhật Ký Nhiệm Vụ', panelOrders: 'Bảng Đơn Hàng', panelSettings: 'Cài Đặt', panelCharacter: 'Nông Dân Của Bạn',
    seedDesc: '{time}s · Thu hoạch được {sell}', seedButton: '{cost} xu · Trồng',
    animalDesc: 'Sản xuất {product}. Thức ăn: {feed}', animalButtonFeed: 'Cho ăn / thu hoạch', animalButtonAdopt: '{cost} · Nhận nuôi',
    craftDesc: '{building} · {inputs} · {time}s', craftButton: 'Chế biến', lvTag: 'Cấp {level}',
    storageLabel: 'Kho chứa', itemDesc: '{n} trong kho · giá trị {sell}', sellButton: 'Bán một', storedButton: 'Đã lưu',
    fishTitle: 'Câu cá tại Ao Liễu', fishDesc: 'Chạm Thả cần, rồi chạm lại khi vòng tròn chuyển xanh.', castLine: 'Thả cần',
    buildTabBuildings: 'Công trình', buildTabDecor: '{n} vật trang trí', buildingDesc: 'Một công trình nông trại xinh xắn', buildingButton: '{cost} xu', decorDesc: 'Thêm {beauty} vẻ đẹp', beautyTag: '+{beauty}',
    questDesc: '{type} {goal} · {progress}/{goal}', claimed: 'Đã nhận', claimButton: 'Nhận {reward}', xpTag: '+{xp} KN',
    achieveDesc: '{stat}: {current}/{goal}', earnedLabel: 'Đã đạt', gemsButton: '{gems} đá quý',
    orderTitle: 'Giao hàng địa phương', orderDesc: '{name} ×{n}', orderButton: '{coins} xu',
    soundVolume: 'Âm lượng', languageLabel: 'Ngôn ngữ', langVi: 'Tiếng Việt', langEn: 'English',
    saveDataLabel: 'Dữ liệu lưu', saveBtn: 'Lưu', exportBtn: 'Xuất file', importBtn: 'Nhập file',
    tutorialLabel: 'Hướng dẫn', restartBtn: 'Bắt đầu lại',
    upgradeBtn: 'Nâng cấp {from} → {to} ({cost})', expansionLabel: 'Mở rộng nông trại', expandBtn: 'Mở đồng cỏ mới ({cost})',
    resetLabel: 'Đặt lại toàn bộ tiến trình', resetBtn: 'Đặt lại trò chơi',
    charTitle: 'Nông dân Rowan', charSub: 'Chọn phong cách của bạn', charStyleDesc: 'Phong cách nông dân nguyên bản', wearBtn: 'Mặc',
    styleGreen: 'Áo xanh lá', styleBlue: 'Áo xanh dương', styleRose: 'Áo hồng', styleHat: 'Nón nắng',
    tapToPlant: 'Chạm vào ô ruộng trống để trồng {name}', needCoins: 'Cần thêm chút xu nữa',
    needBuilding: 'Hãy xây {building} trước', needIngredients: 'Hãy thu thập nguyên liệu trước',
    craftStarted: '{name} đang được chế biến tại {building}', animalJoined: '{name} đã gia nhập nông trại!',
    productCollected: 'Đã thu hoạch {name}', animalFed: '{name} đã được cho ăn no nê', needFeed: 'Bạn cần {feed}',
    chooseSpot: 'Chọn một chỗ trống', orderDelivered: 'Đã giao đơn hàng!', farmSaved: 'Đã lưu nông trại an toàn',
    invalidSave: 'Tệp lưu này không hợp lệ', levelUp: 'Cấp {level}! Mở khóa đồ mới',
    achievementToast: 'Thành tựu: {name} +{gems} đá quý', meadowOpen: 'Đồng cỏ mới đã mở!', barnUpgraded: 'Đã nâng cấp kho thóc',
    lookingGood: 'Trông thật tuyệt!', spotOccupied: 'Chỗ đó đã có vật khác', placed: 'Đã đặt!',
    timeRemaining: '{name}: còn {sec}s', harvestGain: '+2 {name}', selectPlantFirst: 'Chọn Trồng, rồi chọn hạt giống',
    fishCaught: 'Đã câu được {name}!', craftFinishedAway: '{name} đã hoàn thành khi bạn vắng mặt!', craftReady: '{name} đã sẵn sàng!',
    barnFull: 'Kho thóc đã đầy', confirmReset: 'Đặt lại Willowbrook và bắt đầu lại từ đầu?',
    confirmNewFarm: 'Bắt đầu nông trại mới và thay thế tiến trình hiện tại?', credits: 'Được thiết kế và minh họa cho Willowbrook Farm · 2026',
    weatherRain: 'Mưa nhẹ', weatherSunny: 'Trời nắng', morning: 'buổi sáng', afternoon: 'buổi chiều',
    waitBite: 'Đang chờ cá cắn câu…', reelIn: 'CHẠM! Kéo cá lên',
    stat_harvest: 'Thu hoạch', stat_plant: 'Trồng', stat_feed: 'Cho ăn', stat_craft: 'Chế biến', stat_fish: 'Câu cá', stat_sell: 'Bán', stat_decorate: 'Trang trí', stat_earned: 'Kiếm được', stat_xp: 'Kinh nghiệm',
    tut0Title: 'Chào mừng, nông dân!', tut0Text: 'Kéo để khám phá nông trại mới của bạn.',
    tut1Title: 'Trồng cây đầu tiên', tut1Text: 'Mở mục Trồng bên dưới, chọn Lúa mì, rồi chạm vào ô ruộng nâu.',
    tut2Title: 'Đến giờ thu hoạch', tut2Text: 'Cây trồng vẫn lớn lên ngay cả khi bạn đóng trò chơi. Chạm khi đã sẵn sàng!',
    tut3Title: 'Chăm sóc vật nuôi', tut3Text: 'Mở mục Vật nuôi để cho gà ăn và thu trứng.',
    tut4Title: 'Bán & chế biến', tut4Text: 'Chợ bán nông sản; Chế biến biến nguyên liệu thành món ngon.',
    tut5Title: 'Biến nó thành của bạn', tut5Text: 'Xây dựng mở ra các công trình và vật trang trí xinh xắn.',
    tut6Title: 'Cuộc phiêu lưu đang chờ', tut6Text: 'Hãy thử câu cá, đơn hàng, nhiệm vụ, mở rộng và nâng cấp kho thóc!'
  },
  en: {
    tagline: 'Plant a little happiness', loadTip: 'Growing wildflowers…', loadTipReady: 'Your farm is ready!',
    menuContinue: 'Continue', menuNew: 'New Game', menuSettings: 'Settings', menuImport: 'Import Save', menuCredits: 'Credits',
    labelLevel: 'LEVEL', toolQuests: 'Quests', toolOrders: 'Orders', toolSettings: 'Settings',
    tutGot: 'Got it', tutSkip: 'Skip',
    dockFarm: 'Farm', dockPlant: 'Plant', dockAnimals: 'Animals', dockCraft: 'Make', dockFish: 'Fish', dockMarket: 'Market', dockInventory: 'Barn', dockBuild: 'Build',
    placementHint: 'Tap a free tile to place', placementRotate: 'Rotate', placementCancel: 'Cancel',
    panelSeeds: 'Seed Satchel', panelAnimals: 'Happy Animals', panelCraft: 'Farm Kitchen', panelFish: 'Willow Pond', panelMarket: 'Market Stall', panelInventory: 'Your Barn', panelBuild: 'Carpenter & Decor', panelQuests: 'Quest Journal', panelOrders: 'Order Board', panelSettings: 'Settings', panelCharacter: 'Your Farmer',
    seedDesc: '{time}s · Harvests for {sell}', seedButton: '{cost} coins · Plant',
    animalDesc: 'Produces {product}. Feed: {feed}', animalButtonFeed: 'Feed / collect', animalButtonAdopt: '{cost} · Adopt',
    craftDesc: '{building} · {inputs} · {time}s', craftButton: 'Make', lvTag: 'Lv {level}',
    storageLabel: 'Storage', itemDesc: '{n} in storage · value {sell}', sellButton: 'Sell one', storedButton: 'Stored',
    fishTitle: 'Fishing at Willow Pond', fishDesc: 'Tap Cast, then tap again when the ring turns green.', castLine: 'Cast line',
    buildTabBuildings: 'Buildings', buildTabDecor: '{n} decorations', buildingDesc: 'A charming farm building', buildingButton: '{cost} coins', decorDesc: 'Adds {beauty} beauty', beautyTag: '+{beauty}',
    questDesc: '{type} {goal} · {progress}/{goal}', claimed: 'Claimed', claimButton: 'Claim {reward}', xpTag: '+{xp} XP',
    achieveDesc: '{stat}: {current}/{goal}', earnedLabel: 'Earned', gemsButton: '{gems} gems',
    orderTitle: 'Local delivery', orderDesc: '{name} ×{n}', orderButton: '{coins} coins',
    soundVolume: 'Sound volume', languageLabel: 'Language', langVi: 'Tiếng Việt', langEn: 'English',
    saveDataLabel: 'Save data', saveBtn: 'Save', exportBtn: 'Export', importBtn: 'Import',
    tutorialLabel: 'Tutorial', restartBtn: 'Restart',
    upgradeBtn: 'Upgrade {from} → {to} ({cost})', expansionLabel: 'Farm expansion', expandBtn: 'Unlock new meadow ({cost})',
    resetLabel: 'Reset all progress', resetBtn: 'Reset game',
    charTitle: 'Farmer Rowan', charSub: 'Choose your look', charStyleDesc: 'Original farmer style', wearBtn: 'Wear',
    styleGreen: 'Green shirt', styleBlue: 'Blue shirt', styleRose: 'Rose shirt', styleHat: 'Sun hat',
    tapToPlant: 'Tap an empty field tile to plant {name}', needCoins: 'A few more coins needed',
    needBuilding: 'Build a {building} first', needIngredients: 'Gather the ingredients first',
    craftStarted: '{name} started in the {building}', animalJoined: '{name} joined the farm!',
    productCollected: '{name} collected', animalFed: '{name} is happily fed', needFeed: 'You need {feed}',
    chooseSpot: 'Choose a free spot', orderDelivered: 'Order delivered!', farmSaved: 'Farm saved safely',
    invalidSave: 'That save file is not valid', levelUp: 'Level {level}! New goodies unlocked',
    achievementToast: 'Achievement: {name} +{gems} gems', meadowOpen: 'The new meadow is open!', barnUpgraded: 'Barn storage upgraded',
    lookingGood: 'Looking wonderful!', spotOccupied: 'That spot is occupied', placed: 'Placed!',
    timeRemaining: '{name}: {sec}s remaining', harvestGain: '+2 {name}', selectPlantFirst: 'Select Plant, then choose a seed',
    fishCaught: '{name} caught!', craftFinishedAway: '{name} finished while away!', craftReady: '{name} is ready!',
    barnFull: 'Barn is full', confirmReset: 'Reset Willowbrook and start fresh?',
    confirmNewFarm: 'Start a new farm and replace current progress?', credits: 'Designed and illustrated for Willowbrook Farm · 2026',
    weatherRain: 'Light rain', weatherSunny: 'Sunny', morning: 'morning', afternoon: 'afternoon',
    waitBite: 'Wait for a bite…', reelIn: 'TAP! Reel it in',
    stat_harvest: 'harvest', stat_plant: 'plant', stat_feed: 'feed', stat_craft: 'craft', stat_fish: 'fish', stat_sell: 'sell', stat_decorate: 'decorate', stat_earned: 'earned', stat_xp: 'xp',
    tut0Title: 'Welcome, farmer!', tut0Text: 'Drag to explore your new farm.',
    tut1Title: 'Plant your first crop', tut1Text: 'Open Plant below, choose Wheat, then tap the brown field.',
    tut2Title: 'Harvest time', tut2Text: 'Crops keep growing even when you close the game. Tap when ready!',
    tut3Title: 'Care for animals', tut3Text: 'Open Animals to feed your chicken and collect eggs.',
    tut4Title: 'Sell & create', tut4Text: 'Market sells goods; Make turns ingredients into treats.',
    tut5Title: 'Make it yours', tut5Text: 'Build opens buildings and lovely decorations.',
    tut6Title: 'Adventure awaits', tut6Text: 'Try fishing, orders, quests, expansion and barn upgrades!'
  }
};

export function t(key, vars) {
  let s = (S[lang] && S[lang][key]) ?? S.en[key] ?? key;
  if (vars) for (const k in vars) s = s.replaceAll(`{${k}}`, vars[k]);
  return s;
}

export function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n) });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle) });
  document.documentElement.lang = lang;
}
