import "./Documents.scss"
import Documents_box from "../../Components/Documents_boxes/Documents_boxes";
import { Pagination } from "@mui/material";

const Documents = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <div className="Documents">
        <h1>O’zbekiston Respublikasi qonunlari</h1>
        <Documents_box/>
        <div className="pagination">
          <Pagination count={5} variant="outlined" shape="rounded" />
        </div>
      </div>

    </>
  );
};

export default Documents;
