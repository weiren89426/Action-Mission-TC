// ==========================================
// 1. 集中抓取網頁上「所有」會用到的元素
// (注意：每個變數名稱在這裡只能出現一次喔！)
// ==========================================

// 抓取按鈕
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const introBtn = document.getElementById("intro-btn");
const tutorialNextBtn = document.getElementById("tutorial-next-btn"); // 新增：1/2 的按鈕
const tutorialFinishBtn = document.getElementById("tutorial-finish-btn"); // 新增：2/2 的按鈕
const prologueNextBtn = document.getElementById("prologue-next-btn");
// (未來如果有 introBtn 也可以繼續加在這裡)

// 抓取元素
const dialogueScreen = document.getElementById("dialogue-screen");
const dialogueImage = document.getElementById("dialogue-image");
const ch1TaskScreen = document.getElementById("ch1-task-screen");
const ch1DialogueScreen = document.getElementById("ch1-dialogue-screen");
const ch1DialogueImage = document.getElementById("ch1-dialogue-image");
const hitboxArrived = document.getElementById("hitbox-arrived");
const ch1Task2Screen = document.getElementById("ch1-task2-screen");
const ch1Dialogue2Screen = document.getElementById("ch1-dialogue2-screen");
const ch1Dialogue2Image = document.getElementById("ch1-dialogue2-image");
const hitboxArrived2 = document.getElementById("hitbox-arrived-2");

const ch1Question1Screen = document.getElementById("ch1-question1-screen");
const hitboxHintBtn = document.getElementById("hitbox-hint-btn");
const ch1Hint1Screen = document.getElementById("ch1-hint1-screen");
const hitboxCloseHint = document.getElementById("hitbox-close-hint");

const hitboxOptA = document.getElementById("hitbox-opt-a");
const hitboxOptB = document.getElementById("hitbox-opt-b");
const hitboxOptC = document.getElementById("hitbox-opt-c");
const hitboxOptD = document.getElementById("hitbox-opt-d");

const ch1Wrong1Screen = document.getElementById("ch1-wrong1-screen");
const ch1Correct1Screen = document.getElementById("ch1-correct1-screen");
const ch1Dialogue3Screen = document.getElementById("ch1-dialogue3-screen");
const ch1Dialogue3Image = document.getElementById("ch1-dialogue3-image");

const ch1Question2Screen = document.getElementById("ch1-question2-screen");
const q2HintBtn = document.getElementById("q2-hint-btn");
const ch1Hint2Screen = document.getElementById("ch1-hint2-screen");
const q2CloseHint = document.getElementById("q2-close-hint");
const ch1Wrong2Screen = document.getElementById("ch1-wrong2-screen");
const q2OptA = document.getElementById("q2-opt-a");
const q2OptB = document.getElementById("q2-opt-b");
const q2OptC = document.getElementById("q2-opt-c");
const q2OptD = document.getElementById("q2-opt-d");

const ch1Dialogue4Screen = document.getElementById("ch1-dialogue4-screen");
const ch1Dialogue4Image = document.getElementById("ch1-dialogue4-image");

const ch1Question3Screen = document.getElementById("ch1-question3-screen");
const q3HintBtn = document.getElementById("q3-hint-btn");
const ch1Hint3Screen = document.getElementById("ch1-hint3-screen");
const q3CloseHint = document.getElementById("q3-close-hint");
const ch1Wrong3Screen = document.getElementById("ch1-wrong3-screen");
const q3OptA = document.getElementById("q3-opt-a");
const q3OptB = document.getElementById("q3-opt-b");
const q3OptC = document.getElementById("q3-opt-c");
const q3OptD = document.getElementById("q3-opt-d");

const ch1Dialogue5Screen = document.getElementById("ch1-dialogue5-screen");
const ch1Dialogue5Image = document.getElementById("ch1-dialogue5-image");
const ch1Question4Screen = document.getElementById("ch1-question4-screen");
const q4HintBtn = document.getElementById("q4-hint-btn");
const ch1Hint4Screen = document.getElementById("ch1-hint4-screen");
const q4CloseHint = document.getElementById("q4-close-hint");
const ch1Wrong4Screen = document.getElementById("ch1-wrong4-screen");
const q4OptA = document.getElementById("q4-opt-a");
const q4OptB = document.getElementById("q4-opt-b");
const q4OptC = document.getElementById("q4-opt-c");
const q4OptD = document.getElementById("q4-opt-d");

const ch1Dialogue6Screen = document.getElementById("ch1-dialogue6-screen");
const ch1Dialogue6Image = document.getElementById("ch1-dialogue6-image");

const ch1Badge1Screen = document.getElementById("ch1-badge1-screen");
const hitboxContinue1 = document.getElementById("hitbox-continue-1");

const ch1Task3Screen = document.getElementById("ch1-task3-screen");
const hitboxArrived3 = document.getElementById("hitbox-arrived-3");

//抓取首頁的元素
const homeBgImage = document.getElementById("home-bg-image");
const hitboxPrev = document.getElementById("hitbox-prev");
const hitboxNext = document.getElementById("hitbox-next");
const hitboxPlay = document.getElementById("hitbox-play");
const hitboxAchievement = document.getElementById("hitbox-achievement"); // 新增
const hitboxBadge = document.getElementById("hitbox-badge");

//首頁極簡版關卡資料庫 (只放圖片路徑)
const chaptersImages = [
  "images/首頁_01.png", // 第一章
  "images/首頁_02_未解鎖.png", // 第二章
  "images/首頁_03_未解鎖.png", // 第三章
  "images/首頁_04_未解鎖.png", // 第四章
  "images/首頁_05_未解鎖.png", // 第五章
];
// 👇 就是少掉這一行！補上它，記錄目前看的是第幾個章節 (0 代表第一章)
let currentChIndex = 0;

// 前言對話
const dialogueImages = [
  "images/前言對話_01.png",
  "images/前言對話_02.png",
  "images/前言對話_03.png",
  "images/前言對話_04.png",
  "images/前言對話_05.png",
  "images/前言對話_06.png",
  "images/前言對話_07.png",
  "images/前言對話_08.png",
  "images/前言對話_09.png",
  "images/前言對話_10.png",
  "images/前言對話_11.png",
  "images/前言對話_12.png",
  "images/前言對話_13.png",
  "images/前言對話_14.png",
  "images/前言對話_15.png",
  "images/前言對話_16.png",
  "images/前言對話_17.png",
  "images/前言對話_18.png",
  "images/前言對話_19.png",
  "images/前言對話_20.png",
  "images/前言對話_21.png",
  "images/前言對話_22.png",
  "images/前言對話_23.png",
  "images/前言對話_24.png",
  "images/前言對話_25.png",
  "images/前言對話_26.png",
  "images/前言對話_27.png",
];
// 這個數字用來記錄現在播到第幾張 (0 代表第一張)
let currentDialogueIndex = 0;

// 第一章對話資料庫 (請依序放入你匯出的圖片檔名)
const ch1DialogueImages = [
  "images/第一章_更樓_03.png",
  "images/第一章_更樓_04.png",
  "images/第一章_更樓_05.png",
  "images/第一章_更樓_06.png",
  "images/第一章_更樓_07.png",
];
let currentCh1DialogueIndex = 0; // 記錄第一章對話播到哪

// 第一章：第二段對話資料庫
const ch1Dialogue2Images = [
  "images/第一章_更樓_09.png",
  "images/第一章_更樓_10.png",
  "images/第一章_更樓_11.png",
  "images/第一章_更樓_12.png",
  "images/第一章_更樓_13.png",
  "images/第一章_更樓_14.png",
  // 記得在這裡補上 10, 11, 12, 13, 14 的圖
];
let currentCh1Dialogue2Index = 0;

const ch1Dialogue3Images = [
  "images/第一章_更樓_17.png",
  "images/第一章_更樓_18.png",
  "images/第一章_更樓_19.png",
  "images/第一章_更樓_20.png",
  "images/第一章_更樓_21.png",
]; // Q1 答對後
let currentCh1Dialogue3Index = 0;

const ch1Dialogue4Images = [
  "images/第一章_更樓_24.png",
  "images/第一章_更樓_25.png",
  "images/第一章_更樓_26.png",
  "images/第一章_更樓_27.png",
  "images/第一章_更樓_28.png",
  "images/第一章_更樓_29.png",
  "images/第一章_更樓_30.png",
  "images/第一章_更樓_31.png",
  "images/第一章_更樓_32.png",
]; // Q2 答對後
let currentCh1Dialogue4Index = 0;

const ch1Dialogue5Images = [
  "images/第一章_更樓_35.png",
  "images/第一章_更樓_36.png",
  "images/第一章_更樓_37.png",
  "images/第一章_更樓_38.png",
  "images/第一章_更樓_39.png",
]; // Q3 答對後
let currentCh1Dialogue5Index = 0;

// 第一章：對話六 (拿到徽章前)
const ch1Dialogue6Images = [
  "images/第一章_更樓_42.png",
  "images/第一章_更樓_43.png",
  "images/第一章_更樓_44.png",
  "images/第一章_更樓_45.png",
  "images/第一章_更樓_46.png",
  "images/第一章_更樓_47.png", // 這裡請依序補齊 43~47 的圖檔名
];
let currentCh1Dialogue6Index = 0;

// 抓取畫面
const startScreen = document.getElementById("start-screen");
const noticeScreen = document.getElementById("notice-screen");
const introScreen = document.getElementById("intro-screen");
const tutorialStep1Screen = document.getElementById("tutorial-step1-screen");
const tutorialStep2Screen = document.getElementById("tutorial-step2-screen"); // 新增：教學 2/2 畫面
const homeScreen = document.getElementById("home-screen");
const prologueScreen = document.getElementById("prologue-screen");
const prologueScreen2 = document.getElementById("prologue-screen-2");

// ==========================================
// 2. 設定按鈕的點擊事件 (確保單一的過場動線)
// ==========================================

// 第一關：點擊「開始遊戲」，從【開場畫面】切換到【注意事項】
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  noticeScreen.classList.remove("hidden");
});

// 第二關：點擊「下一步」，從【注意事項】切換到【操作介紹】
nextBtn.addEventListener("click", () => {
  noticeScreen.classList.add("hidden");
  introScreen.classList.remove("hidden");
});

// 第三關：點擊「開始介紹」，進入第一步教學
introBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  tutorialStep1Screen.classList.remove("hidden");
});

// 第四關：點擊「下一步」，從 教學 1/2 ➔ 教學 2/2
tutorialNextBtn.addEventListener("click", () => {
  tutorialStep1Screen.classList.add("hidden");
  tutorialStep2Screen.classList.remove("hidden");
});

// 第五關：點擊「開始遊戲」，從 教學 2/2 ➔ 前言故事
tutorialFinishBtn.addEventListener("click", () => {
  tutorialStep2Screen.classList.add("hidden");
  prologueScreen.classList.remove("hidden");
});

// 第六關：點擊「前言 1」，從 前言故事 1 ➔ 前言故事 2
prologueScreen.addEventListener("click", () => {
  prologueScreen.classList.add("hidden");
  prologueScreen2.classList.remove("hidden");
});

// 第七關：點擊「前言 2」，從 前言故事 2 ➔ 劇情輪播區
prologueScreen2.addEventListener("click", () => {
  prologueScreen2.classList.add("hidden");
  dialogueScreen.classList.remove("hidden");
});

// 第八關：點擊螢幕換圖（點擊頂部 10% = 上一頁，其餘 90% = 下一頁）
dialogueScreen.addEventListener("click", (event) => {
  // 1. 取得使用者點擊螢幕時的 Y 座標 (垂直位置)
  const clickY = event.clientY;

  // 2. 設定「上一頁」的感應區：螢幕高度的前 20% (5分之1)
  const topAreaHeight = window.innerHeight * 0.2;

  // 3. 判斷點擊位置在哪裡？
  if (clickY < topAreaHeight) {
    // 【點擊頂部 10% 區域】：返回上一頁
    if (currentDialogueIndex > 0) {
      // 只要不是第一張圖，就把數字 -1，並換成上一張圖
      currentDialogueIndex--;
      dialogueImage.src = dialogueImages[currentDialogueIndex];
    }
  } else {
    // 【點擊其餘 90% 區域】：前進下一頁
    currentDialogueIndex++;

    if (currentDialogueIndex < dialogueImages.length) {
      dialogueImage.src = dialogueImages[currentDialogueIndex];
    } else {
      // 如果圖都播完了，就隱藏對話區，顯示遊戲首頁
      dialogueScreen.classList.add("hidden");
      homeScreen.classList.remove("hidden");
    }
  }
});

// ==========================================
// 首頁功能
// ==========================================

// 右箭頭：下一關
hitboxNext.addEventListener("click", () => {
  if (currentChIndex < chaptersImages.length - 1) {
    currentChIndex++;
    homeBgImage.src = chaptersImages[currentChIndex];
  }
});

// 左箭頭：上一關
hitboxPrev.addEventListener("click", () => {
  if (currentChIndex > 0) {
    currentChIndex--;
    homeBgImage.src = chaptersImages[currentChIndex];
  }
});

// 點擊 Play 鍵 (先暫時設定為直接進入該章節)
hitboxPlay.addEventListener("click", () => {
  // 這裡我們直接抓取目前的 index + 1 來代表章節數字
  alert("準備進入章節 " + (currentChIndex + 1));
});

// 點擊成就
hitboxAchievement.addEventListener("click", () => {
  alert("打開成就系統！");
});

// 點擊徽章
hitboxBadge.addEventListener("click", () => {
  alert("打開徽章系統！");
});

// 點擊首頁 Play 鍵
hitboxPlay.addEventListener("click", () => {
  if (currentChIndex === 0) {
    // 如果是第 0 個（第一章），就進入任務畫面
    homeScreen.classList.add("hidden");
    ch1TaskScreen.classList.remove("hidden");
  } else {
    // 防呆機制：其他章節還沒做
    alert("此關卡尚未開放！");
  }
});

// ==========================================
// 第一章功能
// ==========================================

// 點擊「已抵達」，從任務畫面 ➔ 進入對話畫面
hitboxArrived.addEventListener("click", () => {
  ch1TaskScreen.classList.add("hidden");
  ch1DialogueScreen.classList.remove("hidden");
});

// 點擊螢幕換第一章對話圖 (頂部 10% 上一頁，其餘下一頁)
ch1DialogueScreen.addEventListener("click", (event) => {
  const clickY = event.clientY;
  const topAreaHeight = window.innerHeight * 0.2; // 你把這裡調成 20%，很棒的防誤觸微調！

  if (clickY < topAreaHeight) {
    // 上一頁
    if (currentCh1DialogueIndex > 0) {
      currentCh1DialogueIndex--;
      ch1DialogueImage.src = ch1DialogueImages[currentCh1DialogueIndex];
    }
  } else {
    // 下一頁
    currentCh1DialogueIndex++;

    if (currentCh1DialogueIndex < ch1DialogueImages.length) {
      ch1DialogueImage.src = ch1DialogueImages[currentCh1DialogueIndex];
    } else {
      // ==========================================
      // 對話播完後，完美銜接到「任務二：前往更樓」畫面
      // ==========================================
      ch1DialogueScreen.classList.add("hidden");
      ch1Task2Screen.classList.remove("hidden"); // 這裡換成剛剛建好的新畫面！
    }
  }
});

// ==========================================
// 第一章：更樓解謎模組
// ==========================================

// (這裡假設你前一段對話結束後，是跳轉到 ch1Task2Screen，請記得修改前一段的結尾設定)

// 1. 任務二：點擊「已抵達」 ➔ 進入對話二
hitboxArrived2.addEventListener("click", () => {
  ch1Task2Screen.classList.add("hidden");
  ch1Dialogue2Screen.classList.remove("hidden");
});

// 2. 對話二：點擊螢幕換圖
ch1Dialogue2Screen.addEventListener("click", (event) => {
  const clickY = event.clientY;
  const topAreaHeight = window.innerHeight * 0.1;

  if (clickY < topAreaHeight) {
    // 上一頁
    if (currentCh1Dialogue2Index > 0) {
      currentCh1Dialogue2Index--;
      ch1Dialogue2Image.src = ch1Dialogue2Images[currentCh1Dialogue2Index];
    }
  } else {
    // 下一頁
    currentCh1Dialogue2Index++;
    if (currentCh1Dialogue2Index < ch1Dialogue2Images.length) {
      ch1Dialogue2Image.src = ch1Dialogue2Images[currentCh1Dialogue2Index];
    } else {
      // 對話播完 ➔ 進入問題畫面
      ch1Dialogue2Screen.classList.add("hidden");
      ch1Question1Screen.classList.remove("hidden");
    }
  }
});

// 3. 問題畫面：點擊右上角提示 ➔ 顯示提示畫面
hitboxHintBtn.addEventListener("click", () => {
  ch1Question1Screen.classList.add("hidden");
  ch1Hint1Screen.classList.remove("hidden");
});

// 4. 提示畫面：點擊叉叉 ➔ 回到問題畫面
hitboxCloseHint.addEventListener("click", () => {
  ch1Hint1Screen.classList.add("hidden");
  ch1Question1Screen.classList.remove("hidden");
});

// 5. 核心解謎邏輯：四個選項
const showWrongScreen = () => {
  ch1Question1Screen.classList.add("hidden");
  ch1Wrong1Screen.classList.remove("hidden");
};

hitboxOptA.addEventListener("click", showWrongScreen); // 梅花 (錯)
hitboxOptC.addEventListener("click", showWrongScreen); // 蓮花 (錯)
hitboxOptD.addEventListener("click", showWrongScreen); // 松樹 (錯)

hitboxOptB.addEventListener("click", () => {
  // 竹子 (正確答案)
  ch1Question1Screen.classList.add("hidden");
  ch1Correct1Screen.classList.remove("hidden");
});

// 6. 答錯畫面：點擊任意處 ➔ 退回問題畫面再試一次
ch1Wrong1Screen.addEventListener("click", () => {
  ch1Wrong1Screen.classList.add("hidden");
  ch1Question1Screen.classList.remove("hidden");
});

// 7. 答對畫面：點擊任意處 ➔ 繼續後續劇情
ch1Correct1Screen.addEventListener("click", () => {
  alert("解謎成功！準備進入下一段劇情。");
  // 未來可以在這裡串接下一個對話模組
});

// ==========================================
// 流程邏輯串接
// ==========================================

// --- 修正 Q1 的答對邏輯：直接進入對話三 ---
// (請找到你原本寫的 hitboxOptB.addEventListener，把它改成這樣)
hitboxOptB.addEventListener("click", () => {
  ch1Question1Screen.classList.add("hidden");
  ch1Dialogue3Screen.classList.remove("hidden"); // 直接接對話，拔掉 Correct1Screen
});

// --- 對話三：點擊換圖 ➔ 進入問題二 ---
ch1Dialogue3Screen.addEventListener("click", (event) => {
  if (event.clientY < window.innerHeight * 0.2) {
    if (currentCh1Dialogue3Index > 0) {
      currentCh1Dialogue3Index--;
      ch1Dialogue3Image.src = ch1Dialogue3Images[currentCh1Dialogue3Index];
    }
  } else {
    currentCh1Dialogue3Index++;
    if (currentCh1Dialogue3Index < ch1Dialogue3Images.length) {
      ch1Dialogue3Image.src = ch1Dialogue3Images[currentCh1Dialogue3Index];
    } else {
      ch1Dialogue3Screen.classList.add("hidden");
      ch1Question2Screen.classList.remove("hidden");
    }
  }
});

// --- 問題二 (對聯)：邏輯 ---
q2HintBtn.addEventListener("click", () => {
  ch1Question2Screen.classList.add("hidden");
  ch1Hint2Screen.classList.remove("hidden");
});
q2CloseHint.addEventListener("click", () => {
  ch1Hint2Screen.classList.add("hidden");
  ch1Question2Screen.classList.remove("hidden");
});

const showWrong2 = () => {
  ch1Question2Screen.classList.add("hidden");
  ch1Wrong2Screen.classList.remove("hidden");
};
q2OptA.addEventListener("click", showWrong2);
q2OptB.addEventListener("click", showWrong2);
q2OptC.addEventListener("click", showWrong2);
q2OptD.addEventListener("click", () => {
  // 正解：選項 D (脩萬間廣廈)
  ch1Question2Screen.classList.add("hidden");
  ch1Dialogue4Screen.classList.remove("hidden");
});
ch1Wrong2Screen.addEventListener("click", () => {
  ch1Wrong2Screen.classList.add("hidden");
  ch1Question2Screen.classList.remove("hidden");
});

// --- 對話四：點擊換圖 ➔ 進入問題三 ---
ch1Dialogue4Screen.addEventListener("click", (event) => {
  if (event.clientY < window.innerHeight * 0.2) {
    if (currentCh1Dialogue4Index > 0) {
      currentCh1Dialogue4Index--;
      ch1Dialogue4Image.src = ch1Dialogue4Images[currentCh1Dialogue4Index];
    }
  } else {
    currentCh1Dialogue4Index++;
    if (currentCh1Dialogue4Index < ch1Dialogue4Images.length) {
      ch1Dialogue4Image.src = ch1Dialogue4Images[currentCh1Dialogue4Index];
    } else {
      ch1Dialogue4Screen.classList.add("hidden");
      ch1Question3Screen.classList.remove("hidden");
    }
  }
});

// --- 問題三 (農作物)：邏輯 ---
q3HintBtn.addEventListener("click", () => {
  ch1Question3Screen.classList.add("hidden");
  ch1Hint3Screen.classList.remove("hidden");
});
q3CloseHint.addEventListener("click", () => {
  ch1Hint3Screen.classList.add("hidden");
  ch1Question3Screen.classList.remove("hidden");
});

const showWrong3 = () => {
  ch1Question3Screen.classList.add("hidden");
  ch1Wrong3Screen.classList.remove("hidden");
};
q3OptB.addEventListener("click", showWrong3);
q3OptA.addEventListener("click", showWrong3);
q3OptD.addEventListener("click", showWrong3);
q3OptC.addEventListener("click", () => {
  // 假設正解：選項 A (絲瓜)
  ch1Question3Screen.classList.add("hidden");
  ch1Dialogue5Screen.classList.remove("hidden");
});
ch1Wrong3Screen.addEventListener("click", () => {
  ch1Wrong3Screen.classList.add("hidden");
  ch1Question3Screen.classList.remove("hidden");
});

// --- 對話五：點擊換圖 ➔ 進入問題四 (石獅子密碼) ---
ch1Dialogue5Screen.addEventListener("click", (event) => {
  if (event.clientY < window.innerHeight * 0.2) {
    if (currentCh1Dialogue5Index > 0) {
      currentCh1Dialogue5Index--;
      ch1Dialogue5Image.src = ch1Dialogue5Images[currentCh1Dialogue5Index];
    }
  } else {
    currentCh1Dialogue5Index++;
    if (currentCh1Dialogue5Index < ch1Dialogue5Images.length) {
      ch1Dialogue5Image.src = ch1Dialogue5Images[currentCh1Dialogue5Index];
    } else {
      // ==========================================
      // 就是這裡！對話五播完後，完美銜接進入問題四
      // ==========================================
      ch1Dialogue5Screen.classList.add("hidden");
      ch1Question4Screen.classList.remove("hidden");
    }
  }
});

// ==========================================
// 修正：對話五播完後 ➔ 進入問題四 (石獅子密碼)
// ==========================================
// 請把你原本對話五的 else 區塊替換成這樣：
// } else {
//     ch1Dialogue5Screen.classList.add("hidden");
//     ch1Question4Screen.classList.remove("hidden"); // 接續到問題四
// }

// --- 問題四 (石獅子)：邏輯 ---
q4HintBtn.addEventListener("click", () => {
  ch1Question4Screen.classList.add("hidden");
  ch1Hint4Screen.classList.remove("hidden");
});
q4CloseHint.addEventListener("click", () => {
  ch1Hint4Screen.classList.add("hidden");
  ch1Question4Screen.classList.remove("hidden");
});

const showWrong4 = () => {
  ch1Question4Screen.classList.add("hidden");
  ch1Wrong4Screen.classList.remove("hidden");
};

// 假設正確解答是 04 16 (選項 C)，你可以根據實際謎底修改
q4OptA.addEventListener("click", showWrong4);
q4OptB.addEventListener("click", showWrong4);
q4OptD.addEventListener("click", showWrong4);
q4OptC.addEventListener("click", () => {
  ch1Question4Screen.classList.add("hidden");
  ch1Dialogue6Screen.classList.remove("hidden");
});

ch1Wrong4Screen.addEventListener("click", () => {
  ch1Wrong4Screen.classList.add("hidden");
  ch1Question4Screen.classList.remove("hidden");
});

// --- 對話六：點擊換圖 ➔ 獲得徽章 ---
ch1Dialogue6Screen.addEventListener("click", (event) => {
  if (event.clientY < window.innerHeight * 0.2) {
    if (currentCh1Dialogue6Index > 0) {
      currentCh1Dialogue6Index--;
      ch1Dialogue6Image.src = ch1Dialogue6Images[currentCh1Dialogue6Index];
    }
  } else {
    currentCh1Dialogue6Index++;
    if (currentCh1Dialogue6Index < ch1Dialogue6Images.length) {
      ch1Dialogue6Image.src = ch1Dialogue6Images[currentCh1Dialogue6Index];
    } else {
      // 對話結束 ➔ 顯示獲得徽章畫面！
      ch1Dialogue6Screen.classList.add("hidden");
      ch1Badge1Screen.classList.remove("hidden");
    }
  }
});

// --- 獲得徽章：點擊繼續遊玩 ➔ 任務三 (前往鳥居) ---
hitboxContinue1.addEventListener("click", () => {
  ch1Badge1Screen.classList.add("hidden");
  ch1Task3Screen.classList.remove("hidden");
});

// --- 任務三：點擊已抵達 ➔ 準備進入鳥居篇！ ---
hitboxArrived3.addEventListener("click", () => {
  alert("抵達鳥居！更樓篇章完美結束！這裡之後可以接鳥居的對話。");
});
