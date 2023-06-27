import { useFetch } from "../../Hooks/useFetch";
import { Table } from '../../components/Table/Table';

export const EmpaquetadoList = () => {
	const {data,setBodyRequest,setMethodState,setUrlState}=useFetch({url:'https://coff-v-art-api.onrender.com/api/empaquetado'});
    function handleDelete(id: string){
        setUrlState(`https://coff-v-art-api.onrender.com/api/empaquetado/${id}`);
        setMethodState('DELETE');
        setBodyRequest({_id:id})
        setTimeout(()=> {
            setUrlState('https://coff-v-art-api.onrender.com/api/empaquetado');
            setMethodState('GET');
        },500)
    }
	const columns = [
		'id',
		'Insumo',
		'Prodcuto Final',
		'Cantidad',
		'Fecha Inicio',
		'Estado',
	];
	const dbcolumns =['id','insumo','productoFinal','cantidad','fechaInicio','estado']
	const empaquetados = data.empaquetados || data; 
    console.log(empaquetados)


	return (
		<>
			<Table
				data={empaquetados}
				columns={columns}
				dbColumns={dbcolumns}
				title='Empaquetados'
				createLink='create'
				createText='Crear Empaquetado'
				label='Buscar Empaquetado'
				deleteFunction={handleDelete}
			/>
		</>
	);
};
