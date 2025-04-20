// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Task 1
names.forEach((name) => console.log(name));

provinces.forEach((province) => console.log(province));

names.forEachach((name, index) => {
  console.log(`${name}, ${provinces[index]}`);
});

// Task 2
 const uppercaseProvinces = provinces.map(province => province.toUpperCase());
 console.log(uppercaseProvinces);

 // Task 3
 const nameLengths = name.map(name => name.length);
 console.log(nameLengths);
 