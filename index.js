const _subway = require("./modules/index.js");
const _fs = require("fs");

function getSubwayDataPromise() {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log('요청을 보냈습니다');
            resolve(_subway.loadTrainInfo()) // 내가 원하는 작업 시작
        },1000)
    })
}
getSubwayDataPromise().then(response => _fs.writeFileSync("result.json", JSON.stringify(response, null, 4)));
