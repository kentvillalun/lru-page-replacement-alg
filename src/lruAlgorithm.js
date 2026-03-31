export function lruPageReplacement(pages, capacity = 3) {
  let frames = new Array(capacity).fill(null);
  let lastUsed = new Array(capacity).fill(-1);
  let tableData = Array.from({ length: capacity }, () => Array(pages.length).fill(""));
  let pageFaults = 0;
  let pageHits = 0;

  for (let i = 0; i < pages.length; i++) {
    let currentPage = pages[i];
    let hitIndex = frames.indexOf(currentPage);

    if (hitIndex !== -1) {
      pageHits++;
      lastUsed[hitIndex] = i;
      tableData[hitIndex][i] = "*";
    } else {
      pageFaults++;
      
      let replaceIndex;
      if (frames.includes(null)) {
        replaceIndex = frames.indexOf(null);
      } else {
        replaceIndex = 0;
        for (let j = 1; j < capacity; j++) {
          if (lastUsed[j] < lastUsed[replaceIndex]) {
            replaceIndex = j;
          }
        }
      }

      frames[replaceIndex] = currentPage;
      lastUsed[replaceIndex] = i;
      tableData[replaceIndex][i] = currentPage;
    }
  }

  // let html = "<table>";
  // html += "<tr><td>Memory page</td>";
  // pages.forEach(p => html += `<td>${p}</td>`);
  // html += "</tr>";

  // for (let r = 0; r < capacity; r++) {
  //   html += `<tr><td>${r + 1}</td>`;
  //   for (let c = 0; c < pages.length; c++) {
  //     html += `<td>${tableData[r][c]}</td>`;
  //   }
  //   html += "</tr>";
  // }
  // html += "</table>";

  // html += `<p>Total Page Faults: ${pageFaults}</p>`;
  // html += `<p>Total Page Hits: ${pageHits}</p>`;
  
  // return html;

  return { tableData, pageFaults, pageHits}
}

// function runLRU() {
//   let pagesInput = document.getElementById("pagesInput").value;
//   let capacity = parseInt(document.getElementById("capacityInput").value);

//   if (!pagesInput || isNaN(capacity)) return;

//   let pages = pagesInput.split(",").map(p => p.trim());
//   let resultTable = lruPageReplacement(pages, capacity);

//   document.getElementById("output").innerHTML = resultTable;
// }