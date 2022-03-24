import React, { createRef, useEffect, useState } from "react";
import { createFileName } from "use-react-screenshot";
import html2canvas from "html2canvas";

const App = () => {
	const ref = createRef(null);
	const [numbers, setNumbers] = useState([1, 1, 1]);

	useEffect(() => {
		(async () => {
			let x = numbers[0];
			let y = numbers[1];
			while (x <= 25) {
				let z = numbers[2];
				while (z <= 16) {
					await setNumbers([x, y, z]);

					await new Promise((resolve) =>
						html2canvas(document.querySelector("#capture")).then((canvas) => {
							const a = document.createElement("a");
							a.href = canvas.toDataURL("image/png");
							a.download = createFileName("png", `x${x} y${y} z${z}`);
							a.click();
							resolve(true);
						})
					);

					z++;

					if (z === 17) {
						z = 1;
						x++;
					}
					if (x === 26) {
						x = 1;
						z = 1;
						y++;
					}
					if (y === 26) {
						x = 1000;
						z = 1000;
						y = 1000;
						console.log("DONE");
						alert("DONE");
					}
				}
			}
		})();
	}, []);

	console.log("---");
	console.log("x", numbers[0]);
	console.log("y", numbers[1]);
	console.log("z", numbers[2]);

	return (
		<div ref={ref} id={"capture"}>
			<img src={"./nftitems/" + numbers[0] + ".png"} />
			<img src={"./nftitems/" + numbers[1] + ".png"} />
			<img src={"./nftitems/" + numbers[2] + ".png"} />
		</div>
	);
};

export default App;
