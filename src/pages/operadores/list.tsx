import React from "react";
import {
  useDataGrid,
  EditButton,
  ShowButton,
  DeleteButton,
  List,
} from "@refinedev/mui";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { IResourceComponentsProps } from "@refinedev/core";
import { Avatar } from "@mui/material";

export const OperatorList: React.FC<IResourceComponentsProps> = () => {
  const { dataGridProps } = useDataGrid();

  const columns = React.useMemo<GridColumns<any>>(
    () => [
      {
        field: "",
        headerName: "Foto",
        sortable: false,
        renderCell: function render({ row }) {
          return <Avatar src={row.avatar} />;
        },
        align: "center",
        headerAlign: "center",
        minWidth: 50,
      },
      {
        field: "nome",
        headerName: "Nome",
        sortable: false,
        renderCell: function render({ row }) {
          return row.nome;
        },
        align: "center",
        headerAlign: "center",
        minWidth: 150,
      },
      {
        field: "celular",
        headerName: "Celular",
        sortable: false,
        renderCell: function render({ row }) {
          return row.celular;
        },
        align: "center",
        headerAlign: "center",
        minWidth: 150,
      },
      {
        field: "ativo",
        headerName: "Ativo",
        sortable: false,
        renderCell: function render({ row }) {
          return row.ativo ? "Sim" : "Não";
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
      {
        field: "TAG",
        headerName: "TAG",
        sortable: true,
        renderCell: function render({ row }) {
          return row.TAG;
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
      {
        field: "data_nascimento",
        headerName: "Data de Nascimento",
        sortable: true,
        renderCell: function render({ row }) {
          return row.data_nascimento;
        },
        align: "center",
        headerAlign: "center",
        minWidth: 180,
      },
      {
        field: "Ações",
        headerName: "Ações",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    [],
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
