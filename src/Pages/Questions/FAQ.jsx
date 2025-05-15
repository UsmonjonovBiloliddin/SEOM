import "./FAQ.scss";
import { useState } from "react";
import FaqAccordion from "./faq-accordion/FaqAccordion";
import { Title } from "../../Components";
const FAQ = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [selectedTheme, setSelectedTheme] = useState("first");
  document.documentElement.scrollTop = 0;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Title
        inside={"Raxbariyat"}
        location={"Markaziy aparat"}
        title={"Eng ko’p beriladigan savollar"}
      />
      <div className="faq">
        <div className="faq_main">
          <div className="faq_left">
            <div
              className={selectedTheme === "first" ? "step active" : "step"}
              onClick={() => setSelectedTheme("first")}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div
              className={selectedTheme === "second" ? "step active" : "step"}
              onClick={() => setSelectedTheme("second")}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div
              className={selectedTheme === "third" ? "step active" : "step"}
              onClick={() => setSelectedTheme("third")}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div
              className={selectedTheme === "fourth" ? "step active" : "step"}
              onClick={() => setSelectedTheme("fourth")}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="faq_right">
            {mockData &&
              mockData[selectedTheme].map((item) => (
                <FaqAccordion
                  key={item.ident}
                  expanded={expanded}
                  ident={item.ident}
                  setState={handleChange}
                  data={item}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

const mockData = {
  first: [
    {
      ident: "1",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "2",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "3",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "4",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "5",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ],
  second: [
    {
      ident: "1",
      title: "lacus ex, sit amet blandit leo lobortis eget ",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "2",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "3",
      title: " lacus ex, sit amet blandit leo lobortis eget ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "4",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "5",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ],
  third: [
    {
      ident: "1",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "2",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "3",
      title:
        "Lorem consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandi Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "4",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "5",
      title:
        "Lorem consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandi Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ],
  fourth: [
    {
      ident: "1",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. t amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse m ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "2",
      title:
        "printing and typesetting industry. adipiscing elit. Suspendisse malesuada ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "3",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "4",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ident: "5",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      body: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ],
};
