import { useFetch } from "../../Hooks/useFetch";
import { Table } from '../../components/Table/Table';

export const PagosList = () => {
	const {data,setBodyRequest,setMethodState,setUrlState}=useFetch({url:'https://coff-v-art-api.onrender.com/api/pay'});
    function handleDelete(id: string){
        setUrlState(`https://coff-v-art-api.onrender.com/api/pay/${id}`);
        setMethodState('DELETE');
        setBodyRequest({_id:id})
        setTimeout(()=> {
            setUrlState('https://coff-v-art-api.onrender.com/api/pay');
            setMethodState('GET');
        },500)
    }
	const columns = ['id', 'Numero de Contrato', 'Monto a pagar', 'Fecha de Pago'];
	const dbcolumns = ['id','numeroContrato','montoPagado','fechaPago'];
	const pagos = data.pays || data;

	return (
		<>
			<Table data={pagos} columns={columns} dbColumns={dbcolumns} title='pagos' createLink='create' createText='Crear pago' label='Buscar pago' deleteFunction={handleDelete}/>
		</>
	);
};
