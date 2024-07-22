import SimpleInputField from "../../InputFields/SimpleInputField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import { useTranslation } from "next-i18next";
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";

const ProductList1Tab = ({ values, setFieldValue, productData, setSearch }) => {
    const { t } = useTranslation("common");
    return (
        <>
            <SimpleInputField nameList={[
                { name: `[content][products_list_1][title]`, placeholder: t("EnterTitle"), title: "Title" }, { name: `[content][products_list_1][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
            ]} />
            <SearchableSelectInput
                nameList={
                    [{
                        name: 'productList1Product',
                        title: "Products",
                        inputprops: {
                            name: 'productList1Product',
                            id: 'productList1Product',
                            options: productData || [],
                            setsearch: setSearch,
                        }
                    },
                    ]}
            />
            <CheckBoxField name={`[content][products_list_1][status]`} title="Status" />
        </>
    )
}
export default ProductList1Tab