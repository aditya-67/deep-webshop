/*
 * This function loads product data and returns it for use in the UI.
 */
const products = [{
    "id": 1,
    "sku": "DEMO001",
    "name": "Best Laptop",
    "description": "Look at this laptop.",
    "image": "https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&w=600&h=600&q=80",
    "amount": 100000,
    "currency": "USD"
  },
  {
    "id": 2,
    "sku": "DEMO002",
    "name": "Great Mac",
    "description": "All great Mac's.",
    "image": "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?auto=format&fit=crop&w=600&h=600&q=80",
    "amount": 150000,
    "currency": "USD"
  }
]

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};