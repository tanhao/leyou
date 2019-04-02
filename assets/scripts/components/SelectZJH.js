cc.Class({
    extends: cc.Component,

    properties: {},

    start() {},

    onCloseClicked: function(target) {
        th.audioManager.playSFX("click.mp3");
        this.node.runAction(
            cc.moveTo(0.2, cc.v2(0, -th.height)).easing(cc.easeSineIn())
        );
    },
    onGameChecked: function(trage, type) {
        cc.log("炸金花选择类别:", type);
        //TODO
        th.audioManager.playSFX("click.mp3");
        switch (type) {
            case "jdzjh":
                break;
            case "dpzjh":
                break;
            case "xzzjh":
                break;
            case "lzzjh":
                break;
            case "hpzjh":
                break;
            case "cjzjh":
                break;
            case "mpzjh":
                break;
        }
    }
});