import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../Context";
import { kanaGrid, vowels } from "../../../kana-data";
import GridTile from "./GridTile";
export default function ({ selectedChars, toggleSelectedChar }) {
	const gridRef = useRef();
	const { setTileHeight } = useContext(Context);
	useEffect(() => {
		const tileWidth = gridRef.current.getBoundingClientRect().width / 6;
		setTileHeight(tileWidth);
	});
	return (
		/**
		 * There is kana for each of these vowels: a,i,e,o,u
		 *
		 * And one kana that for the consonant: n
		 *
		 * Every other kana starts with a consonant and ends in a vowel sound
		 * eg. ka, ki, ke, ko, ku
		 *
		 * The kana for 'n' is the only exception.
		 * eg. (ka)n, (ki)n, (ke)n, (ko)n, (ku)n
		 *
		 * Some kana start with a couple consonants
		 * eg. kya, kyu, kyu
		 *
		 *
		 * There are two alphabets (hiragana and katana) each have the same set of phonetics. One is used for foreign
		 * words and the other is used for domestic, respectively.
		 */
		<div>
			{Object.keys(kanaGrid).map((alphabet) => {
				return (
					<div id={alphabet} className="kana-grid-container">
						<h3 className="alphabet-heading">{alphabet.toUpperCase()}</h3>
						<div className="kana-grid" ref={gridRef}>
							<GridTile isHeading={true} />
							{vowels.map((vowel) => (
								<GridTile char={vowel} isHeading={true} />
							))}
							{Object.keys(kanaGrid[alphabet]).map((groupKey) => {
								const group = kanaGrid[alphabet][groupKey];
								const gridTiles = [];
								gridTiles.push(<GridTile char={groupKey} isHeading={true} />);
								if (group["n"]) {
									// this group contains one kana. It has no vowel sound
									// iterate through vowel array to fill blank spots and maintain grid alignment
									vowels.forEach((vowel, i) => {
										//first iteration places "-n" kana
										if (!i) {
											gridTiles.push(
												<GridTile
													char={kanaGrid[alphabet][groupKey]["n"]}
													isSelected={selectedChars.includes(group["n"])}
													toggleSelectedChar={toggleSelectedChar}
												/>
											);
										} else {
											gridTiles.push(<GridTile />);
										}
									});
								} else {
									vowels.forEach((vowel) => {
										const char = kanaGrid[alphabet][groupKey][vowel];
										gridTiles.push(
											<GridTile
												char={char}
												isSelected={selectedChars.includes(group[vowel])}
												toggleSelectedChar={toggleSelectedChar}
											/>
										);
									});
								}
								return gridTiles;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
