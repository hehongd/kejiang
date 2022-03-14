//获取视频容器对象
let videoContainerEle = document.getElementById('video-container');
//获取HTMLVideoElement对象
let videoEle = document.getElementById('video');
//获取播放/暂停的按钮对象
let controlButtonEle = document.getElementById('control-button');
//获取播放/暂停的图标对象
let controlIconEle = document.getElementById('control-icon');
//获取开启/关闭静音按钮
let volumeButtonEle = document.getElementById('volume-button');
//获取开启/关闭静音的图标对象
let volumeIconEle = document.getElementById('volume-icon');
//获取音量滑块对象
let volumeEle = document.getElementById('volume');
//获取进入/退出全屏按钮 
let fullscreenButtonEle = document.getElementById('fullscreen-button');
//获取进入/退出全屏的图标对象
let fullsceenIconEle = document.getElementById('fullsceen-icon');
//获取当前时间对象
let timeElapsedEle = document.getElementById('time-elapsed');
//获取总时长对象
let durationEle = document.getElementById('duration');
//获取进度条对象
let progressBarEle = document.getElementById('progress-bar');
//获取进度长滑块对象
let seekEle = document.getElementById('seek');

//播放/暂停按钮的事件
controlButtonEle.addEventListener('click', () => {
  //视频对象暂停或播放结束时,单击按钮时应播放视频,否则暂停视频
  if (videoEle.paused || videoEle.ended) {
    //媒体播放
    videoEle.play();
    //显示暂停图标
    controlIconEle.src = 'icons/pause.png';
  } else {
    //媒体暂停
    videoEle.pause();
    //显示播放图标
    controlIconEle.src = 'icons/play.png';
  }
});

//开启/关闭静音按钮的事件
volumeButtonEle.addEventListener('click', () => {
  videoEle.muted = !videoEle.muted;
  if (videoEle.muted) {
    //显示静音图标
    volumeIconEle.src = 'icons/volume-off.png';
    //将静音之前的音量存储到自定义属性data-volume中
    volumeEle.dataVolume = volumeEle.value;
    //调整音量滑块的值为0
    volumeEle.value = 0;

  } else {
    //显示非静音图标
    volumeIconEle.src = 'icons/volume-on.png';
    //将自定义属性data-volume中的值重新赋予音量滑块
    volumeEle.value = volumeEle.dataVolume;
  }
});

//音量滑动对象的事件
volumeEle.addEventListener('input', () => {
  //如果已静音,此时再向右滑动动块
  if (videoEle.muted) {
    //视频取消静音
    videoEle.muted = false;
    //显示非静音图标
    volumeIconEle.src = 'icons/volume-on.png';
  }
  //如果当前音量滑动的值为0,则视频静音,并显示静音图标
  if (volumeEle.value == 0) {
    //视频静音
    videoEle.muted = true;
    //显示静音图标
    volumeIconEle.src = 'icons/volume-off.png';
  } else {
    videoEle.muted = false;
    volumeIconEle.src = 'icons/volume-on.png';
  }
  //调整视频音量
  videoEle.volume = volumeEle.value;
});

//进入/退出全屏按钮的事件
fullscreenButtonEle.addEventListener('click', () => {
  if (getFullscreenElement()) {
    //退出全屏
    exitFullscreen();
    //显示进入全屏图标 
    fullsceenIconEle.src = 'icons/fullscreen.png';
  } else {
    //进入全屏 -- 视频容器对象进入全屏!
    enterFullscreen(videoContainerEle);
    //显示退出全屏图标
    fullsceenIconEle.src = 'icons/fullscreen-exit.png';
  }
});

//视频对象的事件 -- loadeddata -- 可更换为 canplay或canplaythrough
videoEle.addEventListener('loadeddata', () => {
  //当前时间
  timeElapsedEle.innerText = formatTime(parseInt(videoEle.currentTime));
  //总时长
  durationEle.innerText = formatTime(parseInt(videoEle.duration));
  //将总时长分别设置为进度条及进度条滑块的最大值
  progressBarEle.max = parseInt(videoEle.duration);
  seekEle.max = parseInt(videoEle.duration);
});

//视频对象的事件 -- timeupdate
videoEle.addEventListener('timeupdate', () => {
  //实时更新当前时间
  timeElapsedEle.innerText = formatTime(parseInt(videoEle.currentTime));
  //实时调整进度条及进度条滑块的值为当前播放时间
  progressBarEle.value = parseInt(videoEle.currentTime);
  seekEle.value = parseInt(videoEle.currentTime);
});

//进度条滑块的事件
seekEle.addEventListener('input', () => {
  videoEle.currentTime = parseInt(seekEle.value);
});

//进入全屏的函数
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

//退出全屏的函数
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullScreen) {
    document.webkitExitFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

//获取当前全屏的元素
function getFullscreenElement() {
  return document.fullscreenElement ||
    document.webkitFullScreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;
}

//时间格式化函数
function formatTime(time) {
  let hours = parseInt(time / 3600);
  let minuts = parseInt((time - hours * 3600) / 60);
  let seconds = parseInt(time % 60);
  hours = hours < 10 ? '0' + hours : hours;
  minuts = minuts < 10 ? '0' + minuts : minuts;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minuts + ':' + seconds;
}