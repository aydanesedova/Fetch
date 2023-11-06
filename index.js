// const inpOne = document.getElementById("inpOne")
// const inpTwo = document.getElementById("inpTwo")
// const btn = document.getElementById("btn")

// // /products 
// // Ən bahalı məhsul 
// let maxPrice = 0;
// let productMax;

// fetch("https://northwind.vercel.app/api/products")
//  .then(res => res.json())
//  .then(products => {
//     products.filter(product => {
//       if (product.unitPrice > maxPrice) {
//         maxPrice = product.unitPrice;
//         productMax = product;
//       }
//     });
//     console.log("Ən baha məhsul :", productMax);
//  });

    


    //  “C” ilə başlayan məhsullarin objecti
    // fetch("https://northwind.vercel.app/api/products")
    //     .then(res => res.json())
    //     .then(products => {
    //         products.filter(product => {
    //             if (product.name.startsWith('C')) {
    //                 console.log("C ile baslayan mehsullar:", product);
    //             }
    //         });
    //     });

    //  “C” ilə başlayan məhsullarin name
    // fetch("https://northwind.vercel.app/api/products")
    //     .then(res => res.json())
    //     .then(products => {
    //         products.filter(product => {
    //             if (product.name.startsWith('C')) {
    //                 console.log("C ile baslayan mehsullar:", product.name);
    //             }
    //         });
    //     });





    // Ortalama stok miqdarı
    // fetch("https://northwind.vercel.app/api/products")
    //     .then(res => res.json())
    //     .then(products => {
    //         let totalPrices = 0;
    //         products.filter(product => {
    //             totalPrices += product.unitsInStock;
    //         });
    //         let netice = totalPrices / products.length;
    //         console.log("Ortalama stok miqdarı:", netice);
    //     });





// /customers
// “London” şəhərindəki müştəriləri console a yaz
// fetch("https://northwind.vercel.app/api/customers")
//     .then(res => res.json())
//     .then(customers => {
//         const LondonCity= customers.filter(customer => customer.address.city === "London");
//         console.log(LondonCity);
//     })



// Region NULL olan nə qədər customer var?
// fetch("https://northwind.vercel.app/api/customers")
//     .then(res => res.json())
//     .then(customers => {
//         const Null = customers.filter(customer => customer.address.region === "NULL");
//         console.log(Null.length);
//     })



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// const inpOne = document.getElementById("inpOne")
// const inpTwo = document.getElementById("inpTwo")
// const btn = document.getElementById("btn")



// /posts
// Id-si 1 olan userin nə qədər postu var?

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//         const postsLenght = posts.filter(post => post.id == 1);
//         console.log(postsLenght.length);
//     })



// /albums
// 1 nömrəli albümdə nə qədər fotoqraf var?
// fetch ('https://jsonplaceholder.typicode.com/albums')
// .then (res => res.json())
// .then (albums => {
// let Albumss = albums.filter(album => album.userId === 1);
// console.log(Albumss.length);
// })