export interface Product {
    id: number;
    name: string;
    description: string;
    specifications?: Record<string, string>; 
    price: number;
    originalPrice?: number;
    stock: number;
    category: string;
    subcategory: string;
    brand: string;
    thumb: string;
    categoryId?: number;    
    subcategoryId?: number; 
    brandId?: number;        
    imageUrl?: string;       
}
