import { useFetch } from "../../Hooks/useFetch";
import { Table } from "../../components/Table/Table";

export const ProductosList = () => {
    // const {data, error, setBodyRequest, setMethodState} = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/user'});
    const {data, error, setBodyRequest, setMethodState, setUrlState} = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/product'});
    function handleDelete(id: string) {
        setUrlState(`https://coff-v-art-api.onrender.com/api/product/${id}`);
        setMethodState('DELETE');
        setBodyRequest({_id: id})
        setTimeout(() => {
            setUrlState('https://coff-v-art-api.onrender.com/api/product');
            setMethodState('GET');
        }, 500)
    }

    const dbcolumns = ['id', 'name', 'valorU', 'insumo', 'stockMin', 'stockMax', 'descripcion'];
    const columns = ['id', 'Nombre', 'Valor Unitario', 'Insumo', 'Stock minimo', 'Stock Máximo', 'Descripción'];
    const products = data.products || data;
    return (
        <>
            {error && <p>Hubo un error</p>}
            <Table data={products} columns={columns} dbColumns={dbcolumns} title='Productos' createLink='create' createText='Crear Producto' label='Buscar Producto' deleteFunction={handleDelete}/>
        </>
    )
}
