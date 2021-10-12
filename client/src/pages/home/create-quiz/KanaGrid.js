import { kanaGrid, consonants, vowels } from "../../../kana-data";
import GridTile from "./GridTile";
export default function ({ selectedChars, setSelectedChars }) {
	return (
		/**
		 * Each group of kana has a set of vowel sounds (a,i,e,o,u). Not every group has every vowel sound.
		 *
		 * Each kana starts with a consonant and ends in a vowel sound (ka, ki, ke, ko, ku).
		 *
		 * Some kana start with a couple consonants (kya, kyu, kyu)).
		 *
		 * The kana for 'n' is the only exception (kan, kin, ken, kon, kun).
		 *
		 * There are two alphabets (hiragana and katana) each have the same set of phonetics. One is used for foreign words
		 * and the other is used for domestic.
		 */
		<div
			onClick={(e) => {
				const selectedChar = e.target.innerText;
				if (selectedChars.includes(selectedChar))
					setSelectedChars(
						selectedChars.filter((char) => char != selectedChar)
					);
				else setSelectedChars([...selectedChars, selectedChar]);
			}}
		>
			{Object.keys(kanaGrid).map((alphabet) => {
				const rows = Object.values(kanaGrid[alphabet]).map((group) => {
					return (
						<div>
							{group["n"] ? (
								<GridTile char={group["n"]} />
							) : (
								vowels.map((vowel) => {
									const kanaChar = group[vowel];
									return (
										<GridTile
											char={kanaChar}
											isSelected={selectedChars.includes(kanaChar)}
										/>
									);
								})
							)}
						</div>
					);
				});
				return rows;
			})}
		</div>
	);
}
