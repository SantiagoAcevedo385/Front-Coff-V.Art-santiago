import { useFetch } from "../../Hooks/useFetch";
import { Table } from "../../components/Table/Table";

export const ContratosList = () => {
    const {data,setBodyRequest,setMethodState,setUrlState}=useFetch({url:'https://coff-v-art-api.onrender.com/api/contract'});
    function handleDelete(id: string){
        setUrlState(`https://coff-v-art-api.onrender.com/api/contract/${id}`);
        setMethodState('DELETE');
        setBodyRequest({_id:id})
        setTimeout(()=> {
            setUrlState('http://localhost:3000/api/contract');
            setMethodState('GET');
        },500)
    }

    const columns = ['id','nombre Empresa','NIT','Dirección','Nombre Representante','Correo Representante','Producto','Comisión','Duración','Cobro','Fecha del Contrato','Estado','Acciones'];
    
    const dbcolumns =['id','nombreEmpresa','NIT','direccion','nombreRepresentante','correoRepresentante','producto','comision','duracion','cobro','fecha','estado'];
    const contratos= data.contracts || data;
    return(
        <>
            <Table data={contratos} columns={columns} dbColumns={dbcolumns} title='Contratos' createLink='create' createText='Crear Contrato' label='Buscar Contrato' deleteFunction={handleDelete}/>
        </>
    )
}
