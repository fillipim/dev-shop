"use client";

import ProductCard from "@/components/ProductCard";
import {
  getCategories,
  getProductsByCategory,
} from "@/services/products.service";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { Flex, Box, Button, Grid } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const params = useParams();
  const router = useRouter();

  const fetchCategories = async () => {
    const categoriesData = await getCategories();
    setCategories(categoriesData);
  };

  const selectedCategory = params?.categoryId;

  const fetchProducts = async (id: string) => {
    const numberId = Number(id);
    if (isNaN(numberId)) {
      const resp = await getProductsByCategory();
      setProducts(resp);
      return;
    }
    const filteredProducts = await getProductsByCategory(id);
    setProducts(filteredProducts);
  };

  useEffect(() => {
    fetchProducts(selectedCategory as string);
  }, [selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Flex m="auto">
      <Box w="200px" borderRight="1px solid #414141" borderRadius="sm" p="1rem">
        <Button
          cursor="pointer"
          mb="1rem"
          textAlign="start"
          w="100%"
          unstyled
          onClick={() => router.push(`/categories/all`)}
        >
          Todos
        </Button>
        {categories?.map((category) => (
          <Button
            cursor="pointer"
            mb="1rem"
            textAlign="start"
            w="100%"
            unstyled
            key={category.id}
            onClick={() => router.push(`/categories/${category.id}`)}
          >
            {category.category_name}
          </Button>
        ))}
      </Box>
      <Grid gridTemplateColumns="repeat(5, 1fr)" gap={3} p="2rem">
        {products?.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </Grid>
    </Flex>
  );
}
