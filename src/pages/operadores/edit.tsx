import { Edit } from "@refinedev/mui";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { IResourceComponentsProps } from "@refinedev/core";
import { Controller } from "react-hook-form";
import React from "react";
import { sendAvatarFile } from "../../utility";

export const OperatorEdit: React.FC<IResourceComponentsProps> = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult },
    register,
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  async function submitAvatar(file: any) {
    const avatar = await sendAvatarFile(file);
    setValue(
      "avatar",
      `https://cloud.appwrite.io/v1/storage/buckets/avatars/files/${avatar.$id}/view?project=64908b88c8698be63b57`,
    );
  }

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
        onSubmit={() => console.log(getValues("avatar")[0])}
      >
        <input type="text" hidden {...register("avatar")} />
        <Button variant="contained" component="label">
          Foto do operador
          <input
            type="file"
            hidden
            onChange={(e) => {
              if (!e.target.files || e.target.files.length === 0) return;
              submitAvatar(e.target.files[0]);
            }}
          />
        </Button>
        <TextField
          {...register("nome", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.nome}
          helperText={(errors as any)?.nome?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Nome"
          name="nome"
        />
        <TextField
          {...register("celular", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.celular}
          helperText={(errors as any)?.celular?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Celular"
          name="celular"
        />
        <Controller
          control={control}
          name="ativo"
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <FormControlLabel
              label="Ativo"
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.checked);
                  }}
                />
              }
            />
          )}
        />
        <TextField
          {...register("TAG", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.TAG}
          helperText={(errors as any)?.TAG?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="TAG"
          name="TAG"
        />
        <TextField
          {...register("data_nascimento", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.data_nascimento}
          helperText={(errors as any)?.data_nascimento?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Data de Nascimento"
          name="data_nascimento"
        />
      </Box>
    </Edit>
  );
};
