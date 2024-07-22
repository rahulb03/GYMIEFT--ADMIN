import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiTranslate2 } from 'react-icons/ri';

const Language = ({ isComponentVisible, setIsComponentVisible }) => {
    const [language, setLanguage] = useState({})
    const router = useRouter();
    const langData = [
        { LanuageName: 'English', lang: 'en', icon: 'us' },
        { LanuageName: 'Franch', lang: 'fr', icon: 'fr' },
        { LanuageName: 'Spanish', lang: 'es', icon: 'es' },
        { LanuageName: 'Arabic', lang: 'ar', icon: 'ar' },
    ];
    useEffect(() => {
        setLanguage(langData.find((elem) => elem.lang == router.locale))
    }, [router])
    return (
        <li className="profile-nav onhover-dropdown">
            <div className='language-box'>
                <RiTranslate2 onClick={() => setIsComponentVisible((prev) => (prev !== "language" ? "language" : ""))} />
            </div>
            <ul className={`language-dropdown profile-dropdown onhover-show-div ${isComponentVisible == 'language' ? "active" : ""}`}>
                {
                    langData?.map((data, i) => (
                        <li key={i} onClick={() => setLanguage(data)} className={`${(language.lang) == (data.lang) ? "active" : ""}`}>
                            <Link href={router.asPath} locale={data.lang}>
                                <div className={`iti-flag ${data.icon}`}></div>
                                {data.LanuageName}
                            </Link>
                        </li>
                    ))
                }
            </ul >
        </li >
    )
}

export default Language