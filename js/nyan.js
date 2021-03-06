var NyanCat = function() {
    return {
        init: function() {
            this.cat = $('#nyan-cat');
            this.framesAmount = 6;
            this.currentFrame = 1;
        },

        cycleFrames: function() {
            var myself = this;
            this.cat.removeClass('frame' + myself.currentFrame).addClass('frame' + myself.cycleIds(myself.currentFrame));
            this.currentFrame = this.cycleIds(this.currentFrame);
        },

        cycleIds: function(_currId) {
            if (_currId >= this.framesAmount) {
                _currId = 1;
            } else {
                _currId += 1;
            }

            return _currId;
        }
    }
}

var Sparks = function() {
    return {
        init: function(_combo) {
            var yCombosAmount = Math.ceil($(document).height() / _combo.height()),
                comboTags = $(document.createElement('div')),
                newCombo = null;

            $('.cat-container').prepend(comboTags.html());
        }
    }
};

$(function() {
    var nyancat = new NyanCat(),
        sparks = new Sparks();

    nyancat.init();
    sparks.init($('.sparks-combo'));

    var timer = setInterval(function() {
        nyancat.cycleFrames();
    }, 70);
});

function toggleAudio() {
    var audio = $("#nyan-sound")[0];
    if (audio.paused) {
        audio.play();
        toggleAudioIcon()
    } else {
        audio.pause();
        toggleAudioIcon()
    }
}

function toggleAudioIcon() {
    if ($('#audio-button-icon').hasClass('glyphicon-volume-off')) {
        $('#audio-button-icon').removeClass('glyphicon-volume-off');
        $('#audio-button-icon').addClass('glyphicon-volume-up');
    } else {
        $('#audio-button-icon').removeClass('glyphicon-volume-up');
        $('#audio-button-icon').addClass('glyphicon-volume-off');
    }
}