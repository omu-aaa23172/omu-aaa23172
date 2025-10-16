function updateClock() {
            // 現在時刻を取得
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            
            // 1桁の場合は0を付ける
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;
            if (seconds < 10) seconds = '0' + seconds;
            
            // 時刻を表示
            var timeString = hours + ':' + minutes + ':' + seconds;
            document.getElementById('clock').innerHTML = timeString;
        }
        
        // 1秒ごとにupdateClock関数を実行
        setInterval(updateClock, 1000);
        
        // ページ読み込み時に即座に表示
        window.onload = updateClock;
