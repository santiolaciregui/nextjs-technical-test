'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getProducts } from '@/libs/actions/products';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts(search, page);
      setProducts(data || []);
    }
    fetchData();
  }, [search, page]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    router.push(`?search=${e.target.value}&page=1`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`?search=${search}&page=${newPage}`);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="input input-bordered w-full mb-4"
        value={search}
        onChange={handleSearchChange}
      />
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="btn"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Anterior
        </button>
        <button className="btn" onClick={() => handlePageChange(page + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
