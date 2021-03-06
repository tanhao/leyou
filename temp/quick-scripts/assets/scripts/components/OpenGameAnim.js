(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/components/OpenGameAnim.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd2217c86EVGNJ6DFjlDcITK', 'OpenGameAnim', __filename);
// scripts/components/OpenGameAnim.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        if (th == null) {
            return;
        }
        this.node.active = false;
    },
    show: function show() {
        var _this = this;

        this.node.active = true;
        var left = this.node.getChildByName("open1");
        var right = this.node.getChildByName("open2");

        var txt1 = this.node.getChildByName("open4");
        var txt2 = this.node.getChildByName("open3");

        txt1.active = false;
        txt2.active = false;
        txt2.scale = 1;
        left.x = -600;
        right.x = 600;

        left.runAction(cc.moveTo(0.3, cc.v2(-150, 0)).easing(cc.easeBackOut()));
        right.runAction(cc.sequence(cc.moveTo(0.3, cc.v2(150, 0)).easing(cc.easeBackOut()), cc.callFunc(function () {
            txt1.active = true;
            txt2.active = true;
            txt2.runAction(cc.sequence(cc.fadeIn(0), cc.spawn(cc.scaleTo(0.5, 1.3), cc.fadeOut(0.5))));
        }), cc.delayTime(0.8), cc.callFunc(function () {
            _this.node.active = false;
        })));
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=OpenGameAnim.js.map
        