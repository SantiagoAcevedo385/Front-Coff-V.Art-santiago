import { useFetch } from "../../Hooks/useFetch";
import { Table } from "../../components/Table/Table";

export const ComprasList = () => {
    // const {data, error, setBodyRequest, setMethodState} = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/user'});
    const {data, error, setBodyRequest, setMethodState, setUrlState} = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/shop'});
    function handleDelete(id: string) {
        setUrlState(`https://coff-v-art-api.onrender.com/api/shop/${id}`);
        setMethodState('DELETE');
        setBodyRequest({_id: id})
        setTimeout(() => {
            setUrlState('https://coff-v-art-api.onrender.com/api/shop');
            setMethodState('GET');
        }, 500)
    }

    const dbcolumns = ['id', 'producto', 'cantidad', 'iva', 'total'];
    const columns = ['id', 'Producto', 'Cantidad', 'Iva', 'Total'];
    const shop = data.shops || data;
    console.log(data)
    return (
        <>
            {error && <p>Hubo un error</p>}
            <Table data={shop} columns={columns} dbColumns={dbcolumns} title='Compras' createLink='create' createText='Crear Compra' label='Buscar Compra' deleteFunction={handleDelete}/>
        </>
    )
}
