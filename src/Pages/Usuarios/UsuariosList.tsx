import { useFetch } from "../../Hooks/useFetch";
import { Table } from "../../components/Table/Table";

export const UsuariosList = () => {
    // const {data, error, setBodyRequest, setMethodState} = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/user'});
    const {data, error, setBodyRequest, setMethodState, setUrlState} = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/user'});
    function handleDelete(id: string) {
        setUrlState(`https://coff-v-art-api.onrender.com/api/user/${id}`);
        setMethodState('DELETE');
        setBodyRequest({_id: id})
        setTimeout(() => {
            setUrlState('https://coff-v-art-api.onrender.com/api/user');
            setMethodState('GET');
        }, 500)
    }

    const columns = ['id', 'Correo Electrónico', 'Nombre', 'Teléfono', 'rol'];

    const dbcolumns = ['id', 'email', 'name', 'tel', 'rol'];
    const users = data.users || data;
    const buttonsActions = [
        {
            text: 'hola',
            function: (id: string) => console.log(id),
            fill: true
        }
    ]
    return (
        <>
            {error && <p>Hubo un error</p>}
            <Table data={users} columns={columns} dbColumns={dbcolumns} title='Usuarios' createLink='create' createText='Crear Usuario' label='Buscar Usuario' deleteFunction={handleDelete} buttonsActions={buttonsActions}/>
        </>
    )
}
