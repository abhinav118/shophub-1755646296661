import { siteData, navigation } from '@/lib/data'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData?.settings?.appName || 'ShopHub'}</h1>
            <div className="flex space-x-6">
              {[{"label":"Home","route":"/","icon":"home"},{"label":"Products","route":"/products","icon":"grid","children":[{"label":"Electronics","route":"/products?category=electronics"},{"label":"Clothing","route":"/products?category=clothing"},{"label":"Home & Garden","route":"/products?category=home"},{"label":"Sports & Outdoors","route":"/products?category=sports"}]},{"label":"Cart","route":"/cart","icon":"shopping-cart"},{"label":"Account","route":"/account","icon":"user","requiresAuth":true}].map((item: any, index: number) => (
                <a key={index} href={item.route} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-12">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Contact Us</h2>
          <form className="space-y-6 bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input 
                type="text" 
                
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your search"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <input 
                type="text" 
                
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your category"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PriceRange</label>
              <input 
                type="text" 
                
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your priceRange"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
              <input 
                type="text" 
                
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your rating"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.products?.map((product: any, index: number) => (
            <div key={index} className="card p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          )) || []}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData?.settings?.appName || 'ShopHub'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}