import { Table } from "../../components/Table/Table"

export const RolesList = ()=>{
    const columns = ['id', 'Nombre', 'Estado'];
    const dbcolumns = ['id', 'name', 'state'];
	const roles = [
		{
			id: 1,
			name: 'Admin',
			state: 'active',
			actions: [
				{ name: 'Edit', fill: true, action: () => window.location.href = '/roles/create' },
				{ name: 'Delete', fill: false, action: () => console.log('Delete')}
			]
		},
		{
			id: 2,
			name: 'User',
			state: 'active',
			actions: [
				{ name: 'Edit', fill: true, action: () => console.log('Edit') },
				{ name: 'Delete', fill: false, action: () => console.log('Delete')}
			]
		}
	]
    return <>
            <Table data={roles} columns={columns} dbColumns={dbcolumns} title="Roles" createLink="create" createText="Crear Rol" label="Buscar Rol" deleteFunction={()=>null}/>
    </>
}