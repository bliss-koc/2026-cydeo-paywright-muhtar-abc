
let QA = [
  "John Smith",
  "Jane Doe",
  "Michael Brown",
  "Sarah Johnson",
  "David Wilson",
  "Emily Davis",
  "Robert Miller",
  "Lisa Anderson",
  "William Taylor",
  "Emma Thomas",
  "James White",
  "Olivia Harris",
  "Daniel Martin",
  "Sophia Garcia",
  "Matthew Martinez"
];



// bunu tersten aray yazdirabilir misin? Yani son isin basa gelecek sekilde yazdirabilir misin?
for (let i = QA.length - 1; i >= 0; i--) {
  console.log(QA[i]);
}
// icinde farkli rakamlar olan bir array olustur
   let numbers = [10, 36, 100, 40, 50, 25, 75, 5, 90, 60, 100, 50];

// Bana en buyuk numarayi ve en kucuk rakami veren bir program yazabilir misin? ve bu arrayda ayni olanlari bir arr olarak olustur ve bana print versin
let max = numbers[0];
let min = numbers[0];
let duplicates = [];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers.indexOf(numbers[i]) !== i && !duplicates.includes(numbers[i])) {
    duplicates.push(numbers[i]);
  }
}

console.log("En buyuk numara: " + max);
console.log("En kucuk numara: " + min);
console.log("Ayni olan numaralar: " + duplicates); 





      