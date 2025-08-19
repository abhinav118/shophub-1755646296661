export const siteData = {
  "products": [
    {
      "id": "1",
      "name": "Wireless Bluetooth Headphones",
      "category": "electronics",
      "price": 89.99,
      "originalPrice": 129.99,
      "rating": 4.5,
      "reviews": 324,
      "image": "/images/headphones-1.jpg",
      "images": [
        "/images/headphones-1.jpg",
        "/images/headphones-2.jpg"
      ],
      "description": "Premium wireless headphones with noise cancellation",
      "features": [
        "Noise Cancellation",
        "30hr Battery",
        "Quick Charge"
      ],
      "inStock": true,
      "featured": true
    },
    {
      "id": "2",
      "name": "Smart Fitness Watch",
      "category": "electronics",
      "price": 199.99,
      "rating": 4.3,
      "reviews": 156,
      "image": "/images/watch-1.jpg",
      "images": [
        "/images/watch-1.jpg",
        "/images/watch-2.jpg"
      ],
      "description": "Advanced fitness tracking with heart rate monitor",
      "features": [
        "Heart Rate Monitor",
        "GPS",
        "Water Resistant"
      ],
      "inStock": true,
      "featured": true
    },
    {
      "id": "3",
      "name": "Premium Cotton T-Shirt",
      "category": "clothing",
      "price": 29.99,
      "rating": 4.7,
      "reviews": 89,
      "image": "/images/tshirt-1.jpg",
      "images": [
        "/images/tshirt-1.jpg",
        "/images/tshirt-2.jpg"
      ],
      "description": "Comfortable premium cotton t-shirt",
      "features": [
        "100% Cotton",
        "Pre-shrunk",
        "Machine Washable"
      ],
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "colors": [
        "Black",
        "White",
        "Navy",
        "Gray"
      ],
      "inStock": true,
      "featured": false
    }
  ],
  "categories": [
    {
      "id": "electronics",
      "name": "Electronics",
      "description": "Latest gadgets and electronics",
      "image": "/images/category-electronics.jpg",
      "productCount": 245
    },
    {
      "id": "clothing",
      "name": "Clothing",
      "description": "Fashion and apparel for all",
      "image": "/images/category-clothing.jpg",
      "productCount": 189
    },
    {
      "id": "home",
      "name": "Home & Garden",
      "description": "Everything for your home",
      "image": "/images/category-home.jpg",
      "productCount": 156
    },
    {
      "id": "sports",
      "name": "Sports & Outdoors",
      "description": "Gear for active lifestyle",
      "image": "/images/category-sports.jpg",
      "productCount": 134
    }
  ],
  "cart": {
    "items": [],
    "subtotal": 0,
    "shipping": 9.99,
    "tax": 0,
    "total": 0
  },
  "user": {
    "id": null,
    "name": "",
    "email": "",
    "addresses": [],
    "paymentMethods": []
  },
  "orders": [],
  "settings": {
    "appName": "ShopHub",
    "description": "Modern e-commerce platform for online shopping",
    "version": "1.0.0",
    "currency": "USD",
    "language": "en",
    "shipping": {
      "freeThreshold": 50,
      "standardRate": 9.99,
      "expeditedRate": 19.99
    },
    "tax": {
      "rate": 0.08,
      "included": false
    }
  }
};

export const navigation = {
  "main": [
    {
      "label": "Home",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "Products",
      "route": "/products",
      "icon": "grid",
      "children": [
        {
          "label": "Electronics",
          "route": "/products?category=electronics"
        },
        {
          "label": "Clothing",
          "route": "/products?category=clothing"
        },
        {
          "label": "Home & Garden",
          "route": "/products?category=home"
        },
        {
          "label": "Sports & Outdoors",
          "route": "/products?category=sports"
        }
      ]
    },
    {
      "label": "Cart",
      "route": "/cart",
      "icon": "shopping-cart"
    },
    {
      "label": "Account",
      "route": "/account",
      "icon": "user",
      "requiresAuth": true
    }
  ],
  "footer": [
    {
      "section": "Company",
      "links": [
        {
          "label": "About Us",
          "route": "/about"
        },
        {
          "label": "Contact",
          "route": "/contact"
        },
        {
          "label": "Careers",
          "route": "/careers"
        }
      ]
    },
    {
      "section": "Support",
      "links": [
        {
          "label": "Help Center",
          "route": "/help"
        },
        {
          "label": "Returns",
          "route": "/returns"
        },
        {
          "label": "Shipping Info",
          "route": "/shipping"
        }
      ]
    },
    {
      "section": "Legal",
      "links": [
        {
          "label": "Privacy Policy",
          "route": "/privacy"
        },
        {
          "label": "Terms of Service",
          "route": "/terms"
        }
      ]
    }
  ]
};