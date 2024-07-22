import React, { useState } from 'react'
import TreeLine from './TreeLine'
import { useTranslation } from 'next-i18next';
import { Input } from 'reactstrap';
import NoDataFound from '../CommonComponent/NoDataFound';

const SearchCategory = ({ data, setActive, active, setSearch, search, type, mutate }) => {
    const { t } = useTranslation("common");
    const [tc, setTc] = useState(null);

    // Debouncing
    const onChange = (text) => {
        if (tc) clearTimeout(tc);
        setTc(setTimeout(() => setSearch(text), 1000));
    };
    return (
        <div className="theme-tree-box">
            <Input className="form-control" placeholder={t("SearchNode")} onChange={(e) => onChange(e.target.value)} />
            {data?.length > 0 ? <ul className="tree-main-ul">
                <li>
                    <div>
                        <i className="tree-icon folder-icon cursor" role="presentation"></i>
                        {t("Category")}
                    </div>
                    <TreeLine data={data} level={0} setActive={setActive} mutate={mutate} active={active} search={search} type={type} />
                </li>
            </ul> : <NoDataFound customImage={"/assets/svg/no-category.svg"} />}
        </div>
    )
}

export default SearchCategory