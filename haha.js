// 產生一個 1 到 100 的隨機數字作為答案
const answer = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    // 獲取使用者輸入的數字
    const userInput = parseInt(document.getElementById('userInput').value);

    // 比較使用者輸入的數字與答案
    if (userInput > answer) {
        document.getElementById('result').innerText = '太大';
    } else if (userInput < answer) {
        document.getElementById('result').innerText = '太小';
    } else {
        document.getElementById('result').innerText = '你真棒！';
    }
}
