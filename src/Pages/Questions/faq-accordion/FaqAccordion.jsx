import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import "./FaqAccordion.scss"
import { IoIosArrowDown } from "react-icons/io"

const FaqAccordion = ({ expanded, setState, ident, data }) => {
  return (
    <div className="faq-accordion">
      <Accordion expanded={expanded === ident} onChange={setState(ident)}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown className="icon" />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>{data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data.body}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FaqAccordion
