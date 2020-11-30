import ListGroup from './ListGroup'

const Accordion = () => {

  const CONTAINER = document.createElement('DIV');
  CONTAINER.classList.add('container');
  const ROW = document.createElement('DIV');
  ROW.classList.add('row');
  const COL = document.createElement('DIV');
  COL.classList.add('col-lg-6');
  CONTAINER.append(ROW);
  ROW.append(COL);

  const ACCORDION = document.createElement('DIV');
  ACCORDION.classList.add('accordion', 'accordion-flush');
  ACCORDION.id = 'accordionExample';
  const AccordionITEM = document.createElement('DIV');
  AccordionITEM.classList.add('accordion-item');

  const H2 = document.createElement('H2');
  H2.classList.add('accordion-header');
  H2.id = 'headingOne';
  const BUTTON = document.createElement('BUTTON');
  BUTTON.classList.add('accordion-button');
  BUTTON.setAttribute('type', 'button');
  BUTTON.setAttribute('data-toggle', 'collapse');
  BUTTON.setAttribute('data-target', '#collapseOne');
  BUTTON.setAttribute('aria-expanded', 'true');
  BUTTON.setAttribute('aria-controls', 'collapseOne');
  BUTTON.textContent = 'First Todo';
  H2.append(BUTTON);

  const AccordionTODOS = document.createElement('DIV');
  AccordionTODOS.classList.add('accordion-collapse', 'collapse', 'show');
  AccordionTODOS.id = 'collapseOne';
  AccordionTODOS.setAttribute('aria-labelledby', 'headingOne');
  AccordionTODOS.setAttribute('data-parent', '#accordionExample');
  const AccordionBODY = document.createElement('DIV');
  AccordionBODY.classList.add('accordion-body');

  AccordionBODY.append(ListGroup());


  AccordionTODOS.append(AccordionBODY);

  AccordionITEM.append(H2, AccordionTODOS);
  ACCORDION.append(AccordionITEM);
  COL.append(ACCORDION)

  return CONTAINER
}

export default Accordion
