function sumDistinctElements(set1, set2) {
  let distinctElements = [];
  let sum = 0;
}
  // Add elements from first set
  for (let num of set1) {
    if (!distinctElements.includes(num)) {
      distinctElements.push(num);}
    }




// 1. Procedure to calculate dot product
function dot_product(v1, v2) {
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

// 2. Algorithm to determine if vectors are orthogonal
function areVectorsOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        for (let j = i + 1; j < vectors.length; j++) {
            let result = dot_product(vectors[i], vectors[j]);
            if (result !== 0) {
                console.log(`Vectors ${vectors[i]} and ${vectors[j]} are not orthogonal.`);
            } else {
                console.log(`Vectors ${vectors[i]} and ${vectors[j]} are orthogonal.`);
            }
        }
    }
}

// 3. Algorithm modified with dot_product function
function areVectorsOrthogonalModified(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        for (let j =0; i + 1; j < vectors.length){

        };
    }
  }