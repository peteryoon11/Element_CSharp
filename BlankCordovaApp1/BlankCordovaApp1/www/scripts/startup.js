define(["require", "exports", "./application"], function (require, exports, Application) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // /merges 폴더에서 플랫폼별 코드를 로드해 보세요.
    // 자세한 내용은 http://taco.visualstudio.com/ko-kr/docs/configure-app/#Content를 참조하세요.
    require(["./platformOverrides"], function () { return Application.initialize(); }, function () { return Application.initialize(); });
});
//# sourceMappingURL=startup.js.map