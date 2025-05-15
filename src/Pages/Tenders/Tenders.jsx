import { MdOutlineFileDownload } from "react-icons/md";
import "./Tenders.scss";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { LinkPages } from "../../Components";
const Tenderlar = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <LinkPages />
      <div className="Tenderlar">
        <div className="Tenderlar_boxes">
          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
            <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>

          <div className="Tenderlar_box">
            <img src="../images/Tender.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and...</p>
             <a href="../../../public/images/Salom.docx" download>
              <button>
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </a>
          </div>
        </div>
        <div className="pagination">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
};

export default Tenderlar;
