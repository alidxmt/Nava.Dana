var oscillator = null;
var isPlaying = false;

function dec(decreaseTime) {
    volume.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+decreaseTime)
}
function makectn() {
        var context = new AudioContext();
        var volume = context.createGain();
        volume.connect(context.destination);
        oscillator = context.createOscillator();
        oscillator.type = 'sine';
        volume.gain.setValueAtTime(1, context.currentTime);
        oscillator.frequency.setValueAtTime(0, context.currentTime);
        oscillator.connect(volume);
}


function play(Lfreq, Lgain) {


        volume.gain.setValueAtTime(Lgain, context.currentTime);
        oscillator.frequency.value = Lfreq;
}
function BeginPlay() {
    let _vl = document.getElementById('btn-bgntoPlay');
    if (_vl.value=='begin') {
        makectn();
        oscillator.start(); 
        _vl.value = 'stop';
    }
    else {
        if (_vl.value=='stop') {
            _vl.value = 'continue';
            oscillator.stop();

        }
        else {
            _vl.value = 'stop';
            makectn();
            oscillator.start();
        }
    }
}
