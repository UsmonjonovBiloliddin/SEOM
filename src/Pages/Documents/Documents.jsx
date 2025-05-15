import { Documents_boxes } from "../../Components";
import "./Documents.scss"
import { Pagination } from "@mui/material";

const Documents = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <div className="Documents">
        <h1>O’zbekiston Respublikasi qonunlari</h1>
        <Documents_boxes/>
        <div className="pagination">
          <Pagination count={5} variant="outlined" shape="rounded" />
        </div>
      </div>

    </>
  );
};

export default Documents;
