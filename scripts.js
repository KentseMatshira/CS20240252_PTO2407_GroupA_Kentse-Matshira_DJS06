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
 
 // Task 4
 const sortedProvinces = [...provinces].sort();
 console.log(sortedProvinces);

 // Task 5
 const filteredProvinces = provinces.filter(
   province => !province.includes('Cape')
 );
 console.log(filteredProvinces)

 console.log(filteredProvinces);
 
 // Task 6
 const containS = names.map(name => name.includes('S'));
 console.log(containS);
 
 // Task 7
 const namesToProvinces = names.reduce((acc, name, index) => {
   acc[name] = provinces[index];
   return acc;
 }, {});
 console.log(namesToProvinces);
 
 // Advanced
 // Task 1
 console.log(products.forEach(product => console.log(product.product)));
 
 // Task 2
 console.log(products.filter((product) => product.product.length <= 5));
 
 // Task 3
 console.log(
   products
     .filter(product => product.price && !isNaN(product.price))
     .reduce((total, product) => total + Number(product.price), 0)
 );

 // Task 4
 console.log(products.reduce((acc, product) => acc + product.product, ''));
 
 //Task 5