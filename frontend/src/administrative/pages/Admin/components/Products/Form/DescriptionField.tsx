import { Control, Controller } from 'react-hook-form';
import { FormState } from './';
import { Editor } from "react-draft-wysiwyg";
import toolbar from './toolbar';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props = {
    control: Control<FormState>;
}

const DescriptionField = ({ control }: Props) => (
    <Controller
        id="description"
        name="description"
        defaultValue=""
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
            <Editor
                toolbarClassName="toolbar-container"
                editorClassName="editor-container"
                placeholder="Ex: Bíblia Sagrada, com a linguagem na versão ARC (Revista Corrigida) de João Ferreira de Almeida. Sendo a versão mais utilizada pelos evangélicos do Brasil. Com sua fidelidade traduzida dos textos originais pelo missionário português João Ferreira de Almeida, esta obra tem como destaque sua linguagem elegante e culta. Agora a mais nova edição da Casa Publicadora Paulista, apresentamos a vocês a Bíblia com Espaço para Anotações Pautados, com diferenciais exclusivos e também muito procurados, a bíblia com espaço para anotações contém Harpa, Corinhos e Índice lateral."
                toolbar={toolbar}
                editorState={value}
                onEditorStateChange={onChange}
            />
        )}
    />
);

export default DescriptionField;
