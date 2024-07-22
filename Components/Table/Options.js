import Link from "next/link";
import { useRouter } from "next/router";
import { RiPencilLine } from "react-icons/ri";
import NoSsr from "../../Utils/HOC/NoSsr";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import DeleteButton from "./DeleteButton";
import ViewDetails from "./ViewDetails";
import { useState } from "react";
import AnswerModal from "../Q&A/AnswerModal";

const Options = ({ fullObj, type, moduleName, optionPermission, refetch, keyInPermission }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false)
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"], keyInPermission ?? keyInPermission);
  return (
    <div className="custom-ul">
      <NoSsr>
        {optionPermission?.optionHead.type == "View" ? (
          <ViewDetails fullObj={fullObj} tableData={optionPermission?.optionHead} refetch={refetch} />
        ) : (
          <>
            <div>

              {keyInPermission == 'question_and_answer' && edit
                ? <a onClick={() => setModal(true)}><RiPencilLine /></a>
                : edit && fullObj?.id && !optionPermission?.noEdit && (
                  <>
                    {
                      optionPermission?.editRedirect ?
                        <Link href={"/" + optionPermission?.editRedirect + "/update/" + fullObj.id}>
                          <RiPencilLine />
                        </Link> :
                        type == "post" && moduleName?.toLowerCase() == "tag" ?
                          <Link href={`/${router.pathname.split("/")[1]}/tag/update/${fullObj.id}`}>
                            <RiPencilLine />
                          </Link> :
                          type == "post" ?
                            <Link href={`/${router.pathname.split("/")[1]}/category/update/${fullObj.id}`}>
                              <RiPencilLine />
                            </Link>
                            :
                            <Link href={"/" + router.pathname.split("/")[1] + "/update/" + fullObj.id}>
                              <RiPencilLine />
                            </Link>
                    }
                  </>
                )}
            </div>
            <div>
              {destroy && !optionPermission?.noDelete && (
                <DeleteButton
                  id={fullObj?.id}
                />
              )}
            </div>
          </>
        )}
        {modal && <AnswerModal fullObj={fullObj} modal={modal} setModal={setModal} />}
      </NoSsr>
    </div>
  );
};

export default Options;
