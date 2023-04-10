// 国ごとの情報をオブジェクトに定義する
const countries = {
    china: {
        imgSrc: "image/china-national-flag.PNG", // 画像のパス
        linkHref: "https://ja.wikipedia.org/wiki/%E4%B8%AD%E8%8F%AF%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD" // リンク先のURL
    },
    india: {
        imgSrc: "image/india-national-flag.PNG",
        linkHref: "https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%83%89"
    },
    thailand: {
        imgSrc: "image/thailand-national-flag.PNG",
        linkHref: "https://ja.wikipedia.org/wiki/%E3%82%BF%E3%82%A4%E7%8E%8B%E5%9B%BD"
    },
    russia: {
        imgSrc: "image/russia-national-flag.PNG",
        linkHref: "https://ja.wikipedia.org/wiki/%E3%83%AD%E3%82%B7%E3%82%A2"
    }
};

// HTML要素を取得する
const select = document.querySelector("#countries"); // セレクトボックス
const img = document.querySelector("[name='area']"); // 画像要素
const link = document.querySelector("#area"); // リンク要素

// セレクトボックスの値が変更された時の処理を定義する
select.addEventListener("change", () => {
    const value = select.value; // 選択された値を取得する

    // 選択された値がオブジェクトに存在する場合は、画像とリンクを更新する
    if (value in countries) {
        const { imgSrc, linkHref } = countries[value]; // 選択された国の情報を取得する
        img.src = imgSrc; // 画像のパスを設定する
        link.href = linkHref; // リンク先のURLを設定する
    }
});