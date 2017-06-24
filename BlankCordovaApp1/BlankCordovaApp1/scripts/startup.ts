import * as Application from './application';

declare var require: (modules: string[], ready: Function, errback: Function) => void;

// /merges 폴더에서 플랫폼별 코드를 로드해 보세요.
// 자세한 내용은 http://taco.visualstudio.com/ko-kr/docs/configure-app/#Content를 참조하세요.
require(["./platformOverrides"],
    () => Application.initialize(),
    () => Application.initialize());