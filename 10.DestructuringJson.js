let news = [
    {
        "title" : "sbs",
        "imgurl" : "https://newsstand.naver.com/?list=&pcode=904",
        "newslist" : [
            "하이브, 카카오에 SM 넘긴다…\주주가치에 부정적 영향",
            "정부, 이르면 3월 말 내수 대책 \관광·소상공인 지원안",
            "[날씨] 전국 흐리고 비 '기온 뚝'…밤부터 한파주의보\n"
        ]
    },
    {
        "title": "mbc",
        "imgurl": "https://newsstand.naver.com/?list=&pcode=214",
        "newslist": [
            "폭행 신고를 받고 출동한 경찰관들이 '잠시 자리를 비켜달라'는 가해자의 요구를 들어줬다가 2차 폭행이 발생한 데 대해 국가가 배상하라는 법원 판단이 나왔습니다.",
            "서울중앙지법은 지난 2019년 5월 3명으로부터 폭행을 당해 7주 동안 치료를 받은 피해자가 가해자와 국가를 상대로 낸 손해배상 소송에서 가해자들은 피해자에게 2천3백만 원을 지급하고 이 가운데 980만 원은 국가가 부담하라고 판결했습니다.\n",
            "폭행 당시 현장에 경찰관 5명이 출동했지만, 가해자들이 \"피해자와 대화할 수 있게 자리를 비켜달라\"고 요청했고, 경찰관들이 현장을 벗어난 뒤 가해자들의 폭행은 계속된 것으로 조사됐습니다."

        ]

    }
];
/*

let [,mbc] = news;
// console.log(mbc)

let {title, imgurl} = mbc;
console.log(title, imgurl)
*/

let [, {title, imgurl}] = news;

console.log(imgurl)//json 파싱

