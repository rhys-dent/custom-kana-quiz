export const vowels = ["a", "i", "e", "o", "u"];
export const consonants = {
	gojuon: ["k", "s", "t", "n", "h", "m", "y", "r", "w"],
	dakuon: ["g", "z", "d", "b"],
	handakuon: ["p"],
	n: ["n"],
};
//#region List of Kana Characters
export const hiraganaList = [
	{ char_id: "a", character: "あ", romanization: "a" },
	{ char_id: "i", character: "い", romanization: "i" },
	{ char_id: "u", character: "う", romanization: "u" },
	{ char_id: "e", character: "え", romanization: "e" },
	{ char_id: "o", character: "お", romanization: "o" },
	{ char_id: "ka", character: "か", romanization: "ka" },
	{ char_id: "ki", character: "き", romanization: "ki" },
	{ char_id: "ku", character: "く", romanization: "ku" },
	{ char_id: "ke", character: "け", romanization: "ke" },
	{ char_id: "ko", character: "こ", romanization: "ko" },
	{ char_id: "sa", character: "さ", romanization: "sa" },
	{ char_id: "si", character: "し", romanization: "shi" },
	{ char_id: "su", character: "す", romanization: "su" },
	{ char_id: "se", character: "せ", romanization: "se" },
	{ char_id: "so", character: "そ", romanization: "so" },
	{ char_id: "ta", character: "た", romanization: "ta" },
	{ char_id: "ti", character: "ち", romanization: "chi" },
	{ char_id: "tu", character: "つ", romanization: "tsu" },
	{ char_id: "te", character: "て", romanization: "te" },
	{ char_id: "to", character: "と", romanization: "to" },
	{ char_id: "na", character: "な", romanization: "na" },
	{ char_id: "ni", character: "に", romanization: "ni" },
	{ char_id: "nu", character: "ぬ", romanization: "nu" },
	{ char_id: "ne", character: "ね", romanization: "ne" },
	{ char_id: "no", character: "の", romanization: "no" },
	{ char_id: "ha", character: "は", romanization: "ha" },
	{ char_id: "hi", character: "ひ", romanization: "hi" },
	{ char_id: "hu", character: "ふ", romanization: "fu" },
	{ char_id: "he", character: "へ", romanization: "he" },
	{ char_id: "ho", character: "ほ", romanization: "ho" },
	{ char_id: "ma", character: "ま", romanization: "ma" },
	{ char_id: "mi", character: "み", romanization: "mi" },
	{ char_id: "mu", character: "む", romanization: "mu" },
	{ char_id: "me", character: "め", romanization: "me" },
	{ char_id: "mo", character: "も", romanization: "mo" },
	{ char_id: "ya", character: "や", romanization: "ya" },
	{ char_id: "yu", character: "ゆ", romanization: "yu" },
	{ char_id: "yo", character: "よ", romanization: "yo" },
	{ char_id: "ra", character: "ら", romanization: "ra" },
	{ char_id: "ri", character: "り", romanization: "ri" },
	{ char_id: "ru", character: "る", romanization: "ru" },
	{ char_id: "re", character: "れ", romanization: "re" },
	{ char_id: "ro", character: "ろ", romanization: "ro" },
	{ char_id: "wa", character: "わ", romanization: "wa" },
	{ char_id: "wi", character: "ゐ", romanization: "wi" },
	{ char_id: "we", character: "ゑ", romanization: "we" },
	{ char_id: "wo", character: "を", romanization: "wo" },
	{ char_id: "-n", character: "ん", romanization: "n" },
	{ char_id: "ga", character: "が", romanization: "ga" },
	{ char_id: "gi", character: "ぎ", romanization: "gi" },
	{ char_id: "gu", character: "ぐ", romanization: "gu" },
	{ char_id: "ge", character: "げ", romanization: "ge" },
	{ char_id: "go", character: "ご", romanization: "go" },
	{ char_id: "za", character: "ざ", romanization: "za" },
	{ char_id: "zi", character: "じ", romanization: "ji" },
	{ char_id: "zu", character: "ず", romanization: "zu" },
	{ char_id: "ze", character: "ぜ", romanization: "ze" },
	{ char_id: "zo", character: "ぞ", romanization: "zo" },
	{ char_id: "da", character: "だ", romanization: "da" },
	{ char_id: "di", character: "ぢ", romanization: "ji" },
	{ char_id: "du", character: "づ", romanization: "zu" },
	{ char_id: "de", character: "で", romanization: "de" },
	{ char_id: "do", character: "ど", romanization: "do" },
	{ char_id: "ba", character: "ば", romanization: "ba" },
	{ char_id: "bi", character: "び", romanization: "bi" },
	{ char_id: "bu", character: "ぶ", romanization: "bu" },
	{ char_id: "be", character: "べ", romanization: "be" },
	{ char_id: "bo", character: "ぼ", romanization: "bo" },
	{ char_id: "pa", character: "ぱ", romanization: "pa" },
	{ char_id: "pi", character: "ぴ", romanization: "pi" },
	{ char_id: "pu", character: "ぷ", romanization: "pu" },
	{ char_id: "pe", character: "ぺ", romanization: "pe" },
	{ char_id: "po", character: "ぽ", romanization: "po" },
	{ char_id: "vu", character: "ゔ", romanization: "vu" },
	{ char_id: "kya", character: "きゃ", romanization: "kya" },
	{ char_id: "kyu", character: "きゅ", romanization: "kyu" },
	{ char_id: "kyo", character: "きょ", romanization: "kyo" },
	{ char_id: "sya", character: "しゃ", romanization: "sha" },
	{ char_id: "syu", character: "しゅ", romanization: "shu" },
	{ char_id: "syo", character: "しょ", romanization: "sho" },
	{ char_id: "tya", character: "ちゃ", romanization: "cha" },
	{ char_id: "tyu", character: "ちゅ", romanization: "chu" },
	{ char_id: "tyo", character: "ちょ", romanization: "cho" },
	{ char_id: "nya", character: "にゃ", romanization: "nya" },
	{ char_id: "nyu", character: "にゅ", romanization: "nyu" },
	{ char_id: "nyo", character: "にょ", romanization: "nyo" },
	{ char_id: "hya", character: "ひゃ", romanization: "hya" },
	{ char_id: "hyu", character: "ひゅ", romanization: "hyu" },
	{ char_id: "hyo", character: "ひょ", romanization: "hyo" },
	{ char_id: "mya", character: "みゃ", romanization: "mya" },
	{ char_id: "myu", character: "みゅ", romanization: "myu" },
	{ char_id: "myo", character: "みょ", romanization: "myo" },
	{ char_id: "rya", character: "りゃ", romanization: "rya" },
	{ char_id: "ryu", character: "りゅ", romanization: "ryu" },
	{ char_id: "ryo", character: "りょ", romanization: "ryo" },
	{ char_id: "gya", character: "ぎゃ", romanization: "gya" },
	{ char_id: "gyu", character: "ぎゅ", romanization: "gyu" },
	{ char_id: "gyo", character: "ぎょ", romanization: "gyo" },
	{ char_id: "zya", character: "じゃ", romanization: "ja" },
	{ char_id: "zyu", character: "じゅ", romanization: "ju" },
	{ char_id: "zyo", character: "じょ", romanization: "jo" },
	{ char_id: "dya", character: "ぢゃ", romanization: "ja" },
	{ char_id: "dyu", character: "ぢゅ", romanization: "ju" },
	{ char_id: "dyo", character: "ぢょ", romanization: "jo" },
	{ char_id: "bya", character: "びゃ", romanization: "bya" },
	{ char_id: "byu", character: "びゅ", romanization: "byu" },
	{ char_id: "byo", character: "にょ", romanization: "byo" },
	{ char_id: "pya", character: "ぴゃ", romanization: "pya" },
	{ char_id: "pyu", character: "ぴゅ", romanization: "pyu" },
	{ char_id: "pyo", character: "ぴょ", romanization: "pyo" },
];
export const katakanaList = [
	{ char_id: "a", character: "ア", romanization: "a" },
	{ char_id: "i", character: "イ", romanization: "i" },
	{ char_id: "u", character: "ウ", romanization: "u" },
	{ char_id: "e", character: "エ", romanization: "e" },
	{ char_id: "o", character: "オ", romanization: "o" },
	{ char_id: "ka", character: "カ", romanization: "ka" },
	{ char_id: "ki", character: "キ", romanization: "ki" },
	{ char_id: "ku", character: "ク", romanization: "ku" },
	{ char_id: "ke", character: "ケ", romanization: "ke" },
	{ char_id: "ko", character: "コ", romanization: "ko" },
	{ char_id: "sa", character: "サ", romanization: "sa" },
	{ char_id: "si", character: "シ", romanization: "shi" },
	{ char_id: "su", character: "ス", romanization: "su" },
	{ char_id: "se", character: "セ", romanization: "se" },
	{ char_id: "so", character: "ソ", romanization: "so" },
	{ char_id: "ta", character: "タ", romanization: "ta" },
	{ char_id: "ti", character: "チ", romanization: "chi" },
	{ char_id: "tu", character: "ツ", romanization: "tsu" },
	{ char_id: "te", character: "テ", romanization: "te" },
	{ char_id: "to", character: "ト", romanization: "to" },
	{ char_id: "na", character: "ナ", romanization: "na" },
	{ char_id: "ni", character: "ニ", romanization: "ni" },
	{ char_id: "nu", character: "ヌ", romanization: "nu" },
	{ char_id: "ne", character: "ネ", romanization: "ne" },
	{ char_id: "no", character: "ノ", romanization: "no" },
	{ char_id: "ha", character: "ハ", romanization: "ha" },
	{ char_id: "hi", character: "ヒ", romanization: "hi" },
	{ char_id: "hu", character: "フ", romanization: "fu" },
	{ char_id: "he", character: "ヘ", romanization: "he" },
	{ char_id: "ho", character: "ホ", romanization: "ho" },
	{ char_id: "ma", character: "マ", romanization: "ma" },
	{ char_id: "mi", character: "ミ", romanization: "mi" },
	{ char_id: "mu", character: "ム", romanization: "mu" },
	{ char_id: "me", character: "メ", romanization: "me" },
	{ char_id: "mo", character: "モ", romanization: "mo" },
	{ char_id: "ya", character: "ヤ", romanization: "ya" },
	{ char_id: "yu", character: "ユ", romanization: "yu" },
	{ char_id: "yo", character: "ヨ", romanization: "yo" },
	{ char_id: "ra", character: "ラ", romanization: "ra" },
	{ char_id: "ri", character: "リ", romanization: "ri" },
	{ char_id: "ru", character: "ル", romanization: "ru" },
	{ char_id: "re", character: "レ", romanization: "re" },
	{ char_id: "ro", character: "ロ", romanization: "ro" },
	{ char_id: "wa", character: "ワ", romanization: "wa" },
	{ char_id: "wi", character: "ヰ", romanization: "wi" },
	{ char_id: "we", character: "ヱ", romanization: "we" },
	{ char_id: "wo", character: "ヲ", romanization: "wo" },
	{ char_id: "-n", character: "ン", romanization: "n" },
	{ char_id: "ga", character: "ガ", romanization: "ga" },
	{ char_id: "gi", character: "ギ", romanization: "gi" },
	{ char_id: "gu", character: "グ", romanization: "gu" },
	{ char_id: "ge", character: "ゲ", romanization: "ge" },
	{ char_id: "go", character: "ゴ", romanization: "go" },
	{ char_id: "za", character: "ザ", romanization: "za" },
	{ char_id: "zi", character: "ジ", romanization: "ji" },
	{ char_id: "zu", character: "ズ", romanization: "zu" },
	{ char_id: "ze", character: "ゼ", romanization: "ze" },
	{ char_id: "zo", character: "ゾ", romanization: "zo" },
	{ char_id: "da", character: "ダ", romanization: "da" },
	{ char_id: "di", character: "ヂ", romanization: "ji" },
	{ char_id: "du", character: "ヅ", romanization: "zu" },
	{ char_id: "de", character: "デ", romanization: "de" },
	{ char_id: "do", character: "ド", romanization: "do" },
	{ char_id: "ba", character: "バ", romanization: "ba" },
	{ char_id: "bi", character: "ビ", romanization: "bi" },
	{ char_id: "bu", character: "ブ", romanization: "bu" },
	{ char_id: "be", character: "ベ", romanization: "be" },
	{ char_id: "bo", character: "ボ", romanization: "bo" },
	{ char_id: "pa", character: "パ", romanization: "pa" },
	{ char_id: "pi", character: "ピ", romanization: "pi" },
	{ char_id: "pu", character: "プ", romanization: "pu" },
	{ char_id: "pe", character: "ペ", romanization: "pe" },
	{ char_id: "po", character: "ポ", romanization: "po" },
	{ char_id: "vu", character: "ヴ", romanization: "vu" },
	{ char_id: "kya", character: "キャ", romanization: "kya" },
	{ char_id: "kyu", character: "キュ", romanization: "kyu" },
	{ char_id: "kyo", character: "キョ", romanization: "kyo" },
	{ char_id: "sya", character: "シャ", romanization: "sha" },
	{ char_id: "syu", character: "シュ", romanization: "shu" },
	{ char_id: "syo", character: "ショ", romanization: "sho" },
	{ char_id: "cya", character: "チャ", romanization: "cha" },
	{ char_id: "cyu", character: "チュ", romanization: "chu" },
	{ char_id: "cyo", character: "チョ", romanization: "cho" },
	{ char_id: "nya", character: "ニャ", romanization: "nya" },
	{ char_id: "nyu", character: "ニュ", romanization: "nyu" },
	{ char_id: "nyo", character: "ニョ", romanization: "nyo" },
	{ char_id: "hya", character: "ヒャ", romanization: "hya" },
	{ char_id: "hyu", character: "ヒュ", romanization: "hyu" },
	{ char_id: "hyo", character: "ヒョ", romanization: "hyo" },
	{ char_id: "mya", character: "ミャ", romanization: "mya" },
	{ char_id: "myu", character: "ミュ", romanization: "myu" },
	{ char_id: "myo", character: "ミョ", romanization: "myo" },
	{ char_id: "rya", character: "リャ", romanization: "rya" },
	{ char_id: "ryu", character: "リュ", romanization: "ryu" },
	{ char_id: "ryo", character: "リョ", romanization: "ryo" },
	{ char_id: "gya", character: "ギャ", romanization: "gya" },
	{ char_id: "gyu", character: "ギュ", romanization: "gyu" },
	{ char_id: "gyo", character: "ギョ", romanization: "gyo" },
	{ char_id: "zya", character: "ジャ", romanization: "ja" },
	{ char_id: "zyu", character: "ジュ", romanization: "ju" },
	{ char_id: "zyo", character: "ジョ", romanization: "jo" },
	{ char_id: "dya", character: "ヂャ", romanization: "ja" },
	{ char_id: "dyu", character: "ヂュ", romanization: "ju" },
	{ char_id: "dyo", character: "ヂョ", romanization: "jo" },
	{ char_id: "bya", character: "ビャ", romanization: "bya" },
	{ char_id: "byu", character: "ビュ", romanization: "byu" },
	{ char_id: "byo", character: "ヒョ", romanization: "byo" },
	{ char_id: "pya", character: "ピャ", romanization: "pya" },
	{ char_id: "pyu", character: "ピュ", romanization: "pyu" },
	{ char_id: "pyo", character: "ピョ", romanization: "pyo" },
];
//#endregion List of Kana Characters

//#region Kana List Functions
export function sortKana(list) {
	const sorted = {};
	list.forEach((item) => {
		const id = item.char_id;
		const last = id.substring(id.length - 1);
		const beg = id.substring(0, id.length - 1);
		if (!sorted[beg]) sorted[beg] = {};
		sorted[beg][last] = item.character;
	});
	return sorted;
}
export function keyify(list) {
	const answerKey = {};
	list.forEach((item) => {
		answerKey[item.character] = item.romanization;
	});
	return answerKey;
}

export const kanaGrid = {
	hiragana: sortKana(hiraganaList),
	katakana: sortKana(katakanaList),
};

export const answerKey = keyify(hiraganaList.concat(katakanaList));
//#endregion Kana List Functions