"use strict";
cc._RF.push(module, 'fa54dOcZ0JBmamEiBbmaJ6H', 'CopyRoomUrl');
// scripts/components/CopyRoomUrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        lblTitle: cc.Label,
        lblContent: cc.Label
    },

    onLoad: function onLoad() {
        if (th == null) {
            return;
        }
        this.node.active = false;
    },

    // update: function (dt) {

    // },
    show: function show() {
        this.node.x = 0;
        this.node.y = 0;
        this.node.active = true;

        this.lblTitle.string = "天珠大厅：" + th.gametype.toUpperCase() + th.room.room_number + "房间";
        this.lblContent.string = "房间连接：" + th.room.copyurl;
    },


    onCloseClicked: function onCloseClicked(targer, value) {
        th.audioManager.playSFX("click.mp3");
        this.node.active = false;
    },

    onCopyClicked: function onCopyClicked() {
        th.audioManager.playSFX("click.m4a");
        this.node.active = false;
        var result = th.webCopyString(th.room.copyurl);
        cc.log("address:", th.room.copyurl);
        th.msg.show(result ? "复制成功！" : "复制失败");
    }
});

cc._RF.pop();