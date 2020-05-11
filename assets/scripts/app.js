const productList = {
    products: [
        {
          title: "A Pillow",
          imageUrl:
            "http://t2.gstatic.com/images?q=tbn:ANd9GcQMzTULEOb2Wc86Vg3Mgw5n-jVgmOfMvjlj94w4VM9fOhh3vSYijDOzZ0KOv1Fh0vc5ePw3hE8rxkSRsSPXJZg",
          price: 19.99,
          description: "A soft pillow",
        },
        {
          title: "A Carpet",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81-K80Pt7PL._AC_SL1185_.jpg",
          price: 89.99,
          description: "A carpet which you might like - or not",
        },
      ],
      render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div class = 'product-item'> 
                <img src= '${prod.imageUrl}' alt = '${prod.title} 'class='product-item img'>
                <div class='product-item__content'>
                    <h2 class = 'product-item h2'>${prod.title}</h2>
                    <h3 class = 'product-item h3'>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button class='button'>Add to Cart</button>
                </div>
            </div>
            `
            prodList.append(prodEl);
        }
        renderHook.append(prodList)
    } 
}

productList.render()
