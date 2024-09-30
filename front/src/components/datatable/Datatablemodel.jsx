export const userColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return <div>{params.row.username}</div>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
];

export const hotelsColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "nome",
    headerName: "Nome",
    width: 150,
  },
  {
    field: "tipo",
    headerName: "Tipo",
    width: 100,
  },
  {
    field: "cidade",
    headerName: "Cidade",
    width: 150,
  },
];

export const quartosColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "titulo",
    headerName: "Título",
    width: 200,
  },
  {
    field: "desc",
    headerName: "Descrição",
    width: 200,
  },
  {
    field: "preco",
    headerName: "Preço",
    width: 100,
  },
  {
    field: "capacidade",
    headerName: "Capacidade",
    width: 100,
  },
];

// separado para as reservas
//{
//  field: "status",
//  headerName: "Status",
//  width: 160,
//  renderCell: (params) => {
//    return (
//      <div className={`cellStatus ${params.row.status}`}>
//        {params.row.status}
//      </div>
//    );
//  },
//},
