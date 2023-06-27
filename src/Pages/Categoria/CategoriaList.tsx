import { useFetch } from "../../Hooks/useFetch";
import { Table } from "../../components/Table/Table";

export const CategoriaList = () => {
    // const {data, error, setBodyRequest, setMethodState} = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/user'});
    const {data, error, setBodyRequest, setMethodState, setUrlState} = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/categoria'});
    function handleDelete(id: string) {
        setUrlState(`https://coff-v-art-api.onrender.com/api/categoria/${id}`);
        setMethodState('DELETE');
        setBodyRequest({_id: id})
        setTimeout(() => {
            setUrlState('https://coff-v-art-api.onrender.com/api/categoria');
            setMethodState('GET');
        }, 500)
    }

    const dbcolumns = ['id', 'nombre', 'descripcion'];
    const columns = ['id', 'Nombre', 'Descripción'];
    const category = data.categorys || data;
    console.log(data)
    return (
        <>
            {error && <p>Hubo un error</p>}
            <Table data={category} columns={columns} dbColumns={dbcolumns} title='Categoría de Insumos' createLink='create' createText='Crear Categoría' label='Buscar Categoría' deleteFunction={handleDelete}/>
        </>
    )
}
