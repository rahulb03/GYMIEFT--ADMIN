import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

function CkEditorComponent({ onChange, editorLoaded, name, value }) {
    const { t } = useTranslation("common");
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        import("@ckeditor/ckeditor5-react").then(({ CKEditor }) => {
            import("@ckeditor/ckeditor5-build-classic").then(({ default: ClassicEditor }) => {
                setEditor({ CKEditor, ClassicEditor });
            });
        });
    }, []);

    return (
        <div>
            {editorLoaded && editor ? (
                <editor.CKEditor
                    type=""
                    name={name}
                    editor={editor.ClassicEditor}
                    data={value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        onChange(data);
                    }}
                />
            ) : (
                <div>{t("Editorloading")}</div>
            )}
        </div>
    );
}

export default CkEditorComponent;
