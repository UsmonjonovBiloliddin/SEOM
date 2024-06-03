import { MdOutlineFileDownload } from "react-icons/md";
import { LinkPages } from "../../App";
import "./Tenders.scss";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
const Tenderlar = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <LinkPages />
      <div className="Tenderlar">
        <div className="Tenderlar_boxes">
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
          <Link to={"/Inside/Tenders"}>
            <div className="Tenderlar_box">
              <img src="../images/Tender.png" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and...</p>
              <button>
                {" "}
                <MdOutlineFileDownload /> Yuklab olish
              </button>
            </div>
          </Link>
        </div>
        <div className="pagination">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
};

export default Tenderlar;
