import { useFetch } from "../../Hooks/useFetch";
import { Table } from "../../components/Table/Table";
import { BsFileEarmarkExcel } from "react-icons/bs";
import * as XLSX from "xlsx";

export const InsumosList = () => {
  const { data, error, setBodyRequest, setMethodState, setUrlState } = useFetch({ url: 'https://coff-v-art-api.onrender.com/api/insumo' });

  function handleDelete(id: string) {
    setUrlState(`https://coff-v-art-api.onrender.com/api/insumo/${id}`);
    setMethodState('DELETE');
    setBodyRequest({ _id: id })
    setTimeout(() => {
      setUrlState('https://coff-v-art-api.onrender.com/api/insumo');
      setMethodState('GET');
    }, 500)
  }

  const dbcolumns = ['id', 'nombre', 'costoSaco', 'cantidad', 'categoria', 'descripcion'];
  const columns = ['id', 'Nombre', 'costo Saco', 'Cantidad', 'Categoría', 'Descripción'];
  const insumos = data.insumos || data;

  function handleDownloadExcel() {
    const worksheet = XLSX.utils.json_to_sheet(insumos);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Insumos');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'insumos.xlsx';
    link.click();
  }

  return (
    <>
      {error && <p>Hubo un error</p>}
      <div>
        <button onClick={handleDownloadExcel}>
          <BsFileEarmarkExcel /> Descargar Excel
        </button>
      </div>
      <Table data={insumos} columns={columns} dbColumns={dbcolumns} title='Insumos' createLink='create' createText='Crear Insumo' label='Buscar Insumo' deleteFunction={handleDelete} />
    </>
  )
}
