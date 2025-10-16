// ページの読み込みが完了したら、中の処理を実行する
window.onload = function() {

  // 時計を更新する関数
  function updateClock() {
    // 現在時刻を取得
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 1桁の場合は0を付ける
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    // 時刻を表示
    const timeString = hours + ':' + minutes + ':' + seconds;
    const clockElement = document.getElementById('clock');
    
    // clock要素が存在する場合のみ、中身を書き換える
    if (clockElement) {
      clockElement.innerHTML = timeString;
    }
  }

  // 1. まずページ読み込み直後に一度、時計を表示する
  updateClock();
  
  // 2. その後、1秒ごとに時計を更新し続ける
  setInterval(updateClock, 1000);
  
};
