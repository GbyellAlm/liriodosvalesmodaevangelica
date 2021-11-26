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
        aria-describedby="descriptionHelp"
        control={control}
        rules={{ required: true }}
        render={({ value, onChange }) => (
            <Editor
                toolbarClassName="toolbar-container"
                editorClassName="editor-container"
                toolbar={toolbar}
                editorState={value}
                onEditorStateChange={onChange}
            />
        )}
    />
);

export default DescriptionField;
